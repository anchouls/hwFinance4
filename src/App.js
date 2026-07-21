import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import './styles/App.css';
import {Header} from "./components/Header";
import {Filter} from "./components/Filter";
import {Stat} from "./components/Stat";
import {DataViewer} from "./components/DataViewer";

function App() {
    const page = useSelector((state) => state.page.page)
    const dispatch = useDispatch()

    var pageObject = null
    switch (page) {
        case 'stat':
            pageObject = <Stat/>;
            break;
        case 'data':
            pageObject = <DataViewer/>;
            break;
        // TODO: no default case — an unexpected `page` value silently renders
        // nothing instead of falling back to a known page or showing an error.
    }

    return (
        <div className="App">
            <Header/>
            <div className='site-body'>
                <Filter/>
                <div className="main">
                    {pageObject}
                </div>
            </div>
        </div>
    );
}

export default App;
