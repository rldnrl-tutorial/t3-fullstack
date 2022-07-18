import { createRouter } from "./context";
import { z } from "zod";

export const feedbackRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return await ctx.prisma.feedback.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      email: z.string().email(),
      message: z.string(),
      feedbackType: z.union([
        z.literal("FEEDBACK"),
        z.literal("ISSUE"),
        z.literal("IDEA"),
      ]),
      name: z.string(),
    }),
    async resolve({ ctx, input }) {
      await ctx.prisma.feedback.create({ data: input });
    },
  });
