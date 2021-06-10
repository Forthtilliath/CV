const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const connect = (id) => {
    mongoose
        .connect(id, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));
};

exports.connectUser = () => connect(process.env.DATABASE_USER);

exports.connectAdmin = () => connect(process.env.DATABASE_ADMIN);
