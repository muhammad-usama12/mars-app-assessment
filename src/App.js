import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HealthSafety from "./components/HealthSafety";
import PersonalInfo from "./components/PersonalInfo";
import TravelPreferences from "./components/TravelPreferences";

function App() {
  return (
    <div>
      <Header />
      <h1>ORDER OF FORMS</h1>
      <PersonalInfo />
      <TravelPreferences />
      <HealthSafety />
      <Footer />
    </div>
  );
}

export default App;
