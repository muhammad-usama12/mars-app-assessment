import "./App.css";
import HealthSafety from "./components/HealthSafety";
import PersonalInfo from "./components/PersonalInfo";
import TravelPreferences from "./components/TravelPreferences";

function App() {
  return (
    <div>
      <h1>ORDER OF FORMS</h1>
      <PersonalInfo />
      <TravelPreferences />
      <HealthSafety />
    </div>
  );
}

export default App;
