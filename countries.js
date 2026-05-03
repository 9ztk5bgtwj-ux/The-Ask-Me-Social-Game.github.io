console.log("LOADED COUNTRIES FILE:", new Date().toISOString());
// -----------------------------
// A–E
// -----------------------------
const COUNTRIES_A_E = [
  {
    country: "Albania",
    capital: "Tirana",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
    flagAttribution: "Flag of Albania — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirana_Skanderbeg_Square_2020.jpg",

        attribution: "Skanderbeg Square, Tirana — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tirana_Clock_Tower.jpg",
        attribution: "Clock Tower of Tirana — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Tirana_Et%27hem_Bey_Mosque.jpg",
        attribution: "Et'hem Bey Mosque, Tirana — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Algeria",
    capital: "Algiers",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
    flagAttribution: "Flag of Algeria — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Martyrs%27_Memorial_Algiers.jpg",
        attribution: "Martyrs' Memorial, Algiers — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Algiers_Casbah.jpg",
        attribution: "Casbah of Algiers — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Notre_Dame_d%27Afrique_Algiers.jpg",
        attribution: "Notre Dame d'Afrique, Algiers — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Argentina",
    capital: "Buenos Aires",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    flagAttribution: "Flag of Argentina — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Casa_Rosada_Buenos_Aires.jpg",
        attribution: "Casa Rosada, Buenos Aires — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Obelisco_Buenos_Aires.jpg",
        attribution: "Obelisco de Buenos Aires — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Teatro_Col%C3%B3n_Buenos_Aires.jpg",
        attribution: "Teatro Colón, Buenos Aires — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Australia",
    capital: "Canberra",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
    flagAttribution: "Flag of Australia — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Parliament_House_Canberra.jpg",
        attribution: "Parliament House, Canberra — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lake_Burley_Griffin_Canberra.jpg",
        attribution: "Lake Burley Griffin, Canberra — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Australian_War_Memorial_Canberra.jpg",
        attribution: "Australian War Memorial, Canberra — Wikimedia Commons (CC BY-SA 3.0)"
      }
    ]
  },

  {
    country: "Austria",
    capital: "Vienna",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    flagAttribution: "Flag of Austria — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/St._Stephen%27s_Cathedral_Vienna.jpg",
        attribution: "St. Stephen's Cathedral, Vienna — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Sch%C3%B6nbrunn_Palace_Vienna.jpg",
        attribution: "Schönbrunn Palace, Vienna — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Hofburg_Palace_Vienna.jpg",
        attribution: "Hofburg Palace, Vienna — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Belgium",
    capital: "Brussels",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
    flagAttribution: "Flag of Belgium — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Grand_Place_Brussels.jpg",
        attribution: "Grand Place, Brussels — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Atomium_Brussels.jpg",
        attribution: "Atomium, Brussels — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Royal_Palace_Brussels.jpg",
        attribution: "Royal Palace of Brussels — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Brazil",
    capital: "Brasília",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    flagAttribution: "Flag of Brazil — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Congresso_Nacional_Brasilia.jpg",
        attribution: "National Congress of Brazil, Brasília — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cathedral_of_Brasilia.jpg",
        attribution: "Cathedral of Brasília — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Pal%C3%A1cio_do_Planalto_Brasilia.jpg",
        attribution: "Palácio do Planalto, Brasília — Wikimedia Commons (CC BY-SA 3.0)"
      }
    ]
  },

  {
    country: "Canada",
    capital: "Ottawa",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    flagAttribution: "Flag of Canada — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Parliament_Hill_Ottawa.jpg",
        attribution: "Parliament Hill, Ottawa — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Rideau_Canal_Ottawa.jpg",
        attribution: "Rideau Canal, Ottawa — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/National_Gallery_of_Canada.jpg",
        attribution: "National Gallery of Canada — Wikimedia Commons (CC BY-SA 3.0)"
      }
    ]
  },

  {
    country: "China",
    capital: "Beijing",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    flagAttribution: "Flag of China — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Tiananmen_Gate_Beijing.jpg",
        attribution: "Tiananmen Gate, Beijing — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Temple_of_Heaven_Beijing.jpg",
        attribution: "Temple of Heaven, Beijing — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Great_Hall_of_the_People_Beijing.jpg",
        attribution: "Great Hall of the People, Beijing — Wikimedia Commons (CC BY-SA 3.0)"
      }
    ]
  },

  {
    country: "Denmark",
    capital: "Copenhagen",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
    flagAttribution: "Flag of Denmark — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Nyhavn_Copenhagen.jpg",
        attribution: "Nyhavn, Copenhagen — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/The_Little_Mermaid_statue_in_Copenhagen.jpg",
        attribution: "The Little Mermaid, Copenhagen — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Amalienborg_Palace_Copenhagen.jpg",
        attribution: "Amalienborg Palace, Copenhagen — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Egypt",
    capital: "Cairo",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    flagAttribution: "Flag of Egypt — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Cairo_Tahrir_Square.jpg",
        attribution: "Tahrir Square, Cairo — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Cairo_Citadel.jpg",
        attribution: "Citadel of Cairo — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Mosque_of_Muhammad_Ali_Cairo.jpg",
        attribution: "Mosque of Muhammad Ali, Cairo — Wikimedia Commons (CC BY-SA 3.0)"
      }
    ]
  }
];


// -----------------------------
// F–L
// -----------------------------
const COUNTRIES_F_L = [
  {
    country: "Finland",
    capital: "Helsinki",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
    flagAttribution: "Flag of Finland — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Helsinki_Cathedral_2019.jpg",
        attribution: "Helsinki Cathedral — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Senate_Square_Helsinki.jpg",
        attribution: "Senate Square, Helsinki — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Finlandia_Hall_Helsinki.jpg",
        attribution: "Finlandia Hall, Helsinki — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "France",
    capital: "Paris",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    flagAttribution: "Flag of France — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_Eiffel_Wikimedia_Commons.jpg",
        attribution: "Eiffel Tower, Paris — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Louvre_Museum_Wikimedia.jpg",
        attribution: "Louvre Museum, Paris — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Arc_de_Triomphe_Paris.jpg",
        attribution: "Arc de Triomphe, Paris — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Germany",
    capital: "Berlin",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    flagAttribution: "Flag of Germany — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Brandenburg_Gate_Berlin.jpg",
        attribution: "Brandenburg Gate, Berlin — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Reichstag_Building_Berlin.jpg",
        attribution: "Reichstag Building, Berlin — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Berlin_TV_Tower.jpg",
        attribution: "Berlin TV Tower — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Greece",
    capital: "Athens",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
    flagAttribution: "Flag of Greece — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Acropolis_of_Athens_2019.jpg",
        attribution: "Acropolis of Athens — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Parthenon_Athens.jpg",
        attribution: "Parthenon, Athens — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Syntagma_Square_Athens.jpg",
        attribution: "Syntagma Square, Athens — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Hungary",
    capital: "Budapest",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    flagAttribution: "Flag of Hungary — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hungarian_Parliament_Building_Budapest.jpg",
        attribution: "Hungarian Parliament Building, Budapest — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Buda_Castle_Budapest.jpg",
        attribution: "Buda Castle, Budapest — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Chain_Bridge_Budapest.jpg",
        attribution: "Chain Bridge, Budapest — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "India",
    capital: "New Delhi",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    flagAttribution: "Flag of India — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/India_Gate_New_Delhi.jpg",
        attribution: "India Gate, New Delhi — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rashtrapati_Bhavan_New_Delhi.jpg",
        attribution: "Rashtrapati Bhavan, New Delhi — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lotus_Temple_New_Delhi.jpg",
        attribution: "Lotus Temple, New Delhi — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Indonesia",
    capital: "Jakarta",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    flagAttribution: "Flag of Indonesia — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/National_Monument_Jakarta.jpg",
        attribution: "National Monument (Monas), Jakarta — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Istiqlal_Mosque_Jakarta.jpg",
        attribution: "Istiqlal Mosque, Jakarta — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Jakarta_Cathedral.jpg",
        attribution: "Jakarta Cathedral — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Ireland",
    capital: "Dublin",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
    flagAttribution: "Flag of Ireland — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ha%27penny_Bridge_Dublin.jpg",
        attribution: "Ha'penny Bridge, Dublin — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dublin_Castle.jpg",
        attribution: "Dublin Castle — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1d/St_Patrick%27s_Cathedral_Dublin.jpg",
        attribution: "St. Patrick's Cathedral, Dublin — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Italy",
    capital: "Rome",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    flagAttribution: "Flag of Italy — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
        attribution: "Colosseum, Rome — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Trevi_Fountain_Rome.jpg",
        attribution: "Trevi Fountain, Rome — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/St_Peter%27s_Basilica_Rome.jpg",
        attribution: "St. Peter's Basilica, Rome — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Japan",
    capital: "Tokyo",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    flagAttribution: "Flag of Japan — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/12/Tokyo_Tower_and_around_Skyscrapers.jpg",
        attribution: "Tokyo Tower — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sensoji_Temple_Tokyo.jpg",
        attribution: "Senso-ji Temple, Tokyo — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Shibuya_Crossing_Tokyo.jpg",
        attribution: "Shibuya Crossing, Tokyo — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  }
];


// -----------------------------
// M–R
// -----------------------------
const COUNTRIES_M_R = [
  {
    country: "Malaysia",
    capital: "Kuala Lumpur",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
    flagAttribution: "Flag of Malaysia — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Petronas_Twin_Towers_2019.jpg",
        attribution: "Petronas Towers, Kuala Lumpur — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Kuala_Lumpur_Tower.jpg",
        attribution: "KL Tower, Kuala Lumpur — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Merdeka_Square_Kuala_Lumpur.jpg",
        attribution: "Merdeka Square, Kuala Lumpur — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Mexico",
    capital: "Mexico City",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    flagAttribution: "Flag of Mexico — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Zocalo_Mexico_City.jpg",
        attribution: "Zócalo, Mexico City — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Angel_of_Independence_Mexico_City.jpg",
        attribution: "Angel of Independence, Mexico City — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Palacio_de_Bellas_Artes_Mexico_City.jpg",
        attribution: "Palacio de Bellas Artes, Mexico City — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Netherlands",
    capital: "Amsterdam",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    flagAttribution: "Flag of the Netherlands — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Amsterdam_Canals_2019.jpg",
        attribution: "Amsterdam Canals — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Rijksmuseum_Amsterdam.jpg",
        attribution: "Rijksmuseum, Amsterdam — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Dam_Square_Amsterdam.jpg",
        attribution: "Dam Square, Amsterdam — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "New Zealand",
    capital: "Wellington",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    flagAttribution: "Flag of New Zealand — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Wellington_Cable_Car.jpg",
        attribution: "Wellington Cable Car — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/New_Zealand_Parliament_Buildings.jpg",
        attribution: "Parliament Buildings, Wellington — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Wellington_Harbour.jpg",
        attribution: "Wellington Harbour — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Nigeria",
    capital: "Abuja",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    flagAttribution: "Flag of Nigeria — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/National_Mosque_Abuja.jpg",
        attribution: "National Mosque, Abuja — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/National_Christian_Centre_Abuja.jpg",
        attribution: "National Christian Centre, Abuja — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Central_Business_District_Abuja.jpg",
        attribution: "Central Business District, Abuja — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Norway",
    capital: "Oslo",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    flagAttribution: "Flag of Norway — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Oslo_Opera_House.jpg",
        attribution: "Oslo Opera House — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Royal_Palace_Oslo.jpg",
        attribution: "Royal Palace, Oslo — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Akershus_Fortress_Oslo.jpg",
        attribution: "Akershus Fortress, Oslo — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Pakistan",
    capital: "Islamabad",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    flagAttribution: "Flag of Pakistan — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Faisal_Mosque_Islamabad.jpg",
        attribution: "Faisal Mosque, Islamabad — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Pakistan_Monument_Islamabad.jpg",
        attribution: "Pakistan Monument, Islamabad — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Daman-e-Koh_Islamabad.jpg",
        attribution: "Daman-e-Koh, Islamabad — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Peru",
    capital: "Lima",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
    flagAttribution: "Flag of Peru — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Plaza_Mayor_Lima.jpg",
        attribution: "Plaza Mayor, Lima — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Lima_Cathedral.jpg",
        attribution: "Lima Cathedral — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Government_Palace_Lima.jpg",
        attribution: "Government Palace, Lima — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Philippines",
    capital: "Manila",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
    flagAttribution: "Flag of the Philippines — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Manila_Cathedral.jpg",
        attribution: "Manila Cathedral — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rizal_Park_Manila.jpg",
        attribution: "Rizal Park, Manila — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Fort_Santiago_Manila.jpg",
        attribution: "Fort Santiago, Manila — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Poland",
    capital: "Warsaw",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
    flagAttribution: "Flag of Poland — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Old_Town_Warsaw.jpg",
        attribution: "Old Town, Warsaw — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Royal_Castle_Warsaw.jpg",
        attribution: "Royal Castle, Warsaw — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Palace_of_Culture_and_Science_Warsaw.jpg",
        attribution: "Palace of Culture and Science, Warsaw — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Portugal",
    capital: "Lisbon",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    flagAttribution: "Flag of Portugal — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Belem_Tower_Lisbon.jpg",
        attribution: "Belém Tower, Lisbon — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Commerce_Square_Lisbon.jpg",
        attribution: "Commerce Square, Lisbon — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/25_de_Abril_Bridge_Lisbon.jpg",
        attribution: "25 de Abril Bridge, Lisbon — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Qatar",
    capital: "Doha",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
    flagAttribution: "Flag of Qatar — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Doha_Skyline_Qatar.jpg",
        attribution: "Doha Skyline — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Museum_of_Islamic_Art_Doha.jpg",
        attribution: "Museum of Islamic Art, Doha — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Katara_Cultural_Village_Doha.jpg",
        attribution: "Katara Cultural Village, Doha — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Romania",
    capital: "Bucharest",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    flagAttribution: "Flag of Romania — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Palace_of_the_Parliament_Bucharest.jpg",
        attribution: "Palace of the Parliament, Bucharest — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Revolution_Square_Bucharest.jpg",
        attribution: "Revolution Square, Bucharest — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Athenaeum_Bucharest.jpg",
        attribution: "Romanian Athenaeum, Bucharest — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Russia",
    capital: "Moscow",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
    flagAttribution: "Flag of Russia — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Square_Moscow.jpg",
        attribution: "Red Square, Moscow — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/St_Basils_Cathedral_Moscow.jpg",
        attribution: "St. Basil's Cathedral, Moscow — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kremlin_Moscow.jpg",
        attribution: "Moscow Kremlin — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  }
];


// -----------------------------
// S–U
// -----------------------------
const COUNTRIES_S_U = [
  {
    country: "Saudi Arabia",
    capital: "Riyadh",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
    flagAttribution: "Flag of Saudi Arabia — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Kingdom_Centre_Riyadh.jpg",
        attribution: "Kingdom Centre, Riyadh — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Al_Faisaliyah_Center_Riyadh.jpg",
        attribution: "Al Faisaliyah Center, Riyadh — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Riyadh_Skyline_2019.jpg",
        attribution: "Riyadh Skyline — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Singapore",
    capital: "Singapore",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
    flagAttribution: "Flag of Singapore — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Marina_Bay_Sands_Singapore.jpg",
        attribution: "Marina Bay Sands, Singapore — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Merlion_Park_Singapore.jpg",
        attribution: "Merlion Park, Singapore — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Gardens_by_the_Bay_Singapore.jpg",
        attribution: "Gardens by the Bay, Singapore — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "South Africa",
    capital: "Pretoria",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    flagAttribution: "Flag of South Africa — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Union_Buildings_Pretoria.jpg",
        attribution: "Union Buildings, Pretoria — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Church_Square_Pretoria.jpg",
        attribution: "Church Square, Pretoria — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Pretoria_City_Centre.jpg",
        attribution: "Pretoria City Centre — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "South Korea",
    capital: "Seoul",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    flagAttribution: "Flag of South Korea — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Gyeongbokgung_Palace_Seoul.jpg",
        attribution: "Gyeongbokgung Palace, Seoul — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/N_Seoul_Tower.jpg",
        attribution: "N Seoul Tower — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Dongdaemun_Design_Plaza_Seoul.jpg",
        attribution: "Dongdaemun Design Plaza, Seoul — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Spain",
    capital: "Madrid",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    flagAttribution: "Flag of Spain — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Plaza_Mayor_Madrid.jpg",
        attribution: "Plaza Mayor, Madrid — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Royal_Palace_Madrid.jpg",
        attribution: "Royal Palace of Madrid — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Almudena_Cathedral_Madrid.jpg",
        attribution: "Almudena Cathedral, Madrid — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Sweden",
    capital: "Stockholm",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
    flagAttribution: "Flag of Sweden — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Stockholm_City_Hall.jpg",
        attribution: "Stockholm City Hall — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Gamla_Stan_Stockholm.jpg",
        attribution: "Gamla Stan, Stockholm — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Royal_Palace_Stockholm.jpg",
        attribution: "Royal Palace, Stockholm — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Switzerland",
    capital: "Bern",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
    flagAttribution: "Flag of Switzerland — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Zytglogge_Bern.jpg",
        attribution: "Zytglogge, Bern — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Federal_Palace_Bern.jpg",
        attribution: "Federal Palace of Switzerland, Bern — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Bern_Old_Town.jpg",
        attribution: "Old Town, Bern — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Thailand",
    capital: "Bangkok",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    flagAttribution: "Flag of Thailand — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Grand_Palace_Bangkok.jpg",
        attribution: "Grand Palace, Bangkok — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Wat_Arun_Bangkok.jpg",
        attribution: "Wat Arun, Bangkok — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Wat_Pho_Bangkok.jpg",
        attribution: "Wat Pho, Bangkok — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Turkey",
    capital: "Ankara",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    flagAttribution: "Flag of Turkey — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Anitkabir_Ankara.jpg",
        attribution: "Anıtkabir, Ankara — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Kocatepe_Mosque_Ankara.jpg",
        attribution: "Kocatepe Mosque, Ankara — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Ankara_Citadel.jpg",
        attribution: "Ankara Citadel — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "United Arab Emirates",
    capital: "Abu Dhabi",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
    flagAttribution: "Flag of the United Arab Emirates — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sheikh_Zayed_Grand_Mosque_Abu_Dhabi.jpg",
        attribution: "Sheikh Zayed Grand Mosque, Abu Dhabi — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Etihad_Towers_Abu_Dhabi.jpg",
        attribution: "Etihad Towers, Abu Dhabi — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Abu_Dhabi_Corniche.jpg",
        attribution: "Abu Dhabi Corniche — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "United Kingdom",
    capital: "London",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    flagAttribution: "Flag of the United Kingdom — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg",
        attribution: "Palace of Westminster, London — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Tower_Bridge_London_Feb_2006.jpg",
        attribution: "Tower Bridge, London — Wikimedia Commons (CC BY-SA 2.5)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/London_Eye_Twilight_April_2006.jpg",
        attribution: "London Eye — Wikimedia Commons (CC BY-SA 2.5)"
      }
    ]
  },

  {
    country: "United States",
    capital: "Washington, D.C.",
    flagImage: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    flagAttribution: "Flag of the United States — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/US_Capitol_west_side.JPG",
        attribution: "United States Capitol, Washington, D.C. — Wikimedia Commons (CC BY-SA 3.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Washington_Monument_Dusk_Jan_2006.jpg",
        attribution: "Washington Monument — Wikimedia Commons (CC BY-SA 2.5)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/White_House_north_side.jpg",
        attribution: "The White House — Wikimedia Commons (Public Domain)"
      }
    ]
  }
];


// -----------------------------
// V–Z
// -----------------------------
const COUNTRIES_V_Z = [
  {
    country: "Vietnam",
    capital: "Hanoi",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
    flagAttribution: "Flag of Vietnam — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Hoan_Kiem_Lake_Hanoi.jpg",
        attribution: "Hoàn Kiếm Lake, Hanoi — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Temple_of_Literature_Hanoi.jpg",
        attribution: "Temple of Literature, Hanoi — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Ho_Chi_Minh_Mausoleum_Hanoi.jpg",
        attribution: "Ho Chi Minh Mausoleum, Hanoi — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Zambia",
    capital: "Lusaka",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
    flagAttribution: "Flag of Zambia — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Lusaka_City_Centre.jpg",
        attribution: "Lusaka City Centre — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Lusaka_National_Museum.jpg",
        attribution: "Lusaka National Museum — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Lusaka_Skyline.jpg",
        attribution: "Lusaka Skyline — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  },

  {
    country: "Zimbabwe",
    capital: "Harare",
    flagImage: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
    flagAttribution: "Flag of Zimbabwe — Wikimedia Commons (Public Domain)",
    capitalImages: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Harare_Africa_Unity_Square.jpg",
        attribution: "Africa Unity Square, Harare — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Harare_Central_Business_District.jpg",
        attribution: "Harare CBD — Wikimedia Commons (CC BY-SA 4.0)"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Harare_Gardens.jpg",
        attribution: "Harare Gardens — Wikimedia Commons (CC BY-SA 4.0)"
      }
    ]
  }
];


// -----------------------------
// MERGED ARRAY
// -----------------------------
const COUNTRIES = [
  ...COUNTRIES_A_E,
  ...COUNTRIES_F_L,
  ...COUNTRIES_M_R,
  ...COUNTRIES_S_U,
  ...COUNTRIES_V_Z
];
