import { db } from "../firebase/clientApp";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import { useSate } from "react";
import Image from "next/image";
import { TimePeriods } from "@/data/time-periods";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {TimePeriods.map((timePeriod) => (
          <CarouselItem key={timePeriod.name}>
            <Link href={`/location/${timePeriod.name}`}>
              <div className="p-1">
                <Card
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                  style={{
                    backgroundImage: `url(${timePeriod.foregroundImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <h2
                      className="text-2xl px-2 font-bold"
                      style={{
                        backdropFilter: "blur(10px)",
                        borderRadius: "5px",
                      }}
                    >
                      {timePeriod.name}
                    </h2>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Choose a time period</h1>
      <CarouselSpacing />
    </div>
  );
}
