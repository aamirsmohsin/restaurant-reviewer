import express from 'express';
import cors from 'cors';
import restaurants from './api/restaurants.route.js'

// allow express to use dependencies
const app = express()

app.use(cors())
app.use(express.json())

// default route
app.use('/api/v1/restaurants', restaurants)

// wild-card route
app.use('*', (req, res) => res.status(404).json({ error: "not found" }))

export default app