import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClassRow = ({ classItem, index, handleDeleteClass }) => {
   const { picture, activityName, price } = classItem;
   return (
      <tr>
         <th>{index + 1}</th>
         <td>
            <div className="avatar">
               <div className="mask mask-circle w-12 h-12">
                  <img src={picture} alt="Avatar Tailwind CSS Component" />
               </div>
            </div>
         </td>
         <td>{activityName}</td>
         <td>${price}</td>
         <th>

            <div className="btn-group">
               <Link
                  to="/dashboard/payment">
                  <button className="btn">PAY</button>
               </Link>
               <button onClick={() => handleDeleteClass(classItem)} className="btn btn-ghost bg-red-500 btn-md">
                  <FaTrashAlt className="text-lg text-white" /></button>
            </div>
         </th>
      </tr >
   );
};

export default ClassRow;