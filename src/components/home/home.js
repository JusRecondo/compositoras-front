import React, { useEffect } from "react";
import "./home.css";
import { Link } from 'react-router-dom';

const Home = ( props ) => {

  const { setHeading } = props;

  useEffect( () => {
    setHeading('Pioneras en música electroacústica')
  } );

  return (
    <main className="home">
      <section>
        <p>
          "La historia de la música electrónica está inevitablemente relacionada con la historia de la ciencia, son los avances científicos lo que permitió desarrollar máquinas capaces de grabar, modificar y reproducir sonidos en un momento donde lo habitual era la composición con instrumentos clásicos. El sesgo de género en la ciencia es algo que se viene criticando desde hace años, no sólo son pocas las mujeres que pueden aproximarse al trabajo científico si no que, además las pocas presentes son usualmente invisibilizadas."
        </p>
        <p>
          "En el desarrollo de maquinaria electrónica vinculada a la creación musical siempre ha habido mujeres y muchas de ellas además de ser matemáticas, físicas o ingenieras también eran compositoras de música o creadoras de sonidos. Es habitual hablar de los grandes pioneros de la electrónica y reconocer nombres como Leon Theremin, Pierre Henry, Pierre Schaeffer o Brian Eno. Pocos recuerdan que Leon Theremin consiguió popularizar en Theremin gracias a su gira con Clara Rockmore, del mismo modo pocos saben que justo antes de que Bob Moog creara su primer sintetizador en 1963, Daphne Oram ya había creado su Oramics en 1957." 
        </p>
        <Link to={{ pathname: "https://mujeresymusica.com/pioneas-musica-electronica/" }} target="_blank">Fuente: mujeresymusica.com/pioneas-musica-electronica/
        </Link>

      </section>
    </main>
  );
};

export default Home;
