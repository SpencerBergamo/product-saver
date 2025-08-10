import { SignedIn, SignedOut } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { GoogleGenAI } from '@google/genai';
import { useState } from 'react';
import * as fs from 'node:fs';
import ImageUploader from './components/ImageUploader';

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignedOut>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Product Saver!</h1>
          <p className="text-gray-600 text-lg">Sign in to start saving your favorite products.</p>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome back!</h1>
          <ImageUploader />
        </div>
      </SignedIn>
    </div>
  );
}
