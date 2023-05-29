import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { clerkClient } from "@clerk/nextjs/server";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.userId) {
      return {
        greeting: `Hello Guest`,
      };
    }
    const user = await clerkClient.users.getUser(ctx.userId);
    return {
      greeting: `Hello ${user.firstName ?? "Guest"}`,
    };
  }),
  testAuth: protectedProcedure.query(() => {
    return "secret message!!!";
  }),
});
