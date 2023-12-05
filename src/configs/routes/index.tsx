import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import OrderPage from "../../pages/OrderPage";
import NoticePage from "../../pages/notices/NoticePage";
import NoticeDetailPage from "../../pages/notices/NoticeDetailPage";
import NewNoticePage from "../../pages/notices/NewNoticePage";

const bookRouteObject: RouteObject[] = [
  { path: "/order", element: <OrderPage /> },
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
