import users from './users';

export function registrarRutas(app) {
  app.use('/api/users', users);
}
