import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{height: '440px', marginTop: '150px'}} className='text-center'>
            <div className="min-h-fit pb-80 bg-slate-100 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Oops!</h1>
                <h2 className="text-2xl font-medium text-gray-900 mb-4">Something went wrong.</h2>
                <h2>Bangladesh</h2>
                <p className="text-gray-700 mb-8">We're sorry, but it looks like the page you're looking for doesn't exist. </p>
                <Link to="/" className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">Go back to the homepage</Link>
            </div>
        </div>
    );
};

export default Error;