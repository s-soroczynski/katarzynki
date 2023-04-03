import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { PathsEnum } from "constant";
import styled from "styled-components";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <StyledBox>
      <BottomNavigation
        showLabels
        onChange={(_, newValue: PathsEnum) => {
          navigate(newValue);
        }}
      >
        <BottomNavigationAction
          value={PathsEnum.HOME}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value={PathsEnum.RESTAURANTS}
          label="Restaurants"
          icon={<RestaurantIcon />}
        />
        <BottomNavigationAction
          value={PathsEnum.PROFILE}
          label="Profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
