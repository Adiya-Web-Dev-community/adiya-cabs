import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";

const Navbar = ({ navArr }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [subMenu, setSubMenu] = useState([]);
  const [navBG, setNavBG] = useState(false);
  const [profile, setProfile] = useState(false);
  

  window.addEventListener("scroll", () => {
    window.scrollY >= 35 ? setNavBG(true) : setNavBG(false);
  });

  const { bookingStatus } = useParams();

  // console.log(bookingStatus, "in-process");

  const navItems = (el, type) => {
    return type === "child" ? (
      <Link
        to={el.path}
        className="px-3 py-3  hover:bg-slate-100 hover:text-red-500 flex items-center justify-between rounded"
      >
        <span className="flex">
          <el.icon className="mr-1"  />
          {el.name}
        </span>
      </Link>
    ) : (
      <Link
        to={el.path}
        className="relative group px-2 py-3 md:py-3 md:text-center border-b-transparent hover:border-b-red-500 text-base cursor-pointer duration-200"
      >
        <span className="flex items-center group-hover:text-red-500 duration-200 ">
          <el.icon  className="md:hidden lg:hidden"/>
          {el.name}
        </span>
      </Link>
    );
  };

  const navGroup = (el, type) => {
    return (
      <div>
        {type === "parent" ? (
          <div className="relative group px-3 py-3  border-b-2 border-b-transparent  hover:border-b-red-500  text-base cursor-pointer duration-200">
            <span className="flex items-center group-hover:text-red-500 duration-200">
              <el.icon />
              <span>{el.name}</span>
              <MdOutlineKeyboardArrowDown className="group-hover:-rotate-180 duration-200 text-red-500" />
            </span>

            {
              <ul className="absolute top-[40px] group-hover:top-[39.6px] duration-100 invisible group-hover:visible opacity-0 group-hover:opacity-100 left-0 rounded text-sm bg-white  shadow min-w-[100%] w-max">
                {el.items.map((el) =>
                  el.items ? navGroup(el, "child") : navItems(el, "child")
                )}
              </ul>
            }
          </div>
        ) : (
          <li
            onMouseEnter={() => setSubMenu((prev) => [...prev, el.name])}
            onMouseLeave={() => setSubMenu([])}
            className={`px-5 py-3 flex items-center relative rounded justify-between ${
              subMenu.includes(el.name) ? "bg-slate-100 text-red-500" : ""
            }`}
          >
            <span className="flex">
              <el.icon className="mr-1" />
              {el.name}
            </span>
            <MdOutlineKeyboardArrowDown
              className={` ${
                subMenu.includes(el.name) ? "rotate-90" : "-rotate-90"
              } text-base text-red-500`}
            />

            {
              <ul
                onMouseEnter={() => setSubMenu((prev) => [...prev, el.name])}
                onMouseLeave={() => setSubMenu([])}
                className={`absolute left-[100%] top-[0px] rounded text-sm bg-white text-black overflow-hidden shadow w-max  ${
                  subMenu.includes(el.name)
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                {el.items.map((el) =>
                  el.items ? navGroup(el, "child") : navItems(el, "child")
                )}
              </ul>
            }
          </li>
        )}
      </div>
    );
  };

  console.log(profile,"");
  return (
    <nav
      className={`flex justify-end items-center font-montserrat z-20  px-5 md:px-38 sticky sm:fixed top-0  h-fit w-full select-none text-black ${
        navBG || bookingStatus === "in-process"
          ? "bg-white/95 shadow"
          : "bg-transparent"
      }`}
    >
      <div className="hidden lg:flex text-center">
        {navArr.map((el) =>
          el.items ? navGroup(el, "parent") : navItems(el, "parent")
        )}
      </div>

      <section className="group relative block md:flex lg:hidden py-3">
        <AiOutlineMenuFold
          onClick={() => setOpenSidebar(true)}
          className="text-2xl ml-5 cursor-pointer text-red-500"
        />
      </section>

      <section
        className={`fixed top-0  left-0 w-full h-full bg-black/50    ${
          openSidebar ? "visible " : "invisible"
        }`}
      >
        {/* {!profile && <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}  openProfile= { ()=>setProfile(prev=> !prev)}  />}
        {profile && <UserProfile openProfile= { ()=>setProfile(false)} />} */}

        {!profile && <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}  openProfile= { ()=>setProfile(prev=> !prev)}  />}
        {profile && <UserProfile openProfile= { ()=>setProfile(false)} />}
      </section>
    </nav>
  );
};

export default Navbar;
 