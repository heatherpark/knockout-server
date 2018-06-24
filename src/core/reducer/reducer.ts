import { INITIAL_ENTRIES_STATE, setEntries, next, vote } from '../core';

export default function reducer(state = INITIAL_ENTRIES_STATE, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return vote(state.vote, action.entry);
    default:
      return state;
  }
}