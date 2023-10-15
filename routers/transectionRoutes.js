const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,deteleTransection
} = require("../controllers/transectionCtrl");

const router = express.Router();

//router

//add transectionn POST Method

router.post("/add-transection", addTransection);
//edit transectionn POST Method

router.post("/edit-transection",editTransection);
router.post("/delete-transection",deteleTransection);

//get trasection
router.post("/get-transection", getAllTransection);

module.exports = router;
