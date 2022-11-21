import React , {useState} from 'react'
import axios from 'axios'



function From() {

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [response, setResponse] = useState([]);

  const addUser = async (e) => {
    e.preventDefault();
    const post = { name: name,job:job }
    try {
      const res = await axios.post('https://reqres.in/api/users', post)
      console.log(res.data);
      setJob('');
      setName('');
      setResponse(res.data);
    } catch (e) {
      alert(e)
    }
  }






  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create A New User
                    </h1>
                    <form class="space-y-4 md:space-y-6" onSubmit={addUser} method="POST">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)}  type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" />
                        </div>
                        <div>
                            <label for="job" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job</label>
                            <input value={job} onChange={(e) => setJob(e.target.value)} type="job" name="job" id="job" placeholder='Your Job' class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <button type="submit" class="w-full text-gray-200 bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create User</button>
                    </form>
                </div>
        
          {response && 
          <div className="flex justify-center">
            <div >
            <label className='ml-2' >Name</label>
             <p  className='font-medium ml-2 text-blue-600 dark:text-blue-500 ' >{response.name}</p>
            </div>
            <div>
            <label >Job</label>
             <p  className='font-medium text-blue-600 dark:text-blue-500 ml-2  ' >{response.job}</p> 
            </div>
          </div>
          }
            </div>
        
        </div>
      </section>
    </div>
  )
}

export default From