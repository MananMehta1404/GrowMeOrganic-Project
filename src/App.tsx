import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Content, Protected } from './components';

export default function App() {
  return (
    <div className='flex flex-col w-full justify-center items-center bg-gradient-to-br from-red-300 via-red-100 to-pink-200'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main-content' element={<Protected Component={Content} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}