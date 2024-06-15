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
// get one service
const GET_SERVICE = gql`query Query($serviceId: ID!) {
    service(serviceId: $serviceId) {
        description
        slug
        title
    }
}`;



// variables
// {
//     "serviceId": "666de43791421cd4d57fbccb"
// }

// get messages

const GET_MESSAGES = gql`query GetMessages {
    getMessages {
        senderName
        senderEmail
    }
}`

// send message

const SEND_MESSAGE = gql`mutation Mutation($input: MessageInput!) {
    newMessage:sendMessage(input: $input) {
        senderName
    }
}`

// variables
// {
//     "input": {
//     "senderEmail": "user1@gmail.com",
//         "senderName": "test user1",
//         "senderPhoneNumber": "+250786957549",
//         "textMessage": "Hello my guy"
// }
// }

const ADD_PHOTO_TO_GALLERY = gql`mutation AddPhotoToGallery($input: PhotoInput, $file: Upload) {
    addPhotoToGallery(input: $input, file: $file) {
        fileId
        filePath
        showInGallery
    }
}`;

// variables
// {
//     "input": {
//     "description": "Mine_site_visit",
//         "showInGallery": true,
//         "year": "2023"
// },
//     file: attach file
// }
