const sauceValidator = require('validatorjs');

// prettier-ignore
let rules = {
    name        : 'required|min:3|max:50|regex:/^([\w\s\-])+$/',
    manufacturer: 'required|min:3|max:50|regex:/^([\w\s\-])+$/',
    description : 'required|min:10|max:255|regex:/^([\w\s\-\.\,\'\"\!])+$/',
    mainPepper  : 'required|min:3|max:50|regex:/^([\w\s\-])+$/',
    heat        : 'required|between:1,10',
    userId      : 'required|size:24',
};

exports.whenCreate = (req, res, next) => {
    let data = JSON.parse(req.body.sauce);
    let validation = new sauceValidator(data, rules);
    if (validation.fails()) {
        res.status(400).json({ errors: validation.errors.errors });
    } else {
        next();
    }
};

exports.whenEdit = (req, res, next) => {
    let data = req.file ? JSON.parse(req.body.sauce) : req.body;
    let validation = new sauceValidator(data, rules);
    if (validation.fails()) {
        res.status(400).json({ errors: validation.errors.errors });
    } else {
        next();
    }
};
