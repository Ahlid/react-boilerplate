import syncActions from './sync';
import asyncActions from './async';

export default { ...asyncActions, ...syncActions };
