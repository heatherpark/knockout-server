import { expect } from 'chai';
import 'mocha';

import * as actionTypes from './actionTypes';
import { EntriesState, INITIAL_STATE  } from './core';
import reducer from './reducer';

describe('core logic reducer', () => {
  let state: EntriesState;
  let expectedState: EntriesState;

  beforeEach(() => {
    state = {...INITIAL_STATE};
  });

  it('handles SET_ENTRIES', () => {
    const action = { 
      type: actionTypes.SET_ENTRIES, 
      entries: ['Germany']
    };
    expectedState = {
      ...state,
      entries: ['Germany']
    };

    const nextState = reducer(state, action);

    expect(nextState).to.deep.equal(expectedState);
  });

  it('handles NEXT', () => {
    state.entries = ['Germany', 'Spain'];
    const action = { type: actionTypes.NEXT };
    expectedState = {
      entries: [],
      vote: {
        pair: ['Germany', 'Spain']
      }
    };

    const nextState = reducer(state, action);

    expect(nextState).to.deep.equal(expectedState);
  });

  it('handles VOTE', () => {
    state.vote = {
      pair: ['Germany', 'Spain'],
    };
    const action = {
      type: actionTypes.VOTE, 
      entry: 'Germany'
    };
    expectedState = {
      ...state,
      vote: {
        ...state.vote,
        tally: { 'Germany': 1 }
      }
    };

    const nextState = reducer(state, action);

    expect(nextState).to.deep.equal(expectedState);
  });
});