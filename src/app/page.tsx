import { SignedIn, SignedOut, SignIn, SignInButton, SignUp, SignUpButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { Upload, Image as ImageIcon, Camera, Search, DollarSign, Bell, Sparkles } from 'lucide-react';
import ImageUploader from './components/ImageUploader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SignedOut>
        <div className="flex min-h-screen max-w-7xl mx-auto">
          {/* Left Side - Hero Section */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-lg w-full space-y-8">
              {/* Main Hero Content */}
              <div className="text-center space-y-6">

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Never Lose Track of
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Products </span>
                    You Love
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    Shopping in person and found something perfect but can't buy it right now?
                    Just snap a photo and let our AI do the rest.
                  </p>
                </div>
              </div>

              {/* Feature Steps */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Camera className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">1. Snap a Photo</h3>
                    <p className="text-sm text-gray-600">Take a picture of any product you find while shopping</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Search className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">2. AI Finds It Online</h3>
                    <p className="text-sm text-gray-600">Our AI identifies the product and finds where you can buy it online</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">3. Price Comparison</h3>
                    <p className="text-sm text-gray-600">We compare prices across multiple retailers to find the best deals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <Bell className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">4. Sale Notifications</h3>
                    <p className="text-sm text-gray-600">Get notified when your saved products go on sale</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Sparkles className="h-4 w-4" />
                  <span>Join thousands of smart shoppers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Demo */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-lg w-full space-y-6">
              {/* Demo Header */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    See the Magic in Action
                  </h2>
                  <p className="text-gray-600">
                    Upload a product image to experience our AI-powered analysis
                  </p>
                </div>
              </div>

              {/* Demo Interface */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <DemoUploader />
              </div>

              {/* Demo Features */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3">
                  <Search className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-700">AI Recognition</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3">
                  <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-700">Price Matching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome back!</h1>
            <ImageUploader />
          </div>
        </div>
      </SignedIn>
    </div>
  );
}

// Demo component for unauthenticated users
function DemoUploader() {
  return (
    <div className="space-y-5">
      {/* Upload Area */}
      <div className="border-2 border-dashed border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center hover:border-purple-400 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 cursor-pointer group">
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center">
            <Upload className="h-8 w-8 text-black" />
          </div>

          <div className="space-y-2">
            <p className="text-lg font-semibold text-gray-900">
              Drop your product image here
            </p>
            <p className="text-sm text-gray-600">
              or click to browse files
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500 bg-white/60 rounded-full px-3 py-1">
            <ImageIcon className="h-3 w-3" />
            <span>PNG, JPG up to 10MB</span>
          </div>
        </div>
      </div>

      {/* Upload Button */}
      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <Upload className="h-4 w-4 mr-2" />
        Upload Product Image
      </Button>

      {/* Demo Notice */}
      <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 bg-white/60 rounded-lg px-3 py-2">
        <Sparkles className="h-3 w-3 text-purple-500" />
        <span>Demo mode - Sign up to save your analysis</span>
      </div>
    </div>
  );
}
