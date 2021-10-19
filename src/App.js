import React, { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/ContactsList.jsx';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter.jsx';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const data = localStorage.getItem('contacts');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    if (!contacts.find(el => el.name === name)) {
      setContacts(prev => [...prev, { name, number, id: uuidv4() }]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const handleChangeFindInput = ev => {
    const regExp = new RegExp(`^${ev.target.value.toLowerCase()}`);
    setFilter(regExp);
  };

  const handleFilter = () => {
    console.table(contacts);
    return contacts.filter(el => {
      const arr = el.name.toLowerCase().split(' ');

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(filter) !== null) {
          return true;
        }
      }
      return false;
    });
  };

  const handleDelete = ev => {
    setContacts(prev => prev.filter(elem => elem.id !== ev.target.id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <ContactForm handleSubmit={handleSubmit} />

        <h2>Contacts</h2>
        <Filter handleChangeFindInput={handleChangeFindInput} />

        <ContactsList contacts={handleFilter()} handleDelete={handleDelete} />
      </div>
    </>
  );
}
