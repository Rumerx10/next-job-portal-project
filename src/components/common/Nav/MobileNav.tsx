import Link from "next/link";
import { links } from "@/docs/docs";
import React, { useState } from "react";
import LogoSvg from "@/svg/LogoSvg";
import { Turn as Hamburger } from "hamburger-react";

const MobileNav = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="z-50 fixed lg:hidden left-0 top-0 right-0 flex items-center justify-between px-4 bg-violet h-20">
        <div className="cursor-pointer">
          <Link href="/">
            <LogoSvg />
          </Link>
        </div>
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </div>
      <div
        className={`fixed top-20 inset-0 z-40 duration-150 ${
          isOpen ? "backdrop-blur-md" : "bg-transparent pointer-events-none"
        }`}
        onClick={() => setOpen(!isOpen)}
      ></div>
      <div
        className={`fixed z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-500 bg-primaryBlue top-20 right-0 bottom-0 p-5  w-[70%]`}
      >
        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <div
              key={index}
              className={`py-2 ${
                link.label == activeLink &&
                "backdrop-blur-xl bg-white/30 rounded-full"
              } duration-150 hover:backdrop-blur-xl hover:bg-white/30 hover:rounded-full `}
              onClick={() => {setActiveLink(link.label); setOpen(false)}}
            >
              <Link
                href={link.href}
                className={`text-white font-semibold px-3 w-full`}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="border px-6 py-3 bg-transparent hover:bg-white text-white hover:text-textBlue rounded-full duration-300 cursor-pointer">
            Login / Register
          </div>
          <div className="border px-6 py-3 rounded-full text-textBlue hover:text-white bg-white hover:bg-transparent duration-300 cursor-pointer">
            Job Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;


// import Link from "next/link";
// import { links } from "@/docs/docs";
// import React, { useState } from "react";
// import LogoSvg from "@/svg/LogoSvg";
// import { Turn as Hamburger } from "hamburger-react";

// const MobileNav = () => {
//   const [activeLink, setActiveLink] = useState("");
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <div className="relative">
//       <div className="z-40 fixed lg:hidden left-0 top-0 right-0 flex items-center justify-between px-5 bg-bgBlue h-20">
//         <div className="cursor-pointer">
//           <Link href="/">
//             <LogoSvg />
//           </Link>
//         </div>
//         <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
//       </div>
//       <div
//         className={`fixed top-20 inset-0 z-50 duration-150 ${
//           isOpen ? "backdrop-blur-md" : "bg-transparent pointer-events-none"
//         }`}
//         onClick={() => setOpen(!isOpen)}
//       ></div>
//       <div
//         className={`fixed z-50 ${
//           isOpen ? " translate-x-0" : "translate-x-full"
//         } duration-500 bg-bgBlue top-20 right-0 bottom-0 p-5  w-[70%]`}
//       >
//         <div className="flex flex-col gap-3">
//           {links.map((link, index) => (
//             <div
//               key={index}
//               className={`py-2 cursor-pointer text-white hover:text-textBlue hover:underline ${
//                 link.label == activeLink &&
//                 "backdrop-blur-xl bg-white/30 rounded-full "
//               } duration-150`}
//               onClick={() => {
//                 setActiveLink(link.label);
//                 setOpen(false);
//               }}
//             >
//               <Link href={link.href} className={`font-semibold px-3 w-full`}>
//                 {link.label}
//               </Link>
//             </div>
//           ))}
//           {/* <div className="border px-6 py-3 bg-transparent hover:bg-white text-white hover:text-textBlue rounded-full duration-300 cursor-pointer">
//             Login / Register
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNav;
