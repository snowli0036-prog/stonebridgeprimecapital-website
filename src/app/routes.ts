import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ClientsPage } from "./pages/ClientsPage";
import { InsightsPage } from "./pages/InsightsPage";
import { InsightDetailPage } from "./pages/InsightDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { ChinaPage } from "./pages/ChinaPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "clients", Component: ClientsPage },
      { path: "insights", Component: InsightsPage },
      { path: "insights/:slug", Component: InsightDetailPage },
      { path: "contact", Component: ContactPage },
      { path: "cn", Component: ChinaPage },
    ],
  },
]);