import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from '../components/Calendar';

const Dashboard = ({ data }) => {
  const [events, setEvents] = useState([]);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/events');
      const data = await res.data;
      const { name, email, photoUrl, events } = data;
      setEvents(events);
      setProfile({ name, email, photoUrl });
    })();
  }, []);
  useEffect(() => {
    if (events) console.log(events);
  }, [events]);
  return (
    <div>
      <h1>Dashboard</h1>
      <Calendar events={events} profile={profile} />
    </div>
  );
};

// Dashboard.getInitialProps = async () => {
//   const res = await axios.get(`${process.env.BASE_URL}/api/events`);
//   const json = await res.data;
//   return { data: json };
// };

export default Dashboard;
