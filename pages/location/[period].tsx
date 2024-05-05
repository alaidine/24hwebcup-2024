import { useRouter } from "next/router";
import { TimePeriods } from "@/data/time-periods";

import Link from "next/link";

import { Location } from "@/types";

import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
  artist: string;
  art: string;
}

function getLocations(period: string): Location[] {
  const timePeriod = TimePeriods.find((tp) => tp.name === period);
  return timePeriod?.locations ?? [];
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

function ScrollLocations({ period }: { period: string }) {
  const locations = getLocations(period);
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {locations.map((location) => (
          <figure key={location.name} className="shrink-0">
            <Link href={`/timepoint/${period}/${location.name}`}>
              <div className="overflow-hidden rounded-md">
                <Image
                  src={location.img}
                  alt={`Photo of ${location.name}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
            </Link>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              {location.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default function SelectedTimePeriod() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold">Choose a location</h2>
      <ScrollLocations period={router.query.period as string} />
    </div>
  );
}
