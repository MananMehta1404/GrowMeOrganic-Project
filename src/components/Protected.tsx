/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../types';

export default function Protected(props: { Component: any; }) {
    const [name, setName] = useState('');
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        const userDataString = localStorage.getItem('userData');
        if (!userDataString) {
            alert('Please enter your details first. It may appear twice because of the use of useNavigate hook.');
            navigate('/');
        }

        setName(userDataString ? (JSON.parse(userDataString) as UserData).name : '');
    }, [navigate]);

    const handleClick = () => {
        localStorage.removeItem('userData');
        navigate('/');
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-bold mt-10'>{`Welcome ${name} to the (Second Page)`}</h1>
            <button className='text-2xl font-bold mt-2 underline text-blue-500' onClick={handleClick}>Log Out</button>
            <Component />
        </div>
    )
}