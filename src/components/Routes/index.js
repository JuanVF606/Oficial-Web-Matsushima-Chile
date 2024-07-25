import React, { lazy } from 'react';

const Home = lazy(() => import("../Pages/Home.jsx"));
const About = lazy(() => import("../Pages/About.jsx"));
const Events = lazy(() => import("../Pages/Events.jsx"));
const EventsCategory = lazy(() => import("../Pages/EventsCategory.jsx"));
const Notices = lazy(() => import("../Pages/Notices.jsx"));
const OurDojos = lazy(() => import("../Pages/OurDojos.jsx"));
const Achievements = lazy(() => import("../Pages/Achievements.jsx"));
const ErrorPage = lazy(() => import("../Pages/error/ErrorPage.jsx"));
const Galeria = lazy(() => import("../Pages/Galeria.jsx"));
const NbyCat = lazy(() => import("../../containers/notice/Notices_by_category.jsx"));
const Details = lazy(() => import("../../containers/notice/Details.jsx"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/quienes-somos", element: <About /> },
  { path: "/actividades", element: <Events /> },
  { path: "/actividades/categoria/:slug", element: <EventsCategory /> },
  { path: "/noticias", element: <Notices /> },
  { path: "/noticias/:slug", element: <Details /> },
  { path: "/noticias/categoria/:slug", element: <NbyCat /> },
  { path: "/nuestros-dojos", element: <OurDojos /> },
  { path: "/noticias/logros-y-reconocimiento", element: <Achievements /> },
  { path: "/galeria", element: <Galeria /> },
  { path: "/*", element: <ErrorPage /> }
];

export default routes;
