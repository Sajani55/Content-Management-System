import React from 'react';
import fetch from 'isomorphic-fetch';
import EventListItem from './eventlistitem';

class EventList extends React.Component{

    constructor(){
        super()
        this.state = {
            events: []
        }
    }

    componentWillMount(){
        fetch('http://localhost:1337/events').then((response)=>{
            if(response.status >= 400){
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((events)=>{
            this.setState({events: events});
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.events.map(({id, eventtitle, eventcontent, eventimage})=>(
                        <div className="container">
                            <div className="row">
                                <EventListItem key = {id} eventid = {id} eventtitle = {eventtitle} eventcontent = {eventcontent} eventimage = {eventimage} />
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default EventList