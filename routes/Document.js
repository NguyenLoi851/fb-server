const documentController = require("../controllers/Document.js");
const {asyncWrapper} = require("../utils/asyncWrapper");
const express = require("express");
const documentRoutes = express.Router();
const auth = require("../middlewares/auth");

documentRoutes.get(
    "/:documentID",
    asyncWrapper(documentController.getDocument),
);

module.exports = documentRoutes;