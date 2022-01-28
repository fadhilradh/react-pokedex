import React, { createContext, useContext, useEffect, useState } from "react";
import { getPokemons, PAGINATE_SIZE } from "../redux/pokemonSlice";
import { Waypoint as ReactWaypoint } from "react-waypoint";
import { useDispatch } from "react-redux";

type ContextType = {
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
   isLoading: boolean;
   paginationHandler: (
      page: number
   ) => (dispatch: React.Dispatch<any>) => Promise<void>;
   data: any;
};

const InfiniteScrollContext = createContext<ContextType>({
   page: 0,
   setPage: () => {},
   isLoading: true,
   paginationHandler: getPokemons,
   data: [],
});

const Waypoint = () => {
   const { isLoading, page, setPage, paginationHandler, data } = useContext(
      InfiniteScrollContext
   );
   const dispatch = useDispatch();

   useEffect(() => {
      setPage(data.length - (data.length % 6));
      // eslint-disable-next-line
   }, []);

   return (
       <div className="mt-48">
           {
               !isLoading && (
                   <ReactWaypoint 
                   onEnter={() => {
                       const dispatchPage = page + 
                   }}
                   />
               )
           }
       </div>
   )
};

const InfiniteScroll = ({
   children,
   paginationHandler,
   isLoading,
   data,
}: InfiniteScrollProps) => {
   const [page, setPage] = useState<number>(0);
};

return (
   <InfiniteScrollContext.Provider
      value={{
         page,
         setPage,
         isLoading,
         paginationHandler,
         data,
      }}
   ></InfiniteScrollContext.Provider>
);
