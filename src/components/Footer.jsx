import {  FaGithub, 
 } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='md:w-4/6 m-auto  py-7 flex-wrap md:mt-32 mt-12 text-normal text-gray-500 flex gap-1 justify-center px-4'>
              All Work &copy; 2024. Danilo Ferro Alves. 
             <a href="" className='flex underline text-gray-200 gap-2 items-center'> Source <FaGithub className='text-white'/></a>
            
        </div>
      
    </footer>
  )
}

export default Footer
