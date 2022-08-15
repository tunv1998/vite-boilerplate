import { rest } from 'msw';

export const handlers = [
  rest.get('/dummy', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
      })
    );
  }),
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
