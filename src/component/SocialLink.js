import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
// import ReactWhatsapp from "react-whatsapp";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedinIn <FaLinkedinIn size={30} />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/arunkumar24c?tab=repositories",
    },
    {
      id: 3,
      child: (
        <>
          G-Mail <HiOutlineMailOpen size={30} />
        </>
      ),
      href: "mailto:arun1024.c@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsPersonLinesFill size={30} />
        </>
      ),
      url: "file:///C:/Users/arunkumar/Downloads/Arunkumar%20Resume.pdf",
      target: "_blank",
      style: "rounded-tr-md",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Whatsapp
          <a href="https://wa.me/+919894980367" target="_blank">
            <FaWhatsapp size={30} />
          </a>
        </>
      ),
      href: "https://web.whatsapp.com/",
      style: "rounded-tr-md",
    },
  ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download, target }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            {/* default custom style  */}
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
