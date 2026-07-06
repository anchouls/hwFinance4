import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSexFilter, resetFilters } from '../app/reducers/filterSlice';

import '../styles/Filter.css';

export function Filter() {
    const dispatch = useDispatch();
    const sex = useSelector((state) => state.filter.sex);

    return (
        <div className="filter">
            <div className="filter-item">
                <p> Sex </p>
                <input
                    className={'checkbox'}
                    type="checkbox"
                    id={'sex-male'}
                    name="sex"
                    value="male"
                    checked={sex.male}
                    onChange={(e) => dispatch(setSexFilter({ key: 'male', value: e.target.checked }))}
                />
                <label htmlFor="sex-male"> male </label>
                <input
                    className={'checkbox'}
                    type="checkbox"
                    id={'sex-female'}
                    name="sex"
                    value="female"
                    checked={sex.female}
                    onChange={(e) => dispatch(setSexFilter({ key: 'female', value: e.target.checked }))}
                />
                <label htmlFor="sex-female"> female </label>
            </div>
            <div className="filter-item">
                <p> Category </p>
            </div>
            <div className="filter-apply">
                <button onClick={() => dispatch(resetFilters())}>
                    reset
                </button>
            </div>
        </div>
    );
}
