import { GalleryItem } from "../../GalleryItem/GalleryItem"

export function GalleryList ({galleryData}) {

    return (
    <div className="flex-container">
            {galleryData.map(image => (
                <GalleryItem 
                    key={image.id} 
                    image={`${image.path}`} 
                    info={image.description}
                    like={image.likes}
                /> 
            ))}

        {/* <div className="gallery-images"> 
        <img src="images/art.jpg"/> 
        </div>
        
        <div className="gallery-images"> 
        <img src="images/baking.jpg"/> 
        </div>
        
        <div className="gallery-images"> 
        <img src="images/gardening.jpg"/> 
        </div>
        
        <div className="gallery-images"> 
        <img src="images/my_cat.jpg"/> 
        </div> */}

    </div>        
    )

}