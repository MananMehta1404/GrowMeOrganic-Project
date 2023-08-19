import { PostInfo, DeptInfo } from "."

const Content = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-br from-red-300 via-red-100 to-pink-200'>
      <PostInfo />
      <DeptInfo />
    </div>
  )
}

export default Content