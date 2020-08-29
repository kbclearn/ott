import React,  { Component }  from 'react';
import { storage} from './firebase/index';


class Upload extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file} alt="Poster" width="200" height="200"/>
      </div>
    );
  } 
}
export default Upload