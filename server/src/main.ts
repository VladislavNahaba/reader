import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';

import { AppModule } from '~src/app.module';

async function start() {
  const PORT = process.env.PORT || 4500
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  if (process.env.NODE_ENV === 'development') {
    app.use(require('morgan')('dev'));
  }

  await app.listen(PORT, () => console.log(`
    Server has been started on: http://localhost:${PORT}
    Mode: ${process.env.NODE_ENV}`)
  );
}

start();
