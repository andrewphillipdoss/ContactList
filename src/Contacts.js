import React, { Component } from 'react';
import Contact from './Contact.js';
import DetailView from './DetailView.js';
import FavoriteButton from './FavoriteButton.js'
import './Contacts.css';

// Format the city, state, county, and zipcode data to be represented by one string
function formatLocation(city, state, country, zipCode) {
  return (
    city + ", " + state + " " + zipCode + " " + country
  );
}



class Contacts extends Component {
  constructor(props) {
    super();
    this.state = {
      contacts: [], // holds all of the contact data
      contact: {}, // used to represent a selected contact
      isListView: true // toggles between list view and detail view
    };
  }

  componentWillMount() {
    fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json') // fetch data from json URL
      .then(response => response.json()) // convert to json
      .then()
      .then(json => {
        this.setState({ // set contacts in state to fetched json data
          contacts: json
        });
      });
  }

// handles list view contact click -- accepts contact id as parameter
  handleClick(id) {
    this.setState({
      contact: this.state.contacts.find(c => c.id === id), // initializes contact to selected contact
      isListView: false
    });
  }

// handles when button is clicked in detail view to go back to list view
  handleBack() {
    this.setState({
      contact: {}, // set contact back to empty object
      isListView: true
    });
  }

// handles data change for when favorite button is selected
  handleFavorite() {
    let contacts = this.state.contacts; //creates copy of contacts
    // finds index of selected contact
    let index = this.state.contacts.findIndex(c => c.id === this.state.contact.id);
    // creates variable of the inverse of isFavorite on the proper index of contacts
    let contacts_update = Object.assign({}, contacts[index], {isFavorite: !this.state.contacts[index].isFavorite});

    contacts[index] = contacts_update; // updates the proper index of contacts
    this.setState({
      contacts: contacts // sets state using copied variable
    });
  }


  render() {
    if (this.state.isListView === true) {
      // return list view
      return (
        <div>
          <div className="mainHeaderListView">
            <h1><center>Contacts</center></h1>
          </div>
          <h3 className="subHeaderListView">FAVORITE CONTACTS</h3>
          {this.state.contacts
            .filter(c => c.isFavorite === true) // filter by favorites
            .sort((a, b) => (a.name).localeCompare(b.name)) // sort alphabetically
            .map(c => // map all contacts
                <Contact // set Component props to state data
                    key={c.id}
                    name={c.name}
                    companyName={c.companyName}
                    smallImageURL={c.smallImageURL}
                    isFavorite={c.isFavorite}
                    onClick={()=>this.handleClick(c.id)} // handle click and pass id as parameter
                  />)}
          <h3 className="subHeaderListView">OTHER CONTACTS</h3>
          {this.state.contacts
            .filter(c => c.isFavorite === false) // filter by favorites
            .sort((a, b) => (a.name).localeCompare(b.name)) // sort alphabetically
            .map(c => // map all contacts
              <Contact // set Component props to state data
                  key={c.id}
                  name={c.name}
                  companyName={c.companyName}
                  smallImageURL={c.smallImageURL}
                  isFavorite={c.isFavorite}
                  onClick={()=>this.handleClick(c.id)} // handle click and pass id as parameter
                />)}
        </div>
      )
    }
    else {
      // return detail view
      return (
        <div>
          <div className="mainHeaderDetailView">
            <div className="backButton" onClick={this.handleBack.bind(this)}>
              <strong>&lt;</strong> Contacts
            </div>
            <div className="favoriteButton" onClick={this.handleFavorite.bind(this)}>
              <FavoriteButton isFavorite={this.state.contact.isFavorite}/>
            </div>
          </div>
          <DetailView // map singular contact state to DetailView props
            largeImageURL={this.state.contact.largeImageURL}
            name={this.state.contact.name}
            companyName={this.state.contact.companyName}
            home_phone={this.state.contact.phone.home}
            mobile_phone={this.state.contact.phone.mobile}
            work_phone={this.state.contact.phone.work}
            street={this.state.contact.address.street}
            location={formatLocation(
              this.state.contact.address.city,
              this.state.contact.address.state,
              this.state.contact.address.country,
              this.state.contact.address.zipCode
            )}
            birthdate={this.state.contact.birthdate}
            emailAddress={this.state.contact.emailAddress}
          />
        </div>
      )
    }
    }
  }


export default Contacts;
