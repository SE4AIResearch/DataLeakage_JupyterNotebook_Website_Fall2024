"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AssessmentIcon from "@mui/icons-material/Assessment";

const pages = [
  { name: "Resources", link: "/resources" },
  { name: "Sprints", link: "/sprints" },
  { name: "Time Tracking", link: "/time" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorElNav);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Home Link with Icon for both small and large screens */}
          <Box
            component="a"
            href="/"
            sx={{
              mx: 1,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <AssessmentIcon />
            <Button
              key="Home page"
              sx={{
                fontSize: "1.5em",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              Home
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls={open ? "menu-appbar" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              open={open}
              onClose={handleCloseNavMenu}
            >
              {/* Dropdown menu links for small screens */}
              {pages.map((page) => (
                <MenuItem
                  component="a"
                  href={page.link}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navigation links for large screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.link}
                sx={{
                  mx: 1,
                  my: 1,
                  color: "white",
                  display: "block",
                  fontFamily: "Arial,Helvetica,sans-serif", // Set a default font
                  fontWeight: "normal",
                  fontSize: "1.25em",
                  textTransform: "none", // Disable uppercase transformation
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Hover effect
                    color: "white",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
