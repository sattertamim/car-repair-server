import React from 'react';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Payment from '../Payment/Payment';
const Dashboard = (props) => {
    const [name,price] = props;
    return (
        <div className="col-md-6">
             <Sidebar></Sidebar>
             </div>
        <div className="col-md-6">
            <h1>Process Your Order</h1>
            <h2>Service:{name}</h2>
            <h3>Price:{price}</h3>
            <Payment/>
        </div>
    );
};

export default Dashboard;