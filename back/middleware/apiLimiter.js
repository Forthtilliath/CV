const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 10,
    message: 'Vous avez dépassé le nombre de requête en 1 heure !', 
});