import {React,  useState } from "react";
import axios, { isAxiosError } from 'axios';
export const Input =() =>
{
    const [name,Setname]=useState([]);
    const [dis,Setdis]=useState([]);
    const[gmail,Setgmail]=useState([]);	

    const Submit = async () => {
        try {
          const res = await axios.post("http://localhost:8000/input/"+name);
          if (res.data) {
            alert("Successfully added");
          } else {
            alert("Sorry, try again");
          }
        } catch (e) {
          console.log(e);
          alert("Error occured");
        }
      };
      const Show=async()=>{
        const res=await axios.get("http://localhost:8000/output/"+name)
        {
             if(res.data)
             {
                Setdis(res.data.name)
             }
             else{
                alert("not found")
             }
        }
    };
      
    return(
        <>
        <div className="basic-data-input">
            <label>Username<input type="text" onChange={(e)=>Setname(e.target.value)}/></label>
            <button onClick={Submit}>Submit</button><br/>
            <label>Gmail<input type="gmail" onClick={(e)=>Setgmail(e.target.value)}/></label>
            <button onClick={Show}>Show</button>:{dis}
            <div>
            <label>Password<input type="password" onChange={(e)=>Setname(e.target.value)}/></label>
            <button onClick={Show}></button>:{dis}
            </div>
        </div>
        </>
    )
}