import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      greeting: "hello world",
    };
  }),
  secret: protectedProcedure.query(() => {
    return {
      greeting: "Secret message",
    };
  }),
});
