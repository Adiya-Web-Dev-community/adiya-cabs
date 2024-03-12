import { BsBuildings } from "react-icons/bs";
import { TbBeach } from "react-icons/tb";
import {
  LiaMapMarkedAltSolid,
  LiaHomeSolid,
  LiaCitySolid,
} from "react-icons/lia";
import { FaRoute } from "react-icons/fa";
import {
  MdEmojiTransportation,
  MdOutlineLocalOffer,
  MdCarRental,
} from "react-icons/md";
import {
  GiCastle,
  GiModernCity,
  GiPathDistance,
  GiIndianPalace,
} from "react-icons/gi";
import { PiHandshakeDuotone } from "react-icons/pi";
import { FcSupport } from "react-icons/fc";
import { CgProfile, CgSearchFound } from "react-icons/cg";

//1 Please ensure that the 'icons' property holds type functions.
//2 Avoid adding duplicate paths anywhere in the code.
//4 Path working here as collection id as well
//3 Organize the navigation data in a structured manner."

//!importent
//This data structure is designed to work effectively up to three levels deep in the navbar,
// as the user interface may not look ideal beyond this depth. However, there are no restrictions
//on how deep you can go in the sidebar.

const navigationData = [
  { path: "/", name: "Home", icon: LiaHomeSolid, type: "both" },
  {
    path: "/outstation",
    name: "Papular Outstation Routes",
    icon: FaRoute,
    type: "both",
    items: [
      {
        path: "/oustation-mumbai",
        name: "Mumbai",
        icon: LiaMapMarkedAltSolid,
        items: [
          {
            path: "/oustation-mumbai/Mumbai-to-Goa",
            name: "Mumbai To Goa",
            icon: TbBeach,
          },
          {
            path: "/oustation-mumbai/Mumbai-to-Pune",
            name: "Mumbai To Pune",
            icon: BsBuildings,
          },
          {
            path: "/oustation-mumbai/Mumbai-to-Nashik",
            name: "Mumbai To Nashik",
            icon: GiModernCity,
          },
          {
            path: "/oustation-mumbai/Mumbai-to-Lonavala",
            name: "Mumbai To Lonavala",
            icon: BsBuildings,
          },
          {
            path: "/oustation-mumbai/Mumbai-to-Mahabaleshwar",
            name: "Mumbai To Mahabaleshwar",
            icon: BsBuildings,
          },
          {
            path: "/oustation-mumbai/Mumbai-to-Shirdi",
            name: "Mumbai To Shirdi Route",
            icon: GiModernCity,
          },
          {
            path: "/oustation-mumbai/Mumbai-to-Surat",
            name: "Mumbai To Surat Route",
            icon: BsBuildings,
          },
        ],
      },
      {
        path: "/oustation-Pune",
        name: "Pune",
        icon: LiaMapMarkedAltSolid,
        type: "both",
        items: [
          {
            path: "/outstation/Pune-to-Kolhapur",
            name: "Pune to Kolhapur",
            icon: GiCastle,
          },
          {
            path: "/outstation/Pune-to-Mumbai",
            name: "Pune to Mumbai",
            icon: GiModernCity,
          },
          {
            path: "/outstation/Pune-to-Nashik",
            name: "Pune To Nashik",
            icon: LiaCitySolid,
          },
          {
            path: "/outstation/Pune-to-Mahabaleshwar",
            name: "Pune To Mahabaleshwar",
            icon: GiCastle,
          },
          {
            path: "/outstation/Pune-to-Shirdi",
            name: "Pune To Shirdi",
            icon: LiaCitySolid,
          },
        ],
      },
      {
        path: "/oustation-Bangalore",
        name: "Bangalore",
        icon: LiaMapMarkedAltSolid,
        items: [
          {
            path: "/outstation/Bangalore-to-Chennai",
            name: "Bangalore to Kolhapur",
            icon: GiCastle,
          },
          {
            path: "/outstation/Bangalore-to-Coorg",
            name: "Bangalore to Mumbai",
            icon: GiModernCity,
          },
          {
            path: "/outstation/Bangalore-to-Kodaikanal",
            name: "Bangalore To Nashik",
            icon: LiaCitySolid,
          },
          {
            path: "/outstation/Bangalore-to-Mysore",
            name: "Bangalore To Mysore",
            icon: GiModernCity,
          },
          {
            path: "/outstation/Bangalore-to-Ooty",
            name: "bangalore To Ooty",
            icon: LiaCitySolid,
          },
          {
            path: "/outstation/Bangalore-to-Tirupati",
            name: "Bangalore To Tirupati",
            icon: LiaCitySolid,
          },
          {
            path: "/outstation/Bangalore-to-Shravanabelagola",
            name: "Bangalore To Shravanabelagola",
            icon: LiaCitySolid,
          },
        ],
      },
      {
        path: "/oustation-chennai",
        name: "Chennai",
        icon: LiaMapMarkedAltSolid,
        items: [
          {
            path: "/outstation/Chennai-to-Pondicherry",
            name: "Chennai To Pondicherry",
            icon: GiCastle,
          },
          {
            path: "/outstation/Chennai-to-Tirupati",
            name: "Chennai To Tirupati",
            icon: GiModernCity,
          },
          {
            path: "/outstation/Chennai-to-Vellore",
            name: "Chennai To Vellore",
            icon: LiaCitySolid,
          },
          {
            path: "/outstation/Chennai-to-Bangalore",
            name: "Chennai To Bangalore",
            icon: GiModernCity,
          },
        ],
      },

      {
        path: "/oustation-delhi",
        name: "Delhi",
        icon: LiaMapMarkedAltSolid,
        items: [
          {
            path: "/outstation/Delhi-to-Manali",
            name: "Delhi To Manali",
            icon: GiModernCity,
          },
          {
            path: "/outstation/Delhi-to-Haridwar",
            name: "Delhi To Haridwar",
            icon: LiaCitySolid,
          },
          {
            path: "/outstation/Delhi-to-Jaipur",
            name: "Delhi To Jaipur",
            icon: GiModernCity,
          },
          {
            path: "/outstation/Delhi-to-Ludhiana",
            name: "Delhi To Ludhiana",
            icon: LiaCitySolid,
          },
          {
            path: "/outstation/Delhi-to-Nainital",
            name: "Delhi To Nainital",
            icon: GiModernCity,
          },
          {
            path: "/outstation/Delhi-to-Rishikesh",
            name: "Delhi To Rishikesh",
            icon: LiaCitySolid,
          },
          {
            path: "/outstation/Delhi-to-Shimla",
            name: "Delhi to Shimla",
            icon: GiModernCity,
          },
          {
            path: "/outstation/Delhi-to-Bareilly",
            name: "Delhi To Bareilly",
            icon: LiaCitySolid,
          },
        ],
      },
      {
        path: "/oustation-jaipur",
        name: "Jaipur",
        icon: LiaMapMarkedAltSolid,
        items: [
          {
            path: "/outstation/Jaipur-to-Udaipur",
            name: "Jaipur to udaipur",
            icon: GiCastle,
          },
          {
            path: "/outstation/Jaipur-to-Agra",
            name: "Jaipur To Agra",
            icon: GiIndianPalace,
          },
          {
            path: "/outstation/Jaipur-to-Ajmer",
            name: "Jaipur To Ajmer ",
            icon: LiaCitySolid,
          },
        ],
      },
      {
        path: "/oustation-Ahmedabad",
        name: "Ahmedabad",
        icon: LiaMapMarkedAltSolid,
        items: [
          {
            path: "/outstation/Ahmedabad-to-Surat",
            name: "Ahmedabad To Surat",
            icon: GiCastle,
          },
          {
            path: "/outstation/Ahmedabad-to-Rajkot",
            name: "Ahmedabad To Rajkot",
            icon: GiIndianPalace,
          },
          {
            path: "/outstation/Ahmedabad-to-Vadodara",
            name: "Ahmedabad To Vadodara ",
            icon: LiaCitySolid,
          },
        ],
      },
      {
        path: "/oustation-Chandigarh",
        name: "Chandigarh",
        icon: LiaMapMarkedAltSolid,
        items: [
          {
            path: "/outstation/Chandigarh-to-Shimla",
            name: "Chandigarh To Shimla",
            icon: GiCastle,
          },
          {
            path: "/outstation/Chandigarh-to-Manali",
            name: "Chandigarh To Manali",
            icon: GiIndianPalace,
          },
          {
            path: "/outstation/Chandigarh-to-Dehradun",
            name: "Chandigarh To Dehradun",
            icon: LiaCitySolid,
          },
        ],
      },
    ],
  },
  {
    path: "/meru-biz",
    name: "Adiya cab",
    icon: MdEmojiTransportation,
    type: "both",
  },
  { path: "/rentals", name: "Rentals", icon: MdCarRental, type: "both" },
  {
    path: "/about-us",
    name: "About Adiya cab",
    icon: MdOutlineLocalOffer,
    type: "both",
    items: [
      {
        path: "/ourservices/ourjourney",
        name: "About our Journey",
        icon: GiCastle,
      },
      {
        path: "/ourservices/service",
        name: "Our Services",
        icon: LiaCitySolid,
      },
    ],
  },
  { path: "/offers", name: "Offers", icon: MdOutlineLocalOffer, type: "both" },
  {
    path: "/collobrate-with-us",
    name: "Partners With Us",
    icon: PiHandshakeDuotone,
    type: "both",
  },
  { path: "fg", name: "Support", icon: FcSupport, type: "left" },
  { path: "fd", name: "Ultimate Guide", icon: GiPathDistance, type: "left" },
  { path: "dfg", name: "Your Profile", icon: CgProfile, type: "left" },
  {
    path: "/rentals-booking",
    name: "Lost And Found",
    icon: CgSearchFound,
    type: "left",
  },
];

const sidebarNavData = navigationData.filter((el) =>
  ["left", "both"].includes(el.type)
);
const navBarData = navigationData.filter((el) =>
  ["top", "both"].includes(el.type)
);

export { sidebarNavData, navBarData };
