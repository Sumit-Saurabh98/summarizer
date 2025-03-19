import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FileText, Zap, Shield, Check } from "lucide-react";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Summarize Documents <span className="bg-white text-transparent bg-clip-text">in Seconds</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">
                Our AI-powered document summarizer extracts key insights from any document instantly. Save time and focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="auth/register">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Try For Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                  View Demo
                </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                <div className="relative">
                  {/* Document preview mockup */}
                  <div className="bg-white shadow-xl rounded-lg p-5 transform rotate-2">
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-4/5 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 w-full bg-purple-100 rounded flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">Document Summary</span>
                    </div>
                  </div>
                  {/* Original document mockup */}
                  <div className="bg-white shadow-xl rounded-lg p-5 absolute top-10 right-10 transform -rotate-3">
                    <div className="h-4 w-1/3 bg-gray-200 rounded mb-3"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-4/5 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              How Our AI Summarizer Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get concise summaries from any document in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Upload Your Document</h3>
              <p className="text-gray-600">
                Upload any document format including PDF, Word, TXT files, or simply paste your text.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Processing</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes the content, identifies key points, and generates a concise summary.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Get Your Summary</h3>
              <p className="text-gray-600">
                Receive an accurate, well-structured summary that captures the essence of your document.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to meet your document summarization needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <p className="text-gray-600 mb-6">Perfect for occasional use</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Link href={"/auth/register"}>
                <Button variant="outline" className="w-full mb-6">Get Started</Button>
                </Link>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">5 documents per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Max 5 pages per document</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Standard summarization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg overflow-hidden transform scale-105">
              <div className="p-8 text-white">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-white/80 mb-6">Best for regular users</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-white/80">/month</span>
                </div>
                <Link href={"/auth/register"}>
                <Button className="w-full mb-6 bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
                </Link>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span className="text-white/90">50 documents per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span className="text-white/90">Max 25 pages per document</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span className="text-white/90">Advanced summarization</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span className="text-white/90">Key points extraction</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For teams and businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <Button variant="outline" className="w-full mb-6">Contact Sales</Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Unlimited documents</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Unlimited pages per document</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Priority processing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Summarize Your Documents?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who save time with our AI-powered document summarizer.
          </p>
          <Link href={"/auth/register"}>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Get Started For Free
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;