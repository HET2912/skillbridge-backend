class ErrorHandler extends Error {
    construction(message, statuscode) {
        super(message);
        this.statuscode = statuscode;
    }
}
export const errormiddleware = (err, req, res, next) => {
    err.message = err.message || "internal server error";
    err.statuscode = err.statuscode || 500;


    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "JsonwebTokenError") {
        const message = "Json Web token is invalid,try again !";
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "token expired error") {
        const message = "Json Web token is expired,try again !";
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "cast Error") {
        const message = `invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    const errorMessage = err.errors ? Object.values(err.errors).map(error => error.message).join(" ") : err.message


    return res.status(err.statuscode).json({
        success: false,
        message: errorMessage,
    })
};

export default ErrorHandler;