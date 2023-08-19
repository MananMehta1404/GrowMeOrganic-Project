/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Protected(props: { Component: any; }) {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        const login = localStorage.getItem('login');
        if (!login) {
            alert('Please enter your details first');
            navigate('/');
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}