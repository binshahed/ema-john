import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn, initializeLoginFramework, handelSignOut, handelFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';


function Login() {

  const [newUser, setNewUser]=useState(false)

  const [user, setUser]=useState({
    isSignedIn: false,
    name:'',
    email:'',
    password:'',
    photo:''

  })

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser]= useContext(UserContext)
  const history = useHistory();
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };


  const googleSignIn = () =>{
    handleGoogleSignIn()
    .then(res => {
      setUser(res)
      setLoggedInUser(res)
      history.replace(from);
    })
  }

  const signOut = () => {
    handelSignOut()
    .then(res => {
      setUser(res)
    })
  }

  const fbSignIn = () => {
    handelFbSignIn()
    .then(res => {
      setUser(res)
      setLoggedInUser(res)
      history.replace(from);
    console.log(res)

    })
  }






  const handleBlur = (e) =>{
    let isFormValid = true
    if(e.target.name==='email'){
        isFormValid=/\S+@\S+\.\S+/.test(e.target.value)
    }

    
    if(e.target.name ==='password') {
      const isPasswordValid=e.target.value.length >8;
      const passwordHasNumber= /\d{1}/.test(e.target.value)
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (isFormValid){
      const newUserInfo ={...user}
      newUserInfo[e.target.name]=e.target.value;
      setUser(newUserInfo)
    }
  }

  const handleSubmit = (e)=>{
    // console.log(user.email, user.password);
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        setUser(res)
        setLoggedInUser(res)
      console.log(res)
  
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        setUser(res)
        setLoggedInUser(res)
        history.replace(from);
      console.log(res)
  
      })

    }
    e.preventDefault();
  }



  return (
    <div style={{textAlign:'center'}}>

      {
      user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
      <button onClick={googleSignIn}>Sign in</button>
       
      }
      <br/>
      
      <button onClick={fbSignIn}>Sign in with facebook </button>


      {
        
          user.isSignedIn &&<div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <img src={user.photo} alt=""/>
            </div>
      
      }
        <h1>Our Own Authentication</h1>
        <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
        <label htmlFor="newUser">New User Sign up</label>
      <form onSubmit={handleSubmit}>
        
       {newUser && <input type="text" name='name' onBlur={handleBlur} placeholder='Enter Your Name' required />}
        <br/>
        <input type="text" name='email' onBlur={handleBlur} placeholder='Enter Your Email' required />
        <br/>
        <input type="password" name='password' onBlur={handleBlur} placeholder='Enter Your Password' required />
        <br/>
        <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
      </form>
      <p style={{color:'red'}}>{user.error}</p>
      {
        user.success && <p style={{color:'green'}}>User successfully {newUser? 'Created' : 'Logged In'}</p>
      }
     
    </div>
  );
}

export default Login;
