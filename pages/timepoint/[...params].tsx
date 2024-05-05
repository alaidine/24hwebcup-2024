import { useRouter } from "next/router";
import { TimePeriods } from "@/data/time-periods";

import Image from "next/image";

import Link from "next/link";

import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

function getTimes(period: string): string[] {
  const timePeriod = TimePeriods.find((tp) => tp.name === period);
  return timePeriod?.timePoints ?? [];
}

export default function Timepoint() {
  const router = useRouter();

  console.log(router.query);

  const period = router.query.params?.[0];
  const location = router.query.params?.[1];

  if (!period || !location) {
    return null;
  }

  const times = getTimes(period);

  console.log(times);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl py-5 font-bold">Choose a Timepoint</h2>
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Timepoints</h4>
          {times.map((time) => (
            <>
              <Link href={`/bookings/${period}/${location}/${time}`}>
              <div className="text-sm">
                {time}
              </div>
              </Link>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
