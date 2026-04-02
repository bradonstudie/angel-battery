import { Route } from "next";

export interface NavigationItem {
  url: Route;
  text: string;
  id: string;
  sortOrder: number;
}
