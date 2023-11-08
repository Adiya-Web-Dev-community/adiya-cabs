import { BsPersonFill, BsArrowBarRight } from "react-icons/bs";
import { sidebarNavData } from "../../navigation/nav"; 
import { Link } from "react-router-dom";
import SideBarNav from "./SideBarNav";
import { useSelector } from "react-redux";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {

const {userName,userEmail} = useSelector((el)=>el.app)

  return (
    <main
      className={`ml-auto bg-white w-[300px] h-full   duration-200 ${
        openSidebar ? "mr-0" : "-mr-72"
      } grid grid-cols-1  grid-rows-[5rem_1fr]`}
    >
      <section className="flex items-center justify-between px-5  shadow">
        <div className="flex items-center space-x-2.5 p-2">
          <div className="border-2 border-slate-500 p-1 rounded-full w-fit">
            <BsPersonFill className="text-slate-500 text-4xl" />
          </div>
          <div>
            <h3>
               <span>{userName?userName:'Guest'}</span><br/>
               <Link to='/sign-in' className="text-red-500 cursor-pointer hover:text-red-700">Sign In</Link>
            </h3>
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
