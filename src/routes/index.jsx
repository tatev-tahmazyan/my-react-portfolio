import { Navigate } from "react-router";
import NotFoundPage from "../pages/NotFound";
import AboutMePage from "../pages/AboutMe";
import HomePage from "../pages/Home";
import PortfolioPage from "../pages/Portfolio";
import TaskPage from '../pages/Portfolio/Task';
import SingleTaskPage from '../pages/Portfolio/SingleTask';
import FormPage from '../pages/Portfolio/FormComponent';

export const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/about-me",
        element: <AboutMePage />
    },
    {
        path: "/portfolio",
        element: <PortfolioPage />
    },
    {
        path: "/portfolio/tasks",
        element: <TaskPage />
    },
    {
        path: "/portfolio/task/:task_id",
        element: <SingleTaskPage />
    },
    {
        path: "/portfolio/form",
        element: <FormPage />
    },
    {
        path: "/not-found",
        element: <NotFoundPage />
    },
    {
        path: "*",
        element: <Navigate to="/not-found" />
    }
]