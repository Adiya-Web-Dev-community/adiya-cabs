import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  const navigate = useNavigate();
  const [openAdiya, setOpenAdiya] = useState(false);
  const [openLearn, setOpenLearn] = useState(false);

  return (
    <>
      <footer
        id="footer"
        className="bg-slate-900 text-white flex flex-col space-y-10 p-5 sm:p-8 md:p-16 lg:p-20 border-t border-t-slate-700"
      >
        <section className="flex justify-between">
          <div className="space-y-px">
            <h1 className="font-cookie text-3xl text-slate-200">Meru</h1>
            <address className="text-sm text-slate-500">
              Mahindra Towers, P. K. Kurne Chowk, Worli, Mumbai - 400018
            </address>
          </div>
          <a
            href="#"
            className="p-1 rounded-md w-fit h-fit bg-slate-700 hover:bg-red-500 duration-300 hidden sm:block cursor-pointer"
          >
            <MdKeyboardArrowDown className="rotate-180 text-3xl" />
          </a>
        </section>
        <section className="space-y-1.5 md:space-y-0 md:space-x-32 block md:flex items-start">
          <div>
            <p
              onClick={() => setOpenAdiya(!openAdiya)}
              className="flex items-center justify-between"
            >
              <span>Company</span>
              <span
                className={`border border-slate-500 p-px rounded-full inline md:hidden`}
              >
                <MdKeyboardArrowDown
                  className={`duration-300 ${
                    openAdiya ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
            <ul
              className={`text-slate-500 border-l md:border-l-0 border-l-slate-500 pl-3 md:pl-0 overflow-hidden duration-300 h-0 md:h-[calc(99.2px)] mt-1.5 ${
                openAdiya ? "h-[calc(99.2px)]" : "h-0"
              }`}
            >
              <li className="duration-300 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-red-500 w-fit">
                Home
              </li>
              <li className="duration-300 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-red-500 w-fit">
                About us
              </li>
              <li className="duration-300 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-red-500 w-fit">
                All names
              </li>
              <li
                onClick={() => navigate("/user-form")}
                className="duration-300 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-red-500 w-fit"
              >
                Login
              </li>
            </ul>
          </div>
          <div>
            <p
              onClick={() => setOpenLearn(!openLearn)}
              className="flex items-center justify-between"
            >
              <span>Learn</span>
              <span
                className={`border border-slate-500 p-px rounded-full inline md:hidden`}
              >
                <MdKeyboardArrowDown
                  className={`duration-300 ${
                    openLearn ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </p>
            <ul
              className={`text-slate-500 border-l md:border-l-0 border-l-slate-500 pl-3 md:pl-0 overflow-hidden duration-300 h-0 md:h-[calc(74.4px)] mt-1.5 ${
                openLearn ? "h-[calc(74.4px)]" : "h-0"
              }`}
            >
              <li className="duration-300 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-red-500 w-fit">
                Blog
              </li>
              <li className="duration-300 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-red-500 w-fit">
                FAQs
              </li>
              <li className="duration-300 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-red-500 w-fit">
                Glossary
              </li>
            </ul>
          </div>
          <div>
            <p>Connect with us</p>
            <p className="text-slate-500 border-b border-b-transparent hover:border-b-red-500 w-fit duration-300 cursor-pointer hover:text-white text-sm mt-1">
              corporate@meru.in
            </p>
            <p className="text-slate-500 border-b border-b-transparent hover:border-b-red-500 w-fit duration-300 cursor-pointer hover:text-white text-sm mt-1">
              Phone: +91 89704 89704
            </p>
            <div className="mt-3 flex items-center space-x-3">
              <p className="bg-slate-700 hover:bg-red-500 duration-300 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoFacebookCircle className="text-lg" />
              </p>
              <p className="bg-slate-700 hover:bg-red-500 duration-300 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoTwitter className="text-lg" />
              </p>
              <p className="bg-slate-700 hover:bg-red-500 duration-300 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoInstagram className="text-lg" />
              </p>
              <p className="bg-slate-700 hover:bg-red-500 duration-300 cursor-pointer rounded-full p-1.5 w-fit">
                <BiLogoLinkedin className="text-lg" />
              </p>
            </div>
          </div>
        </section>
        <section className="text-slate-500 space-y-1 md:space-y-0 text-sm md:flex items-center md:divide-x">
          <p className="md:pr-3">© 2023 Meru. All rights reserved</p>
          <p className="border-b border-b-transparent hover:border-b-red-500 duration-300 w-fit cursor-pointer hover:text-white md:px-3">
            Terms of Use
          </p>
          <p className="border-b border-b-transparent hover:border-b-red-500 duration-300 w-fit cursor-pointer hover:text-white md:px-3">
            Key Risks
          </p>
          <p className="border-b border-b-transparent hover:border-b-red-500 duration-300 w-fit cursor-pointer hover:text-white md:px-3">
            Privacy Policy
          </p>
          <p className="border-b border-b-transparent hover:border-b-red-500 duration-300 w-fit cursor-pointer hover:text-white md:pl-3">
            Cookies Notice
          </p>
        </section>
        <div className="h-px bg-slate-700"></div>
        <p className="text-slate-500 text-xs">
          The Meru platform consists of the website, web platform and mobile
          app. By using Meru, you agree to be bound by the Terms & Conditions,
          Cookie Notice and Privacy Policy.
        </p>
      </footer>
    </>
  );
};

export default Footer;
