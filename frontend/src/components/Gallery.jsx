import { Card } from 'antd';


const Gallery = () => {

    const { Meta } = Card;

    const events = [
        {
            id:1,
            name: 'Visit the mine site',
            description: 'Visit the mine site to see the mining process.',
            location: 'Rubavu',
            date: '2021-12-01',
            frontImage: 'https://assets.mixkit.co/videos/45817/45817-thumb-360-0.jpg'
        },
        {
            id: 2,
            name: 'Tech Expo 2024',
            description: 'A showcase of the latest innovations in technology.',
            location: 'Kigali Convention Center',
            date: '2024-08-15',
            frontImage: 'https://d2c0zrx8qw0prh.cloudfront.net/images/Article_Images/ImageForArticle_1482(1).jpg'
        },
        {
            id: 3,
            name: 'Agriculture Summit',
            description: 'Discussing the future of agriculture and sustainable practices.',
            location: 'Musanze',
            date: '2024-09-10',
            frontImage: 'https://www.easy-skill.com/hubfs/Mining%20site%20landscape.jpg'
        },
        {
            id: 4,
            name: 'Rwanda Coding Bootcamp',
            description: 'An intensive bootcamp for aspiring software developers.',
            location: 'Kigali Innovation City',
            date: '2024-10-05',
            frontImage: 'https://www.easy-skill.com/hubfs/Mining%20site%20landscape.jpg'
        },
        {
            id: 5,
            name: 'Youth Leadership Conference',
            description: 'Empowering young leaders to drive positive change in their communities.',
            location: 'Huye',
            date: '2024-11-20',
            frontImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Brockman_4_Plant.jpg/1200px-Brockman_4_Plant.jpg'
        },
        {
            id: 6,
            name: 'Health and Wellness Fair',
            description: 'Promoting healthy lifestyles and well-being.',
            location: 'Nyamata',
            date: '2024-07-30',
            frontImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDtfSrZY4kT4pQfm-visrbMrW6G08vbvqEA&s'
        },
        {
            id: 7,
            name: 'Environmental Conservation Workshop',
            description: 'A workshop on protecting and preserving natural resources.',
            location: 'Nyungwe Forest',
            date: '2024-12-05',
            frontImage: 'https://assets.mixkit.co/videos/45817/45817-thumb-360-0.jpg'
        }
    ];


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map(event => (
                    <Card
                        key={event.id}
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt={event.name} src={event.frontImage} />}
                    >
                        <Meta title={event.name} description={event.description} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Gallery;