import { useState } from "react"

export function GalleryItem ({id, imagePath, info, like, getGalleryData}) {

    const [toggle, setToggle] = useState(false);
    const [count, setCount] = useState(0);

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
    const increment = () => {setCount(count + 1)};

    return (
        <div className="gallery-image"> 
            {/* {`${toggle}`} */}

            {toggle 
            ? <p onClick={toggleImage} style={{cursor: "pointer"}}>{info} </p> 
            : <img key={id} src={imagePath} onClick={toggleImage} style={{cursor: "pointer"}}/>
            }
            <br/>
            <button onClick={() => {updateLike(id), increment(id)}}>
                ♥️ Likes {like} 
            </button>
        </div>

    )
}