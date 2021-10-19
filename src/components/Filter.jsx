import style from './ContactsList.module.css';
import React, {  } from 'react';
import PropTypes from "prop-types";




export default function Filter({handleChangeFindInput}) {
     return (<>
            <label htmlFor="find">Find contacts by name</label>
            <input
                className={style.input}
                autoComplete="off"
                id="find"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]"
                onChange={(ev) => { ev.preventDefault(); handleChangeFindInput(ev) }}
                ></input>
     </>   )
};

Filter.propTypes = {
    handleChangeFindInput: PropTypes.func.isRequired
}