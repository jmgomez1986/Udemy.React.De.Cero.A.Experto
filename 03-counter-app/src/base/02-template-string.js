const nombre   = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre = 'Pepe') {
    return 'Hola ' + nombre +'!';
}