// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { feedbackRouter } from "./feedback";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("feedback.", feedbackRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
