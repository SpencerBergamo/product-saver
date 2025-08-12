'use client';

import { Upload, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DemoUploader() {
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Handle file selection here
            console.log('Selected file:', file);
            // You can add your file processing logic here
        }
    };

    const handleUploadAreaClick = () => {
        // Trigger the hidden file input
        document.getElementById('demo-file-input')?.click();
    };

    return (
        <div className="space-y-5">
            {/* Hidden file input */}
            <input
                id="demo-file-input"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
            />

            {/* Upload Area - Now clickable */}
            <div
                onClick={handleUploadAreaClick}
                className="border-2 border-dashed border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center hover:border-purple-400 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 cursor-pointer group"
            >
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

            {/* Upload Button - Also triggers file picker */}
            <Button
                onClick={handleUploadAreaClick}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
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
