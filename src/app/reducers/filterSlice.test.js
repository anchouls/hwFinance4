import filterReducer, {
  initialFilterState,
  toggleSex,
  setSex,
  setMood,
  resetFilter,
} from './filterSlice';
import { moodEntries, filterEntries } from '../../data/moodEntries';

test('starts unfiltered', () => {
  expect(filterReducer(undefined, {type: 'unknown'})).toEqual({sex: [], mood: 'all'});
});

test('toggleSex adds and removes a value', () => {
  const withMale = filterReducer(initialFilterState, toggleSex('male'));
  expect(withMale.sex).toEqual(['male']);

  const withBoth = filterReducer(withMale, toggleSex('female'));
  expect(withBoth.sex).toEqual(['male', 'female']);

  expect(filterReducer(withBoth, toggleSex('male')).sex).toEqual(['female']);
});

test('setSex and setMood replace the current selection', () => {
  const state = filterReducer(initialFilterState, setSex(['female']));
  expect(filterReducer(state, setMood('sad'))).toEqual({sex: ['female'], mood: 'sad'});
});

test('resetFilter returns to the initial state', () => {
  const state = filterReducer(initialFilterState, setMood('happy'));
  expect(filterReducer(state, resetFilter())).toEqual(initialFilterState);
});

test('filterEntries narrows by sex and mood together', () => {
  expect(filterEntries(moodEntries, {sex: [], mood: 'all'})).toHaveLength(moodEntries.length);
  expect(filterEntries(moodEntries, {sex: ['female'], mood: 'all'})).toHaveLength(5);
  expect(filterEntries(moodEntries, {sex: [], mood: 'sad'})).toHaveLength(1);
  expect(filterEntries(moodEntries, {sex: ['male'], mood: 'sad'})).toHaveLength(0);
  expect(filterEntries(moodEntries, {sex: ['male', 'female'], mood: 'happy'})).toHaveLength(4);
});
