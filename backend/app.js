import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import express from 'express';
import { readFile } from 'node:fs/promises';
import { config } from "dotenv";
import { resolvers } from './resolvers.js';
import cors from 'cors';
import { connectDb } from './utils/dbConnection.js';
config();
const PORT = process.env.PORT;
const app = express();
const typeDefs = await readFile('./schema/schema.graphql', 'utf8');

app.use(cors(), express.json());
app.set('port', PORT);

const server = new ApolloServer({typeDefs, resolvers});
await connectDb();

await server.start();
app.use('/graphql', apolloMiddleware(server));

app.listen({port: PORT}, () => {
    console.log(`Server is listening on ${PORT}`);
    console.log(`Graphql server is listening on http://localhost:${PORT}/graphql`);
})




