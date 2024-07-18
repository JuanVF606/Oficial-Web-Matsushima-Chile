
import {Route,Routes, useLocation} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Events from "../Pages/Events.jsx";
import EventsCategory from "../Pages/EventsCategory.jsx";
import Notices from "../Pages/Notices.jsx";
import OurDojos from "../Pages/OurDojos.jsx";
import Achievements from "../Pages/Achievements.jsx";
import ErrorPage from "../Pages/error/ErrorPage.jsx";
function Browser(){
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/quienes-somos" element={<About />} />
      <Route path="/actividades" element={<Events />} />
      <Route path="/actividades/categoria/:slug" element={<EventsCategory />} />
      <Route path="/noticias" element={<Notices />} />
      <Route path="/nuestros-dojos" element={<OurDojos />} />
      <Route path="/noticias/logros-y-reconocimiento" element={<Achievements />} /> 
      <Route path="/galeria" element={<ErrorPage />} />
    </Routes>
  );

}

export default Browser;