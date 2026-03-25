import { useState, useRef, useEffect } from "react";
import { isoToFlag } from "../utils/flags";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "@styles/contact.css";

export default function Contact() {
  const form = useRef();

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [send, setSend] = useState("Enviar mensaje");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  // -----------------------------
  // Cargar códigos de país
  // -----------------------------
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2")
      .then(res => res.json())
      .then(data => {
        const formatted = data
          .filter(c => c.idd?.root)
          .map(c => ({
            name: c.name.common,
            code: c.idd.root + (c.idd.suffixes?.[0] || ""),
            iso2: c.cca2,
            flag: isoToFlag(c.cca2)
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formatted);

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes("Bogota")) {
          const colombia = formatted.find(c => c.code === "+57");
          if (colombia) setSelectedCountry(colombia);
        }
      });
  }, []);

  useEffect(() => {
      const handleClickOutside = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  // -----------------------------
  // Validación simple
  // -----------------------------
  const validate = () => {
    const formData = new FormData(form.current);
    const newErrors = {};

    if (!formData.get("user_name")) newErrors.user_name = true;
    if (!formData.get("user_last_name")) newErrors.user_last_name = true;
    if (!formData.get("company")) newErrors.company = true;
    if (!formData.get("user_email")) newErrors.user_email = true;
    if (!formData.get("phone_number")) newErrors.phone_number = true;

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
            <div ref={selectRef} className="relative md:col-span-1">
              <div
                onClick={() => setOpen(!open)}
                className="custom-select"
              >
                {selectedCountry ? (
                  <span className="selected-country">
                    <span>{selectedCountry.flag}</span>
                    <span className="country-code">{selectedCountry.code}</span>
                    <img 
                          src={`https://flagcdn.com/w20/${selectedCountry.iso2.toLowerCase()}.png`} 
                          alt="" 
                        />
                  </span>
                ) : "Código"}
                <span className="ml-2">⌄</span>
              </div>
              <input
                type="hidden"
                name="code_country"
                value={selectedCountry?.code || ""}
              />
            
              {open && (
                <div className="select-dropdown">
                  {countries.map(country => (
                    <div
                      key={country.iso2}
                      onClick={() => {
                        setSelectedCountry(country);
                        setOpen(false);
                      }}
                      className="select-option"
                    >
                      <span className="flex gap-2 items-center">
                        <img 
                          src={`https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`} 
                          alt="" 
                        />
                        <span>{country.code}</span>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Input name="phone_number" placeholder="Celular *" error={errors.phone_number} className="md:col-span-2"/>
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