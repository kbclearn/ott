import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
//import FullPost from '../../Component/FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: null,
        
    }

    componentDidMount(){
        axios.get('https://ott-accounts.firebaseio.com/post.json')
            .then(response => {
                console.log(response.data);
                this.setState({posts : response.data});
                
            });
    }

     render () {
        const FormsElementArray = [];
        for(let key in this.state.posts)
        {
            FormsElementArray.push({
                id : key,
                config : this.state.posts[key]
            });
        }
        let m = null;
        
            m =(
                FormsElementArray.map(fromelement => (
                    (fromelement.config.content ===this.props.content) ?      // types
                        
                                  
                  <Post 
                        key={fromelement.id}
                        address ={fromelement.config.city}
                        tittle = {fromelement.config.title}
                        city =  {fromelement.config.author}
                    />: null 
               ))
            );
            
        return (
            <div>
                  <section className="Posts">
                   {m}
                </section>
            </div>
        );
    }
}

export default Blog;