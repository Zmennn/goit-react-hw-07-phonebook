import './App.css';

import ContactsList from './components/ContactsList.jsx';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter.jsx';

export default function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <ContactForm />

        <h2>Contacts</h2>

        <Filter />

        <ContactsList />
      </div>
    </>
  );
}
