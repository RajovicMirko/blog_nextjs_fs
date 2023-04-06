import { Box, styled } from "@mui/material";

const ScrollWrapperPage = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  ...theme.mixins.mainHeight,
}));

export default ScrollWrapperPage;
