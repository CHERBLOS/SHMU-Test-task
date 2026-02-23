import type { RouteProps } from "react-router-dom";
import { MainPage } from "../../../../pages/MainPage/MainPage";
import { ChartPage } from "../../../../pages/ChartPage/ChartPage";
import { NotFoundPage } from "../../../../pages/NotFoundPage/NotFoundPage";


export enum AppRoutes {
  MAIN = "main",
  CHART = "chart",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CHART]: "/chart/",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CHART]: {
    path: `${RoutePath.chart}:id`,
    element: <ChartPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};