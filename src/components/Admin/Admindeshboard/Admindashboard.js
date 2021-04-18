import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Admindashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    const [name,email,service,status] = props;
    useEffect(() => {
        fetch('https://cherry-tart-71286.herokuapp.com/service', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Adminsidebar></Adminsidebar>
                    <div class="form-floating">
                    <label for="floatingInputGrid">Customer Name</label>
                    <h4>{name}</h4>
                    <label for="floatingInputGrid">Email</label>
                    <h4>{email}</h4>
                    <label for="floatingInputGrid">Price</label>
                    <h4>{price}</h4>
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option value="1">Pandding</option>
    <option value="2">Ongoing</option>
    <option value="3">Done</option>
  </select>
  <button className="btn btn-success" type="submit">submit</button>
</div>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                   
                </div>
               
            </div>
        </section>
    );
};

export default Admindashboard;