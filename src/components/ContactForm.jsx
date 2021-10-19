import React, { useState } from 'react';
import PropTypes from "prop-types";
import style from './ContactsList.module.css';
import { v4 as uuidv4 } from 'uuid';




export default function ContactForm ({handleSubmit}) {
 const inputNameId = uuidv4();
  const inputNumberId = uuidv4();
  
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");

  const handleChangeAllInput = (ev) => {
       
    if (ev.target.name === "name") {
      setName(ev.target.value)
    } else if (ev.target.name === "number") {
      setNumber(ev.target.value)
    };
  };

  return (<>
      <form className={style.form} onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(name,number);       
        setName("");
        setNumber("")  
      }}>
        <label className={style.label} htmlFor={inputNameId}>Name</label>
        <input
          className={style.input}
          id={inputNameId}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeAllInput}
            />
            
        <label className={style.label} htmlFor={inputNumberId}>Phone</label>
        <input
          className={style.input}
          id={inputNumberId}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeAllInput}
        />

        <button className={style.button}
          type="submit"
        >Add contact</button>
      </form>
    </>)
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}