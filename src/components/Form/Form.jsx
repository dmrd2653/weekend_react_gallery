import { useState } from "react";

export function Form ({getGalleryData}) {


    const [galleryPic, setGalleryPic] = useState('');
    const [galleryInfo, setGalleryInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setGalleryPic('')
        setGalleryInfo('')
        addImage({path: galleryPic, description: galleryInfo})
    };

    const addImage = (imageToAdd) => {
        fetch('/gallery', {
            method: 'POST',
            body: JSON.stringify(imageToAdd),
            headers: {'Content-Type': 'application/json'}
            })
            .then((response) => {
                if(response.status !== 201) {
                    throw new Error('No bueno!');    
                } else {
                    getGalleryData()
                }
            })
            .catch((error) => {
            console.error(error)
            alert('Something went wrong.')
            });
        };
    return (
        <>
        <h2>Add an Image</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={galleryPic}
                onChange={e => setGalleryPic(e.target.value)}
                placeholder="Add URL here"/>
            <input type="text" value={galleryInfo}
                onChange={e => setGalleryInfo(e.target.value)}
                placeholder="Add description here"/>
            <button type="submit">Add Image to Gallery</button>
        </form>
        </>
        
    )
}