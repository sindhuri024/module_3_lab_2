const express = require('express');
const router = express.Router();
const loanController = require('../controller/loanController');

router.get('/getLoanByCustomerId', loanController.getLoanByloanId)
router.post('/insertLoanData', loanController.insertData)
router.patch('/updateCustomerLoan/:id', loanController.updateLoan)
router.delete('/deleteLoanById', loanController.deleteLoanById)

module.exports = router;