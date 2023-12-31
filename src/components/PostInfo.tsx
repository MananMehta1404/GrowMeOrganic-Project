import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'userId', headerName: 'User ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 500 },
  { field: 'body', headerName: 'Body', width: 500 },
];

const PostInfo = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    setAllPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div style={{ height: 475 }} className='flex flex-col justify-center w-full m-5'>
      <h1 className='text-black text-3xl mb-5 font-bold'>All Posts (Component 1)</h1>
      <DataGrid rows={allPosts} columns={columns} />
    </div>
  )
}

export default PostInfo
