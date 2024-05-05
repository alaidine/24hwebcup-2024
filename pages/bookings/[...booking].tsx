"use client";

import { useRouter } from "next/router";

import { Booking } from "@/types";

import { db } from "@/firebase/clientApp";

import { doc, setDoc } from "firebase/firestore";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const bookingSchema = z.object({
  name: z.string().nonempty().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email().nonempty().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

type BookingProps = {
  location: string;
  period: string;
  timePoint: string;
};

export function BookingForm(props: BookingProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      email: "",
    },
  });

  async function addData(collection: string, data: Booking) {
    try {
      await setDoc(doc(db, collection, data.name), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function onSubmit(values: z.infer<typeof bookingSchema>) {
    const bookingInfos: Booking = {
      name: values.name,
      email: values.email,
      period: props.period,
      location: props.location,
      timePoint: props.timePoint,
    };

    toast({
      title: "Booking",
      description: "Booking submitted.",
    });

    console.log(bookingInfos);

    addData("bookings", bookingInfos);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>Put your name here.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>Put your email here.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default function Booking() {
  const router = useRouter();
  const { booking } = router.query;

  console.log(booking);

  const period = booking[0];
  const location = booking[1];
  const timePoint = booking[2];

  return (
    <div className="flex items-center justify-center h-screen">
      <BookingForm location={location} period={period} timePoint={timePoint} />
    </div>
  );
}
