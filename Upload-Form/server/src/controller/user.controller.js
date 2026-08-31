const createUserController = (req, res) => {
    console.log('body =>', req.body);
    console.log('file =>', req.files);
    res.send('ok');
}

module.exports = createUserController;