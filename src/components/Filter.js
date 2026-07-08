import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSex, applyFilters } from '../app/reducers/filterSlice';

import '../styles/Filter.css';

export function Filter() {
    const sex = useSelector((state) => state.filter.sex);
    const dispatch = useDispatch();

    return (
        <div className="filter">
            <div className="filter-item">
                <p> Sex </p>
                <input className={'checkbox'} type="checkbox" id={'sex-male'}
                       name="sex" value="male"
                       checked={sex.male}
                       onChange={() => dispatch(toggleSex('male'))}/>
                <label htmlFor="sex-male"> male </label>
                <input className={'checkbox'} type="checkbox" id={'sex-female'}
                       name="sex" value="female"
                       checked={sex.female}
                       onChange={() => dispatch(toggleSex('female'))}/>
                <label htmlFor="sex-female"> female </label>
            </div>
            <div className="filter-apply">
                <button onClick={() => dispatch(applyFilters())}>
                    apply
                </button>
            </div>
        </div>
    );
}
