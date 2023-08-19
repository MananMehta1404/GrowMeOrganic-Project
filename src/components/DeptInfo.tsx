import { DeptCard1, DeptCard2 } from ".";

const DeptInfo = () => {
  return (
    <div className='flex flex-col justify-center w-full'>
      <h1 className='text-black text-3xl mb-5 font-bold'>All Departments (Component 2)</h1>
      <DeptCard1 />
      <DeptCard2 />
    </div>
  )
}

export default DeptInfo
