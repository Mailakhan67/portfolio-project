import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-between mt-60'>
      <div className='mx-20'>
        <h1 className='font-bold font-serif text-8xl p-6'>I'm</h1>
        <h1 className='font-bold font-serif text-8xl  text-red-500 p-3'>Maila</h1>
        <h1 className='font-bold font-serif text-8xl text-red-500 p-3'>Khan</h1>
      </div>
      <Image src={'/img1.jpeg'} alt='' width={700} height={600} className=''/>
    </div>
  )
}

export default Header
