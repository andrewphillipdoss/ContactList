import React, { Component } from 'react';
import user_icon_small_2x from './static/images/user_icon_small_2x.png'

// component created in order to handle onError of small image load
class SmallImage extends Component {

  constructor(props) {
    super();
    this.state = { hasError: false }; // did the image load throw an error?
  }

  handleError() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (!this.state.hasError) { // if there isn't an error
      // return an image with intended src
      return (
        <div>
          <img onError={this.handleError.bind(this)} src={this.props.src}></img>
        </div>
      )
    }
    else { // if there is an error
      // return the placeholder image
      return (
        <div>
          <img src={user_icon_small_2x}></img>
        </div>
      )
    }
  }
}

export default SmallImage;
