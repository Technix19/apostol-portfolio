import { redirect } from "next/navigation"

export default function CvPage() {
  // The original template CV is not Lance's. Restore the viewer once his own CV is published.
  redirect("/")
}
