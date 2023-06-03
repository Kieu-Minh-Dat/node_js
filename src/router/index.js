const NewRouter = require('./new');
const SideRouter = require('./side');

function route(app) {
    app.use('/new', NewRouter);
    app.use('/', SideRouter);
}

module.exports = route;
