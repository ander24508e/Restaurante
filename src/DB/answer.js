exports.success = function (req, res, menssage = 'Sin errores', statusCode = 200) {
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: menssage
    });
}
exports.error = function (req, res, menssage = 'Error interno', statusCode = 500) {
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: menssage
    });
}