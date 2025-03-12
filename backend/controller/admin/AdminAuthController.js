const db = require("../../models/");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { generateToken } = require("../../utils/generateTokens");
const { default: setTokensCookies } = require("../../utils/setTokensCookies");

// Tables
const AdminAuth = db.adminAuth;
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

const adminSignUp = async (req, res) => {
  try {
    // console.log("User Req.body - ", req.body);
    const emailExistQuery = await AdminAuth.findOne({
      where: { email: req.body.email },
    });

    if (emailExistQuery) {
      if (emailExistQuery.email === req.body.email) {
        return res.status(200).send({ msg: "Email Already Exist" });
      }
    } else {
      const saltRounds = 10;

      bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
        const query = await AdminAuth.create({
          fullName: req.body.fullName,
          email: req.body.email,
          password: hash,
          createdAt: Date.now(),
        });

        return res.status(200).send({ msg: "Sign Up Successful" });
      });
    }
  } catch (error) {
    // console.log("createUser Error - ", error);
    return res.status(500).send({ error: error.message });
  }
};

const adminLogIn = async (req, res) => {
  try {
    // console.log(" adminLogIn req.body ", req);
    const emailExistQuery = await AdminAuth.findOne({
      where: { email: req.body.email },
    });

    if (emailExistQuery) {
      bcrypt.compare(
        req.body.password,
        emailExistQuery.password,
        async function (err, result) {
          if (err) {
            return res.status(500).send({ msg: "Something went wrong" });
          }

          if (result) {
            // generate Token
            const {
              accessToken,
              refreshToken,
              accessTokenExp,
              refreshTokenExp,
            } = await generateToken(emailExistQuery);

            setTokensCookies(
              res,
              accessToken,
              refreshToken,
              accessTokenExp,
              refreshTokenExp
            );

            // console.log(
            //   "68 ---> ",
            //   accessToken,
            //   refreshToken,
            //   accessTokenExp,
            //   refreshTokenExp
            // );

            // set cookies

            // send success response with token

            // const { id, fullName, email } = emailExistQuery;
            // const userObject = {
            //   isUserLogged: true,
            //   id,
            //   fullName,
            //   email,
            // };

            // //
            // var token = jwt.sign(userObject, "itsASecretKey");

            res.status(200).send({
              user: {
                id: emailExistQuery?.id,
                email: emailExistQuery?.email,
                fullName: emailExistQuery?.name,
              },
              msg: "Logged In Successfull",

              access_token: accessToken,
              refresh_token: refreshToken,
              access_token_exp: accessTokenExp,
              is_auth: true,
            });

            return res.status(200).send({ msg: "Logged In Successfull" });
          } else {
            return res.status(200).send({ msg: "Password Wrong" });
          }
        }
      );
    } else {
      return res.status(200).send({ msg: "Incorrect Email" });
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  adminSignUp,
  adminLogIn,
};
