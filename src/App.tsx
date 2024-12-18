import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { DataProvider } from "./dataContext/DataContext";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <DataProvider>
       <div className="flex">
        <Navigation />
        <div className="flex-1 ">
          <main className="py-4 px-4 sm:px-6 lg:px-8">
            <AppRoutes  />
          </main>
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
