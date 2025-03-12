module.exports = (sequelize, DataTypes) => {
  const AdminAuthRequestTokenModel = sequelize.define(
    "AdminAuthRequestTokenModel",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
      },
      blacklisted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return AdminAuthRequestTokenModel;
};
