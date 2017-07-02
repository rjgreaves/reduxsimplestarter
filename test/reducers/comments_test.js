/**
 * Created by reube on 02/07/2017.
 */
import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        // eql checks all values against each value, equal matches obj ref
        expect(commentReducer(undefined, {})).to.eql([]);
    });
    it('SAVE_COMMENT', () => {
        let action = { type: SAVE_COMMENT, payload: 'new comment' };
        expect(commentReducer([], action)).to.eql(['new comment']);
    });
})