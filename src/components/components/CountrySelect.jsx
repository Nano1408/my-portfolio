import { useState, useEffect, useRef } from "react";
import { getAllPhoneCodes } from "../../services/phoneCodes";

export default function CountrySelect({ value, onChange }) {
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(0);

  const selectRef = useRef(null);
  const optionRefs = useRef([]);

  // Cargar países + detectar IP
    useEffect(() => {
      const data = getAllPhoneCodes();
      setCountries(data);   
      // Detectar país por idioma del navegador
      const locale = navigator.language; // ej: es-CO
      const countryCode = locale.split("-")[1]; // CO   
      if (countryCode) {
        const match = data.find(c => c.iso2 === countryCode);
        if (match) {
          onChange(match);
          return;
        }
      } 
      // fallback Colombia
      const colombia = data.find(c => c.code === "+57");
      if (colombia) onChange(colombia); 
    }, []);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtrar
  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.includes(search)
  );

  useEffect(() => {
    setHighlightIndex(0);
  }, [search]);

  // Scroll automático
  useEffect(() => {
    if (optionRefs.current[highlightIndex]) {
      optionRefs.current[highlightIndex].scrollIntoView({
        block: "nearest"
      });
    }
  }, [highlightIndex]);

  // Teclado
  const handleKeyDown = (e) => {
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex(prev =>
        prev < filteredCountries.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex(prev =>
        prev > 0 ? prev - 1 : prev
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredCountries[highlightIndex];
      if (selected) {
        onChange(selected);
        setOpen(false);
        setSearch("");
      }
    }
  };

  return (
    <div ref={selectRef} className="relative">
      
      {/* SELECT */}
      <div
        onClick={() => setOpen(!open)}
        className="custom-select"
      >
        {value ? (
          <span className="flex items-center gap-2">
            <span>{value.flag}</span>
            <span>{value.code}</span>
            <span>{value.flagIcon}</span>
            {/*<img 
              src={`https://flagcdn.com/w20/${value.iso2.toLowerCase()}.png`} 
              alt="" 
            />*/}
          </span>
        ) : "Código"}
        <span className="ml-2">⌄</span>
      </div>

      <input
        type="hidden"
        name="code_country"
        value={value?.code || ""}
      />

      {/* DROPDOWN */}
      {open && (
        <div className="select-dropdown">

          <input
            type="text"
            placeholder="Buscar país..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="select-search"
            autoFocus
          />

          {filteredCountries.map((country, index) => (
            <div
              key={country.iso2}
              ref={el => optionRefs.current[index] = el}
              onClick={() => {
                onChange(country);
                setOpen(false);
                setSearch("");
              }}
              className={`select-option ${
                index === highlightIndex ? "active-option" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                <img 
                  src={`https://flagcdn.com/w20/${country.iso2.toLowerCase()}.png`} 
                  alt="" 
                />
                {/* <span>{country.flag}</span> */}
                <span>{country.code}</span>
              </span>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}