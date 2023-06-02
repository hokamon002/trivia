import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { createInsertSchema } from "drizzle-zod";
import { games, questions } from "@/db/schema";
import { z } from "zod";
import { InferModel } from "drizzle-orm";
const gameSchema = createInsertSchema(games);
const questionSchema = createInsertSchema(questions);

type GameSchema = InferModel<typeof games, "insert">;
type QuestionSchema = InferModel<typeof questions, "insert">;

const mockGame: GameSchema = {
  userId: "itsamemario",
  id: 123,
  name: "Mock Game",
};

const mockQuestions: QuestionSchema[] = [
  {
    id: 1,
    question: "Selbang Airport",
    answer: "Voltsillam",
    gameId: 123,
  },
  {
    id: 2,
    question: "Garuahi Airport",
    answer: "Voltsillam",
    gameId: 123,
  },
  {
    id: 3,
    question: "Pensacola Regional Airport",
    answer: "Viva",
    gameId: 123,
  },
  {
    id: 4,
    question: "Des Moines International Airport",
    answer: "Flowdesk",
    gameId: 123,
  },
  {
    id: 5,
    question: "Yengema Airport",
    answer: "Konklux",
    gameId: 123,
  },
];

const inputSchema = z.object({
  game: gameSchema,
  questions: z.array(questionSchema),
});

export const gameRouter = createTRPCRouter({
  create: protectedProcedure
    .input(inputSchema)
    .mutation(async ({ ctx, input }) => {
      console.log();
      await Promise.all([
        await ctx.drizzle
          .insert(games)
          .values({ userId: ctx.userId, ...input.game }),
        ctx.drizzle.insert(questions).values(input.questions),
      ]);
      return { hi: "there" };
    }),
});
