import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';
import router from './routes/index';
import errorHandler from './middleware/ErrorHandlingMiddleware';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/TypeDefs';
import resolvers from './graphql/Resolvers';

import { createClient } from 'redis';

export const client = createClient();

client.on('error', (err) => {
    console.log("Error "+err)
})

const PORT = process.env.PORT || 4000;

const app: Express = express();

const server = new ApolloServer({typeDefs, resolvers});

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler)

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'Server Working'});
});

const start = async () => {
    try{
        mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        } as ConnectOptions);
        await server.start();
        await client.connect();
        server.applyMiddleware({app});
        app.listen(PORT, () => {console.log(`Servers started port on ${PORT}`)});
    } catch (e) {
        console.log(e);
    }
}

start();