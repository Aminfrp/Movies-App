import { SnackbarProvider } from "notistack";
import Header from "./layouts/header/Header";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={5000}
        variant="error"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Router />
      </SnackbarProvider>
    </div>
  );
}

export default App;
