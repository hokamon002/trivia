import { games, questions } from "@/db/schema";
import { createInnerTRPCContext } from "@/server/api/trpc";
import { eq, type InferModel } from "drizzle-orm";
import { expect, describe, test, beforeAll } from "vitest";

const ctx = createInnerTRPCContext({});
type GameSchema = InferModel<typeof games, "insert">;
type QuestionSchema = InferModel<typeof questions, "insert">;

const gameId = 123;

const mockGame: GameSchema = {
  userId: "itsamemario",
  id: gameId,
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

describe("game creation", () => {
  beforeAll(async () => {
    await Promise.all([
      ctx.drizzle.delete(games).where(eq(games.id, gameId)),
      ctx.drizzle.delete(questions).where(eq(questions.gameId, gameId)),
    ]);
    await Promise.all([
      ctx.drizzle.insert(games).values(mockGame),
      ctx.drizzle.insert(questions).values(mockQuestions),
    ]);
  });
  test("test", () => {
    expect(true).toBe(true);
  });
});
