import { FaTrashAlt } from "react-icons/fa";

const ClassRow = ({ item, index, handleDeleteClass }) => {
   const { image, name, price } = item;
   return (
      <tr>
         <th>{index + 1}</th>
         <td>
            <div className="avatar">
               <div className="mask mask-circle w-12 h-12">
                  <img src={image} alt="Avatar Tailwind CSS Component" />
               </div>
            </div>
         </td>
         <td>{name}</td>
         <td>${price}</td>
         <th>
            <button onClick={() => handleDeleteClass(item)} className="btn btn-ghost bg-red-500 btn-md">
               <FaTrashAlt className="text-lg text-white" />
            </button>
         </th>
      </tr>
   );
};

export default ClassRow;