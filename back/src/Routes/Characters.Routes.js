const express = require("express");
const router = express.Router();
const {
    getCharById,
    getCharDetail,
    getFavorites,
    postFavorites,
    deleteFavorites,
} = require("../Controllers/Characters.controllers");


router.get("/character/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.get("/fav", getFavorites);
router.post("/fav", postFavorites);
router.delete("/fav/:id", deleteFavorites);

module.exports = router;