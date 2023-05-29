import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  afterAuth(_auth, _req, _evt) {
    //   // handle users who aren't authenticated
    //   if (!auth.userId && !auth.isPublicRoute) {
    //     const signInUrl = new URL("/sign-in", req.url);
    //     signInUrl.searchParams.set("redirect_url", req.url);
    //     return NextResponse.redirect(signInUrl);
    //   }
    //   // rededirect them to organization selection page
    //   if (!auth.orgId && req.nextUrl.pathname !== "/org-selection") {
    //     const orgSelection = new URL("/org-selection", req.url);
    //     return NextResponse.redirect(orgSelection);
    //   }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
