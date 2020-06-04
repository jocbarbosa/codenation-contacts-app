import React from 'react';

import './App.scss';

import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Contacts from './components/Contacts';

import sortContacts from './utils/sortContacts';

class App extends React.Component {

  state = {
    contacts: [],
    updatedContacts: [],
    defaultSort: 'name'
  }

  async componentDidMount() {

    const { defaultSort } = this.state;

    const response = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(res => res.json())
      .catch(err => console.error(err))

    this.setState({
      contacts: response,
      updatedContacts: sortContacts(response, defaultSort)
    })
  }

  handleSort(sort) {
    const { contacts } = this.state;

    const sortedContacts = sortContacts(contacts, sort);

    this.setState({
      defaultSort: sort,
      updatedContacts: sortedContacts
    });
  }

  render() {

    return (
      <React.Fragment>
        <Topbar />
        <Filters
          onSort={this.handleSort.bind(this)}
        />
        <Contacts
          data={this.state.updatedContacts}
        />

      </React.Fragment>
    )
  }
}

export default App;
