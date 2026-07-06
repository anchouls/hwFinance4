import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStagedSex, applyFilters } from '../app/reducers/filterSlice';

import '../styles/Filter.css';

export function Filter() {
    const stagedSex = useSelector((state) => state.filter.staged.sex)
    const dispatch = useDispatch()

    return (
        <div className="filter">
            <div className="filter-item">
                <p> Sex </p>
                <input className={'checkbox'} type="checkbox" id={'sex-male'}
                       name="sex" value="male"
                       checked={stagedSex.male}
                       onChange={() => dispatch(toggleStagedSex('male'))}/>
                <label htmlFor="sex-male"> male </label>
                <input className={'checkbox'} type="checkbox" id={'sex-female'}
                       name="sex" value="female"
                       checked={stagedSex.female}
                       onChange={() => dispatch(toggleStagedSex('female'))}/>
                <label htmlFor="sex-female"> female </label>
            </div>
            <div className="filter-item">
                {/* TODO: add a second filter field once requirements are known */}
                <p> Filter 2 </p>
            </div>
            <div className="filter-apply">
                <button onClick={() => dispatch(applyFilters())}>
                    apply
                </button>
            </div>
        </div>
    );
}
