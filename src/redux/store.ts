import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonsReducer } from "./pokemonSlice";

export const rootReducer = combineReducers({
   // cachedPokemons: cachedPokemonsReducer,
   pokemons: pokemonsReducer,
   // species: speciesReducer,
   // evolutionChain: evolutionChainReducer,
});

const store = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
