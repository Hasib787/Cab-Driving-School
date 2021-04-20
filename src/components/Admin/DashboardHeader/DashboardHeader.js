import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faThList, faStream } from '@fortawesome/free-solid-svg-icons';
import './DashboardHeader.css';
import { UserContext } from '../../../App';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            marginLeft:'38%'
        },
    },
}));

const DashboardHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const classes = useStyles();

    return (
        <section className="row col-lg-12">
            <div className="col-sm-12 col-md-3">
                <div className=" d-lg-block text-left sidebar px-5 d-md-flex">
                    <div>
                        <h2>Cab <span>Driving School</span></h2>
                    </div>
                    <div className={classes.root}>
                        <Avatar alt="Remy Sharp" src={loggedInUser.photo} />
                    </div>
                    <div className="user-panel">
                        <a href="admin/bookNow" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faPlus} /> Book Now</h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faThList} /> Booking List</h5>
                        </a>
                        <a href="" className="linkmx-lg-4">
                            <h5><FontAwesomeIcon icon={faStream} /> Review</h5>
                        </a>
                    </div>

                </div>
            </div>
            <div className="mt-3 col-lg-9">
                <h1>Hi {loggedInUser.name} Welcome to Dashboard</h1>
            </div>
        </section>
    );
};

export default DashboardHeader;