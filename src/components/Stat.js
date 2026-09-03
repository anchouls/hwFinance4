import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../app/reducers/filterSlice';
import { moodEntries, moods, filterEntries } from '../data/moodEntries';

import '../styles/Stat.css';

export function Stat() {
    const filter = useSelector(selectFilter)
    const entries = filterEntries(moodEntries, filter)

    const share = (count) => entries.length === 0
        ? 0
        : Math.round((count / entries.length) * 100)

    return (
        <div className="Stat">
            <p className="stat-total"> entries: {entries.length} </p>
            <ul className="stat-list">
                {moods.map((mood) => {
                    const count = entries.filter((entry) => entry.mood === mood).length
                    return (
                        <li key={mood} className="stat-item">
                            {mood}: {count} ({share(count)}%)
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
