import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { AdminProvider } from "./context/AdminContext";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <AppContextProvider>
      <AdminProvider>
        <ThemeProvider>
          <TooltipProvider>
            <App />
          </TooltipProvider>
        </ThemeProvider>
      </AdminProvider>
    </AppContextProvider>
  </BrowserRouter>
);
