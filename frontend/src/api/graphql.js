import {ApolloClient, createHttpLink, from, gql, InMemoryCache} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

// https://consulting-landing-page-api.onrender.com
// 'http://localhost:1337/graphql'
const BASE_URL = 'https://rani-strapi.onrender.com/graphql';
const httpLink = createHttpLink({uri: BASE_URL});
const uploadLink = createUploadLink({
    uri: BASE_URL,
});


export function createApolloClient() {
    return new ApolloClient({
        // link: from([httpLink, uploadLink]),
        link: from([createUploadLink({
            uri: BASE_URL
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

export const getServicesQuery = gql`
    query Services {
    services {
        data {
            id
            attributes {
                title
                description
                display
                image {
                    data {
                        id
                        attributes {
                            name
                            alternativeText
                            caption
                            width
                            height
                            formats
                            hash
                            ext
                            mime
                            size
                            url
                            previewUrl
                            provider
                            provider_metadata
                        }
                    }
                }
            }
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

export const getServiceQuery = gql`
    query Service($id: ID) {
        service(id: $id) {
            data {
                id
                attributes {
                    title
                    description
                    display
                    image {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                                previewUrl
                                provider
                                provider_metadata
                            }
                        }
                    }
                }
            }
        }
    }

`;


export const REMOVE_USER = gql`
    mutation removeUser($userId: ID!) {
        user:deleteUser(userId: $userId) {
            background
            position
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

export const getUsersQuery = gql`
    query Staffs {
        staffs {
            data {
                id
                attributes {
                    fullName
                    position
                    phoneNumber
                    background
                    email
                    profile {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                                previewUrl
                                provider
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const getSocialMediasQuery = gql`
    query SocialMedias {
        socialMedias {
            data {
                id
                attributes {
                    name
                    socialMediaLink
                    icon {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                                previewUrl
                                provider
                                provider_metadata
                            }
                        }
                    }
                }
            }
        }
    }

`;

export const getCompanyHistory = gql`
    query Histories {
        histories {
            data {
                id
                attributes {
                    year
                    title
                    description
                }
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

export const getGalleryQuery = gql`
    query Events {
        events {
            data {
                id
                attributes {
                    name
                    date
                    location
                    description
                    images {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                                previewUrl
                                provider
                                provider_metadata
                            }
                        }
                    }
                }
            }
        }
    }

`;

export const getReportsQuery = gql`
    query Reports {
        reports {
            data {
                id
                attributes {
                    name
                    updatedAt
                    publishedAt
                    document {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                                previewUrl
                                provider
                                provider_metadata
                            }
                        }
                    }
                }
            }
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
            email
            name
        },
    }
`;

export const getCompanyInfoQuery = gql`
    query Rani {
        rani {
            data {
                id
                attributes {
                    name
                    companyOverview
                    phoneNumber
                    email
                    ourMission
                    aboutUs
                    createdAt
                    updatedAt
                    publishedAt
                    logo {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                                previewUrl
                                provider
                                provider_metadata
                                createdAt
                                updatedAt
                            }
                        }
                    }
                }
            }
        }
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
            image {
                filePath
            }
        }
    }
`;

export const getBlogsQuery = gql`
    query Blogs {
        blogs {
            data {
                id
                attributes {
                    title
                    content
                    slug
                    createdAt
                    updatedAt
                    publishedAt
                    representationalImage {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                                previewUrl
                                provider
                                provider_metadata
                                createdAt
                                updatedAt
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GET_BLOG = gql`
    query blog($blogId: ID!) {
        blog:getBlog(blogId: $blogId) {
            content,
            title,
            slug,
            createdAt,
            updatedAt,
            image {
                filePath
            }
        }
    }
`;

export const getBlogQuery = gql`
    query Blog ($id: ID) {
        blog(id: $id) {
            data {
                id
                attributes {
                    title
                    content
                    slug
                    createdAt
                    updatedAt
                    publishedAt
                    representationalImage {
                        data {
                            id
                            attributes {
                                name
                                alternativeText
                                caption
                                width
                                height
                                formats
                                hash
                                ext
                                mime
                                size
                                url
                                previewUrl
                                provider
                                provider_metadata
                                createdAt
                                updatedAt
                            }
                        }
                    }
                }
            }
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

export const UPDATE_USER = gql`
    mutation UpdateUser($input: UserInputUpdate!, $userId: ID!) {
        updateUser(input: $input, userId: $userId) {
            fullName
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
    mutation updateCompany($input: CompanyInput) {
        company:updateCompany(input: $input) {
            name
            socials{
                name
            }
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

