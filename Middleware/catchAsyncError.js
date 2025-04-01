export const catchasyncErrors = (theFunction) => {
    return (req, res, next) => {
        Promise.resolve(thefunction(req, res, next)).catch(next);
    };
};