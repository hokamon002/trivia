import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { createInsertSchema } from "drizzle-zod";
import { games, questions } from "@/db/schema";
import { z } from "zod";

const gameSchema = createInsertSchema(games);
const questionSchema = createInsertSchema(questions);

const inputSchema = z.object({
  game: gameSchema,
  questions: z.array(questionSchema),
});

export const gameRouter = createTRPCRouter({
  create: protectedProcedure
    .input(inputSchema)
    .mutation(async ({ ctx, input }) => {
      await Promise.all([
        await ctx.drizzle
          .insert(games)
          .values({ userId: ctx.userId, ...input.game }),
        ctx.drizzle.insert(questions).values(input.questions),
      ]);
      return;
    }),
});
