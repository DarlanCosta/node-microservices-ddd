import User from '../domain/User';
import UserEmail from '../domain/UserEmail';

export default interface IUserRepo {
  findByEmail(email: string | UserEmail): Promise<User>;
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
}
