/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Container from "components/Container";

const mock = [
  {
    title: "Built for developers",
    subtitle:
      "theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: "Designed to be modern",
    subtitle:
      "Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Documentation for everything",
    subtitle:
      "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const FeatureListWithDesktopAppScreenshot = () => {
  const theme = useTheme();

  const LeftSide = () => (
    <List disablePadding>
      {mock.map((item, index) => (
        <ListItem key={index} disableGutters>
          <ListItemAvatar>
            <Box
              component={Avatar}
              variant={"rounded"}
              color={'#2F6AD9'}
              bgcolor={`${theme.palette.primary.light}22`}
            >
              {item.icon}
            </Box>
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.subtitle} />
        </ListItem>
      ))}
    </List>
  );

  const RightSide = () => (
    <Box width={1}>
      <Box
        sx={{
          position: "relative",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            marginX: "auto",
          }}
        >
          <Box>
            <Box
              position={"relative"}
              zIndex={2}
              maxWidth={1}
              height={"auto"}
              sx={{ verticalAlign: "middle" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enable-background="new 0 0 999 577"
                viewBox="0 0 999 577"
              >
                <path
                  fill="#ffffff"
                  stroke="#ccc"
                  stroke-miterlimit="10"
                  d="M881.3 577H117.5c-14.4 0-26.2-11.8-26.2-26.2V26.7C91.3 12.3 103.1.5 117.5.5h763.9c14.4 0 26.2 11.8 26.2 26.2v524.2c-.1 14.3-11.9 26.1-26.3 26.1z"
                ></path>
                <circle cx="498" cy="23.8" r="3" fill="#F7F7F7"></circle>
                <path
                  fill="#edf1f7"
                  d="M996.3 561.2H2.9c-1.5 0-2.8-1.3-2.8-2.8 0-1.5 1.3-2.8 2.8-2.8h993.4c1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.2 2.8-2.8 2.8z"
                ></path>
                <path
                  fill="#edf1f7"
                  d="M499.6 563L0 561.2s24.1 11.3 117.8 15.8h763.5c93.7-4.5 117.8-15.8 117.8-15.8L499.6 563z"
                ></path>
                <path
                  fill="none"
                  stroke="#ccc"
                  stroke-miterlimit="10"
                  d="M591.4 562.7h-184c-1.9 0-3.5-1.6-3.5-3.5v-3.5H595v3.5c0 1.9-1.6 3.5-3.6 3.5z"
                ></path>
              </svg>
            </Box>
            <Box
              position={"absolute"}
              top={"8.4%"}
              left={"12%"}
              width={"76%"}
              height={"83%"}
              // border={`1px solid ${theme.palette.alternate.dark}`}
              zIndex={3}
            >
              <Box
                component={"img"}
                src="https://assets.maccarianagency.com/screenshots/dashboard.png"
                alt="Image Description"
                width={1}
                height={1}
                sx={{
                  objectFit: "cover",
                  // filter:
                  // theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div className="container">
      <Grid container spacing={4}>
        <Grid item container alignItems={"center"} xs={12} md={6}>
          <Box>
            <LeftSide />
          </Box>
        </Grid>
        <Grid item container alignItems={"center"} xs={12} md={6}>
          <RightSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default FeatureListWithDesktopAppScreenshot;
