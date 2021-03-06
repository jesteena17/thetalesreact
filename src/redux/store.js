import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
//to use session or localstorage by redux
import { persistStore } from "redux-persist";

//middelwares are always arrays
  const middlewares=[logger];

  export const store=createStore(rootReducer,applyMiddleware(...middlewares)); 

 export const persistor=persistStore(store);
 