import React from 'react';

import './App.scss';

import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Contacts from './components/Contacts';

class App extends React.Component {
  render() {

    const mockUserData = {
      avatar: '',
      name: '',
      phone: '',
      country: '',
      admissionDate: '',
      company: '',
      department: '',
    };

    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts
          data={mockUserData}
        />

      </React.Fragment>
    )
  }
}

export default App;
