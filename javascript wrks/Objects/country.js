var indiaData=[
    {
      "name": "India",
      "topLevelDomain": [
        ".in"
      ],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": [
        "91"
      ],
      "capital": "New Delhi",
      "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ],
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 1380004385,
      "latlng": [
        20,
        77
      ],
      "demonym": "Indian",
      "area": 3287590,
      "gini": 35.7,
      "timezones": [
        "UTC+05:30"
      ],
      "borders": [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
      ],
      "nativeName": "भारत",
      "numericCode": "356",
      "flags": {
        "svg": "https://flagcdn.com/in.svg",
        "png": "https://flagcdn.com/w320/in.png"
      },
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Índia",
        "pt": "Índia",
        "nl": "India",
        "hr": "Indija",
        "fa": "هند",
        "de": "Indien",
        "es": "India",
        "fr": "Inde",
        "ja": "インド",
        "it": "India",
        "hu": "India"
      },
      "flag": "https://flagcdn.com/in.svg",
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "IND",
      "independent": true
    }
  ]

  //print country name 

  let countryName=indiaData[0].name
  console.log(countryName);

  //print capital

  let capital=indiaData[0].capital
  console.log(capital);

  //print population

  let population=indiaData[0].population
  console.log(population);

  //print borders

  let borders=[...indiaData[0].borders]
  console.log(borders);

  //print currency name

let currenciesName=indiaData[0].currencies[0].name
console.log(currenciesName);

  //print currency symbol

let currenciesymbol=indiaData[0].currencies[0].symbol
console.log(currenciesymbol);

  //language name 

  let language=indiaData[0].languages
  console.log(language);

  //flag

  let flag=indiaData[0].flag
  console.log(flag);

  let finalData={countryName,capital,population,borders,currenciesName,currenciesymbol,language,flag}
  console.log(finalData);
  