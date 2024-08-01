import {Card} from "antd";
import {useParams} from "react-router-dom";


const eventImage = {
    '1': [
        {
            id: 1,
            title: 'Mine Exploration 1',
            imageUrl: 'https://www.easy-skill.com/hubfs/Mining%20site%20landscape.jpg'
        },
        {
            id: 2,
            title: 'Mine Exploration 2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        },
        {
            id: 3,
            title: 'Mine Exploration 3',
            imageUrl: 'https://assets.mixkit.co/videos/45817/45817-thumb-360-0.jpg'
        },
        {
            id: 4,
            title: 'Mine Exploration 4',
            imageUrl: 'https://d2c0zrx8qw0prh.cloudfront.net/images/Article_Images/ImageForArticle_1482(1).jpg'
        },
        {
            id: 5,
            title: 'Mine Exploration 5',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDtfSrZY4kT4pQfm-visrbMrW6G08vbvqEA&s'
        },
        {
            id: 6,
            title: 'Mine Exploration 6',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        }
    ],
    '2': [
        {
            id: 1,
            title: 'Mining Operations 1',
            imageUrl: 'https://www.easy-skill.com/hubfs/Mining%20site%20landscape.jpg'
        },
        {
            id: 2,
            title: 'Mining Operations 2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        },
        {
            id: 3,
            title: 'Mining Operations 3',
            imageUrl: 'https://assets.mixkit.co/videos/45817/45817-thumb-360-0.jpg'
        },
        {
            id: 4,
            title: 'Mining Operations 4',
            imageUrl: 'https://d2c0zrx8qw0prh.cloudfront.net/images/Article_Images/ImageForArticle_1482(1).jpg'
        },
        {
            id: 5,
            title: 'Mining Operations 5',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDtfSrZY4kT4pQfm-visrbMrW6G08vbvqEA&s'
        },
        {
            id: 6,
            title: 'Mining Operations 6',
            imageUrl: 'https://media.istockphoto.com/id/1305146883/photo/surface-mine-panorama.jpg?s=612x612&w=0&k=20&c=e3zV-ULWy5ynOW2PpyCflWTKy63QiwVb4_iOaV4t2dM='
        }
    ],
    '3': [
        {
            id: 1,
            title: 'Mineral Processing 1',
            imageUrl: 'https://www.easy-skill.com/hubfs/Mining%20site%20landscape.jpg'
        },
        {
            id: 2,
            title: 'Mineral Processing 2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        },
        {
            id: 3,
            title: 'Mineral Processing 3',
            imageUrl: 'https://assets.mixkit.co/videos/45817/45817-thumb-360-0.jpg'
        },
        {
            id: 4,
            title: 'Mineral Processing 4',
            imageUrl: 'https://d2c0zrx8qw0prh.cloudfront.net/images/Article_Images/ImageForArticle_1482(1).jpg'
        },
        {
            id: 5,
            title: 'Mineral Processing 5',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDtfSrZY4kT4pQfm-visrbMrW6G08vbvqEA&s'
        },
        {
            id: 6,
            title: 'Mineral Processing 6',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        }
    ],
    '4': [
        {
            id: 1,
            title: 'Mining Technology 1',
            imageUrl: 'https://www.easy-skill.com/hubfs/Mining%20site%20landscape.jpg'
        },
        {
            id: 2,
            title: 'Mining Technology 2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        },
        {
            id: 3,
            title: 'Mining Technology 3',
            imageUrl: 'https://assets.mixkit.co/videos/45817/45817-thumb-360-0.jpg'
        },
        {
            id: 4,
            title: 'Mining Technology 4',
            imageUrl: 'https://d2c0zrx8qw0prh.cloudfront.net/images/Article_Images/ImageForArticle_1482(1).jpg'
        },
        {
            id: 5,
            title: 'Mining Technology 5',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDtfSrZY4kT4pQfm-visrbMrW6G08vbvqEA&s'
        },
        {
            id: 6,
            title: 'Mining Technology 6',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        }
    ],
    '5': [
        {
            id: 1,
            title: 'Sustainable Mining 1',
            imageUrl: 'https://www.easy-skill.com/hubfs/Mining%20site%20landscape.jpg'
        },
        {
            id: 2,
            title: 'Sustainable Mining 2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        },
        {
            id: 3,
            title: 'Sustainable Mining 3',
            imageUrl: 'https://assets.mixkit.co/videos/45817/45817-thumb-360-0.jpg'
        },
        {
            id: 4,
            title: 'Sustainable Mining 4',
            imageUrl: 'https://d2c0zrx8qw0prh.cloudfront.net/images/Article_Images/ImageForArticle_1482(1).jpg'
        },
        {
            id: 5,
            title: 'Sustainable Mining 5',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDtfSrZY4kT4pQfm-visrbMrW6G08vbvqEA&s'
        },
        {
            id: 6,
            title: 'Sustainable Mining 6',
            imageUrl: 'https://media.istockphoto.com/id/1305146883/photo/surface-mine-panorama.jpg?s=612x612&w=0&k=20&c=e3zV-ULWy5ynOW2PpyCflWTKy63QiwVb4_iOaV4t2dM='
        }
    ],
    '6': [
        {
            id: 1,
            title: 'Environmental Impact 1',
            imageUrl: 'https://www.easy-skill.com/hubfs/Mining%20site%20landscape.jpg'
        },
        {
            id: 2,
            title: 'Environmental Impact 2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        },
    ],
}


const GalleryPage = () => {

    const { eventId } = useParams();

    const { Meta } = Card;
    const eventImages = eventImage[eventId];


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventImages && eventImages.map(event => (
                    <Card
                        key={event.id}
                        hoverable
                        style={{width: '100%'}}
                        cover={<img alt={event.title} src={event.imageUrl}/>}
                    >
                        <Meta title={event.title}/>
                    </Card>
                ))}
            </div>
        </div>
    )
}


export default GalleryPage;