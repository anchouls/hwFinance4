import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSex, setMood } from '../app/reducers/filterSlice';

import '../styles/Filter.css';

export function Filter() {
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    const [draftSex, setDraftSex] = useState(filter.sex)
    const [draftMood, setDraftMood] = useState(filter.mood)

    const toggleSex = (value) => {
        setDraftSex(draftSex === value ? 'all' : value)
    }

    const applyFilters = () => {
        dispatch(setSex(draftSex))
        dispatch(setMood(draftMood))
    }

    return (
        <div className="filter">
            <div className="filter-item">
                <p> Sex </p>
                <input className={'checkbox'} type="checkbox" id={'sex-male'}
                       name="sex" value="male" checked={draftSex === 'male'}
                       onChange={() => toggleSex('male')}/>
                <label htmlFor="sex-male"> male </label>
                <input className={'checkbox'} type="checkbox" id={'sex-female'}
                       name="sex" value="female" checked={draftSex === 'female'}
                       onChange={() => toggleSex('female')}/>
                <label htmlFor="sex-female"> female </label>

            </div>
            <div className="filter-item">
                <p> Mood </p>
                <select value={draftMood} onChange={(e) => setDraftMood(e.target.value)}>
                    <option value="all">all</option>
                    <option value="happy">happy</option>
                    <option value="neutral">neutral</option>
                    <option value="sad">sad</option>
                </select>
            </div>
            <div className="filter-apply">
                <button onClick={applyFilters}>
                    apply
                </button>
            </div>
        </div>
    );
}
