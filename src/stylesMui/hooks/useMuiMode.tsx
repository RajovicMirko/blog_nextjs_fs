import { PaletteMode } from "@mui/material";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export enum MuiMode {
  dark = "dark",
  light = "light",
}
export type IModeSwitchContext = {
  mode: PaletteMode;
  toggleMuiMode: () => void;
};

export type IMuiModeProvider = PropsWithChildren;

const ModeSwitchContext = createContext({
  mode: MuiMode.dark,
  toggleMuiMode: () => "",
} as IModeSwitchContext);

export const MuiModeProvider = ({ children }: IMuiModeProvider) => {
  const [mode, setMode] = useState<PaletteMode>(MuiMode.dark);

  const toggleMuiMode = () => {
    setMode((prevState) => {
      const isDark = prevState === MuiMode.dark;
      return isDark ? MuiMode.light : MuiMode.dark;
    });
  };

  return (
    <ModeSwitchContext.Provider value={{ mode, toggleMuiMode }}>
      {children}
    </ModeSwitchContext.Provider>
  );
};

const useMuiMode = (): IModeSwitchContext => {
  const context = useContext(ModeSwitchContext);

  if (!context) throw Error("useMuiMode must be used under ModeSwitchContext");

  return context;
};

export default useMuiMode;
