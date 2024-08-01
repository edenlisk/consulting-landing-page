import {ApolloClient, createHttpLink, from, gql, InMemoryCache} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

// https://consulting-landing-page-api.onrender.com
const httpLink = createHttpLink({uri: 'https://consulting-landing-page-api.onrender.com/api/graphql'});
const uploadLink = createUploadLink({
    uri: "https://consulting-landing-page-api.onrender.com/api/graphql",
});


export function createApolloClient() {
    return new ApolloClient({
        // link: from([httpLink, uploadLink]),
        link: from([createUploadLink({
            uri: "https://consulting-landing-page-api.onrender.com/api/graphql"
        }), httpLink]),
        cache: new InMemoryCache(),
        defaultOptions: {
            query: {
                fetchPolicy: 'network-only'
            }
        }
    })
}


// QUERIES
export const GET_SERVICES = gql`
    query fetchServices {
        services {
            id
            title,
            description
            image {
                filePath
            }
        }
    }
`;

export const GET_SERVICE = gql`
    query Query($serviceId: ID!) {
    service(serviceId: $serviceId) {
        description
        slug
        title
    }
}
`;


export const GET_USERS = gql`
    query Users {
        team:users {
            background
            position
            fullName
            phoneNumber
            email
            id
            socials {
                name
                iconLink
                socialMediaLink
            }
            profile {
                filePath
            }
        }
    }
`;

export const GALLERY = gql`
    query gallery {
        getGallery {
            filePath,
            description,
            year
        }
    }
`;

export const GET_MESSAGES = gql`
    query GetMessages {
    getMessages {
        senderName
        senderEmail
    }
}
`;

export const GET_COMPANY_INFO = gql`
    query GetCompany {
        company:getCompany {
            aboutUs
            address {
                country,
                province
                district
            },
            companyOverview
            ourMission,
            phoneNumber,
            history {
                description,
                title,
                year
            }
            logo {
                filePath
            }
            socials {
                name
                socialMediaLink
            }
        },
    }
`;

export const GET_BLOGS = gql`
    query getBlogs {
        blogs:getBlogs {
            id,
            title,
            content,
            slug,
            createdAt,
            updatedAt
        }
    }
`;

export const BLOG = gql`
    query blog($blogId: ID!) {
        blog:getBlog(blogId: $blogId) {
            content,
            title,
            slug,
            createdAt,
            updatedAt
        }
    }
`;

// MUTATIONS
export const ADD_SERVICE = gql`
    mutation addService($input: ServiceInput, $file: Upload) {
        service:addService(input: $input, file: $file) {
            title
            description
            image {
                filePath
                description
            }
        }
    }
`;

export const UPDATE_SERVICE=gql`
mutation updateService($input: ServiceInput, $serviceId: ID!){
    service:updateService(input:$input,serviceId:$serviceId){
        title
        description
    }

}
`

export const DELETE_SERVICE = gql`
    mutation deleteService($serviceId: ID!) {
        service:deleteService(serviceId: $serviceId) {
            title
            description
            image {
                filePath
            }
        }
    }
`;

export const ADD_PHOTO_TO_GALLERY = gql`
    mutation addToGallery($file: Upload) {
        photo:addPhotoToGallery(file: $file) {
            description,
            filePath,
            year
        }
    }
`;

export const REMOVE_PHOTO_FROM_GALLERY = gql`
    mutation removePhoto($photoId: ID!) {
        photo:removeFromGallery(photoId: $photoId) {
            description
        }
    }
`;

export const SEND_MESSAGE = gql`
    mutation Mutation($input: MessageInput!) {
        newMessage:sendMessage(input: $input) {
            senderName
            senderName
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($input: UserInput, $file: Upload) {
        user:addUser(input: $input, file: $file) {
            background
            position
        }
    }
`;

export const ADD_COMPANY_INFO = gql`
    mutation addCompanyInfo($input: CompanyInput, $file: Upload) {
        company:addCompanyInfo(input: $input, file: $file) {
            id
            name
            logo {
                filePath
            }
            address
            socials
        }
    }
`;

export const UPDATE_COMPANY_INFO = gql`
    mutation updateCompany($input: CompanyInput, $file:Upload) {
        company:updateCompany(input: $input, file: $file) {
            name
            socials
            aboutUs
        }
    }
`;

export const ADD_BLOG = gql`
    mutation addBlog($file: Upload, $input: BlogInput) {
        blog: addBlog(file: $file, input: $input) {
            title
            slug
            content
        }
    }
`;

export const UPDATE_BLOG = gql`
    mutation updateBlog($input: BlogInput, $file: Upload, $blogId: ID!) {
        blog:updateBlog(input: $input, file: $file, blogId: $blogId) {
            title
            content
            slug
        }
    }
`;

