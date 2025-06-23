const location = [
  {
    City: "Istanbul",
  },
  {
    City: "Izmir",
  },
  {
    City: "Bursa",
  },
];
const procedure = [
  {
    service: "Dental Check-up & Cleaning",
  },
  {
    service: " Tooth Filling",
  },
  {
    service: "Tooth Extraction",
  },
  {
    service: "Dental Crown (Cap)",
  },
  {
    service: "Teeth Whitening",
  },
  {
    service: "Dental Implant",
  },
  {
    service: "Dentures (False Teeth)",
  },
  {
    service: "Braces ",
  },
  {
    service: " Veneers",
  },
];

export const cities = location.map((item) => item.City);

export const procedures = procedure.map((item) => item.service);
