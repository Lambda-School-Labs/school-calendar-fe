import React, { useState, useRef } from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks/hooks';
import { theme } from './theme';
import  Burger  from './components/Burger';
import Menu from './components/Menu';
import FocusLock from 'react-focus-lock';
import Splash from './components/Splash/';
import Home from './components/Home/';
// import PrivateRoute from "./components/PrivateRoute";
import Redirect from './components/Redirect';

import './App.css';

function App() {
   
  const [open, setOpen] = useState(false);
   const node = useRef();
   const menuId = 'main-menu';

   useOnClickOutside(node, () => setOpen(false));

  return (
     <ThemeProvider theme={theme}>
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
          </div>
          <div>
          {/*Links here*/}
          {/* <PrivateRoutes /> */}
      <Route exact path="/">
        <Splash />
      </Route>
      {/* Remember to change back to private */}
      {/* <PrivateRoute path="/home">
        <Home />
      </PrivateRoute> */}
      <Route path="/redirect">
        <Redirect />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
    </>
        </ThemeProvider>
        );
}

export default App;
