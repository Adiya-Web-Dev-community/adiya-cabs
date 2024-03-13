import React from "react";
import { IoClose } from "react-icons/io5"


const UserProfile = ({openProfile})=>{
    return(
        <div>
        <div className="bg-white h-[35rem] w-[20rem] z-20  flex flex-col justify-center items-center px-10">
            <div class="flex justify-between w-full mb-4 mx-3">
            <IoClose  onClick={openProfile} size={30}/>
              <p class=" mx-3 text-1xl">Profile</p>
              </div>
              <div>
              <img src="https://plus.unsplash.com/premium_photo-1683865775275-a576c7588bc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" class="rounded-full h-20 w-20" />
              <div className="my-4">
              <label class="text-1xl my-3"> Profile Name</label>
             
              <input type="text" class="border border-gray-300 rounded-md px-4 py-2 flex flex-col"></input>
              </div>
             <div class="my-4">
              <label class="text-1xl my-3">E-mail</label>
             
              <input type="email" class="border border-gray-300 rounded-md px-4 py-2 flex flex-col"></input>
              </div>
              <div class="my-4">
              <label class="text-1xl py-6">password</label>
            
              <input type="password" class="border border-gray-300 rounded-md px-4 py-2 flex flex-col"></input>
              </div>
              <div class="my-4">
              <label class="text-1xl my-3">Date of birth</label>
      
              <input type="date" class="border border-gray-300 rounded-md px-9 py-2 flex flex-col"></input>
              </div>
              <label class="text-1xl my-3">Country/Region</label>
              
              <input type="search" class="border border-gray-300 rounded-md px-4 py-2 flex flex-col"></input>
              </div>
        </div>
        </div>
    )
}
export default UserProfile;