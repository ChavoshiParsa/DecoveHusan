import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import TakePhoto from "./components/pages/TakePhoto";
import AboutUs from "./components/pages/AboutUs";
import CallUs from "./components/pages/CallUs";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import WorkWithUs from "./components/pages/WorkWithUs";
import FAQ from "./components/pages/FAQ";
import Visualizer from "./components/pages/Visualizer";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/virtual-reality-services" element={<TakePhoto />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/call-us" element={<CallUs />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/work-with-us" element={<WorkWithUs />} />
      <Route path="/more" element={<Landing />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/visualizer" element={<Visualizer />} />
    </Routes>
  );
}

export default App;
