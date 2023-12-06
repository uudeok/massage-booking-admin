import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import OrderPage from "../../pages/orders/OrderPage";
import NoticePage from "../../pages/notices/NoticePage";
import NoticeDetailPage from "../../pages/notices/NoticeDetailPage";
import NewNoticePage from "../../pages/notices/NewNoticePage";
import OrderDetailPage from "../../pages/orders/OrderDetailPage";
import OrderManagePage from "../../pages/orders/OrderManagePage";

const bookRouteObject: RouteObject[] = [
  {
    path: "/order",
    children: [
      { index: true, element: <OrderPage /> },
      { path: "detail", element: <OrderDetailPage /> },
      { path: "manage", element: <OrderManagePage /> },
    ],
  },
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
