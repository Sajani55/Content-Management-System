import React from 'react';
import fetch from 'isomorphic-fetch';

class SingleEvent extends React.Component{

    constructor(){
        super()
        this.state ={
            SingleEvent: [],
            EventImage: ''
        }
    }

    componentDidMount(){
        fetch(`http://localhost:1337/events/${this.props.match.params.postid}`).then((response)=>{
            if(response.status >= 400){
                throw new Error("Bad Response From Server");
            }
            return response.json();
        }).then((event)=>{
            this.setState({SingleEvent: event});
            this.setState({EventImage: event.eventimage.url});
        })
    }

    render(){
        const {id,eventtitle,eventcontent} = this.state.SingleEvent;
        return(
            <div className="jumbotron">
                <img src={`http://localhost:1337${this.state.EventImage}`}></img>
                <h1 className="display-8">{eventtitle}</h1>
                <p className="lead">{eventcontent}</p>
            </div>
        )
    }
}

export default SingleEvent;