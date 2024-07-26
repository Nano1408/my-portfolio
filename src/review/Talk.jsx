import '@styles/review.css'
import { PiWhatsappLogoBold } from "react-icons/pi";

const Talk = () => {
  const phoneNumber = "573245735992";
  const message = "Hola Fernando, como estas? soy...";

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <section className='flex pt-12 flex-col items-center'>
        <div className='border-inherit border-solid border-[1px] w-[316px] h-[170px] rounded-xl'>
        <div className='flex items-center pl-4 border-b-[1px] h-[35px] bg-[#023047] rounded-t-xl'>
            <div className='rounded-full w-2 h-2 bg-[#BE1010] mr-1'></div>
            <div className='rounded-full w-2 h-2 bg-[#F5C105] mr-1'></div>
            <div className='rounded-full w-2 h-2 bg-[#59A50C] mr-1'></div>
        </div>
        <div className='talk text-center mt-4 flex flex-col items-center'>
            <h3 className='text-white text-2xl'>Hablemos!</h3>
            <a href={whatsappURL} target='blank_'>
              <button className='text-[#023047] px-8 py-1 mt-6 text-2xl flex w-fit items-center'>
                <PiWhatsappLogoBold className='mr-2'/>
                Contactar
              </button>
            </a>
            
        </div>
        </div>

        <picture className='pt-[30px]'>
            <img src="/barra.png" alt="barra_ejecutiva_png" />
        </picture>
    </section>
    
  )
}

export default Talk
