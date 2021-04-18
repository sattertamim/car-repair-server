import React from 'react';
import React, { useEffect, useState } from 'react';
import AllserviceDataTable from '../../Dashboard/ServiceDataTable/ServiceDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
const Allservice = () => {
    const [allService, setAllservice] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setAllservice(data))
    }, [])
    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Services</h5>
                <AllserviceDataTable allService={allService} />
            </div>
        </div>
    );
};

export default Allservice;