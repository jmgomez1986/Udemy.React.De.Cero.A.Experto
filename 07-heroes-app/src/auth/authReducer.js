import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				...action.payload,
				logged: true,
			};

		case types.login:
			return {
				logged: false,
			};

		default:
			return state;
	}
};
