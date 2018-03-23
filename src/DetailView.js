import React, { Component } from 'react';
import LargeImage from './LargeImage';
import favorite_true from './static/images/favorite_true.png';

// Format the birthdate data to match design spec
function formatBirthdate(birthdate) {
  var month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"][birthdate.substring(5,6)];
  var str = month + ' ' + birthdate.substring(8, 9) + ', ' + birthdate.substring(0,4);
  return str;
}

class DetailView extends Component {

  // function created to change CSS class names in order to hide divs
  // that hold null data
  changeCSSClass(prop) {
    if (prop == null) {
      return "displayNone"
    }
    else {
      return "infoDetailViewContainer";
    }
  }

  render() {
    // create variables using changeCSSClass function to use as class names
    let home_phone_class = this.changeCSSClass(this.props.home_phone);
    let mobile_phone_class = this.changeCSSClass(this.props.mobile_phone);
    let work_phone_class = this.changeCSSClass(this.props.work_phone);
    let birthdate_class = this.changeCSSClass(this.props.birthdate);
    let email_class = this.changeCSSClass(this.props.emailAddress);

    return (
      <div>
        <div className="imageDetailViewContainer">
          <LargeImage src={this.props.largeImageURL}></LargeImage>
        </div>
        <div className="nameDetailViewContainer">
          <h1>{this.props.name}</h1>
        </div>
        <div className="companyNameDetailViewContainer">
          <div>{this.props.companyName}</div>
        </div>
        <div className={home_phone_class}>
          <div className="labelDetailView">PHONE:</div>
          <div className="infoDetailView">
            {this.props.home_phone}
            <div className="labelPhoneType">Home</div>
          </div>
          <hr />
        </div>
        <div className={mobile_phone_class}>
          <div className="labelDetailView">PHONE:</div>
          <div className="infoDetailView">
            {this.props.mobile_phone}
            <div className="labelPhoneType">Mobile</div>
          </div>
          <hr />
        </div>
        <div className={work_phone_class}>
          <div className="labelDetailView">PHONE:</div>
          <div className="infoDetailView">
            {this.props.work_phone}
            <div className="labelPhoneType">Work</div>
          </div>
          <hr />
        </div>
        <div className="infoDetailViewContainer">
          <div className="labelDetailView">ADDRESS:</div>
          <div className="infoDetailView">{this.props.street}</div>
          <div className="infoDetailView">{this.props.location}</div>
          <hr />
        </div>
        <div className={birthdate_class}>
          <div className="labelDetailView">BIRTHDATE:</div>
          <div className="infoDetailView">{formatBirthdate(this.props.birthdate)}</div>
          <hr />
        </div>
        <div className={email_class}>
          <div className="labelDetailView">EMAIL:</div>
          <div className="infoDetailView">{this.props.emailAddress}</div>
          <hr />
        </div>
      </div>
    )
  }
}

export default DetailView
