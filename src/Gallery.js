import React from 'react';
import fetch from 'isomorphic-fetch';
import GalleryListItem from './gallerylistitem';

class Gallery extends React.Component{

    constructor(){
        super()
        this.state = {
            gallery: []
        }
    }

    componentWillMount(){
        fetch('http://localhost:1337/galleries').then((response)=>{
            if(response.status >= 400){
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((gallery)=>{
            this.setState({gallery: gallery});
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.gallery.map(({id,title,pictures})=>(
                        <div className="container">
                            <div className="row">
                                <GalleryListItem key = {id} title = {title} pictures = {pictures} />
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Gallery