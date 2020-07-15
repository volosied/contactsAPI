const server = require("./server.js");

const PORT = 5555;

server.listen(PORT, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`)
});
