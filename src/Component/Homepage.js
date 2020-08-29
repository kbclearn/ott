import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './Newpost';
import Movies from './Movies';
import tvshows from './tvshows';
import latest from './Latest';
import './Homepage.css';

const homepage = () => {
    return(
        <div className="App">
      <header className="App-header">
        <div className="Blog">
      <nav>
            <ul>
            {/*<li><NavLink to="/" exact >Home</NavLink></li>*/}
              <li><NavLink to="/addnewpost">Add New Post</NavLink></li>
              <li><NavLink to="/Movies">Movies</NavLink></li>
              <li><NavLink to="/tvshows">TvShows</NavLink></li>
              <li><NavLink to="/Latestpost">Recently added</NavLink></li>
            </ul>
        </nav>
        </div>
    {/*<Route  path="/" exact component={Landing} /> */}
        <Route  path="/Latestpost"   component={latest} />
        <Route  path="/addnewpost"   component={NewPost} /> 
        <Route  path="/Movies"   component={Movies} />
        <Route  path="/tvshows"   component={tvshows} />
   
        
      </header>
      
    </div>
       
    );
}

export default homepage;