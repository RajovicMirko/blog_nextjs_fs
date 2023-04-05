import { Palette, PaletteMode } from "@mui/material";

export type IPaletteResponse = Partial<Palette>;

export type IIPaletteFnProps = {
  mode: PaletteMode;
};

export type IPaletteFn = (props: IIPaletteFnProps) => Partial<Palette>;

const palette: IPaletteFn = ({ mode }) => ({
  mode,
});

export default palette;
