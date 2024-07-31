import React, { lazy } from "react";

// Lazy load your pages
const Home = lazy(() => import("../Pages/Home.jsx"));
const About = lazy(() => import("../Pages/About.jsx"));
const Events = lazy(() => import("../Pages/Events.jsx"));
const EventsCategory = lazy(() => import("../Pages/EventsCategory.jsx"));
const Notices = lazy(() => import("../Pages/Notices.jsx"));
const OurDojos = lazy(() => import("../Pages/OurDojos.jsx"));
const Achievements = lazy(() => import("../Pages/Achievements.jsx"));
const ErrorPage = lazy(() => import("../Pages/error/ErrorPage.jsx"));
const Galeria = lazy(() => import("../Pages/Galeria.jsx"));
const NbyCat = lazy(() =>
  import("../../containers/notice/Notices_by_category.jsx")
);
const Details = lazy(() => import("../../containers/notice/Details.jsx"));

const Kyokushin = lazy(() => import("../Pages/Kyokushin.jsx"));

// Define your routes and links in a single array of objects
const routesAndLinks = [
  // Páginas Principales y Más Relevantes para SEO
  { path: "/", element: <Home />, title: "Inicio" },
  { path: "/quienes-somos", element: <About />, title: "Quiénes Somos" },
  { path: "/actividades", element: <Events />, title: "Actividades" },
  { path: "/noticias", element: <Notices />, title: "Noticias" },
  { path: "/nuestros-dojos", element: <OurDojos />, title: "Nuestros Dojos" },
  { path: "/galeria", element: <Galeria />, title: "Galería" },
  { path: "/kyokushin", element: <Kyokushin />, title: "Kyokushin" },

  // Páginas de Subcategorías y Detalles
  { path: "/actividades/categoria/:slug", element: <EventsCategory />, title: null },
  { path: "/noticias/:slug", element: <Details />, title: null },
  { path: "/noticias/categoria/:slug", element: <NbyCat />, title: null },
  { path: "/logros-y-reconocimientos", element: <Achievements />, title: null },

  // Ruta de Error (404)
  { path: "/*", element: <ErrorPage />, title: null }
];


export default routesAndLinks;
