import React from 'react';

import { useSelector } from 'react-redux'
import './styles/App.css';
import {Header} from "./components/Header";
import {Filter} from "./components/Filter";
import {Stat} from "./components/Stat";
import {DataViewer} from "./components/DataViewer";

function App() {
    const page = useSelector((state) => state.page.page)
    const theme = useSelector((state) => state.theme.mode)

    var pageObject = null
    switch (page) {
        case 'stat':
            pageObject = <Stat/>;
            break;
        case 'data':
            pageObject = <DataViewer/>;
            break;
        default:
            pageObject = <Stat/>;
    }

    return (
        <div className={"App " + theme}>
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
