import React from 'react';
import {Link} from 'react-router-dom'

const EventListItem = ({eventid, eventtitle, eventcontent, eventimage})=>{

    return(
        <div className="col-12">
            <div className="card border-secondary mb-3">
                <div className = "card-body">
                    <img width="100%" src={`http://localhost:1337${eventimage.url}`} />
                    <h4 className="card-title">{eventtitle}</h4>
                </div>
            </div>
        </div>
    )
}

export default EventListItem