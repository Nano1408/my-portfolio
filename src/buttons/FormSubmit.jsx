import { useState } from "react";


const FormSubmit = () => {
  const [send, setSend] = useState("Enviar");

  const handleClick = () => {
    setSend('Enviando...')

    setTimeout(() => {
      setSend('Enviar');
      //alert('¡Enviado con éxito!'); // manejar el resultado real del envío
    }, 2000);
  }

  return (
    <div className="flex justify-center cursor-default mb-12">
      <button
        onClick={handleClick}
        className="flex items-center bg-[#ffa643] gap-1 px-4 py-2 cursor-pointer text-xl text-gray-800 font-semibold tracking-widest rounded-md hover:bg-[#f38102] duration-300 hover:gap-2 hover:translate-x-3">
        {send}
        <svg
          className="w-5 h-5"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default FormSubmit;
