import { useState } from "react"

export function GalleryItem ({id, imagePath, info, like, getGalleryData}) {

    const [toggle, setToggle] = useState(false);

    const toggleImage = () => {
    // switch toggle from false to true and vice versa
        setToggle(!toggle);
    };

    const updateLike = (galleryId) => {
        console.log(galleryId);
        fetch(`/gallery/like/${galleryId}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'}
        })
        .then((response) => {
            getGalleryData()
        })
        .catch((error) => {
          console.error(error);
        })
    }
    
    return (
        <div className="gallery-image"> 
            {/* {`${toggle}`} */}

            {toggle 
            ? <p onClick={toggleImage} style={{cursor: "pointer"}}>{info} </p> 
            : <img key={id} src={imagePath} onClick={toggleImage} style={{cursor: "pointer"}}/>
            }
            <br/>
            <button onClick={() => {updateLike(id)}}>
                ♥️ Likes {like} 
            </button>
        </div>

    )
}