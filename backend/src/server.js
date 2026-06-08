import "dotenv/config"
import cors from 'cors'
import express from 'express'

import contactRoutes from './routes/ContactRoutes.js'
import accountRoutes from './routes/AccountRoutes.js'

const app = express()
const PORT = process.env.PORT || 3003

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(contactRoutes)
app.use(accountRoutes)

app.listen(PORT, () => {
    console.log(`🚀 Server is listening on http://localhost:${PORT}`);
})