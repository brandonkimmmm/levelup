const path = require('path');
const viewsFolder = path.join(__dirname, '..', 'views');

module.exports = {
    init(app, express) {
        app.set('views', viewsFolder);
        app.set('view engine', 'ejs');
    }
}