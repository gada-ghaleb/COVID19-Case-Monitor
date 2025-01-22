import Footer from "./components/layout/Footer";
import { DataProvider } from "./dataContext/DataContext";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <DataProvider>
      <AppRoutes />
      <Footer />
    </DataProvider>
  );
}

export default App;
