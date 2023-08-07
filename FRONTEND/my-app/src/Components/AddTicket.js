// in this component you will add data (after logged) to the specific user

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { TokenContext } from '../Context/TokenContext';


const AddTicket = () => {

  const [desc, setDesc] = useState(null);
  const [priority, setPriority] = useState(null);
  
  const {token, setToken} = useContext(TokenContext);
  
  const MYSERVER ="http://127.0.0.1:8000/app/ticket"

  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  };

  const handletDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    

    const formData = new FormData();
    formData.append('desc', desc);
    formData.append('priority', priority);
    try {
      const res = await axios.post(MYSERVER, formData, config, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Ticket added successfully")
    } catch (err) {
      console.error(err);
    }

  
  };

  const stam = () => {
    console.log(token)
  }

  return (
    <div>
      <br/>
      <h5>Add Ticket</h5>
      <br/>
      {/* <button onClick={stam}>print</button>  */}
      <form onSubmit={handleImageUpload}>
        Description: <input type="text" onChange={handletDescChange} /> <br/><br/>
        Priority: <input type="text" onChange={handlePriorityChange} />  <br/><br/>
        <button type="submit">Add ticket</button>  <br/><br/>
      </form>
    </div>
  );
};

export default AddTicket;
