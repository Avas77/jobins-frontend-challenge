export const CountryData = [
  {
    id: 1,
    name: "United States",
    url: "/assets/usa.svg",
    total: "30k",
    progressValue: 50,
    isProfit: true,
    percent: "25.8%",
  },
  {
    id: 2,
    name: "Brazil",
    url: "/assets/brazil.svg",
    total: "26k",
    progressValue: 30,
    isProfit: false,
    percent: "16.2%",
  },
  {
    id: 3,
    name: "Australia",
    url: "/assets/aus.svg",
    total: "17k",
    progressValue: 10,
    isProfit: false,
    percent: "11.9%",
  },
];

export type CountryDataType = (typeof CountryData)[0];
