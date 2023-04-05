import DarkModeIcon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/WbSunny";
import { Box, Typography } from "@mui/material";
import useMuiMode from "src/style/hooks/useMuiMode";

const ButtonColorMode = () => {
  const { mode, toggleMuiMode } = useMuiMode();

  const InactiveModeIcon = mode === "dark" ? LightModeIcon : DarkModeIcon;
  const inactiveModeText = mode === "dark" ? "Light mode" : "Dark mode";

  return (
    <Box sx={btnStyle} onClick={toggleMuiMode}>
      <Typography>{inactiveModeText}</Typography>
      <InactiveModeIcon fontSize="small" />
    </Box>
  );
};

const btnStyle = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  columnGap: "4px",
};

export default ButtonColorMode;
