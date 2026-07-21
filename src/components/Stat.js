import React from 'react';
import { useSelector } from 'react-redux';
import { moodEntries } from '../data/moodEntries';

import '../styles/Stat.css';

export function Stat() {
    const filter = useSelector((state) => state.filter)

    const entries = moodEntries.filter((entry) =>
        (filter.sex === 'all' || entry.sex === filter.sex) &&
        (filter.mood === 'all' || entry.mood === filter.mood)
    )

    const moodCounts = entries.reduce((acc, entry) => {
        acc[entry.mood] = (acc[entry.mood] || 0) + 1
        return acc
    }, {})

    return (
        <div className="Stat">
            <p>Total entries: {entries.length}</p>
            <ul>
                {Object.entries(moodCounts).map(([mood, count]) => (
                    <li key={mood}>{mood}: {count}</li>
                ))}
            </ul>
        </div>
    );
}
