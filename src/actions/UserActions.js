import {SET_USER, SET_DOCTORS} from '../constants/ActionTypes';
export const SetUserAction = (payload) => {
	return {
		type: SET_USER,
		data: payload,
	};
};
