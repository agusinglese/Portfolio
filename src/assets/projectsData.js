import country1 from "./images/countries/1.jpg";
import country2 from "./images/countries/2.jpg";
import country3 from "./images/countries/3.jpg";
import country4 from "./images/countries/4.jpg";
import country5 from "./images/countries/5.jpg";
import country6 from "./images/countries/6.jpg";
import wellness1 from "./images/wellness/1.jpg";
import wellness2 from "./images/wellness/2.jpg";
import wellness3 from "./images/wellness/3.jpg";
import wellness4 from "./images/wellness/4.jpg";
import wellness5 from "./images/wellness/5.jpg";
import wellness6 from "./images/wellness/6.jpg";

export const projects = [
  {
    id: 1,
    name: "Wellness",
    primaryTec: ["React.js", "Node.js"],

    gitHub: "https://github.com/donlluque/PF-Wellness",
    deploy: "https://pf-wellness-iota.vercel.app/",
    bgImg:
      "https://user-images.githubusercontent.com/101023416/191938405-34a29738-1219-4ec1-a107-e6fe7fae1ae4.jpg",
    img: [wellness1, wellness2, wellness3, wellness4, wellness5, wellness6],
    description:
      "Countries App is a SPA (Single Page Application) that allows you to interact with the different countries of the world, filtering, ordering or adding tourist activities to each of them. Built with React.js, Redux, Node.js, Express and the design was made using Styled Components (pure CSS)",
  },
  {
    id: 2,
    name: "Countries App",
    primaryTec: ["React.js", "Node.js"],
    bgImg: "https://blog.imazu.es/media/banderas-paises.jpg",
    img: [country1, country2, country3, country4, country5, country6],
    gitHub: "https://github.com/agusinglese/PI-countries-main",
    deploy: "https://pi-countries-main-iota.vercel.app/",
    description:
      "Countries App is a SPA (Single Page Application) that allows you to interact with the different countries of the world, filtering, ordering or adding tourist activities to each of them. Built with React.js, Redux, Node.js, Express and the design was made using Styled Components (pure CSS)",
  },
  {
    id: 3,
    name: "Weather App",
    primaryTec: ["React.js"],
    bgImg: "https://blog.imazu.es/media/banderas-paises.jpg",
    gitHub: "",
    deploy: "",
    description:
      "By means of geolocation, the user can visualize the weather of the city where it is located by just entering the site and, in addition, has the possibility to search for the city that wants. Built with React.js.",
  },
];
