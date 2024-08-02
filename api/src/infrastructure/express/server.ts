import * as express from 'express';

export const app = express();

const port = process.env.PORT || 4321;

app.listen(port, () => {
  console.log(`Server listening -> http://127.0.0.1:${port}`);
});
