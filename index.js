const server = require('./api/server')
require('dotenv').config()

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`Server is up on http://localhost:${port}`))