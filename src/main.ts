import './style.scss';

import cardService from './app/card-service';

const bootstrap = () => {
  cardService.init();
};

bootstrap();
