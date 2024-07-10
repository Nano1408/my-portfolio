import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { fetchCodeLatinoAmerica } from '@apis/CodeCountry';
import '@styles/contact.css';
import FormSubmit from '../buttons/FormSubmit';
import Swal from 'sweetalert2'

const Contact = () => {
    const [countries, setCountries] = useState([]);
    const [send, setSend] = useState("Enviar");

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
                }, 2000);
                console.log('FAILED...', error.text);
            },
            );
        };

  return (
    <section>
        <h2 className='text-[40px] pt-20'>Ponte en contacto conmigo</h2>

        <form ref={form} onSubmit={sendEmail} className='mt-8 w-[670px]'>

            <div className='flex w-full'>
                <div className='flex flex-col mr-16 w-full'>
                    <label>Nombre<sup>*</sup></label>
                    <input 
                        type="text" 
                        name="user_name"
                        required
                    />
                </div>

                <div className='flex flex-col w-full'>
                    <label>Apellido<sup>*</sup></label>
                    <input 
                        type="text" 
                        name="user_last_name"
                        required
                    />
                </div>

            </div>

            <div className='flex flex-col'>
                <label>Empresa<sup>*</sup></label>
                <input
                    type="text" 
                    name="company"
                    required
                />
            </div>

            <div className='flex flex-col'>
                <label>Correo Electronico<sup>*</sup></label>
                <input
                    type="email" 
                    name="user_email"
                    required
                />
            </div>

            <div className='flex items-center w-full'>
                <select name="code_country" id="code_country" defaultValue="code" className='mr-16 w-full h-[45px]'>
                    <option value="code" disabled>Código país</option>
                    {countries.map(country => (
                        <option key={country.cca2} value={`${country.idd.root}${country.idd.suffixes}`} required>
                            {country.name.common} ({country.idd.root}{country.idd.suffixes})
                        </option>
                    ))}
                </select>

                <div className='flex flex-col w-full mt-4'>
                    <label>Numero telefono<sup>*</sup></label>
                    <input 
                    type="text" 
                    name='phone_number'
                    required
                    />
                </div>
            </div>
            
            <div className='flex flex-col'>
                <label>Mensaje</label>
                <textarea name="message" />
            </div>
            
            <div className='w-full text-center mt-8 cursor-pointer'>
                <FormSubmit type="submit"/>
            </div>
        </form>
    </section>
  )
}

export default Contact
