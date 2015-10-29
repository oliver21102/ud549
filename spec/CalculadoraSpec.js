describe('Calculadora', function() {
	var calculadora=new Calculadora();

	describe('Testeando la funcion sumar', function() {
		it('deberia sumar dos enteros', function() {
			expect(calculadora.sumar(10,10)).toEqual(10);
		});
	});
});