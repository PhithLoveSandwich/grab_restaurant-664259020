import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Update from "../pages/update";
import Form from "../pages/Form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
        {
        path: "/add",
        element: <Form />,
    },
        {
        path: "/update/:id",
        element: <Update />,
    },
]);
export default router;