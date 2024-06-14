import { ApolloServer } from "@apollo/server";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
// import {GraphQLUpload, graphqlUploadExpress, } from 'graphql-upload';
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import express from 'express';
import { readFile } from 'node:fs/promises';
import { config } from "dotenv";
import { resolvers } from './resolvers.js';
import cors from 'cors';
import { connectDb } from './utils/dbConnection.js';
import {login, signup} from "./controllers/authControllers.js";
config();
const PORT = process.env.PORT;
const app = express();
const typeDefs = await readFile('./schema/schema.graphql', 'utf8');
app.use(graphqlUploadExpress());
app.use(cors(), express.json());
app.set('port', PORT);

const server = new ApolloServer({typeDefs, resolvers, csrfPrevention: false});
await connectDb();

await server.start();

app.use('/api/auth/login', login);
app.use('/api/auth/signup', signup);
app.use('/api/graphql', apolloMiddleware(server));

app.listen({port: PORT}, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(`Graphql server is listening on http://localhost:${PORT}/api/graphql`);
})




