import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Adminsidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Adminsidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isadmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://cherry-tart-71286.herokuapp.com/isadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addservice" className="text-white">
                        <FontAwesomeIcon icon={faSattings} /> <span>Add Service</span>
                    </Link>
                </li>
                {isadmin && <div>
                    <li>
                        <Link to="/addadmin" className="text-white">
                            <FontAwesomeIcon icon={faUser} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allservice" className="text-white">
                            <FontAwesomeIcon icon={faService} /> <span>All Service</span>
                        </Link>
                    </li>
                   
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Adminsidebar;