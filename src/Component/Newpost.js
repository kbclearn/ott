import React, { Component } from 'react';
import axios from 'axios';
import Success from './success';
import Upload from './Upload';

import './Newpost.css';

class Newpost extends Component {
    state = {
        title: 'Full Name',
        content: 'First letter Capital',
        poster : '',
        Loading: true,
        status : 'Loading',
        city: 'This is the content that the user read about you in your post. Here you add your links of youtube or telegram etc.'
    }

    postDataHandler = () => {
        
        if(this.state.content.trim() !=='' && this.state.content ==='This is the content that the user read about you when they click on your card in select post. Here you add your links of youtube channel or telegram link etc. '){
            this.setState({Loading: false, status: 'Choose Your Content for home tutions or online[live] class'});
        }
        else if(this.state.city.trim() ===''){
            this.setState({Loading: false, status: 'Enter your city/district and first letter should be capital'});
        }
        else if( this.state.title !== 'Full Name' && this.state.title.trim() !==''){ 

            //var storageRef = firebase.storage().ref();
            //var mountainImagesRef = storageRef.child(this.state.poster);
            const data = {
                title: this.state.title,
                content: this.state.content,
                city: this.state.city,
                poster: this.state.poster
            }
           
            axios.post('https://ott-accounts.firebaseio.com/post.json', data )
            .then( response => {
                this.setState({Loading: false, status: 'Successful'});
            }).catch(
                this.setState({Loading: false})
            );
        }
       else{
        this.setState({Loading: false, status: 'Fill all the fields'});
       }
    }

    render () {

        return (
            
            this.state.Loading ?
            <div className="NewPost">
                <h1 style={{ textAlign : 'center', color: 'black', backgroundColor : 'beige'}}>Add a Post</h1>
                <label>Name of the movie</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label> Genre</label>
                <textarea  value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Poster</label>
                <Upload/>
               
                <label>Movie Link</label>
                <input type="text" value={this.state.city} onChange={(event) => this.setState({city: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>  : <Success status={this.state.status}>Check your post in Last of Latest post</Success>
            
        );
    }
}

export default Newpost;