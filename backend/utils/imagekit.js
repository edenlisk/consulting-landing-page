import ImageKit from "imagekit";


export default new ImageKit(
    {
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: `https://ik.imagekit.io/${process.env.IMAGEKIT_ID}`
    }
)