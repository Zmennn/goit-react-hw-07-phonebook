import React, { } from 'react';
import style from './ContactsList.module.css';
import PropTypes from "prop-types";




export default function ContactsList({ contacts, handleDelete }) {
    
        return (
            <ul className={style.list}>        
                {
                    contacts.map(el => (<li
                        className={style.listItem}
                        key={el.id} >
                        {el.name}:  {el.number}
                        <button
                            type="button"
                            className={style.deleteButton}
                            id={el.id}
                            onClick={handleDelete}
                        >Delete</button>
                      </li>))
                }
        </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}