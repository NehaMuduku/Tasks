import React from 'react';
            import axios from 'axios';
            import {useState} from 'react';
            import { useNavigate } from "react-router-dom";
            import { useEffect } from 'react';

            
           export const Frame=()=>{
                const [users,setUsers]=useState([])
                useEffect(()=>{
                    axios.get("http://localhost:8000/")
                    .then((result)=>
                    {
                        setUsers(result.data);
                    })
                })
                return (  
                        <>
                       <div>
                             {
                            users.map((data)=>
                            (
                                <>
                                  <div>
                                {data.Name}
                                </div>
                                </>
                            ))
                             }
                            {/* <button onClick={Show}>Road</button> */}     
                            </div>
                    </>
                );
                    }
                    export default Frame;