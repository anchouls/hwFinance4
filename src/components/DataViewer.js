import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../app/reducers/filterSlice';
import { moodEntries, filterEntries } from '../data/moodEntries';

import '../styles/DataView.css';

export function DataViewer() {
    const filter = useSelector(selectFilter)
    const entries = filterEntries(moodEntries, filter)

    if (entries.length === 0) {
        return (
            <div className="data-view">
                <p className="data-empty"> no entries match the filter </p>
            </div>
        );
    }

    return (
        <div className="data-view">
            <table className="data-table">
                <thead>
                <tr>
                    <th> name </th>
                    <th> sex </th>
                    <th> mood </th>
                    <th> date </th>
                </tr>
                </thead>
                <tbody>
                {entries.map((entry) => (
                    <tr key={entry.id}>
                        <td> {entry.name} </td>
                        <td> {entry.sex} </td>
                        <td> {entry.mood} </td>
                        <td> {entry.date} </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
