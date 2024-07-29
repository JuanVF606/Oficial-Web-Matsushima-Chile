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
  { path: "/", element: <Home />, title: "Bienvenida" },
  { path: "/quienes-somos", element: <About />, title: "Nosotros" },
  { path: "/actividades", element: <Events />, title: "Actividades" },
  {
    path: "/actividades/categoria/:slug",
    element: <EventsCategory />,
    title: null,
  },
  { path: "/noticias", element: <Notices />, title: "Noticias y Novedades" },
  { path: "/noticias/:slug", element: <Details />, title: null },
  { path: "/noticias/categoria/:slug", element: <NbyCat />, title: null },
  { path: "/nuestros-dojos", element: <OurDojos />, title: "Dojos" },
  {
    path: "/noticias/logros-y-reconocimiento",
    element: <Achievements />,
    title: null,
  },
  { path: "/galeria", element: <Galeria />, title: "Galeria" },
  { path: "/*", element: <ErrorPage />, title: null },
  { path: "/kyokushin", element: <Kyokushin />, title: "Kyokushin" },
];

export default routesAndLinks;
