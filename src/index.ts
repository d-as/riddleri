import { BindType } from './types/bind-types';
import { console } from './util';

$.bind(BindType.InitReady, () => {
  // eslint-disable-next-line global-require
  require('core-js'); // This has to be inside initReady
  console.log('Starting custom commands');
});
