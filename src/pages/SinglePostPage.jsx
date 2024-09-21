import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from '../api/graphql.js';
import { message } from "antd";

const SinglePostPage = () => {
    const [post, setPost] = useState({
        title: '',
        image: '',
        content: ''
    });
    const { postId } = useParams();
    const { data, loading, error } = useQuery(GET_BLOG, { variables: { blogId: postId } });

    useEffect(() => {
        if (data) {
            setPost(data.blog);
        } else if (error) {
            return message.error(error.message);
        }
    }, [data, error]);

    return (
        <div className="flex flex-col lg:flex-row max-w-5xl mx-auto py-4 font-serif">
            {/* Main Content */}
            <div className="w-full lg:w-2/3 px-4">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <img src={post.image?.filePath} alt={post.title} className="w-full h-auto mb-4"/>
                <div className="text-lg leading-relaxed">
                    {ReactHtmlParser(post.content)}
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 px-4 mt-6 lg:mt-0">
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
                    <p className="text-base leading-relaxed">Author information goes here. You can add a brief bio, social media links, or any other relevant information.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Related Post 1</a></li>
                        <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Related Post 2</a></li>
                        <li className="mb-2"><a href="#" className="text-blue-500 hover:underline">Related Post 3</a></li>
                    </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Side Notes</h2>
                    <p className="text-base leading-relaxed">Additional side notes or information can go here. You can use this space for any supplementary content.</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
