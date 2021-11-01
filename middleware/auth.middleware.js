var jwt = require("jwt-simple");
var moment = require("moment");
var config = require("../config");

exports.loginRequired = function(req, res, next) {
    if (!req.headers.authorization) {
        return res
            .status(401)
            .send({ message: "Unauthorized" });
    }

    var token = req.headers.authorization.split(" ")[1];
    var payload = jwt.decode(token, config.JWT_SECRET);

    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: "Token has expired" });
    }

    req.user = payload.sub;
    next();
};
