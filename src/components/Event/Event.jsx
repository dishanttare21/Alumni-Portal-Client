import React from 'react'
import './Event.css';
import { Link } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
const Event = ({ title, desc, eventImg, postDate, scheduleDate }) => {
    return (
        <div className="event">
            <div className="event-top">
                <div className="event-top-left">
                    <img src="assets/images/no-avatar.png" alt="" className='event-profile-image' />
                    <span className='event-username'>Yash Patil <span className='user-type'>| Alumni</span></span>
                </div>
                <div className="event-top-right">
                    <span className="post-date">{postDate}</span>
                </div>
            </div>
            <div className="event-bottom">
                {eventImg
                    ? <div className="event-image-container">
                        <img src={`assets/images/posts/${eventImg}`} alt="" className="event-image" />
                    </div>
                    : ''}
                <div className="event-info">
                    <Link to='/eventdetails' className="event-title">
                        {title}
                    </Link>
                    <p className='event-description'>
                        {desc}
                    </p>
                    <span className='event-date'>
                        <EventIcon className='icon' />
                        <span>{scheduleDate}</span>
                    </span>
                    {/* <button className='btn register-btn'>Register</button> */}
                </div>
            </div>
        </div>
    )
}

export default Event
