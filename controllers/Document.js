const {
    PRIVATE_CHAT,
    GROUP_CHAT,
} = require('../constants/constants');
const DocumentModel = require("../models/Documents");
const httpStatus = require("../utils/httpStatus");
const documentController = {};

documentController.getDocument = async (req, res, next) => {
    try {
        let documentID = null;
        if (req.params.documentID) {
            documentID = req.params.documentID;
        } 

        let document = await DocumentModel.findById(documentID)
        if (document == null) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Can not find user" });
        }

        return res.status(httpStatus.OK).json({
            data: document
        });
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}



module.exports = documentController;