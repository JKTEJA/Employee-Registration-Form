import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router';
import firebaseDB from './firebase';

const Editform = () => {
    let query = new URLSearchParams(useLocation().search);
    const [data,setData] = useState({
      name:"",
      id:"",
      phonenumber:"",
      email:""
    })
    const {name,id,phonenumber,email} = {...data}
    const changehandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    useEffect(()=>{
        setData({...data,
             name:query.get('name'),
             id:query.get('id'),
             phonenumber:query.get('phonenumber'),
             email:query.get('email'),
        })
    },[])
    const submithandler = e =>{
        e.preventDefault();
        firebaseDB.child(`register/${query.get('key')}`).set(
            data,
           err =>{
               if (err){
                   console.log(err);
               }
               else{
                   alert("Data Updated")
               }
           } 
        )
    }
    return (
<div className='Empform'>
<h2 style={{"textAlign":"center"}}>Edit Form</h2>
<form onSubmit={submithandler}>
        <label>Employee Name:</label><br/>
        <input type="text" name='name' value={name} onChange={changehandler}/><br/>
        <label>Employee Id:</label><br/>
        <input type="text" name='id' value={id} onChange={changehandler}/> <br/>
        <label>Employee phonenumber:</label><br/>
        <input type="text" name='phonenumber' value={phonenumber} onChange={changehandler}/><br/>
         <label>Employee Email:</label><br/>
        <input type="email" name='email' value={email} onChange={changehandler}/><br/><br/>
        <input type="submit" className="btn btn-success" value="Save"/>
    </form>
   </div>
    )
}
export default Editform;