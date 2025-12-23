import app from "./src/app";
import { config } from 'dotenv'
config()

import { envConfig } from "./src/config/config";

import db, { connectDB } from "./src/database/connection";

// Establish database connection
connectDB();

function startServer() {
    const port = envConfig.portNumber
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
      
    })
}

startServer()