import {Card} from "antd";
import {useParams} from "react-router-dom";
import {useGetOneGallery} from "../api/hooks.js";


const GalleryPage = () => {

    const { eventId } = useParams();
    const { event } = useGetOneGallery(eventId);

    const { Meta } = Card;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {event?.attributes?.images?.data?.length && event?.attributes?.images?.data?.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            hoverable
                            style={{width: '100%'}}
                            cover={<img alt={event.attributes?.name} src={item.attributes?.url}/>}
                        >
                            <Meta title={event.attributes?.name} description={`${event.attributes?.location} on ${event.attributes?.date}`}/>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}


export default GalleryPage;