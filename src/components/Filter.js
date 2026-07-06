import React from 'react';

import '../styles/Filter.css';

export function Filter() {
    return (
        <div className="filter">
            {/* TODO: checkboxes are uncontrolled and not wired to redux (filterSlice is empty) —
                selecting them currently has no effect on the app state. */}
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
                {/* TODO: placeholder label — replace with the real filter this item represents */}
                <p> какое-то название2</p>
            </div>
            <div className="filter-apply">
                {/* TODO: button has no onClick — nothing happens when clicked */}
                <button>
                    apply
                </button>
            </div>
        </div>
    );
}
