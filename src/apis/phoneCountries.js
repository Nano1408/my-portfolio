import { allCountries } from 'country-telephone-data';
import { isoToFlag } from '../utils/flags';

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