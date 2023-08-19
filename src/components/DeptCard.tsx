import { DepartmentProps } from "../types"

interface DeptCardProps {
    dept: DepartmentProps
}

const DeptCard = ({ dept }: DeptCardProps) => {
  return (
    <div>
      {dept.dept_name}
    </div>
  )
}

export default DeptCard
