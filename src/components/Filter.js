import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSex, setMood, resetFilter, selectFilter } from '../app/reducers/filterSlice';
import { moods } from '../data/moodEntries';

import '../styles/Filter.css';

export function Filter() {
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch()

    // Selections are kept locally until "apply" is pressed, so the views only
    // update once the user is done picking.
    const [draftSex, setDraftSex] = useState(filter.sex)
    const [draftMood, setDraftMood] = useState(filter.mood)

    const toggleDraftSex = (value) => {
        setDraftSex(draftSex.includes(value)
            ? draftSex.filter((sex) => sex !== value)
            : [...draftSex, value])
    }

    const apply = () => {
        dispatch(setSex(draftSex))
        dispatch(setMood(draftMood))
    }

    const reset = () => {
        setDraftSex([])
        setDraftMood('all')
        dispatch(resetFilter())
    }

    return (
        <div className="filter">
            <div className="filter-item">
                <p> Sex </p>
                <input className={'checkbox'} type="checkbox" id={'sex-male'}
                       name="sex" value="male"
                       checked={draftSex.includes('male')}
                       onChange={() => toggleDraftSex('male')}/>
                <label htmlFor="sex-male"> male </label>
                <input className={'checkbox'} type="checkbox" id={'sex-female'}
                       name="sex" value="female"
                       checked={draftSex.includes('female')}
                       onChange={() => toggleDraftSex('female')}/>
                <label htmlFor="sex-female"> female </label>

            </div>
            <div className="filter-item">
                <p> Mood </p>
                <select id={'mood'} aria-label="mood"
                        value={draftMood}
                        onChange={(event) => setDraftMood(event.target.value)}>
                    <option value="all"> all </option>
                    {moods.map((mood) => (
                        <option key={mood} value={mood}> {mood} </option>
                    ))}
                </select>
            </div>
            <div className="filter-apply">
                <button onClick={apply}>
                    apply
                </button>
                <button onClick={reset}>
                    reset
                </button>
            </div>
        </div>
    );
}
