"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const user = session?.user;

  const onClickSignout = () =>{
    signOut();
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg mr-2">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SummAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Features
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem>
                  <Link href="/solutions/business" className="w-full">
                    For Business
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/education" className="w-full">
                    For Education
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/research" className="w-full">
                    For Research
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/pricing"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Authentication Buttons - Desktop */}
          {
            !user && (
              <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                Sign Up
              </Button>
            </Link>
          </div>
            )
          }

          {
            user && (
              <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                Dashboard
              </Button>
            </Link>
            <Button onClick={onClickSignout} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
              Sign Out
            </Button>
          </div>
            )
          }

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3">
            <Link
              href="/features"
              className="block py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>

            <div className="py-2">
              <button
                className="flex items-center justify-between w-full text-left text-gray-700"
                onClick={(e) =>
                  e.currentTarget.nextElementSibling?.classList.toggle("hidden")
                }
              >
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="hidden pl-4 mt-2 space-y-2">
                <Link
                  href="/solutions/business"
                  className="block py-1 text-gray-600 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Business
                </Link>
                <Link
                  href="/solutions/education"
                  className="block py-1 text-gray-600 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Education
                </Link>
                <Link
                  href="/solutions/research"
                  className="block py-1 text-gray-600 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Research
                </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className="block py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/blog"
              className="block py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            {!user && (
              <div className="pt-4 flex flex-col space-y-3">
                <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-gray-300">
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {user && (
              <div className="pt-4 flex flex-col space-y-3">
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Dashboard
                  </Button>
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Button onClick={onClickSignout} variant="outline" className="w-full border-gray-300">
                    Logout
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
