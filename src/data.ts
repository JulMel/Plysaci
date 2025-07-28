import img1 from "./img/panda.png";
import img2 from "./img/zirafa.png";
import img3 from "./img/papousek.png";
import img4 from "./img/kocka.png";
import img5 from "./img/pes.png";
import img6 from "./img/jezek.png";
import img7 from "./img/kralik.png";
import img8 from "./img/opice.png";
import img9 from "./img/tygr.png";
import img10 from "./img/slon.png";

export type Animal = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

const allAnimals: Animal[] = [
  {
    id: 1,
    name: "Panda",
    image: img1,
    description:
      "Měkoučká černo-bílá panda, ideální na mazlení i jako strážce snů.",
    price: 299,
  },
  {
    id: 2,
    name: "Žirafa",
    image: img2,
    description:
      "Dlouhokrká kamarádka s puntíky, která dohlédne až za obzor tvých snů.",
    price: 199,
  },
  {
    id: 3,
    name: "Papoušek",
    image: img3,
    description:
      "Barevný společník plný radosti, který ti vesele zašvitoří dobré ráno.",
    price: 269,
  },
  {
    id: 4,
    name: "Kočka",
    image: img4,
    description:
      "Hebká mňoukající přítelkyně, co se ráda tulí a chrání sny svým vrněním.",
    price: 249,
  },
  {
    id: 5,
    name: "Pes",
    image: img5,
    description:
      "Věrný chlupatý kamarád, který tě nikdy neopustí a vždy čeká s radostí.",
    price: 179,
  },
  {
    id: 6,
    name: "Ježek",
    image: img6,
    description:
      "Malý bodlinkový mazlík, který se tváří drsně, ale srdce má měkké jako peřinka.",
    price: 289,
  },
  {
    id: 7,
    name: "Králík",
    image: img7,
    description:
      "Ušatá heboučká kulička, která tě obejme měkkými tlapkami kdykoliv potřebuješ.",
    price: 399,
  },
  {
    id: 8,
    name: "Opice",
    image: img8,
    description:
      "Rošťák s velkýma očima, který miluje blbiny a zaručeně zvedne náladu.",
    price: 239,
  },
  {
    id: 9,
    name: "Tygr",
    image: img9,
    description:
      "Malý šelmičák se srdcem mazlíka – ideální parťák na dobrodružné sny.",
    price: 279,
  },
  {
    id: 10,
    name: "Slon",
    image: img10,
    description:
      "Moudrý obr s jemnou duší, který si všechna tajemství zapamatuje za tebe.",
    price: 219,
  },
];

export default allAnimals;
