const express = require("express");
const router = express.Router();
const {
  getPhones,
  getPhone,
  deletePhone,
  addPhone,
} = require("../controllers/phone-controller");
//----------------------------------------------------------------------------------------
router.use(express.urlencoded({ extended: false })); //отримання данних з форми для (post)
//----------------------------------------------------------------------------------------

router.get("/phone", getPhones); //GET
router.get("/phone:id", getPhone); //FIND ONE
router.delete("/phone:id", deletePhone); //DELETE ONE
router.post("/phone", addPhone); //POST

module.exports = router;
