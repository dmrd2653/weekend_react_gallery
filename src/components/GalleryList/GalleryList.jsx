import { GalleryItem } from '../GalleryItem/GalleryItem';

export function GalleryList ({galleryData, getGalleryData}) {

    return (
    <div className="flex-container">
            {galleryData.map(image => (
                <GalleryItem
                    id={image.id} 
                    imagePath={`${image.path}`} 
                    info={image.description}
                    like={image.likes}
                    getGalleryData={getGalleryData}
                /> 
            ))}
    </div>        
    )
}