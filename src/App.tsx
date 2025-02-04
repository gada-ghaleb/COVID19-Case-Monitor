import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { DataProvider } from "./dataContext/DataContext";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <DataProvider>
      <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navigation />
      <div className="flex-grow">
      <AppRoutes />
      </div>
      <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
