import { allCountries } from "country-telephone-data";

// Convierte ISO a emoji de bandera
const isoToFlag = (iso) => {
  return iso
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );
};

export const getAllPhoneCodes = () => {
  return allCountries
    .map(c => ({
      name: c.name,
      code: `+${c.dialCode}`,
      iso2: c.iso2,
      flag: isoToFlag(c.iso2)
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};