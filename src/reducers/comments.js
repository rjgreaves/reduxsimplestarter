/**
 * Created by reube on 02/07/2017.
 */
import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
        return [ ...state, action.payload ];
    }
    return state;
}