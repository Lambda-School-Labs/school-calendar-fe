import React, { useState, useEffect } from 'react';
import firebase, { db } from '../../firebase/'
// import EventCard from './EventCard';
import './EventDisplay.css'

const EventDisplay = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        db
            .collection("calendars")
            .doc("aWBlKnc7wrTCOQenDfaA")
            .collection("events")
            .get()
            .then(snapshot => {
                setData(snapshot.docs.map(doc=> doc.data()))
            })
            .catch(err=> console.log('something is up', err))
    },[])

    // const [events, setEvents] = useState([]);
    // const async snapshot = await firebase.firebase().collection('calendars').doc('aWBlKnc7wrTCOQenDfaA').collection('events').get()
    // console.log('this is the snapshop', snapshot)

    // return snapshot.docs.map(doc => doc.data())
    return (
        <div className='event-display-container'>
            <h1>Events Go HERE</h1>
            <ul>
                {data.map(item => (
                    <li key={item.date}>
                        {item.useEffect}:{item.date}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default EventDisplay;