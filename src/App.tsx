import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as alltypes from './types/index'
import routes from './router';
import Loading from './components/Loading';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {routes
            // .filter((route) => !route.showMenu)
            .map((route: alltypes.RouteType, keys) => {
              const { path, component: Component } = route
              return (
                <React.Fragment key={keys}>
                  <Route
                    path={path}
                    element={
                      <Suspense fallback={<Loading />}>
                        <Component />
                      </Suspense>
                    }
                  />
                </React.Fragment>
              )
            })
          } </Routes>
      </Router>
    </>
  );
}

export default App;
