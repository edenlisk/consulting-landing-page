import { Card } from 'antd';
import {useNavigate} from "react-router-dom";
import {useGetGalleries} from "../api/hooks.js";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";


const Gallery = () => {
    const { events } = useGetGalleries();

    const navigate = useNavigate();
    const { Meta } = Card;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.length ? events.map((event, index) => {
                    return (
                        <Card
                            onClick={() => navigate(`/gallery/${event.id}`)}
                            key={index}
                            hoverable
                            style={{ width: '100%' }}
                            cover={<img alt={event.name} src={event.attributes?.images?.data[0]?.attributes?.url} />}
                        >
                            <Meta title={event.name} description={<BlocksRenderer content={event.attributes?.description}/>} />
                        </Card>
                    )
                }) : <p>No Gallery</p>}
            </div>
        </div>
    );
}

export default Gallery;