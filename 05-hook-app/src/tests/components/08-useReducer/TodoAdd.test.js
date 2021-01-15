import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en el componente <TodoApp />', () => {
	const handleAddTodo = jest.fn();
	const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

	test('debe de mostrarse correctamente ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('NO debe de llamar handleAddTodo', () => {
		const formSubmit = wrapper.find('form').prop('onSubmit');

		formSubmit({ preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	test('debe de llamar handleAddTodo', () => {
		const newTodo = {
			id: expect.any(Number),
			desc: 'Aprender React',
			done: false,
		};

		const value = newTodo.desc;

		wrapper.find('input').simulate('change', {
			target: {
				value,
				name: 'description',
			},
		});

		const formSubmit = wrapper.find('form').prop('onSubmit');

		formSubmit({ preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledTimes(1); // Comprueba que se llamo la funcion una vez
		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // Comprueba que la funcion se llamo con un objeto como parametro
		expect(handleAddTodo).toHaveBeenCalledWith(newTodo); // Comprueba que la funcion se llamo con un objeto especifico como parametro
		
		expect(wrapper.find('input').prop('value')).toBe(''); // Comprueva que el input del formulario se vacio (se hizo el reset del form)
	});
});
