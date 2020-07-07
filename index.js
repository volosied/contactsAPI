const app = require('./server.js')

const PORT = 4001

app.listen(PORT, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`)
})
