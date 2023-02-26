import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import RoutesFile from './Routes';
import Header from '../component/Header';
import Footer from '../component/Footer';


const RoutesMain = memo((props) => {

    return (
        /** router functionality **/
        <Router>
            <Suspense fallback={<></>}>
                <Header />
            </Suspense>
            <Suspense fallback={<></>}>
                <div className="">
                    <Routes>
                        {RoutesFile.filter(route => route.component)
                            .map(({ path, component: Component }, idx) => (
                                <Route
                                    key={idx}
                                    path={path}
                                    element={<Component />}
                                />
                            ))}
                    </Routes>
                </div>
                <Footer />
            </Suspense>


        </Router>
    );
});

export default RoutesMain;
