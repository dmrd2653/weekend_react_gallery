import { useState } from "react"

export function GalleryItem ({id, imagePath, info, like}) {

    const [likeCount, setLikeCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const toggleImage = () => {
        // switch toggle from false to true and vice versa
        setToggle(!toggle);
    };

    return (
        <div className="gallery-image"> 
            {`${toggle}`}
            <img key={id} src={imagePath} onClick={toggleImage}/>
            {like}
            <button onClick={() => {setLikeCount(likeCount +1)}}>
                ♥️ Likes {likeCount} 
            </button>
        </div>

    )
}