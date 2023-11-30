import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import BookPage from "../../pages/BookPage";
import NoticePage from "../../pages/NoticePage";
import NoticeDetailPage from "../../pages/NoticeDetailPage";

const bookRouteObject: RouteObject[] = [
  { path: "/book", element: <BookPage /> },
];

const noticeRouteObject: RouteObject[] = [
  {
    path: "/notice",
    children: [
      { index: true, element: <NoticePage /> },
      { path: ":id", element: <NoticeDetailPage /> },
    ],
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...bookRouteObject, ...noticeRouteObject],
  },
]);
