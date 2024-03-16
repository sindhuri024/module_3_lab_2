const operations = require('../MongoDBCrud')

exports.insertData = async (req, res) => {
    try {
        
        const data = req.body
        const customerloan = await operations.insertLoanData(data)
        res.status(201).json({
            status: 'Successfully created Customer Loan Details',
            data: customerloan
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed to Create customer Loan',
            message: err.message
        });
    } 
};

exports.getLoanByloanId = async(req,res) => {
    try {
        
        const loanId = req.body.loanId;
        const query = { 'loanId': { $eq: loanId }};
        const loans = await operations.findLoanData(query)
        res.status(201).json({
            status: 'Successfully found Loan Details',
            data: loans
        });
    } catch (err) {
        res.status(404).json({
            status: 'Unable to find customer Loan',
            message: err.message
        });
    }
};

exports.updateLoan = async(req,res) => {
    try {
       
        const loanId = Number(req.params.id);
        const updatedData = req.body;
        const query = { "loanId": loanId};
        const loans = await operations.updateLoanData(query,updatedData)
        res.status(201).json({
            status: 'Successfully Updated Customer Loan Data',
            data: loans
        });
    } catch (err) {
        res.status(404).json({
            status: 'Unable to Update customer Loan',
            message: err.message
        });
    } 
};

exports.deleteLoanById = async(req,res) => {
    try {
        
        const loanId = req.body.loanId;
        const query = { "loanId" : loanId };
        const loans = await operations.deleteLoanData(query)
        res.status(201).json({
            status: 'Successfully Deleted Customer Loan',
            data: loans
        });
    } catch (err) {
        res.status(404).json({
            status: 'Unable to delete Customer Loan',
            message: err.message
        });
    }  
};