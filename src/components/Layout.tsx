import React from "react";
import { Navigation } from "./Navigation";
import styled from "styled-components";
import { Box } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  return (
    <StyledBox>
      {props.children}
      <Navigation />
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  height: 100vh;
  width: 100%;
  position: relative;
`;
