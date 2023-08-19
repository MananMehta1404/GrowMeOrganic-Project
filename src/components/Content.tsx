import { useEffect } from "react";
import { PostInfo, DeptInfo } from "."
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('login');
    if(login === null) {
      alert('Please enter your details first');
      navigate('/');
    }
  })

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <PostInfo />
      <DeptInfo />
    </div>
  )
}

export default Content