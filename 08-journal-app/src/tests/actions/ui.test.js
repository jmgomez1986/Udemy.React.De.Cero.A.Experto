import { setError, removeError, startLoading, finishLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('Pruebas en action ui', () => {
	test('deben de funcionar todas las acciones ', () => {
		const actionSetError = setError('ERROR!!!');
		const actionRemoveError = removeError();
		const actioStartLoading = startLoading();
		const actionFinishLoading = finishLoading();

		expect(actionSetError).toEqual({
			type: types.uiSetError,
			payload: 'ERROR!!!'
		});

		expect(actionRemoveError).toEqual({
			type: types.uiRemoveError
		});

		expect(actioStartLoading).toEqual({
			type: types.uiStartLoading
		});
		
		expect(actionFinishLoading).toEqual({
			type: types.uiFinishLoading
		});		

	});
	
});
