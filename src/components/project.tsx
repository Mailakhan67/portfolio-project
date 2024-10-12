import Image from "next/image"


const Project = () => {
  return (
    <div className="h-screen " >
       <h1 className="text-center font-bold mt-20 font-sans text-8xl" id="project">Projects</h1>
  <div className="grid grid-cols-2 mt-20 ml-20">

          {/* card 2 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/projectimage2.png"}
            alt=""
            width={700}
            height={500}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Periodic Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 2 end */}

          {/* card 3 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/projectimage3.png"}
            alt=""
            width={700}
            height={500}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Table
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reprehenderit
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 3 end */}

          {/* card 4 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/projectimage4.png"}
            alt=""
            width={700}
            height={500}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Cards
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reprehenderit explicabo 
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 4 end */}

          {/* card 5 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/projectimage5.png"}
            alt=""
            width={700}
            height={500}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Form
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 5 end */}

          {/* card 6 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/projectimage6.png"}
            alt=""
            width={500}
            height={250}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Cards
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reprehenderit explicabo opti
            doloremque quas.
          </p>
        </div>
        {/* card 6 end */}

          {/* card 7 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/projectimage7.png"}
            alt=""
            width={700}
            height={500}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Cards
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reprehenderit explicabo optio
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 7 end */}

          {/* card 8 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/projectimage8.jpg"}
            alt=""
            width={700}
            height={500}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Cards
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reprehenderit explicabo optio.
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 8 end */}
        </div>
    </div>
  )
}

export default Project

