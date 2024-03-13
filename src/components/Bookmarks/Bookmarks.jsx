import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,time}) => {
    return (


        <div className="md:w-1/3 h-1/2">
            <div className="bg-indigo-600 px-12 py-5 bg-opacity-10 rounded-lg border mb-6 border-indigo-600">
                <p className="text-indigo-600 text-2xl font-bold">Spent time on read : {time}</p>
            </div>

            <div className="p-[30px] bg-neutral-900 bg-opacity-5 rounded-lg">
            
                <h2 className="text-neutral-900 text-2xl font-bold mb-4">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
        
    );
};

export default Bookmarks;