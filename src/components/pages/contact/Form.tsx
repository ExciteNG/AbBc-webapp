"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  country: z.string(),
  message: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      country: "",
      message: "",
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <MaxWidthWrapper className="text-primary space-y-5 flex flex-col items-center">
      <div className="space-y-2">
        <h2 className="font-semibold text-xl">Contact form for inquiries</h2>
        <p>
          To contact AbBc with a question or comment, please fill in the
          required fields below (marked with an asterisk) and click
          &quot;submit.&quot; The information you provide will be maintained in
          accordance with our privacy policy.
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full lg:w-1/2 flex flex-col gap-3"
          >
            <div className="w-full flex gap-3">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                      <Input placeholder="First name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@company.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Leave us a message..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Send message
            </Button>
          </form>
        </Form>
      </div>

      <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 md:justify-center md:items-center text-base md:text-center gap-3">
        <div className="flex flex-col">
          <h2 className="font-semibold">Phone Number</h2>
          <p>+1-617-803-7337</p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold">Email</h2>
          <p>info@AbBC.com</p>
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold">Address</h2>
          <p>39 Mill Pond Road Bolton, MA 01745</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactForm;
