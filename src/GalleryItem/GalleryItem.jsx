export function GalleryItem ({id, image, info, like}) {
    return (
        <div className="gallery-image"> 
            <img key={id} src={image}
            />
            {info} 
            {like}
        </div>

    )
}