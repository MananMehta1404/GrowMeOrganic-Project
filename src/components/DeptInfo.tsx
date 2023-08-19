import { Departments } from "../constants";
import DeptCard from "./DeptCard";

const DeptInfo = () => {
  return (
    <div>
      {Departments.map((dept) => (
        <DeptCard dept={dept} />
      ))
      }
    </div>
  )
}

export default DeptInfo
