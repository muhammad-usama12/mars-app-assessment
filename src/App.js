import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HealthSafety from "./components/HealthSafety";
import PersonalInfo from "./components/PersonalInfo";
import TravelPreferences from "./components/TravelPreferences";
import video from "./assets/mars_stock.mp4";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    age: "",
    phoneNum: "",
    email: "",
    nationality: "",
    dietaryChoice: "",
    allergyChoice: "",
    healthCondition: "",
    tierChoice: "",
    dietaryExtraNeeds: "",
    allergyExtraNeeds: "",
    travelExtraNeeds: "",
    genderChoice: "",
    healthExtraNeeds: "",
    healthConditionExtraNeeds: "",
    specialRequests: "",
    emergencyFirstName: "",
    emergencyLastName: "",
    emergencyPhoneNum: "",
  });

  const [currentView, setCurrentView] = useState(0);

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const finalSubmission = (finalData) => {
    console.log("Final Form Submitted", finalData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      finalSubmission(newData);
      return;
    }

    setCurrentView((prev) => prev + 1);
  };
  const handlePreviousStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentView((prev) => prev - 1);
  };

  const views = [
    <PersonalInfo next={handleNextStep} data={data} />,
    <TravelPreferences
      next={handleNextStep}
      back={handlePreviousStep}
      diet={handleCheckboxChange}
      allergies={handleCheckboxChange}
      data={data}
    />,
    <HealthSafety
      next={finalSubmission}
      back={handlePreviousStep}
      data={data}
    />,
  ];
  return (
    <div>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      {views[currentView]}
    </div>
  );
}

export default App;
