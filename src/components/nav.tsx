
import { navItem } from "@/constant";
import Image from "next/image";
import Link from "next/link";
    

const Nav = () => {
  return (
    <div className="shadow-lg shadow-green-100 rounded flex">
      <div className="flex justify-between p-[13px] h-[100px]  fixed top-0 left-0 w-full  bg-opacity-80 z-50 bg-gradient-to-tr via-yellow-100 from-blue-200 to-slate-300 position ">
      <h1 className="font-bold text-5xl mt-4  text-center ">Maila Khan</h1>
        <div className="flex ">
          <ul className="flex justify-center items-center  gap-10 font-mono font-bold pr-[50px]">
            {navItem.map((items) => (
              <Link href={items.link} className="scroll-smooth">
                {" "}
                <li className="hover:w-[109px] hover:h-[80px] hover:text-center hover:justify-center hover:items-center hover:grid hover:p-3 text-2xl hover:pt-2 hover:rounded-md hover:bg-slate-200 scroll-smooth  hover:shadow-lg hover:shadow-slate-300">
                  {items.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
