import React from 'react';

import '../styles/Filter.css';

export function Filter() {
    return (
        <div className="filter">
            <div className="filter-item">
                <p> Sex </p>
                <input className={'checkbox'} type="checkbox" id={'sex-male'}
                       name="sex" value="male"/>
                <label htmlFor="sex-male"> male </label>
                <input className={'checkbox'} type="checkbox" id={'sex-female'}
                       name="sex" value="female"/>
                <label htmlFor="sex-female"> female </label>

            </div>
            <div className="filter-item">
                <p> какое-то название2</p>
            </div>
            <div className="filter-apply">
                <button>
                    apply
                </button>
            </div>
        </div>
    );
}
