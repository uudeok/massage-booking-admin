import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import MainLayout from "../../components/layout/MainLayout";
import BookPage from "../../pages/BookPage";
import NoticePage from "../../pages/NoticePage";

const bookRouteObject: RouteObject[] = [
  { path: "/book", element: <BookPage /> },
];

const noticeRouteObject: RouteObject[] = [
  { path: "/notice", element: <NoticePage /> },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <App /> },
      ...bookRouteObject,
      ...noticeRouteObject,
    ],
  },
]);
