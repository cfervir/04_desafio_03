import React, { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';

const List = ( { searchResult } ) => {
  
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [inputList, setInputList] = useState(BaseColaboradores);

  const sendData = (e) => {
    e.preventDefault()
    if (newName === '' || newEmail === '' ) {
      alert('Please fill the required data!');
    } else {
      setInputList([...inputList,
        {
          id: Date.now(),
          nombre: newName,
          correo: newEmail
        }
      ])
    }
  };

  const getName = (e) => {
    setNewName(e.target.value);
  };

  const getEmail = (e) => {
    setNewEmail(e.target.value);
  };
      
  const removeWorker = (r) => {
    const remove = inputList.filter(data => 
      data.id !== r.id);
    setInputList(remove);
  };

  return (
    <main className="container main">
      <form className="container--flex form" onSubmit={ sendData }>
        <label className="formLabel">Name</label>
        <input className="formInput" name="name" type="text" onChange={ getName } placeholder="Write a Name..." required />
        <label className="formLabel">Email</label>
        <input className="formInput" name="email" type="email" onChange={ getEmail } placeholder="Write an Email..." required />
        <button className="btn btn--add" >Add</button>
      </form>
      <div className="formContainer">
        { inputList.filter((f) => {
          if (searchResult === '') {
            return f;
          } else if ( f.nombre.toLocaleLowerCase().includes(searchResult.toLocaleLowerCase()) ) {
            return searchResult;
          };
        }).map(d =>
          <li className="formResults" key={ d.id }>
            { d.nombre } - { d.correo } <button class="btn btn--remove" onClick={() => removeWorker(d)}>🞬</button>
          </li>
        )}
      </div>
    </main>
  )
}

export default List;