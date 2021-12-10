// start your server here
const server = require('./api/server');
const port = process.env.PORT || 7000;

server.listen(port, () => {
    console.log(`now listening on port ${port}`);
})