import { AiFillProfile } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";

export const navlist = [
  {
    tab: "profile",
    link: "/profile",
    icon: <AiFillProfile />,
  },
  {
    tab: "customers",
    link: "/customer",
    icon: <FaBusinessTime />,
  },
  {
    tab: "logout",
    link: "/logout",
    icon: <ImSwitch />,
  },
];
