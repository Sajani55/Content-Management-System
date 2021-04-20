import React from 'react';

const GalleryListItem = ({id, title,pictures})=>{

    return(
        <div className="col-12">
            <div className="card border-secondary mb-3">
                <div className = "card-body">
                    <h1>{title}</h1>
                    <img width="100%" src={`http://localhost:1337${pictures.url}`} />
                </div>
            </div>
        </div>
    )
}

export default GalleryListItem