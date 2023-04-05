import { PaletteMode, ThemeOptions } from "@mui/material";

export type IIPaletteFnProps = {
  mode: PaletteMode;
};

export type IPaletteFn = (props: IIPaletteFnProps) => ThemeOptions["palette"];

const palette: IPaletteFn = ({ mode }) => ({
  mode,
  primary: {
    main: "#3A98B9",
  },
});

export default palette;
