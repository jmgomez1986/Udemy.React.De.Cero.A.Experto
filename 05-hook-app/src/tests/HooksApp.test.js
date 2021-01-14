import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Pruebas en el componente <HooksApp />', () => {
	test('debe mostrar el componente <HooksApp /> correctamente ', () => {
		const wrapper = shallow(<HooksApp />);

		expect(wrapper).toMatchSnapshot();
	});
	
});
