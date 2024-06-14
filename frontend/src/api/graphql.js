import {ApolloClient, createHttpLink, from, gql, InMemoryCache} from "@apollo/client";

const httpLink = createHttpLink({uri: 'http://localhost:5000/api/graphql'});

export function createApolloClient() {
    return new ApolloClient({
        link: from([httpLink]),
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: 'cache-first'
            }
        }
    })
}

export const GET_SERVICES = gql`
    query fetchServices {
        services {
            title,
            description
        }
    }
`

// export const GET_TODOS =  gql`
//     query GetTodos($userId: ID!) {
//         todos(userId: $userId) {
//             description
//             date
//             dueDate,
//             isCompleted
//         }
//     }
// `
// const apolloClient = new ApolloClient({
//     link: from([httpLink]),
//     cache: new InMemoryCache(),
//     defaultOptions: {
//         query: {
//             fetchPolicy: 'cache-first'
//         }
//     }
// })
