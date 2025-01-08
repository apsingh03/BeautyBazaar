const db = require("../../../models");

// Tables
const BannerCarousel = db.bannerCarousel;
const BannerCarouselImages = db.bannerCarouselImages;

const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

const createParentBannerCarousel = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { name, animation, timer, width, height, objectFit } = req.body;
    const nameAlreadyExist = await BannerCarousel.findOne({
      where: { name: name, admin_id: req.admin.id },
      transaction: t,
    });

    if (nameAlreadyExist) {
      await t.rollback();
      return res.status(200).send({ msg: "Name Already Exist" });
    } else {
      const createQuery = await BannerCarousel.create(
        {
          name,
          animation,
          timer,
          width,
          height,
          objectFit,
          isFavorite: false,
          createdAt: new Date(),
          admin_id: req.admin.id,
        },
        { transaction: t }
      );

      const updatedQuery = await BannerCarousel.findOne({
        where: { id: createQuery.id, admin_id: req.admin.id },
        transaction: t,
      });

      await t.commit();
      return res.status(200).send({ msg: "success", query: updatedQuery });
    }
  } catch (error) {
    await t.rollback();
    return res.status(500).send({ error: error.message });
  }
};

const getParentBannerCarousel = async (req, res) => {
  try {
    console.log("getParentBannerCarousel - ");
    // console.log("admin_id - ", req.admin.id);
    const query = await BannerCarousel.findAll({
      // include: [
      //   {
      //     model: ChildMenu,
      //     required: false,
      //     as: "menuChildData",
      //   },
      // ],
      where: { admin_id: req.admin.id },
      order: [["id", "Asc"]],
    });

    return res.status(200).send({ msg: "success", query });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateParentBannerCarousel = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    // console.log("req.body - ", req.body.updatedData);

    const [updated] = await BannerCarousel.update(
      {
        ...req.body.updatedData,
        updatedAt: new Date(),
      },
      {
        where: { id: req.params.id, admin_id: req.admin.id },
        transaction: t,
      }
    );

    // Check if any rows were updated
    if (updated) {
      // Fetch the updated record
      const query = await BannerCarousel.findOne({
        where: { id: req.params.id, admin_id: req.admin.id },
        transaction: t,
      });
      await t.commit();
      return res.status(200).send({ msg: "success", query });
    } else {
      await t.rollback();
      return res.status(404).send({ msg: "Record not found" });
    }
  } catch (error) {
    await t.rollback();
    return res.status(500).send({ error: error.message });
  }
};

const deleteParentBannerCarousel = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const query = await BannerCarousel.destroy({
      where: { id: req.params.id, admin_id: req.admin.id },
      transaction: t,
    });

    if (query === 0) {
      await t.rollback();
      return res.status(404).send({ msg: "Record not found" });
    }

    await t.commit();
    return res.status(200).send({ msg: "success" });
  } catch (error) {
    await t.rollback();
    return res.status(500).send({ error: error.message });
  }
};

const bannerCarouselIsFavorite = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const productId = req.params.id;
    const isFavoriteStatus = req.body.isFavoriteStatus;
    // console.log("----------categoryIsFavorite ----------------");
    if (isFavoriteStatus === "favoriteIt") {
      // want to favorite it
      const query = await BannerCarousel.update(
        {
          isFavorite: 1,
        },
        { where: { id: productId, admin_id: req.admin.id }, transaction: t }
      );
      await t.commit();
      return res.status(200).send({ msg: "success", query: 1 });
    }

    if (isFavoriteStatus === "unFavoriteIt") {
      // want to un favorite it
      const query = await BannerCarousel.update(
        {
          isFavorite: 0,
        },
        { where: { id: productId, admin_id: req.admin.id }, transaction: t }
      );
      await t.commit();
      return res.status(200).send({ msg: "success", query: 0 });
    }
  } catch (error) {
    await t.rollback();
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createParentBannerCarousel,
  getParentBannerCarousel,
  updateParentBannerCarousel,
  deleteParentBannerCarousel,
  bannerCarouselIsFavorite,
};