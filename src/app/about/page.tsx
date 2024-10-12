import Image from "next/image"


const Project = () => {
  return (
    <div className="h-screen mt-60" >
       <h1 className="text-center font-bold mt-14 font-sans text-6xl" id="project">About</h1>
  <div className="grid grid-cols-2 mt-10 ml-20">

          {/* card 1 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/cssimage.png"}
            alt=""
            width={500}
            height={150}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Css
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 1 end */}

          {/* card 2 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/htmlimage.jpeg"}
            alt=""
            width={500}
            height={300}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Html
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reprehenderit
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 2 end */}

          {/* card 3 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/javascript.jpg"}
            alt=""
            width={500}
            height={200}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Javascript
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 3 end */}

          {/* card 4 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/nextjsimage.png"}
            alt=""
            width={500}
            height={300}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Next js
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 4 end */}
                  {/* card 5 start */}
      <div className="bg-slate-100  hover:animate-pulse mt-10 h-[550px] w-[500px] hover:bg-slate-300  transition-all duration-300 text-center rounded-md shadow-2xl shadow-black">
          <Image
            src={"/tailwindcssimage.jpeg"}
            alt=""
            width={500}
            height={350}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Tailwind Css
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
            src={"/tsimage.jpeg"}
            alt=""
            width={600}
            height={150}
            className=" shadow-lg shadow-black border  border-black mx-auto"
          />
          <h1 className="text-3xl font-bold font-serif mt-6 p-1 ">
            Typescript
          </h1>
          <p className="leading-normal text-2xl font-sans mt-6 text-[#000000] text-left p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            doloremque quas sitatibus quae asperiores.
          </p>
        </div>
        {/* card 6 end */}
        </div>
    </div>
  )
}

export default Project
