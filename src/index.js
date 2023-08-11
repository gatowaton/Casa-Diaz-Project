import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConstextoProvider } from "./Context/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <ConstextoProvider>
         <App />
      </ConstextoProvider>
   </React.StrictMode>
);
