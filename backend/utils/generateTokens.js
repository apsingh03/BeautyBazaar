const db = require("../models");
const AdminAuthRequestToken = db.AdminAuthRequestToken;
const AdminAuth = db.adminAuth;

var jwt = require("jsonwebtoken");

const generateToken = async (user) => {
  try {
    const { id, fullName, email } = user;
    const payload = { id, fullName, email };

    // Generate access token with expiration time
    const accessTokenExp = Math.floor(Date.now() / 1000) + 1000; // 100 seconds from now
    const accessToken = jwt.sign(
      { ...payload, exp: accessTokenExp },
      process.env.JWT_ACCESS_TOKEN_SECRET_KEY
    );

    // Generate refresh token with expiration time
    const refreshTokenExp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5; // 5 days from now
    const refreshToken = jwt.sign(
      { ...payload, exp: refreshTokenExp },
      process.env.JWT_REFRESH_TOKEN_SECRET_KEY
    );

    // Check for existing refresh token
    const userRefreshToken = await AdminAuthRequestToken.findOne({
      where: { user_id: user.id },
    });

    if (userRefreshToken) {
      // Option 1: Remove existing refresh token
      await userRefreshToken.destroy();

      // Option 2: Blacklist the existing token instead of removing
      // userRefreshToken.blacklisted = true;
      // await userRefreshToken.save();
    }

    // Save the new refresh token
    await AdminAuthRequestToken.create({
      user_id: user.id, // Ensure correct field mapping
      token: refreshToken,
    });

    // Return tokens and expiration times
    return {
      accessToken,
      refreshToken,
      accessTokenExp,
      refreshTokenExp,
    };
  } catch (error) {
    // Log error for debugging purposes
    console.error("Error generating token:", error.message);

    // Rethrow error to be handled upstream
    throw new Error("Failed to generate tokens");
  }
};

module.exports = {
  generateToken,
};
