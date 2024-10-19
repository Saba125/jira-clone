"use client"
import DottedSeparator from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Form, FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "Minimum 8 characters"),
})

export const SignUpCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href="/privacy">
            <span className="text-blue-700">Privacy Policy</span>
          </Link>
          and{" "}
          <Link href="/terms">
            <span className="text-blue-700">Terms of service</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-6 ">
        <DottedSeparator />
      </div>
      <CardContent className="space-y-4">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="Enter email address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Enter password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size="lg" className="w-full">
              Log in
            </Button>
          </form>
        </FormProvider>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FcGoogle className="mr-2  size-5" />
          Log in with google
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full"
          disabled={false}
        >
          <FaGithub className="mr-2 size-5" />
          Log in with github
        </Button>
      </CardContent>
      <div className="px-7 ">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Don&apos;t have an account?
          <Link href="/sign-up">
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
