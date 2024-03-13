
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
       
            <div className="bg-white rounded-lg p-[20px]  mb-5">
                <h2 className="text-neutral-900 text-lg font-semibold">{title}</h2>
            </div>

        
    );
};

export default Bookmark;