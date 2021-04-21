import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThList, faStream } from '@fortawesome/free-solid-svg-icons';
import './AdminDashboardHeader.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import './AdminDashboardHeader.css';
import { UserContext } from '../../../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            marginLeft:'38%'
        },
    },
}));


const AdminDashboardHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const classes = useStyles();

    return (
        <section>
            <div className="col-lg-12">
                <div className=" d-lg-block text-left Leftsidebar px-5 d-md-flex">
                    <div>
                        <h2>Cab <span>Driving School</span></h2>
                    </div>
                    <div className={classes.root}>
                        <Avatar alt="Remy Sharp" src={loggedInUser.photo} />
                    </div>
                    <div className="admin-panel">
                         <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faPlus} /><Link to="/orderList">Order List</Link></h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faPlus} /><Link to="/addService">Add Service</Link></h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faThList} /><Link to="/makeAdmin"> Make Admin</Link></h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faStream} /><Link to="/manageServices"> Manage Services</Link></h5>
                        </a>
                    </div>

                </div>
            </div>
            
        </section>
    );
};

export default AdminDashboardHeader;