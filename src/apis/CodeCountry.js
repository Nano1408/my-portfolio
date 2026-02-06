export const fetchCodeLatinoAmerica = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
        const data = await response.json();
        // Filtrar países latinoamericanos
        const regions = ["South America", "Central America", "Caribbean"];
        const latinAmericanCountries = data.filter(country => {
            return regions.includes(country.subregion); // Cambiado a subregion
        });
        return latinAmericanCountries;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

