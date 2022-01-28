import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceStatus } from "../globals";
import { RootState } from "./store";
import { shuffle } from "../utils/shuffle";
import { statusHandlerReducer, wrapReduxAsyncHandler } from "./utilities";
import fromApi from "../services/fromApi";
import { NamedAPIResource } from "./types";
import { camelCaseObject } from "../utils/camelCaseObject";

export enum PokemonGenerationsEnum {
   GENERATION_1 = "151",
   GENERATION_2 = "251",
   GENERATION_3 = "386",
   GENERATION_4 = "494",
   GENERATION_5 = "649",
   GENERATION_6 = "721",
   GENERATION_7 = "809",
}

type SliceState = {
   cache: (NamedAPIResource & { distance: number })[];
   data: (NamedAPIResource & { distance: number })[];
   status: {
      state: SliceStatus;
   };
};

const initialState: SliceState = {
   cache: [],
   data: [],
   status: {
      state: SliceStatus.IDLE,
   },
};

const cachedPokemonsSlice = createSlice({
   name: "cachedPokemons",
   initialState,
   reducers: {
      ...statusHandlerReducer,
      getCachedPokemonsReducer(
         state,
         action: PayloadAction<{
            cachedPokemons: (NamedAPIResource & { distance: number })[];
         }>
      ) {
         const { cachedPokemons } = action.payload;
         state.cache = cachedPokemons;
         state.data = shuffle([...cachedPokemons]);
      },
   },
});

export const cachedPokemonsReducer = cachedPokemonsSlice.reducer;

export const { initialize, error, success, getCachedPokemonsReducer } =
   cachedPokemonsSlice.actions;

const statusHandler = { initialize, error, success };

export const cachedPokemonsSelector = (state: RootState) =>
   state.cachedPokemons;

// actions
export const getCachedPokemons = wrapReduxAsyncHandler(
   statusHandler,
   async (dispatch) => {
      const { results } = await fromApi.getPokemons(
         Number(PokemonGenerationsEnum.GENERATION_7)
      );
      const transformedPokemons = results.map((res: NamedAPIResource) => ({
         ...res,
         distance: 0,
      }));
      dispatch(
         getCachedPokemonsReducer({
            cachedPokemons: camelCaseObject(transformedPokemons),
         })
      );
   }
);
