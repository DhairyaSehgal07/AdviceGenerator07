import {React ,useEffect,useState} from 'react'
import axios from 'axios'
const Home = () => {
    const [data, setData] = useState({ slip: { id: '', advice: '' } }); 

    useEffect(() => {
        axios
            .get('https://api.adviceslip.com/advice')
            .then((res) => {
                setData(res.data); 
            });
               
    }, []);

    const handleClick = () => {
        axios
            .get('https://api.adviceslip.com/advice')
            .then((res) => {
                setData(res.data); 
            });
    }
    
    
  return (
    <>
      
            <div className='bg-Dark_Blue'>
    <div className="flex justify-center items-center min-h-screen bg-Very_Dark_Blue">
      <div id='Advice' className=" text-Light_Cyan font-Manrope bg-Dark_Grayish_Blue p-8 text-white rounded-2xl w-[500px] text-center">
                      <h4 className='text-Neon_Green p-4 text-xs tracking-[0.2rem]'>ADVICE #{data.slip.id}</h4>
                      {/*https://api.adviceslip.com */}
                      <p className='text-[28px] font-extrabold '>"{data.slip.advice}"</p>
                       
            <svg className='mt-8' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>        
            
            <div className='h-1 ml-[12.2rem] '>
              <button id='glowingButton' className='z-10 flex justify-center align-center w-14 h-14 rounded-full mt-12 bg-Neon_Green   transition duration-300 ' >
                      <svg onClick={handleClick} className='bg-Neon_Green mt-[1rem] ' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
                  </button> 
            </div>
          </div>       
        </div> 
        </div>
      </>
  )
}

export default Home