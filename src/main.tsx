import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import AppointmentForm from "./components/AppointmentForm";
import Dashboard from "./components/Dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <AppointmentForm />
    <Dashboard />
  </ChakraProvider>
);
