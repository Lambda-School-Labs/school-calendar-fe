import React, { useState, useEffect } from 'react';
import Calendar from './Calendar/Calendar';
import Logo from '../../img/d8picker.png';
import favicon from '../../img/white.png';
import Template from './Template'
import { useForm } from 'react-hook-form';
import axios from 'axios'


import { axiosWithAuth } from '../../utils/axiosWithAuth';




const templateList = [
  {
    starttime:'12:30PM',
    endtime:'2:45PM',
    summary:'Basketball',
    description:'bouncy bouncy',
  }
  //   starttime:0,
  //   endtime:0,
  //   summary:'',
  //   description:'',
  // },{
  //   starttime:0,
  //   endtime:0,
  //   summary:'',
  //   description:'',
  // }
]

const Home = () => {
  const [data, setData] = useState({});
  const [events, setEvents] = useState([]);
  const [templateFormOpen, setTemplateFormOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false)

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = formData => {
    const template = {...formData, googleId:localStorage.getItem('googleId:') }
    console.log(template)
    axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/api/template`, template)
    .then(res => {console.log(res)})
    .catch(err=>{console.log(err)})



    templateList.push(formData)
  };
  //console.log(errors);


  useEffect(() => {
    const url =
      process.env.NODE_ENV === 'development'
        ? '/api/events'
        : `${process.env.REACT_APP_ENDPOINT_URL}/api/events`;
    (async () => {
      const res = await axiosWithAuth().get(url);
      // const res = await axios.get(
      //   `${process.env.REACT_APP_ENDPOINT_URL}/api/events`
      // );
      const results = await res.data;
      localStorage.setItem('googleId:', res.data.googleId);
      console.log('results: ', results);
      setData(results);
      setEvents(results.events);
      // setLoading(true);
    })();
  }, [setEvents]);

  return (
    <div className="home">
      <div className="navbar">
        <img src={favicon} alt="" className="favicon" />
        <h2>Sign Out</h2>
      </div>
      <main className="main">
        <div className="left">
          <div className="profile">
            <img className="profile-img" src={data.photoUrl} alt="" />
            <h3>{data.name}</h3>
          </div>
          <div className="template">
            <h2>templates</h2>
            {templateList.map(t=>(
              <Template 
                key={t.id}
                starttime={t.starttime}
                endtime={t.endtime}
                summary={t.summary}
                description={t.description}
                templateFormOpen={templateFormOpen}
                setTemplateFormOpen={setTemplateFormOpen}
              />
              ))}
            <button onClick={() => setFormOpen(!formOpen)}>Create Template</button>
            {formOpen && 
            <div className="Form">  
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="summary" name="summary" ref={register({maxLength: 80})} />
                <input type="text" placeholder="description" name="description" ref={register({maxLength: 100})} />
                <input type="time" name="starttime" ref={register({required: true })} />
                <input type="time" name="endtime" ref={register({required: true})} />

                <input type="submit" />
              </form>
            </div>}
          </div>
        </div>
        <div className="right">
          <img src={Logo} alt="logo" className="logo" />
          <Calendar events={events} data={data} 
          templateFormOpen={templateFormOpen}
          setTemplateFormOpen={setTemplateFormOpen}/>
        </div>
      </main>
    </div>
  );
};

export default Home;
