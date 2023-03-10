const express = require("express");
const usersRoutes = require("../Users");
const friendsRoutes = require("../Friends");
const postCommentRoutes = require("../PostComment");
const postLikeRoutes = require("../PostLike");
const postReportRoutes = require("../PostReport");
const postsRoutes = require("../Posts");
const chatsRoutes = require("../Chats");
const searchRoutes = require("../Searchs");
const documentRoutes = require("../Document");
const blocksRoutes = require("../Blocks");

const apiRoutes = express.Router();

apiRoutes.use("/users", usersRoutes);
apiRoutes.use("/friends", friendsRoutes);
apiRoutes.use("/postComment", postCommentRoutes);
apiRoutes.use("/postLike", postLikeRoutes);
apiRoutes.use("/postReport", postReportRoutes);
apiRoutes.use("/posts", postsRoutes);
apiRoutes.use("/chats", chatsRoutes);
apiRoutes.use("/search", searchRoutes);
apiRoutes.use("/blocks", blocksRoutes)


apiRoutes.use("/document", documentRoutes);




apiRoutes.get(
    "/", (req, res) => res.json({ api: "is-working" })
);
module.exports = apiRoutes;