import React from 'react';
import { useSelector } from 'react-redux';
import { moodEntries } from '../data/moodEntries';

import '../styles/DataView.css';

export function DataViewer() {
    const filter = useSelector((state) => state.filter)

    const entries = moodEntries.filter((entry) =>
        (filter.sex === 'all' || entry.sex === filter.sex) &&
        (filter.mood === 'all' || entry.mood === filter.mood)
    )

    return (
        <div className="data-view">
            {entries.length === 0 ? (
                <p>No entries match the current filter.</p>
            ) : (
                <ul>
                    {entries.map((entry) => (
                        <li key={entry.id}>
                            {entry.name} — {entry.sex}, {entry.mood}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
