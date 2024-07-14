
import {Route,Routes, useLocation} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Events from "../Pages/Events.jsx";
import EventsCategory from "../Pages/EventsCategory.jsx";
function Browser(){
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/categoria/:slug" element={<EventsCategory />} />
    </Routes>
  );

}

export default Browser;