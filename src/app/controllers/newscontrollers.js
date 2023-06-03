class NewsControllers {
    index(req, res) {
        res.render('new');
    }

    show(req, res) {
        res.send('KMD');
    }
}

module.exports = new NewsControllers();
