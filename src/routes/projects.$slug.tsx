import { createFileRoute, redirect } from "@tanstack/react-router";

// Old case-study URLs (MCA work, now unpublished) send visitors to the Work page.
export const Route = createFileRoute("/projects/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/work" });
  },
});
