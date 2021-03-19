import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import VolunteerDisplayList from "./VolunteerDisplayList"
export default function VolunteerDisplay(props) {
  const [data, setData] = useState();
  useEffect(() => {
    axios.post("http://localhost:8000/requests").then((res) => {
      console.log("message", res.data);
      setData(res.data)
      console.log('this is rsponse',res)
    });
  });

  // 
  // console.log('this is',data) 

  // const requestList = props.data.map((request) =>{
  //   return <VolunteerDisplayList
  //   key ={request.id}
  //    fullname={fullname}
  //    date_posted={date_posted}
  //    task_description={task_description}
  //     />
  // })

  return (
    // {requestList}
    <h1>sdfsda</h1>
  )
  
  
}
