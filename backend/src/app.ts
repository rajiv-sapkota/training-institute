

import express from 'express'
import router from './route/globals/auth/auth.route';

const app = express()
app.use(express.json()); 

app.use('/api',router)




export default app