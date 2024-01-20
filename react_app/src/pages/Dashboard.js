import React from "react";
import { Box, Tab, Typography } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Create from "./Create";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className="bg-light p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <Typography variant="h3" className="my-0">
            EMPLOYER DASHBOARD
          </Typography>
          <Button variant="outlined">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </Box>
      <Box className="container my-5">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="nav nav-tabs"
            >
              <Tab label="Create Post" value="1" className="nav-link" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Create />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
