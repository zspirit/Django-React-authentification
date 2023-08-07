import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../Context/TokenContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Ticket() {
  // connect to server
  const SERVER = "http://127.0.0.1:8000/app/";

  const { token, setToken } = useContext(TokenContext);

  // usestate that point if the user is connect or not
  const [logged, setlogged] = useState(false);

  // use Effect to change from unlogged to logged mood (after the token approved)
  useEffect(() => {
    if (token) setlogged(true);
  }, [token]);

  const [data, setData] = useState([]);

  const getTickets = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get(SERVER + "ticket", config)
      .then((res) => setData(res.data));
  };

  const handleDeleteBtn = async(id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .delete(SERVER + "ticket/" + id , config)
      getTickets()
  };

  return (
    <div>
      <br />

      <h4>Want to add Ticket ? </h4>

      {logged && (
        <Link to="/AddTicket">
          <button className="btn btn-primary">Add ticket</button>
        </Link>
      )}

      {!logged && <h6>You have to log in in order to add ticket</h6>}

      <br /><br />

      <h4>Your tickets:</h4>
      {logged && <button onClick={() => getTickets()} className="btn btn-primary">Get Tickets</button>}
      {!logged && <h6>You have to log in in order to see your tickets</h6>}

      {logged && 
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>User ID</td>
            <td>Description</td>
            <td>Priority</td>
            <td>Actions</td>
          </tr>
        </thead>
      {data.map((item, i) => (
        <tr key={i}>
          <th scope="row">{item.id}</th>
          <td>{item.user}</td>
          <td>{item.desc}</td>
          <td>{item.priority}</td>
          <td><button onClick={()=>handleDeleteBtn(item.id)} >Supprimer</button></td>
        </tr>
      ))}
      </table>
      }
    </div>
  );
}

export default Ticket;
