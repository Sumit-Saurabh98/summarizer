"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { verification } from "@/actions/verification";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const NewVerificationForm = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Token does not exist!");
      setIsLoading(false);
      return;
    }

    verification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setIsLoading(false);
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md mx-4 text-center">
        {isLoading ? (
          <div className="py-12">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute top-0 -left-2 w-16 h-16 bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter blur-md animate-pulse"></div>
              <div className="absolute top-0 -right-2 w-16 h-16 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-md animate-pulse animation-delay-1000"></div>
              <div className="absolute -bottom-2 left-4 w-16 h-16 bg-orange-300 rounded-full opacity-70 mix-blend-multiply filter blur-md animate-pulse animation-delay-2000"></div>
            </div>
            <p className="mt-8 text-gray-600 font-medium">
              Verifying your account...
            </p>
          </div>
        ) : success ? (
          <div className="py-8 flex flex-col items-center">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={50} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Verification Successful!
            </h2>
            <p className="text-gray-600">{success}</p>
          </div>
        ) : (
          <div className="py-8 flex flex-col items-center">
            <div className="h-20 w-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle size={50} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Verification Failed
            </h2>
            <p className="text-gray-600">{error}</p>
          </div>
        )}
      <Link href={"/auth/login"}>
        <Button
          size="lg"
          variant={"link"}
          className=" bg-gradient-to-r from-purple-600 to-pink-600  text-white cursor-pointer hover:bg-gray-100"
        >
          Back to Login
        </Button>
      </Link>
      </div>
    </div>
  );
};
