import { createContext, useState } from "react";
// const AppContext = createContext();
const AppContext = createContext();
const AppProvider = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [isOpen,setisOpen] =useState(false);
  const open=()=>{
    setisOpen(true);
  };
  const close=()=>{
    setisOpen(false);
  }
  const ShowMenu = () => {
    // console.log("Inside ShowMenu");
    setIsNavOpen(true);
  };
  const CloseMenu = () => {
    setIsNavOpen(false);
  };
  const [Login, setLogin] = useState(false);
  const login = () => {
    setLogin(true);
    console.log("Login Done: " + Login);
    // console.log(Login);
  };
  const logout = () => {
    setLogin(false);
    console.log("Logout Done: " + Login);
    // console.log(Login);
    setisAdmin(false);
  };
  const AdminLogged = () => {
    setisAdmin(true);
  };

  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        ShowMenu,
        CloseMenu,
        Login,
        login,
        logout,
        isAdmin,
        AdminLogged,
        isOpen,
        open,
        close,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
