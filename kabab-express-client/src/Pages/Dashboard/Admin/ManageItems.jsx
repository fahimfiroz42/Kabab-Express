import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Heading from "../../../Components/Heading";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [menu] = useMenu();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // In a real app we'd call the delete API
                // fetch(`http://localhost:5000/menus/${item._id}`, { method: 'DELETE' })
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="w-full">
            <Heading subheading="Manage all items" heading="Manage Items"></Heading>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Food Image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.category}</td>
                                <td className="text-right">${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost bg-orange-500  text-white"><FaEdit></FaEdit></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
