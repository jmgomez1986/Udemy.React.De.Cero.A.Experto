const { fileUpload } = require('../../helpers/fileUpload');

describe('Pruebas en fileUpload', () => {
	test('debe de cargar un archivo y retornar el URL ', async () => {
		const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
		const blob = await resp.blob();

		const file = new File([blob], 'foto.jpg');

		const url = await fileUpload(file);

		expect(typeof url).toBe('string');
	});

	test('debe de retornar un erros ', async () => {
		const file = new File([], 'foto.jpg');

		const url = await fileUpload(file);

		expect(url).toBe(null);
	});
	
});
