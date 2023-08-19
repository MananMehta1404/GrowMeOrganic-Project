import { useEffect } from "react";
import { PostInfo, DeptInfo } from "."
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('login');
    if(!login) {
      alert('Please enter your details first');
      navigate('/');
    }
  })

  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-br from-red-300 via-red-100 to-pink-200'>
      <PostInfo />
      <DeptInfo />
    </div>
  )
}

export default Content