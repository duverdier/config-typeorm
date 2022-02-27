import { photoProviders } from './photo.providers';
import { userProviders } from './user.providers';

export const dbProviders = [...photoProviders, ...userProviders];
