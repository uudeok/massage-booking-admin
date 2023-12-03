import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import BookPage from "../../pages/BookPage";
import NoticePage from "../../pages/notices/NoticePage";
import NoticeDetailPage from "../../pages/notices/NoticeDetailPage";
import NewNoticePage from "../../pages/notices/NewNoticePage";

const bookRouteObject: RouteObject[] = [
  { path: "/book", element: <BookPage /> },
];

const noticeRouteObject: RouteObject[] = [
  {
    path: "/notice",
    children: [
      { index: true, element: <NoticePage /> },
      { path: ":id", element: <NoticeDetailPage /> },
      { path: "new", element: <NewNoticePage /> },
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
