import React, { useEffect } from 'react';
import style from './ContactsList.module.css';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchPhones,deleteById } from '../redux/operation';




function ContactsList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const isDelete = useSelector((state) => state.isDelete);
  const isSubmit=useSelector((state)=>state.isSubmit)

  const dispatch = useDispatch();
  const del = id => dispatch(deleteById(id));
  


  const phones = () => dispatch(fetchPhones());
  useEffect(() => { phones() }, []);
  useEffect(() => { if (isDelete) { phones() } }, [isDelete]);
  useEffect(() => { if (isSubmit) { phones() } }, [isSubmit]);
  
  
    function filteredContacts() {
    return contacts.filter(el => {
      const arr = el.name.toLowerCase().split(' ');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(new RegExp(`^${filter}`)) !== null) {
          return true;
        }
      }
      return false;
    });
  }
    
        return (
            <ul className={style.list}>        
                {
                    filteredContacts().map(el => (<li
                        className={style.listItem}
                        key={el.id} >
                        {el.name}:  {el.phone}
                        <button
                            type="button"
                            className={style.deleteButton}
                            id={el.id}
                            onClick={del}
                        >Delete</button>
                      </li>))
                }
        </ul>
    )
};


export default ContactsList




