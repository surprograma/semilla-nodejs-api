import Usuario from './usuario';

describe('Usuario', () => {
  let fede;

  beforeAll(async () => {
    fede = await Usuario.create({
      fechaNacimiento: '1991-10-30',
      nombre: 'Fede',
      apellido: 'Aloi',
    });

    // Fijamos la fecha actual con un fake para que el test no dependa del día en que se ejecuta.
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2020-12-16').getTime());
  });

  afterAll(() => {
    // Volvemos a la fecha real.
    jest.useRealTimers();
  });

  test('campos básicos', () => {
    expect(fede).toEqual(
      expect.objectContaining({ nombre: 'Fede', fechaNacimiento: '1991-10-30' })
    );
  });

  test('edad - se calcula a partir de la fecha de nacimiento', () => {
    expect(fede.edad).toEqual(29);
  });

  describe('es tocayo de', () => {
    // El método build crea un objeto pero no lo persiste, por eso no hace falta el await.
    const otroFede = Usuario.build({ nombre: 'Fede', apellido: 'Sierra' });
    const daiana = Usuario.build({ nombre: 'Daiana', apellido: 'Sierra' });

    test('alguien con el mismo nombre', () => {
      expect(fede.esTocayoDe(otroFede)).toBeTruthy();
    });

    test('alguien con otro nombre', () => {
      expect(fede.esTocayoDe(daiana)).toBeFalsy();
    });
  });
});