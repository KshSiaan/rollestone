"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// ✅ Zod schema
const stripeSchema = z.object({
  publishable_key: z.string().min(1, "Publishable key is required"),
  secret_key: z.string().min(1, "Secret key is required"),
  webhook_secret: z.string().min(1, "Webhook secret is required"),
});

type StripeFormValues = z.infer<typeof stripeSchema>;

export default function StripeForm() {
  const form = useForm<StripeFormValues>({
    resolver: zodResolver(stripeSchema),
    defaultValues: {
      publishable_key: "",
      secret_key: "",
      webhook_secret: "",
    },
  });

  const onSubmit = (values: StripeFormValues) => {
    console.log("Stripe Form Submitted:", values);
  };

  return (
    <Card className="shadow-sm rounded-lg col-span-2">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between text-lg font-medium">
          Stripe Integration
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Connected
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="publishable_key"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stripe Publishable Key</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter publishable key"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="secret_key"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stripe Secret Key</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter secret key"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="webhook_secret"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stripe Webhook Secret</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter webhook secret"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Webhook Endpoint (read-only) */}
            <FormItem>
              <FormLabel>Webhook Endpoint</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  value="https://busticketing.com/stripe/webhook"
                  readOnly
                />
              </FormControl>
            </FormItem>

            <div className="grid grid-cols-2 gap-6">
              <Button type="submit">Save</Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                onClick={() => {
                  console.log("Testing connection with:", form.getValues());
                }}
              >
                Test Connection
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
