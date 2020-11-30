module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.status = err.sratus || 'error'
    res.status(err.statusCode).json({
        status:err.sratus,
        message: err.message
    });
}