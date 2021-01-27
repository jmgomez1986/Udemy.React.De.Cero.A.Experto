import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
  cloud_name: 'dognzyxa8', 
  api_key: '678912487314479', 
  api_secret: 'iFYs2Qzv-dqCx2t-PmWTfZ1WS3A' 
});

describe('Pruebas en fileUpload', () => {
	test('debe de cargar un archivo y retornar el URL ', async () => {
		const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
		const blob = await resp.blob();
		const file = new File([blob], 'foto.jpg');
		const url = await fileUpload(file);

		expect(typeof url).toBe('string');

		// Borrar imagen por ID
		const segments = url.split('/');
		const imgId = segments[segments.length - 1].replace('.png', '');

		await cloudinary.v2.api.delete_resources(imgId);
	});

	test('debe de retornar un erros ', async () => {
		const file = new File([], 'foto.jpg');

		const url = await fileUpload(file);

		expect(url).toBe(null);
	});
	
});
