import { HTTP_METHODS } from "../globals";
import { createApiRequest } from "./axios";

class ApiCallCreator {
   getPokemonByNameOrId({ id }: { id: number | string }) {
      return createApiRequest({
         url: `/pokemon/${id}/`,
         method: HTTP_METHODS.GET,
         data: {},
      });
   }
}

const fromApi = new ApiCallCreator();
export default fromApi;
