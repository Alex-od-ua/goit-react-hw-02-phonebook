import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <div>
          <h1>Contacts</h1>
          <ul></ul>
        </div>
      </div>
    );
  }

  // <div
  //   style={{
  //     height: '100vh',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     fontSize: 40,
  //     color: '#010101'
  //   }}
  // >
  //   React homework template
  // </div>
}
