import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

import { Sidebar, Topbar } from "./components";

const SidebarFilters = ({ children }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <Box display={"flex"}>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant={isMd ? "permanent" : "temporary"}
      />
      <Box marginLeft={{ xs: 0, md: 4 }} width={1}>
        <Topbar onSidebarOpen={handleSidebarOpen} />
        <Box paddingY={4}>{children}</Box>
        <Box display={"flex"} justifyContent={"end"} width={1}>
          <div className="pb-10">
            <Pagination count={10} size={"large"} color="primary" />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

SidebarFilters.propTypes = {
  children: PropTypes.node,
};

export default SidebarFilters;
