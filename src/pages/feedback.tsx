import FeedbackTable from "@/Feedback/components/FeedbackTable";
import { Feedback } from "@/libs/types/feedback";
import Loading from "@/libs/ui/Loading";
import { trpc } from "@/utils/trpc";

export default function FeedbackPage() {
  const feedbacksQuery = trpc.useQuery(["feedback.all"]);

  if (feedbacksQuery.isLoading) {
    return <Loading />;
  }

  return <FeedbackTable feedbacks={feedbacksQuery.data as Feedback[]} />;
}
