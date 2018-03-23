import React, { Component } from 'react';
import favorite_true from './static/images/favorite_true.png';
import favorite_false from './static/images/favorite_false.png';

// component created to handle favorite button image changes when clicked
class FavoriteButton extends Component {

  constructor(props) {
    super(props);
    this.state = { favoriteState: this.props.isFavorite };
  }

  handleClick() {
    this.setState({
      favoriteState: !this.state.favoriteState
    });
  }

  render() {
    if (this.state.favoriteState) { // if favorite
      // return favorite_true star image
      return (
        <img className="favoriteButtonImage" onClick={this.handleClick.bind(this)} src={favorite_true}></img>
      )
    }
    else { // if not favorite
      // return favorite_false star image
      return (
        <img className="favoriteButtonImage" onClick={this.handleClick.bind(this)} src={favorite_false}></img>
      )
    }
  }
}

export default FavoriteButton;
