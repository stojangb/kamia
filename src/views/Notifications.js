import React, { Component } from 'react'

  const Contacts = ({ contacts }) => {
    return (
      <div>
        <center><h1>Contact List</h1></center>
        {contacts.map((contact) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{contact.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
              <p class="card-text">{contact.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>
    )
  };
class App extends Component {
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }


  

}

export default Contacts;