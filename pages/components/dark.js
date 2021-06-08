import React, { useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import OutlinedCard from "./card";
import Navbar from './navbar'
const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
      <Navbar/>
      <OutlinedCard/>
      <Tooltip title="Toggle light/dark theme">
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}></Switch>
      </Tooltip>
      </Paper>
    </ThemeProvider>
    );
  };
  export default Dark;
