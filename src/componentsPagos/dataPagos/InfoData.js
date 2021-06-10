import ImageOne from "../../img/house-5.jpg";
import ImageTwo from "../../img/house-2.jpg";
import ImageThree from "../../img/house-5.jpg";
import Button from "react-dom";

export const InfoData = {
  heading: "Pagos de Afiliados",
  paragraphOne:
    "Breve descripción",
  paragraphTwo:
    "Instrucción",
  buttonLabel: "Pagos Afiliados",
  image: ImageOne,
  reverse: false,
  delay: 100,
};

export const InfoDataTwo = {
  heading: "Pagos a la Asociación",
  paragraphOne:
    "Breve descripción",
  paragraphTwo:
    "Instrucción",
  buttonLabel: "Pagos de la asociación",  
  image: ImageTwo,
  reverse: true,
  delay: 300,
};

export const InfoDataThree = {
  heading: "Préstamos",
  paragraphOne:
    "descripción",
  paragraphTwo:
    "Instrucción",
  buttonLabel: "Préstamo",
  image: ImageThree,
  reverse: false,
  delay: 300,
};

export const InfoDataFour = {
  heading: "Bonos",
  paragraphOne:
    "descripción",
  paragraphTwo:
    "Instrucción",
  buttonLabel: "Bonos",
  image: ImageThree,
  reverse: true,
  delay: 300,
};

function newFunction() {
  return {
    heading: "Pagos de Afiliados",
    paragraphOne: "Breve descripción",
    paragraphTwo: "Instrucción",
    buttonLabel: "Pagos Afiliados",
  }
    < Button;
}

