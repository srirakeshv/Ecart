// Define a mapping object for country abbreviations to ISO currency codes and symbols
const countryCurrencyMapping = {
  AF: { code: "AFN", symbol: "؋" }, // Afghanistan
  AX: { code: "EUR", symbol: "€" }, // Åland Islands
  AL: { code: "ALL", symbol: "L" }, // Albania
  DZ: { code: "DZD", symbol: "د.ج" }, // Algeria
  AS: { code: "USD", symbol: "$" }, // American Samoa
  AD: { code: "EUR", symbol: "€" }, // Andorra
  AO: { code: "AOA", symbol: "Kz" }, // Angola
  AI: { code: "XCD", symbol: "$" }, // Anguilla
  AQ: { code: "", symbol: "" }, // Antarctica (No specific currency)
  AG: { code: "XCD", symbol: "$" }, // Antigua and Barbuda
  AR: { code: "ARS", symbol: "$" }, // Argentina
  AM: { code: "AMD", symbol: "֏" }, // Armenia
  AW: { code: "AWG", symbol: "ƒ" }, // Aruba
  AU: { code: "AUD", symbol: "$" }, // Australia
  AT: { code: "EUR", symbol: "€" }, // Austria
  AZ: { code: "AZN", symbol: "₼" }, // Azerbaijan
  BS: { code: "BSD", symbol: "$" }, // Bahamas
  BH: { code: "BHD", symbol: "BD" }, // Bahrain
  BD: { code: "BDT", symbol: "৳" }, // Bangladesh
  BB: { code: "BBD", symbol: "$" }, // Barbados
  BY: { code: "BYN", symbol: "Br" }, // Belarus
  BE: { code: "EUR", symbol: "€" }, // Belgium
  BZ: { code: "BZD", symbol: "$" }, // Belize
  BJ: { code: "XOF", symbol: "Fr" }, // Benin
  BM: { code: "BMD", symbol: "$" }, // Bermuda
  BT: { code: "BTN", symbol: "Nu." }, // Bhutan
  BO: { code: "BOB", symbol: "Bs." }, // Bolivia (Plurinational State of)
  BQ: { code: "USD", symbol: "$" }, // Bonaire, Sint Eustatius and Saba
  BA: { code: "BAM", symbol: "KM" }, // Bosnia and Herzegovina
  BW: { code: "BWP", symbol: "P" }, // Botswana
  BV: { code: "NOK", symbol: "kr" }, // Bouvet Island
  BR: { code: "BRL", symbol: "R$" }, // Brazil
  IO: { code: "USD", symbol: "$" }, // British Indian Ocean Territory
  BN: { code: "BND", symbol: "$" }, // Brunei Darussalam
  BG: { code: "BGN", symbol: "лв" }, // Bulgaria
  BF: { code: "XOF", symbol: "Fr" }, // Burkina Faso
  BI: { code: "BIF", symbol: "Fr" }, // Burundi
  CV: { code: "CVE", symbol: "Esc" }, // Cabo Verde
  KH: { code: "KHR", symbol: "៛" }, // Cambodia
  CM: { code: "XAF", symbol: "Fr" }, // Cameroon
  CA: { code: "CAD", symbol: "$" }, // Canada
  KY: { code: "KYD", symbol: "$" }, // Cayman Islands
  CF: { code: "XAF", symbol: "Fr" }, // Central African Republic
  TD: { code: "XAF", symbol: "Fr" }, // Chad
  CL: { code: "CLP", symbol: "$" }, // Chile
  CN: { code: "CNY", symbol: "¥" }, // China
  CX: { code: "AUD", symbol: "$" }, // Christmas Island
  CC: { code: "AUD", symbol: "$" }, // Cocos (Keeling) Islands
  CO: { code: "COP", symbol: "$" }, // Colombia
  KM: { code: "KMF", symbol: "Fr" }, // Comoros
  CG: { code: "XAF", symbol: "Fr" }, // Congo
  CD: { code: "CDF", symbol: "Fr" }, // Congo (Democratic Republic of the)
  CK: { code: "NZD", symbol: "$" }, // Cook Islands
  CR: { code: "CRC", symbol: "₡" }, // Costa Rica
  CI: { code: "XOF", symbol: "Fr" }, // Côte d'Ivoire
  HR: { code: "HRK", symbol: "kn" }, // Croatia
  CU: { code: "CUP", symbol: "$" }, // Cuba
  CW: { code: "ANG", symbol: "ƒ" }, // Curaçao
  CY: { code: "EUR", symbol: "€" }, // Cyprus
  CZ: { code: "CZK", symbol: "Kč" }, // Czech Republic
  DK: { code: "DKK", symbol: "kr" }, // Denmark
  DJ: { code: "DJF", symbol: "Fr" }, // Djibouti
  DM: { code: "XCD", symbol: "$" }, // Dominica
  DO: { code: "DOP", symbol: "RD$" }, // Dominican Republic
  EC: { code: "USD", symbol: "$" }, // Ecuador
  EG: { code: "EGP", symbol: "£" }, // Egypt
  SV: { code: "USD", symbol: "$" }, // El Salvador
  GQ: { code: "XAF", symbol: "Fr" }, // Equatorial Guinea
  ER: { code: "ERN", symbol: "Nfk" }, // Eritrea
  EE: { code: "EUR", symbol: "€" }, // Estonia
  ET: { code: "ETB", symbol: "Br" }, // Ethiopia
  FK: { code: "FKP", symbol: "£" }, // Falkland Islands (Malvinas)
  FO: { code: "DKK", symbol: "kr" }, // Faroe Islands
  FJ: { code: "FJD", symbol: "$" }, // Fiji
  FI: { code: "EUR", symbol: "€" }, // Finland
  FR: { code: "EUR", symbol: "€" }, // France
  GF: { code: "EUR", symbol: "€" }, // French Guiana
  PF: { code: "XPF", symbol: "Fr" }, // French Polynesia
  TF: { code: "EUR", symbol: "€" }, // French Southern Territories
  GA: { code: "XAF", symbol: "Fr" }, // Gabon
  GM: { code: "GMD", symbol: "D" }, // Gambia
  GE: { code: "GEL", symbol: "ლ" }, // Georgia
  DE: { code: "EUR", symbol: "€" }, // Germany
  GH: { code: "GHS", symbol: "₵" }, // Ghana
  GI: { code: "GIP", symbol: "£" }, // Gibraltar
  GR: { code: "EUR", symbol: "€" }, // Greece
  GL: { code: "DKK", symbol: "kr" }, // Greenland
  GD: { code: "XCD", symbol: "$" }, // Grenada
  GP: { code: "EUR", symbol: "€" }, // Guadeloupe
  GU: { code: "USD", symbol: "$" }, // Guam
  GT: { code: "GTQ", symbol: "Q" }, // Guatemala
  GG: { code: "GBP", symbol: "£" }, // Guernsey
  GN: { code: "GNF", symbol: "Fr" }, // Guinea
  GW: { code: "XOF", symbol: "Fr" }, // Guinea-Bissau
  GY: { code: "GYD", symbol: "$" }, // Guyana
  HT: { code: "HTG", symbol: "G" }, // Haiti
  HM: { code: "AUD", symbol: "$" }, // Heard Island and McDonald Islands
  VA: { code: "EUR", symbol: "€" }, // Holy See
  HN: { code: "HNL", symbol: "L" }, // Honduras
  HK: { code: "HKD", symbol: "$" }, // Hong Kong
  HU: { code: "HUF", symbol: "Ft" }, // Hungary
  IS: { code: "ISK", symbol: "kr" }, // Iceland
  IN: { code: "INR", symbol: "₹" }, // India
  ID: { code: "IDR", symbol: "Rp" }, // Indonesia
  IR: { code: "IRR", symbol: "﷼" }, // Iran (Islamic Republic of)
  IQ: { code: "IQD", symbol: "ع.د" }, // Iraq
  IE: { code: "EUR", symbol: "€" }, // Ireland
  IM: { code: "GBP", symbol: "£" }, // Isle of Man
  IL: { code: "ILS", symbol: "₪" }, // Israel
  IT: { code: "EUR", symbol: "€" }, // Italy
  JM: { code: "JMD", symbol: "J$" }, // Jamaica
  JP: { code: "JPY", symbol: "¥" }, // Japan
  JE: { code: "GBP", symbol: "£" }, // Jersey
  JO: { code: "JOD", symbol: "د.ا" }, // Jordan
  KZ: { code: "KZT", symbol: "₸" }, // Kazakhstan
  KE: { code: "KES", symbol: "KSh" }, // Kenya
  KI: { code: "AUD", symbol: "$" }, // Kiribati
  KP: { code: "KPW", symbol: "₩" }, // Korea (Democratic People's Republic of)
  KR: { code: "KRW", symbol: "₩" }, // Korea (Republic of)
  KW: { code: "KWD", symbol: "د.ك" }, // Kuwait
  KG: { code: "KGS", symbol: "лв" }, // Kyrgyzstan
  LA: { code: "LAK", symbol: "₭" }, // Lao People's Democratic Republic
  LV: { code: "EUR", symbol: "€" }, // Latvia
  LB: { code: "LBP", symbol: "ل.ل" }, // Lebanon
  LS: { code: "LSL", symbol: "L" }, // Lesotho
  LR: { code: "LRD", symbol: "$" }, // Liberia
  LY: { code: "LYD", symbol: "ل.د" }, // Libya
  LI: { code: "CHF", symbol: "CHF" }, // Liechtenstein
  LT: { code: "EUR", symbol: "€" }, // Lithuania
  LU: { code: "EUR", symbol: "€" }, // Luxembourg
  MO: { code: "MOP", symbol: "MOP$" }, // Macao
  MK: { code: "MKD", symbol: "ден" }, // Macedonia (the former Yugoslav Republic of)
  MG: { code: "MGA", symbol: "Ar" }, // Madagascar
  MW: { code: "MWK", symbol: "MK" }, // Malawi
  MY: { code: "MYR", symbol: "RM" }, // Malaysia
  MV: { code: "MVR", symbol: "ރ." }, // Maldives
  ML: { code: "XOF", symbol: "Fr" }, // Mali
  MT: { code: "EUR", symbol: "€" }, // Malta
  MH: { code: "USD", symbol: "$" }, // Marshall Islands
  MQ: { code: "EUR", symbol: "€" }, // Martinique
  MR: { code: "MRU", symbol: "UM" }, // Mauritania
  MU: { code: "MUR", symbol: "₨" }, // Mauritius
  YT: { code: "EUR", symbol: "€" }, // Mayotte
  MX: { code: "MXN", symbol: "$" }, // Mexico
  FM: { code: "USD", symbol: "$" }, // Micronesia (Federated States of)
  MD: { code: "MDL", symbol: "L" }, // Moldova (Republic of)
  MC: { code: "EUR", symbol: "€" }, // Monaco
  MN: { code: "MNT", symbol: "₮" }, // Mongolia
  ME: { code: "EUR", symbol: "€" }, // Montenegro
  MS: { code: "XCD", symbol: "$" }, // Montserrat
  MA: { code: "MAD", symbol: "د.م." }, // Morocco
  MZ: { code: "MZN", symbol: "MT" }, // Mozambique
  MM: { code: "MMK", symbol: "K" }, // Myanmar
  NA: { code: "NAD", symbol: "N$" }, // Namibia
  NR: { code: "AUD", symbol: "$" }, // Nauru
  NP: { code: "NPR", symbol: "₨" }, // Nepal
  NL: { code: "EUR", symbol: "€" }, // Netherlands
  NC: { code: "XPF", symbol: "Fr" }, // New Caledonia
  NZ: { code: "NZD", symbol: "$" }, // New Zealand
  NI: { code: "NIO", symbol: "C$" }, // Nicaragua
  NE: { code: "XOF", symbol: "Fr" }, // Niger
  NG: { code: "NGN", symbol: "₦" }, // Nigeria
  NU: { code: "NZD", symbol: "$" }, // Niue
  NF: { code: "AUD", symbol: "$" }, // Norfolk Island
  MP: { code: "USD", symbol: "$" }, // Northern Mariana Islands
  NO: { code: "NOK", symbol: "kr" }, // Norway
  OM: { code: "OMR", symbol: "ر.ع." }, // Oman
  PK: { code: "PKR", symbol: "₨" }, // Pakistan
  PW: { code: "USD", symbol: "$" }, // Palau
  PS: { code: "ILS", symbol: "₪" }, // Palestine, State of
  PA: { code: "PAB", symbol: "B/." }, // Panama
  PG: { code: "PGK", symbol: "K" }, // Papua New Guinea
  PY: { code: "PYG", symbol: "₲" }, // Paraguay
  PE: { code: "PEN", symbol: "S/." }, // Peru
  PH: { code: "PHP", symbol: "₱" }, // Philippines
  PN: { code: "NZD", symbol: "$" }, // Pitcairn
  PL: { code: "PLN", symbol: "zł" }, // Poland
  PT: { code: "EUR", symbol: "€" }, // Portugal
  PR: { code: "USD", symbol: "$" }, // Puerto Rico
  QA: { code: "QAR", symbol: "ر.ق" }, // Qatar
  RE: { code: "EUR", symbol: "€" }, // Réunion
  RO: { code: "RON", symbol: "lei" }, // Romania
  RU: { code: "RUB", symbol: "₽" }, // Russian Federation
  RW: { code: "RWF", symbol: "Fr" }, // Rwanda
  BL: { code: "EUR", symbol: "€" }, // Saint Barthélemy
  SH: { code: "SHP", symbol: "£" }, // Saint Helena, Ascension and Tristan da Cunha
  KN: { code: "XCD", symbol: "$" }, // Saint Kitts and Nevis
  LC: { code: "XCD", symbol: "$" }, // Saint Lucia
  MF: { code: "EUR", symbol: "€" }, // Saint Martin (French part)
  PM: { code: "EUR", symbol: "€" }, // Saint Pierre and Miquelon
  VC: { code: "XCD", symbol: "$" }, // Saint Vincent and the Grenadines
  WS: { code: "WST", symbol: "T" }, // Samoa
  SM: { code: "EUR", symbol: "€" }, // San Marino
  ST: { code: "STN", symbol: "Db" }, // Sao Tome and Principe
  SA: { code: "SAR", symbol: "ر.س" }, // Saudi Arabia
  SN: { code: "XOF", symbol: "Fr" }, // Senegal
  RS: { code: "RSD", symbol: "РСД" }, // Serbia
  SC: { code: "SCR", symbol: "SRe" }, // Seychelles
  SL: { code: "SLL", symbol: "Le" }, // Sierra Leone
  SG: { code: "SGD", symbol: "$" }, // Singapore
  SX: { code: "ANG", symbol: "ƒ" }, // Sint Maarten (Dutch part)
  SK: { code: "EUR", symbol: "€" }, // Slovakia
  SI: { code: "EUR", symbol: "€" }, // Slovenia
  SB: { code: "SBD", symbol: "SI$" }, // Solomon Islands
  SO: { code: "SOS", symbol: "Sh" }, // Somalia
  ZA: { code: "ZAR", symbol: "R" }, // South Africa
  GS: { code: "GBP", symbol: "£" }, // South Georgia and the South Sandwich Islands
  SS: { code: "SSP", symbol: "£" }, // South Sudan
  ES: { code: "EUR", symbol: "€" }, // Spain
  LK: { code: "LKR", symbol: "Rs" }, // Sri Lanka
  SD: { code: "SDG", symbol: "ج.س." }, // Sudan
  SR: { code: "SRD", symbol: "$" }, // Suriname
  SJ: { code: "NOK", symbol: "kr" }, // Svalbard and Jan Mayen
  SZ: { code: "SZL", symbol: "L" }, // Swaziland
  SE: { code: "SEK", symbol: "kr" }, // Sweden
  CH: { code: "CHF", symbol: "CHF" }, // Switzerland
  SY: { code: "SYP", symbol: "£" }, // Syrian Arab Republic
  TW: { code: "TWD", symbol: "NT$" }, // Taiwan, Province of China
  TJ: { code: "TJS", symbol: "ЅМ" }, // Tajikistan
  TZ: { code: "TZS", symbol: "TSh" }, // Tanzania, United Republic of
  TH: { code: "THB", symbol: "฿" }, // Thailand
  TL: { code: "USD", symbol: "$" }, // Timor-Leste
  TG: { code: "XOF", symbol: "Fr" }, // Togo
  TK: { code: "NZD", symbol: "$" }, // Tokelau
  TO: { code: "TOP", symbol: "T$" }, // Tonga
  TT: { code: "TTD", symbol: "TT$" }, // Trinidad and Tobago
  TN: { code: "TND", symbol: "د.ت" }, // Tunisia
  TR: { code: "TRY", symbol: "₺" }, // Turkey
  TM: { code: "TMT", symbol: "m" }, // Turkmenistan
  TC: { code: "USD", symbol: "$" }, // Turks and Caicos Islands
  TV: { code: "AUD", symbol: "$" }, // Tuvalu
  UG: { code: "UGX", symbol: "USh" }, // Uganda
  UA: { code: "UAH", symbol: "₴" }, // Ukraine
  AE: { code: "AED", symbol: "د.إ" }, // United Arab Emirates
  GB: { code: "GBP", symbol: "£" }, // United Kingdom of Great Britain and Northern Ireland
  US: { code: "USD", symbol: "$" }, // United States of America
  UM: { code: "USD", symbol: "$" }, // United States Minor Outlying Islands
  UY: { code: "UYU", symbol: "$" }, // Uruguay
  UZ: { code: "UZS", symbol: "UZS" }, // Uzbekistan
  VU: { code: "VUV", symbol: "Vt" }, // Vanuatu
  VE: { code: "VES", symbol: "Bs.S." }, // Venezuela (Bolivarian Republic of)
  VN: { code: "VND", symbol: "₫" }, // Viet Nam
  VG: { code: "USD", symbol: "$" }, // Virgin Islands (British)
  VI: { code: "USD", symbol: "$" }, // Virgin Islands (U.S.)
  WF: { code: "XPF", symbol: "Fr" }, // Wallis and Futuna
  EH: { code: "MAD", symbol: "د.م." }, // Western Sahara
  YE: { code: "YER", symbol: "﷼" }, // Yemen
  ZM: { code: "ZMW", symbol: "ZK" }, // Zambia
  ZW: { code: "ZWL", symbol: "$" }, // Zimbabwe
  // Add more mappings as needed
};

export default countryCurrencyMapping;
