import React from 'react'
import { Link } from 'react-router-dom';
import './Categories.css';

const JobCategories = () => {
    return (
    <>
        <h3>Job Categories</h3>
        <ul className='categories'>
            <Link to='/jobs'>
                <li className='category category-active' >
                    <span>All Opportunities</span>
                    <span>(20)</span>
                </li>
            </Link>
            <Link to='/jobs/past'>
                <li className='category'>
                    <span>Posted By Me</span>
                    <span>(0)</span>
                </li>
            </Link>
            <Link to='/jobs/upcoming'>
                <li className='category'>
                    <span>Applied By Me</span>
                    <span>(0)</span>
                </li>
            </Link>
        </ul>
    </>
    )
}

const Eventcategories = () => {
    return (
        <>
            <h3>Event Categories</h3>
            <ul className='categories'>
                <Link to='/events'>
                    <li className='category category-active'>
                        <span>All Events</span>
                        <span>(200)</span>
                    </li>
                </Link>
                <Link to='/events/past'>
                    <li className='category'>
                        <span>Past Events</span>
                        <span>(196)</span>
                    </li>
                </Link>
                <Link to='/events/upcoming'>
                    <li className='category'>
                        <span>Upcoming Events</span>
                        <span>(4)</span>
                    </li>
                </Link>
            </ul>
        </>
    )
}

const Categories = ({jobs}) => {
    return jobs ? <JobCategories /> : <Eventcategories />
    
}

export default Categories
