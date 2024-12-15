import { DataProvider } from "./dataContext/DataContext";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <DataProvider>
      <Navigation />
      <Footer />
    </DataProvider>
  );
}
export default App;
