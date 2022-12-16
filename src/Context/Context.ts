import { createContext } from "react";

export interface AppContextInterface {
  ChangeColor: Function;
}

export const AppCtx = createContext<AppContextInterface | null>(null);