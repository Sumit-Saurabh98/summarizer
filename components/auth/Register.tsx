"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { PropagateLoader } from "react-spinners";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Register = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      const response = await register(data);
      setError(response?.error);
      setSuccess(response?.success);
    });
  };

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <Form {...form}>
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
          <div
            className="hidden md:block md:w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: `url('/register.jpeg')`,
              boxShadow: "inset -10px 0 10px -10px rgba(0,0,0,0.3)",
            }}
          ></div>

          <div className="w-full md:w-1/2 p-4">
            <Card className="border-0 shadow-none">
              <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Create an account
                </CardTitle>
                <CardDescription className="text-center">
                  Enter your details below to create your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                  <Button
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50 hover:text-purple-600 transition-all"
                      onClick={() => onClick("google")}
                    >
                      <FcGoogle className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 hover:bg-gray-50 hover:text-purple-600 transition-all"
                      onClick={() => onClick("github")}
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Johndoe@112"
                            type="text"
                            disabled={isPending}
                            className="border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="johndoe112@example.com"
                            type="email"
                            disabled={isPending}
                            className="border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="******"
                            type="password"
                            disabled={isPending}
                            className="border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>

                  {error && (
                    <div className="flex items-center gap-2">
                      <AlertTriangle color="red" size={15} />{" "}
                      <p className="text-red-500">{error}</p>
                    </div>
                  )}

                  {success && (
                    <div className="flex items-center gap-2">
                      <CheckCircle color="green" size={15} />{" "}
                      <p className="text-green-500">{success}</p>
                    </div>
                  )}

<Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    {isPending ? (<PropagateLoader color="white" size={10}/>) : ("Sign Up")}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="font-semibold hover:underline text-purple-600"
                  >
                    Sign in
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Form>
  );
};
