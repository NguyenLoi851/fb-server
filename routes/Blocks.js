const blockController = require("../controllers/Blocks");
const {asyncWrapper} = require("../utils/asyncWrapper");
const express = require("express");
const blocksRoutes = express.Router();
const ValidationMiddleware = require("../middlewares/validate");
const auth = require("../middlewares/auth");

blocksRoutes.post("/block", auth, blockController.block);
blocksRoutes.post("/unblock", auth, blockController.unblock);
blocksRoutes.get("/show/:id", auth, blockController.show);
blocksRoutes.get("/getListBlockMe", auth, blockController.getListBlockMe);

module.exports = blocksRoutes;