import { Dispatch } from "react";
import { ActionCreatorWithPayload, PayloadAction } from "@reduxjs/toolkit";

import { SliceStatus } from "../globals";
import { leftPad } from "../utils/leftPad";

export const statusHandlerReducer = {
   initialize: (state: any, action: PayloadAction) => {
      state.status.state = SliceStatus.LOADING;
   },
   error: (state: any, action: PayloadAction) => {
      state.status.state = SliceStatus.ERROR;
   },
   success: (state: any, action: PayloadAction) => {
      state.status.state = SliceStatus.SUCCESS;
   },
};

type StatusHandler = {
   initialize: ActionCreatorWithPayload<any, string>;
   success: ActionCreatorWithPayload<any, string>;
   error: ActionCreatorWithPayload<any, string>;
};

export const wrapReduxAsyncHandler =
   (
      statusHandler: StatusHandler,
      callback: (dispatch: Dispatch<any>, args: any) => Promise<void>
   ) =>
   (args) =>
   async (dispatch) => {
      dispatch(statusHandler.initialize({}));

      callback(dispatch, args)
         .then(() => dispatch(statusHandler.success({})))
         .catch((err) => console.error(err));
   };

type baseSpriteParams = {
   pokemonId: number;
   baseUrl: string;
};

export async function transformSpriteToBaseImage({
   pokemonId,
   baseUrl,
}: baseSpriteParams) {
   return baseUrl + leftPad({ number: pokemonId, targetLength: 3 }) + ".png";
}
