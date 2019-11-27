import auth from './auth';
import user from './user';
import data from './data';
import mall from './mall'

export default {
  ...auth,
  ...user,
  ...data,
  ...mall
}