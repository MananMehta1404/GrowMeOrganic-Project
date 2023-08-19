import { DeptCard1, DeptCard2 } from ".";

const DeptInfo = () => {
  return (
    <div className='flex flex-col justify-center w-full ml-24'>
      <h1 className='text-black text-3xl m-5 font-bold'>All Departments</h1>
      <DeptCard1 />
      <DeptCard2 />
    </div>
  )
}

export default DeptInfo
