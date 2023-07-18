const Phone = require("../models/phonebook");
const createPath = require("../helpers/create-path");
const handleError = (res, error) => {
  res.status(500).json({ error });
};

//-------------------------------------------------
const getPhones = (req, res) => {
  Phone.find().then((dat) => res.status(200).json(dat));
};
// const getPhones = (req, res) => {
//   Phone.find()
//     .sort({ name: 1 })
//     .then((data) => {
//       res.render(createPath("phone"), { data });
//     })
//     .catch((err) => handleError(res, err));
// };
//-------------------------------------------------!!!!!!!
const getPhone = (req, res) => {
  console.log(req.params.id);
  Phone.findOne({ id: req.params.id })
    .then((data) => {
      res.render(createPath("info"), { data });
    })
    .catch((err) => handleError(res, err));
};
//-------------------------------------------------
const deletePhone = (req, res) => {
  Phone.findByIdAndDelete(req.params.id)
    .then((phone) => {
      res.status(200).json(phone);
    })
    .catch((err) => handleError(res, err));
};
//-------------------------------------------------
const addPhone = (req, res) => {
  const phone = new Phone(req.body);
  phone
    .save()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => handleError(res, err));
};
//-------------------------------------------------
module.exports = {
  getPhones,
  getPhone,
  deletePhone,
  addPhone,
};
