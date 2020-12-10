import users from './users';
import hello from './hello';

export function registrarRutas(app) {
  app.use('/api', hello);
  app.use('/api/users', users);
}
