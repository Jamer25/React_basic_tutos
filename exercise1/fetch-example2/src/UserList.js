
import React, { useState,useEffect } from "react";

const FetchUserList=()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{


        const fetchData=async () =>{

           

            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/users');

                const data= await response.json();


                setData(data);
    
    
            }catch(error){}

        };

        fetchData();
        

    },[]);

    return (

        <div>

            <h1>Usuarios</h1>
            <ul>
                {
                    data.map(data=>(
                        <li key={data.id}>{data.name}</li>
                    ))
                }
            </ul>

        </div>
       
      );



};

export default FetchUserList;


