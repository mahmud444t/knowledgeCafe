

import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handleBookmark,handleRead}) => {
    const {id,cover,author_img,title,author,posted_date,reading_time,hashtags}=blog;
    return (
        <div className="mb-20 space-y-6">
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-6">
                    <img className="w-[60px]" src={author_img} alt="" />
                    <div>
                        <h3 className="text-neutral-900 text-2xl font-bold">{author}</h3>
                        <p className="text-neutral-900 text-opacity-60 text-base font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-6 items-center text-2xl"> 
                    <p className="text-xl font-bold">{reading_time} min read</p>
                    <button  onClick={()=>handleBookmark(blog)} className="text-red-600"><FaBookmark /></button>
                </div>
            </div>
            <p className=" text-neutral-900 text-[40px] font-bold">{title}</p>
            <div className="flex gap-8">
                {hashtags.map((hashtag,idx)=><p key={idx} className="text-neutral-900 text-opacity-60 text-xl font-medium "><a href="">#{hashtag}</a></p>)}
            </div>
            <button onClick={()=>handleRead(reading_time,id)} className="text-indigo-600 text-xl font-semibold underline">Mark as read</button>
        </div>
    );
};


export default Blog;