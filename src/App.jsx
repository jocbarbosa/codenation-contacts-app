import React from 'react';

import './App.scss';

import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Contacts from './components/Contacts';

class App extends React.Component {

  state = {
    contacts: [],
    updatedContacts: [],
    sort: false
  }

  async componentDidMount() {
    const response = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(res => res.json())
      .catch(err => console.error(err))

    this.setState({
      contacts: response,
      updatedContacts: response
    })
  }

  render() {

    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts
          data={this.state.updatedContacts}
        />

      </React.Fragment>
    )
  }
}

export default App;
