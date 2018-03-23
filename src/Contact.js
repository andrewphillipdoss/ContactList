import React, { Component } from 'react';
import SmallImage from './SmallImage'
import favorite_true from './static/images/favorite_true.png'

class Contact extends Component {

  render() {
    if (this.props.isFavorite) {
      // return contact with favorite star if favorite
      return (
          <div className="contactListViewContainer" onClick={this.props.onClick}>
            <div className="contactListView" >
              <div className="imageListViewContainer">
                <SmallImage src={this.props.smallImageURL}></SmallImage>
              </div>
              <div className="infoListViewContainer">
                <div className="nameListView">
                  <div className="starListView">
                    <img src={favorite_true}></img>
                  </div>
                  {this.props.name}
                </div>
                <div className="detailsListView">
                  <div className="starPlaceHolderListView"></div>
                  {this.props.companyName}
                </div>
              </div>
            </div>
            <hr />
          </div>
        )
      }
      else {
        return (
          // return contact without favorite star if not favorite
            <div className="contactListViewContainer" onClick={this.props.onClick}>
              <div className="contactListView">
                <div className="imageListViewContainer">
                  <SmallImage src={this.props.smallImageURL}></SmallImage>
                </div>
                <div className="infoListViewContainer">
                  <div className="nameListView">
                    <div className="starPlaceHolderListView"></div>
                    {this.props.name}
                  </div>
                  <div className="detailsListView">
                    <div className="starPlaceHolderListView"></div>
                    {this.props.companyName}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          )
      }
  }
}

export default Contact;
