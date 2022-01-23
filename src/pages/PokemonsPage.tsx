import React from "react";
import Layout from "../components/Layouts/Layout";
import { AiFillGithub } from "react-icons/ai";

const PokemonsPage = () => {
   return (
      <Layout title="Pokemons">
         <div className="flex items-center justify-center lg:justify-start">
            <h1 className="text-3xl lg:text-5xl font-semibold sm:text-left inline-block">
               React Pokédex
            </h1>
            <a
               href="https://github.com/fadhilradh/react-pokedex"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block ml-4 transform hover:opacity-50 hover:-translate-y-1 transition-all duration-150"
            >
               <AiFillGithub size={32} />
            </a>
         </div>
      </Layout>
   );
};

export default PokemonsPage;
