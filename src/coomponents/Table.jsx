import React,{useEffect} from 'react'
import axios from 'axios'

function Table() {
    const [users, setUsers] = React.useState([]);
    const [page, setPage] = React.useState(1);

    const ChnagePageNumber = (no) => {
        setPage(no);
    }
    const GetUsers = async () => {
        try {
          const response = await axios(`https://reqres.in/api/users?page=${page}`);
          const persons = response.data.data;
          setUsers(persons);
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(()=> {
        GetUsers();
      }, [])




















  return (
    <div className='' >      

           <table className=" w-96  border mt-3 p-2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            User
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                    <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-10 h-10 rounded-full" src={user.avatar} alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">{user.first_name + ' ' + user.last_name}</div>
                                <div className="font-normal text-gray-500">{user.email}</div>
                            </div>  
                        </th>
                        <td className="py-4 px-6">
                            <a href={user.id} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    ))}
                    <div className="flex flex-end justify-end ">
                        <p onClick={() => ChnagePageNumber(1)} className='font-medium text-blue-600 dark:text-blue-500 ml-2 hover:underline cursor-pointer' >1</p>
                        <p onClick={() => ChnagePageNumber(2)} className='font-medium text-blue-600 dark:text-blue-500 ml-2  hover:underline cursor-pointer' >2</p>
                    </div>
                </tbody>
            </table>
    </div>
  )
}

export default Table