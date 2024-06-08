const express = require("express");
const {
  addTransactions,
  getAllTransactions,
  editTransactions,
  deleteTransactions,
} = require("../controllers/transactionctrl");

//routing object is created
const router = express.Router();

//routes
//add transaction POST method
router.post("/add-transaction", addTransactions);

//edit transaction POST method
router.post("/edit-transaction", editTransactions);

//delete transaction POST method
router.post("/delete-transaction", deleteTransactions);


//get transactions
router.post("/get-transaction", getAllTransactions);

module.exports = router;
