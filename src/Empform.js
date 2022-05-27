import React,{useState,useEffect} from 'react';
import firebaseDB from './firebase';
import {useNavigate } from 'react-router-dom'

const Empform = (props) => {
  let navigate=useNavigate();
const[data,setData]=useState({
  name:"",
  id:"",
  phonenumber:"",
  email:""
})
/*get data from the firebaseDB*/
const [getData,setGetData]=useState({})
useEffect (()=>{
 firebaseDB.child('register').on('value', details=>{
   details.val();
   console.log(details.val());
   setGetData(details.val());
 })
},[])
const {name,id,phonenumber,email}={...data}
const changehandler= e =>{
  setData({...data,[e.target.name]:e.target.value})
 
}
const submithandler=async (e) =>{
e.preventDefault();
await firebaseDB.child("register").push(
  data,
  err=>{
    if(err){
      console.log(err)
    }
    else{
      alert("data added")
    }
  }
   
)
/* reset form */
setData({
  name:"",
  id:"",
  phonenumber:"",
  email:""
})
/* reset form end */
}
 const deletehandler=key=>{
   firebaseDB.child(`register/${key}`).remove(
     err=>{
       if(err){
         console.log(err)
       }
     }
   )
 }
  return (
    <div className='Empform'>
      <h3>Employee RegistrationForm</h3>
      <form onSubmit={submithandler}>
        <label>Employee Name:</label><br/>
        <input type="text" name='name' value={name} onChange={changehandler}/><br/>
        <label>Employee Id:</label><br/>
        <input type="text" name='id' value={id} onChange={changehandler}/> <br/>
        <label>Employee PhoneNumber:</label><br/>
        <input type="text" name='phonenumber' value={phonenumber} onChange={changehandler}/><br/>
         <label>Employee Email:</label><br/>
        <input type="email" name='email' value={email} onChange={changehandler}/><br/><br/>
        
        <input className='btn btn-success' type="submit" value="submit"/>
      </form><br/>
      <div>
    
        
         {getData && 
        Object.keys(getData).map(key=>
        <div className='border'>
          <p>Employee Name : {getData[key].name}</p>
          <p>Employee Id : {getData[key].id}</p>
          <p>Employee PhoneNumber : {getData[key].phonenumber}</p>
          <p>Employee Email : {getData[key].email}</p>

          <button className='btn btn-success' onClick={()=>navigate(`/editform?name=${getData[key].name}&id=${getData[key].id}
          &phonenumber=${getData[key].phonenumber}&email=${getData[key].email}&key=${key}`)}>
            Update</button>&nbsp;

          <button className='btn btn-danger' onClick={()=>deletehandler(key)} >Delete</button>
        </div>)
        }
      </div>
        </div>
  )
}

export default Empform