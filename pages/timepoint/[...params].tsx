import { useRouter } from "next/router";
import { TimePeriods } from "@/data/time-periods";

export default function Timepoint() {
  const router = useRouter();

  console.log(router.query);
  
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center">Timepoint</h1>
    </div>
  );
}
