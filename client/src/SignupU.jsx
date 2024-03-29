
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignupU = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/register', { name, email, password }).then(result => console.log(result)).catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100 " style={{width:"100%"}}>
            <div className="bg-white p-3 rounded w-50">
                <h2>Register</h2>
                <form onSubmit={handleSubmit} action="">
                    <div className="mb-3">
                        <label htmlFor="email"><strong> Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="name" className="form-control rounded-8" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong> Email</strong>
                        </label>
                        <input type="email" placeholder="Enter email" autoComplete="off" name="email" className="form-control rounded-8" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong> Password</strong>
                        </label>
                        <input type="password" placeholder="Enter password" autoComplete="off" name="password" className="form-control rounded-8" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                </form>
                <p>Already registered?</p>
                <Link to="/loginU" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>

            </div>
        </div>
    )
}
export default SignupU


