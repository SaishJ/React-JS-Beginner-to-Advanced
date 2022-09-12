import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;

/*
Context provides a way to pass data through the component tree without having to pass props down manuallly at every level. 
*/
