import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { Link } from 'react-router-dom'
import Layout from './Layout/Layout'
import { auth } from '../Config/Config'
//import { useHistory } from 'react-router-dom';

export const Register = () => {

    //const history = useHistory();
    const [fullName, setFullname]=useState('');
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');


    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            console.log(userCredential);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: fullName
            })
        }).catch((error) =>{
            console.log(error);
        })


        // setTimeout(() => {
        //     history.push('/Login');
        //   }, 3000);
    }

  return (
    <Layout>
        <div className='box'>
            <h1>Register</h1>
            <form onSubmit={register}>
            <div>
                    <input class="form-control form-control-lg" type="text" placeholder="Full Name" aria-label=".form-control-lg example" onChange={(e)=>setFullname(e.target.value)} value={fullName}></input>
            </div>
            <div>
                    <input class="form-control form-control-lg" type="text" placeholder="Email" aria-label=".form-control-lg example" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            </div>
                <div>
                <input class="form-control form-control-lg" type="password" placeholder="Password" aria-label=".form-control-lg example" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <div>
                <span>Already have an Account? <Link to ='/Login' className='link'>Login</Link></span>
            </div>
            </form>
        </div>
</Layout>
  )
}

export default Register;