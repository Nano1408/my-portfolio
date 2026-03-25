import { useState, useRef, useEffect } from "react";
import { phoneConfig } from "../utils/phoneConfig";
import CountrySelect from "../components/components/CountrySelect";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "@styles/contact.css";

export default function Contact() {
  const form = useRef();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [send, setSend] = useState("Enviar mensaje");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  // console.log("ISO:", selectedCountry?.iso2);

  
  useEffect(() => {
    setPhone("");
  }, [selectedCountry]);
 

  // -----------------------------
  // Validación simple
  // -----------------------------
  const validate = () => {
    const formData = new FormData(form.current);
    const newErrors = {};
    const cleanPhone = phone.replace(/\D/g, "");
    const config = selectedCountry 
    ? phoneConfig[selectedCountry.iso2] 
    : null;

    if (!formData.get("user_name")) newErrors.user_name = true;
    if (!formData.get("user_last_name")) newErrors.user_last_name = true;
    if (!formData.get("company")) newErrors.company = true;
    if (!formData.get("user_email")) newErrors.user_email = true;
    if (!formData.get("phone_number")) newErrors.phone_number = true;
    if (!cleanPhone) {
      newErrors.phone_number = true;
    } else if (config && cleanPhone.length !== config.length) {
      newErrors.phone_number = true;
      setPhoneError(true);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // -----------------------------
  // Enviar Email
  // -----------------------------
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSend("Enviando...");

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSend("Mensaje enviado ✔");

      Swal.fire({
        icon: "success",
        title: "Mensaje enviado",
        text: "Te responderé pronto 🚀",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#f97316"
      });

      form.current.reset();
      setSend("Enviar mensaje");
    })
    .catch(() => {
      setLoading(false);
      setSend("Enviar mensaje");

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Algo salió mal. Intenta nuevamente.",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#f97316"
      });
    });
  };

  
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-center text-white"
        >
          Construyamos algo extraordinario
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-10 md:p-14"
        >

          <div className="grid md:grid-cols-2 gap-6">
            <Input name="user_name" placeholder="Nombre *" error={errors.user_name}/>
            <Input name="user_last_name" placeholder="Apellido *" error={errors.user_last_name}/>
          </div>

          <Input name="company" placeholder="Empresa *" error={errors.company} className="mt-6"/>
          <Input name="user_email" type="email" placeholder="Correo electrónico *" error={errors.user_email} className="mt-6"/>

            {/* SELECT PERSONALIZADO */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
  
            <CountrySelect
              value={selectedCountry}
              onChange={setSelectedCountry}
            />

            <input
              type="text"
              name="phone_number"
              value={phone}
              placeholder={
                selectedCountry
                  ? `${selectedCountry.code} ${phoneConfig[selectedCountry.iso2]?.placeholder || ""}`
                  : "Celular *"
              }
              className={`contact-input md:col-span-2 ${phoneError ? "input-error" : ""}`}
              onChange={(e) => {
                let raw = e.target.value.replace(/\D/g, "");
                            
                if (!selectedCountry) {
                  setPhone(raw); // sin formato aún
                  return;
                }
              
                const config = phoneConfig[selectedCountry.iso2?.toUpperCase()];
              
                if (config) {
                  raw = raw.slice(0, config.length);
                  raw = config.format(raw);
                }
              
                setPhone(raw);
                setPhoneError(false);

                // console.log("RAW:", raw);
                // console.log("FORMATTED:", config?.format(raw));
              }}
            />

          </div>

          <textarea
            name="message"
            placeholder="Escribe tú mensaje aquí..."
            rows="5"
            className="contact-input mt-6 resize-none"
          />

          <div className="mt-10 text-center">
            <button
              type="submit"
              disabled={loading}
              className="submit-btn"
            >
              {loading ? <Spinner/> : send}
            </button>
          </div>

        </motion.form>
      </div>
    </section>
  );
}

// ------------------
// Input reutilizable
// ------------------
function Input({ name, placeholder, type="text", error, className="" }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`contact-input ${error ? "input-error" : ""} ${className}`}
    />
  );
}

// ------------------
// Spinner animado
// ------------------
function Spinner() {
  return (
    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"/>
  );
}