const jwt = require("jsonwebtoken");
const UserModel = require("../models/Users");
const BlockModel = require("../models/Blocks");
const httpStatus = require("../utils/httpStatus");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../constants/constants");
const { ROLE_CUSTOMER } = require("../constants/constants");
const { request } = require("express");
const blockController = {};

// 0: unblock
// 1: block

blockController.block = async (req, res, next) => {
    try {
        let sender = req.userId;
        let receiver = req.body.user_id;

        let blocked = await BlockModel.findOne({ sender: sender, receiver: receiver });

        if (blocked) {
            blocked = await BlockModel.findOneAndUpdate({ sender: sender, receiver: receiver }, { status: '1' }, { new: true })
            return res.status(200).json({
                code: 200,
                message: "Chặn thành công",
                data: blocked,
            });
        } else {
            const block = new BlockModel({ sender: sender, receiver: receiver, status: '1' },);

            await block.save();
            return res.status(200).json({
                code: 200,
                message: "Chặn thành công",
                data: block,
            });
        }


    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

blockController.unblock = async (req, res, next) => {
    try {
        let sender = req.userId;
        let receiver = req.body.user_id;

        let blocked = await BlockModel.findOne({ sender: sender, receiver: receiver });

        if (blocked) {
            blocked = await BlockModel.findOneAndUpdate({ sender: sender, receiver: receiver }, { status: '0' }, { new: true })
            return res.status(200).json({
                code: 200,
                message: "Bỏ chặn thành công",
                data: blocked,
            });
        } else {
            const block = new BlockModel({ sender: sender, receiver: receiver, status: '0' },);

            await block.save();
            return res.status(200).json({
                code: 200,
                message: "Bỏ chặn thành công",
                data: block,
            });
        }


    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

blockController.show = async(req, res, next) => {
    try {
        let sender = req.userId;
        let receiver = req.params.id
        let blocked = await BlockModel.findOne({ sender: sender, receiver: receiver });
        if(blocked){
            return res.status(200).json({
                code: 200,
                data: blocked
            })
        }else{
            return res.status(200).json({
                code: 200,
                data: {
                    status: '0'
                }
            })
        }
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

blockController.getListBlockMe = async(req,res,next)=>{
    try {
        let sender = req.userId;
        let blocked = await BlockModel.find({ receiver: sender, status: '1' });
        if(blocked){
            return res.status(200).json({
                code: 200,
                data: blocked
            })
        }else{
            return res.status(200).json({
                code: 200,
                data: []
            })
        }
    } catch (e) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message: e.message
        });
    }
}

module.exports = blockController;
