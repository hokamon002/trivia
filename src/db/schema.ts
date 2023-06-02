import { relations } from "drizzle-orm";
import {
  foreignKey,
  index,
  int,
  mysqlTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

// declaring enum in database
export const games = mysqlTable("games", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 256 }),
  name: text("name"),
});

export const questions = mysqlTable(
  "questions",
  {
    id: serial("id").primaryKey(),
    question: text("question").notNull(),
    answer: text("answer").notNull(),
    mediaURI: varchar("media_URI", { length: 256 }),
    gameId: int("game_id"),
  },
  (question) => ({
    gameIdIdx: index("game_id_idx").on(question.gameId),
  })
);

export const gamesRelations = relations(games, ({ many }) => ({
  questions: many(questions),
}));

export const questionsRelations = relations(questions, ({ one }) => ({
  game: one(games, {
    fields: [questions.gameId],
    references: [games.id],
  }),
}));
