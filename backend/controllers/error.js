// Controls 404 errors
exports.get404 = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
};

//Controls 500 errors
exports.get500 = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
};