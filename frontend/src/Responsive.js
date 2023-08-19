import React from 'react';
import { useNavigate } from 'react-router-dom';
import { render } from 'react-dom';
const date = new Date();
const formattedDate = date.toLocaleDateString('en-GB');
const { useEffect, useState } = React

const Resp=()=>{
    const nav=useNavigate();
    function toggleColor(){
        setBtnClass(
          btnClass === "blue-color" ? "orange-color" : "blue-color"
        );
      }
    const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');

            useEffect(() => {
                const date = new Date();
                const options = { weekday: 'long' };
                const currentDayOfWeek = date.toLocaleString('en-US', options);
                setCurrentDayOfWeek(currentDayOfWeek);
            }, 
            []);
            const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds(); 
        const [btnClass, setBtnClass] = useState("blue-color");
    return(
        <>
        <center>
        <img style={{ width: 300, height: 300}} src="profile.jpg" alt="profile"></img><br/>
        <label></label><input type="text" placeholder="Name"></input><br/><br/>
        <label></label><input type="text" placeholder="Register Number" border="none"></input>
                <div className='container'>
                    <p> {formattedDate}</p>
                </div>
                <div className="container">
                    <p>{currentDayOfWeek}</p>
                </div>
                <div className="App">
            <p align="center">{showTime}</p>
        </div>
        <div>
        Attendence : 
        <label></label><input type="submit" value="Present"></input>
        /
        <label></label><input type="submit" value="Absent"></input>
        </div><br/>
        <div>
        <button onClick={toggleColor} className={`${btnClass} my-btn`}>
           Attend </button>
        </div>
        </center>
        </>
    )
}
export default Resp;