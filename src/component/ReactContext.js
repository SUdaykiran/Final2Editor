import React from "react";
const UserContext = React.createContext()
const UserProvider = UserContext.Provider
const UserCosumer = UserContext.Consumer
const AgeConsumer = UserContext.Consumer
export{UserProvider,UserCosumer,AgeConsumer}