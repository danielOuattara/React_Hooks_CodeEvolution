import { createContext } from "react";
import "./App.css";
import ComponentC from "./components/Component_C";

export const UserContext = createContext();
export const ChannelContext = createContext();

function App() {
  return (
    <>
      <UserContext.Provider value={"Daniel"}>
        <ChannelContext.Provider value={"Code Evolution on Youtube"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  );
}
export default App;
