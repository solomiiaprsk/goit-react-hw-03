import { useState } from 'react'
import css from './App.module.css'
import clsx from "clsx";
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/Searchbox'
import contacts from '../../contacts.json';


function App() {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (newValue) => {
    setInputValue(newValue);
  };

    const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
      <div className={css.container}>
          <h1>Phonebook</h1>

          <ContactForm />
          <SearchBox value={inputValue} onType={handleChange} />
          <ContactList data={filteredContacts} />
</div>
   
  );
}

export default App;
