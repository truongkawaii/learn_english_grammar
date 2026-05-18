import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@/app/ThemeContext";
import { AppRouter } from "@/router";

const App = () => (
  <ThemeProvider>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </ThemeProvider>
);

export default App;
