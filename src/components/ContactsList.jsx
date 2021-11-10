import React, { } from 'react';
import style from './ContactsList.module.css';
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteRecord } from '../redux/actions';




function ContactsList({ del,contacts ,filter }) {
   
    const handleDelete = (ev) => { del(ev.target.id) };

    const filteredContacts = () => {
    return contacts.filter(el => {
      const arr = el.name.toLowerCase().split(' ');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(new RegExp(`^${filter}`)) !== null) {
          return true;
        }
      }
      return false;
    });
    };
    
        return (
            <ul className={style.list}>        
                {
                    filteredContacts().map(el => (<li
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
};

const stateToProps = state => {
    return {
        contacts: state?.contacts ?? [],
        filter:state?.filter??""
    }
};
const dispatchProps = dispatch => ({
    del: id => dispatch(deleteRecord(id))
});


export default connect(stateToProps,dispatchProps)(ContactsList);

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    del: PropTypes.func.isRequired   
};


