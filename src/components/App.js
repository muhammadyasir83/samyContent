import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import themeComponent from './ui/Theme';
import HomePage from './webPages/HomePage';


function App() {
  return (
    <ThemeProvider theme={themeComponent}>
      <div>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
