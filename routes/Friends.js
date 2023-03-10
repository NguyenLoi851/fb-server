const friendController = require("../controllers/Friends");
const {asyncWrapper} = require("../utils/asyncWrapper");
const express = require("express");
const friendsRoutes = express.Router();
const ValidationMiddleware = require("../middlewares/validate");
const auth = require("../middlewares/auth");

friendsRoutes.post("/set-request-friend", auth, friendController.setRequest);
friendsRoutes.get("/get-requested-friend", auth, friendController.getRequest);
friendsRoutes.post("/set-accept", auth, friendController.setAccept);
friendsRoutes.post("/cancel-request", auth, friendController.cancelRequest);
friendsRoutes.post("/set-remove", auth, friendController.setRemoveFriend);
friendsRoutes.get("/list", auth, friendController.listFriends);
friendsRoutes.get("/list_requests", auth, friendController.listRequests);
friendsRoutes.get("/status/:friendId", auth, friendController.friendStatus);
friendsRoutes.get("/listnot", auth, friendController.getAllNotInRequest);

module.exports = friendsRoutes;