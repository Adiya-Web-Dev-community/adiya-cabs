import { BsPersonFill, BsArrowBarRight } from "react-icons/bs";
import { sidebarNavData } from "../../navigation/nav"; 
import { Link } from "react-router-dom";
import SideBarNav from "./SideBarNav";
import { useSelector } from "react-redux";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {

const {username,userEmail}= useSelector((el)=>el.app)


  return (
    <main
      className={`ml-auto bg-white w-[300px] h-full   duration-200 ${
        openSidebar ? "mr-0" : "-mr-72"
      } grid grid-cols-1  grid-rows-[7rem_1fr]`}
    >
      <section className="flex items-center justify-between px-2  shadow w-full text-center">
        <div className="flex">
          <div className="border-2 border-slate-500 p-1 rounded-full h-12 w-12 m-2">
            <BsPersonFill className="text-slate-500 text-4xl" />
          </div>
          <div className="w-[75%]   whitespace-normal break-all text-md text-start" >
               <span>{username?username:'Guest'}</span><br/>
               {userEmail?<span className="text-red-400">{userEmail}</span>:<Link to='/sign-in' className="text-red-500 cursor-pointer hover:text-red-700">
                Sign In
                </Link>}
          </div>
        </div>
        <div>
        </div>
    

        <BsArrowBarRight
          onClick={() => setOpenSidebar(false)}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </section>
      <section className='overflow-y-scroll'>
        {
          <SideBarNav navArr ={sidebarNavData}/>
        }
      </section>

    </main>
  );
};

export default Sidebar;
