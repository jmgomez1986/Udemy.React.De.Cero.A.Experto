import { shallow } from 'enzyme';
import { TodoList } from'../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el componente <TodoList />', () => {

	const handleDelete = jest.fn();
	const handleToggle = jest.fn();		
	const wrapper = shallow(
		<TodoList
			todos={demoTodos}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>
	)

	test('debe de mostrarse correctamente ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de tener 2 <TodoListItem /> ', () => {
		expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

		// Comprobar que se el <TodoListItem /> reciba las 3 propiedas
		expect(wrapper.find('TodoListItem').at(0).prop('todo')).toEqual(demoTodos[0]);		
		expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
		expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
	});
	
});
