import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "./pokemon.type";
import { SliceStatus } from "../globals";
import { statusHandlerReducer, wrapReduxAsyncHandler } from "./utilities";

type SliceState = {
   data: (Pokemon | null)[];
   status: {
      state: SliceStatus;
   };
};

const initialState: SliceState = {
   data: [],
   status: {
      state: SliceStatus.IDLE,
   },
};

const pokemonsSlice = createSlice({
   name: "pokemons",
   initialState,
   reducers: {
      ...statusHandlerReducer,
      initializePokemonsReducer(state, action) {
         const { size } = action.payload;
         const nullValues = new Array(size).fill(null);
         if (state.data.length === 0) {
            state.data = nullValues;
         } else {
            state.data = state.data.concat(nullValues);
         }
      },
      getPokemonsReducer(state, action) {
         const { pokemon, size, index } = action.payload;

         const isPokemonAlreadyExists = state.data.find(
            (existingPokemon) =>
               existingPokemon !== null && existingPokemon.id === pokemon.id
         );
         if (!isPokemonAlreadyExists) {
            state.data[state.data.length - (size - index)] = pokemon;
         }
      },
   },
});

export const pokemonsReducer = pokemonsSlice.reducer;
export const { initializePokemonsReducer, initialize, error, success } =
   pokemonsSlice.actions;

const statusHandler = { initialize, error, success };

export const getPokemons = wrapReduxAsyncHandler(
   statusHandler,
   async (dispatch, { page, cachedPokemons, pokemons }) => {
      dispatch(initializePokemonsReducer({ size }));
   }
);
