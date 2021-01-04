test('should TRUE', () => {
	const isActive = true;

	if (isActive) {
		throw new Error('No está activo!!!');
	}
});
