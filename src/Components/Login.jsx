import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/Config';
import Layout from './Layout/Layout';

export const Login = () => {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('');

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            window.location.href = 'http://127.0.0.1:5173/'
        }).catch((error) =>{
            console.log(error)
        })
    }

  return (
    <Layout>
        <div className='box'>
            <h1>Login</h1>
            <form onSubmit={login}>
            <div>
                    <input class="form-control form-control-lg" type="email" placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            </div>
            <div>
                    <input class="form-control form-control-lg" type="password" placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            </div>
            <div>
                <div>
                    <input type="checkbox" name='' id='' />
                    <a href="">Remember me?</a>
                </div>
            </div>
            <button class="btn btn-primary" type='submit'>Login</button>
            <div>
                <span>New Here? <Link to ='/Register'>Create an Account</Link></span>
            </div>
            </form>
        </div>
    </Layout>
  )
}

export default Login;