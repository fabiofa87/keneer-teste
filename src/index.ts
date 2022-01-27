import express, { Express } from "express";
import cors from 'cors'
import {AddressInfo} from 'net'
import { userRouter } from "./endpoints/userRouter";
import { productsRouter } from "./endpoints/productsRouter";


const app: Express = express();

app.use(cors())
app.use(express.json())

app.use("/user", userRouter)
app.use('/products', productsRouter)
app.use('/products', productsRouter)
app.use('/products', productsRouter)
app.use('/products', productsRouter)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

export default app;