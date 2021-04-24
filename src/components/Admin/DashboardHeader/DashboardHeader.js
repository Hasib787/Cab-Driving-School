import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThList, faStream, faHdd, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './DashboardHeader.css';
import { UserContext } from '../../../App';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            marginLeft: '38%'
        },
    },
}));

const DashboardHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const classes = useStyles();
    const { bookId } = useParams();

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://stormy-forest-84945.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <section>
            <div className="col-lg-12">
                <div className=" d-lg-block text-left sidebar px-5 d-md-flex">
                    <div>
                        <h2>Cab <span>Driving School</span></h2>
                    </div>
                    <div className={classes.root}>
                        <Avatar alt="Remy Sharp" src={loggedInUser.photo} />
                    </div>
                    <div className="user-panel">
                        <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faPlus} /><Link to={"/admin/bookNow/" + bookId}> Book Now</Link></h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faThList} /><Link to="/orders"> Orders List</Link></h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faStream} /><Link to="/review"> Review</Link></h5>
                        </a>

                        {isAdmin && <div>
                            <a href="" className="linkmx-lg-4">
                                <h5><FontAwesomeIcon icon={faHdd} /><Link to="/orderList"> All Order List</Link></h5>
                            </a>
                            <a href="" className="linkmx-lg-4">
                                <h5><FontAwesomeIcon icon={faPlus} /><Link to="/addService"> Add Service</Link></h5>
                            </a>
                            <a href="" className="linkmx-lg-4">
                                <h5><FontAwesomeIcon icon={faUserPlus} /><Link to="/makeAdmin"> Make Admin</Link></h5>
                            </a>
                            <a href="" className="linkmx-lg-4">
                                <h5><FontAwesomeIcon icon={faStream} /><Link to="/manageServices"> Manage Services</Link></h5>
                            </a>
                        </div>}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default DashboardHeader;