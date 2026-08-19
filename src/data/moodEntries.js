// Mock dataset backing the data and stat views. It stands in for a real API
// until one exists — the shape (id, name, sex, mood, date) is what the views
// and the filter slice agree on.
export const moods = ['happy', 'neutral', 'sad']

export const moodEntries = [
    {id: 1, name: 'Alice', sex: 'female', mood: 'happy', date: '2022-01-03'},
    {id: 2, name: 'Bob', sex: 'male', mood: 'neutral', date: '2022-01-03'},
    {id: 3, name: 'Carol', sex: 'female', mood: 'sad', date: '2022-01-04'},
    {id: 4, name: 'Dave', sex: 'male', mood: 'happy', date: '2022-01-04'},
    {id: 5, name: 'Eve', sex: 'female', mood: 'neutral', date: '2022-01-05'},
    {id: 6, name: 'Frank', sex: 'male', mood: 'neutral', date: '2022-01-05'},
    {id: 7, name: 'Grace', sex: 'female', mood: 'happy', date: '2022-01-06'},
    {id: 8, name: 'Henry', sex: 'male', mood: 'happy', date: '2022-01-06'},
    {id: 9, name: 'Irene', sex: 'female', mood: 'neutral', date: '2022-01-07'},
    {id: 10, name: 'Jack', sex: 'male', mood: 'neutral', date: '2022-01-07'},
]

// Single source of truth for how a filter state narrows the dataset, so the
// data view and the stat view can never disagree about what "filtered" means.
export function filterEntries(entries, filter) {
    const sex = filter.sex || []
    const mood = filter.mood || 'all'

    return entries.filter((entry) =>
        (sex.length === 0 || sex.includes(entry.sex)) &&
        (mood === 'all' || entry.mood === mood)
    )
}
