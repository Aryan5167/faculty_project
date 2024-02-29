import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Home</h2>
                <div className="mb-3">
                    <Link to="/faculty-login" className="btn btn-success w-100 rounded-0">Faculty Login</Link>
                </div>
                <div className="mb-3">
                    <Link to="/student-login" className="btn btn-primary w-100 rounded-0">Student Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
