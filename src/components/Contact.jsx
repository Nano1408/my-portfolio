import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { fetchCodeLatinoAmerica } from '@apis/CodeCountry';
import '@styles/contact.css';
import FormSubmit from '../buttons/FormSubmit';
import Swal from 'sweetalert2'

const Contact = () => {
    const [countries, setCountries] = useState([]);
    const [send, setSend] = useState("Enviar");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const getCountries = async () => {
            const latinAmericanCountries = await fetchCodeLatinoAmerica();
            setCountries(latinAmericanCountries);
            // console.log(latinAmericanCountries)
        };

        getCountries();
    }, []);

    // usando el useRef de EmailJs
    const form = useRef();
    
    // instancia que llama al template con mi publicKey
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_z1077oo', 'template_tv8hz9t', form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(
            () => {
                setTimeout(() => {
                    setSend('Enviar');
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Mensaje enviado, gracias!"
                    }); // manejar el resultado real del envío
                }, 2000);
                console.log('SUCCESS!');
            },
            (error) => {
                setTimeout(() => {
                    setSend('Enviar');
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Error al enviar :(, intenta de nuevo!"
                    }); // manejar el resultado real del error
                }, 1000);
                console.log('FAILED...', error.text);
            },
            );
        };

        const handleFocus = () => {
            setIsOpen(true);
        };
    
        const handleBlur = () => {
            setIsOpen(false);
        };

    // Ordenar el arreglo de países alfabéticamente por el nombre común
    const sortedCountries = countries.sort((a, b) => {
        if (a.name.common < b.name.common) {
            return -1;
        }
        if (a.name.common > b.name.common) {
            return 1;
        }
        return 0;
    });

  return (
    <section>
        <h2 className='text-[40px] pt-20'>Ponte en contacto conmigo</h2>

        <form ref={form} onSubmit={sendEmail} className='mt-8 w-[670px]'>

            <div className='first_last_name flex w-full'>
                <div className='wave-group wave-group1 w-full mr-8'>
                    <input
                        className='input'
                        type="text" 
                        name="user_name"
                        required
                    />
                    <span className='bar'></span>
                    <label className='label'>
                        <span className='label-char'>N</span>
                        <span className='label-char'>o</span>
                        <span className='label-char'>m</span>
                        <span className='label-char'>b</span>
                        <span className='label-char'>r</span>
                        <span className='label-char'>e</span>
                        <span className='label-char'>*</span>
                    </label>
                    
                </div>

                <div className='wave-group wave-group1 w-full'>
                    <input
                        className='input'
                        type="text" 
                        name="user_last_name"
                        required
                        />
                    <span className='bar'></span>
                    <label className='label'>
                        <span className='label-char'>A</span>
                        <span className='label-char'>p</span>
                        <span className='label-char'>e</span>
                        <span className='label-char'>l</span>
                        <span className='label-char'>l</span>
                        <span className='label-char'>i</span>
                        <span className='label-char'>d</span>
                        <span className='label-char'>o</span>
                        <span className='label-char'>*</span>
                    </label>
                    
                </div>
            </div>

            <div className='wave-group w-full'>
                <input
                    className='input'
                    type="text" 
                    name="company"
                    required
                />
                <span className='bar'></span>
                <label className='label'>
                        <span className='label-char'>E</span>
                        <span className='label-char'>m</span>
                        <span className='label-char'>p</span>
                        <span className='label-char'>r</span>
                        <span className='label-char'>e</span>
                        <span className='label-char'>s</span>
                        <span className='label-char'>a</span>
                        <span className='label-char'>*</span>
                </label>
            </div>

            <div className='wave-group'>
                <input
                    className='input'
                    type="email" 
                    name="user_email"
                    required
                    />
                <span className='bar'></span>
                <label className='label'>
                        <span className='label-char'>C</span>
                        <span className='label-char'>o</span>
                        <span className='label-char'>r</span>
                        <span className='label-char'>r</span>
                        <span className='label-char'>e</span>
                        <span className='label-char'>o</span>
                        <span className='label-char'>*</span>
                </label>
            </div>

            <div className='flex items-center w-full'>
                <div className='custom-select-wrapper wave-group'>
                    <select 
                    name="code_country" 
                    id="code_country" 
                    defaultValue="code" 
                    className='custom-select input mt-[8px] w-full h-[45px]'
                    onFocus={handleFocus} 
                    onBlur={handleBlur}
                    >
                        <option value="code" disabled className='text-white'>Código país</option>
                        {sortedCountries.map(country => (
                            <option key={country.cca2} value={`${country.idd.root}${country.idd.suffixes}`} required>
                                {country.name.common} ({country.idd.root}{country.idd.suffixes})
                            </option>
                        ))}
                    </select>
                </div>

                <div className='wave-group w-full'>
                    <input
                    className='input'
                    type="text" 
                    name='phone_number'
                    required
                    />
                    <span className='bar'></span>
                    <label className='label'>
                        <span className='label-char'>C</span>
                        <span className='label-char'>e</span>
                        <span className='label-char'>l</span>
                        <span className='label-char'>u</span>
                        <span className='label-char'>l</span>
                        <span className='label-char'>a</span>
                        <span className='label-char'>r</span>
                        <span className='label-char'>*</span>
                </label>
                </div>
            </div>
            
            <div className='flex flex-col mt-8'>
                <textarea
                    name="message"
                    placeholder='Mensaje'
                />
            </div>
            
            <div className='w-full text-center mt-8 cursor-pointer'>
                <FormSubmit type="submit"/>
            </div>
        </form>
    </section>
  )
}

export default Contact
