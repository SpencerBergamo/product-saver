'use client';

import { useState } from 'react';

interface UploadedFile {
    file: File | null;
    mimeType: string | null;
    base64: string | null;
}

export default function ImageUploader() {
    const [uploadedFile, setUploadedFile] = useState<UploadedFile>({ file: null, mimeType: null, base64: null });
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result as string;
                const base64 = result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = error => reject(error);
        });
    };

    const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const mimeType = file.type;
            const base64 = await fileToBase64(file);

            setUploadedFile({ file, mimeType, base64 });
            console.log('File converted to base64:', {
                fileName: file.name,
                mimeType,
                base64Length: base64.length
            });
        }
    };

    const handleUpload = async () => {
        if (!uploadedFile.base64 || !uploadedFile.mimeType) {
            throw new Error('File missing or not converted to base64');
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/analyze-image', {

            });
        } catch (e) {
            console.error('Gemini Error: ', e);
        }
    };

    return (
        <div>
            <input type="file" title="Upload Product Image" onChange={handleImageSelect} />
            <button onClick={handleUpload}>Upload</button>
            {isLoading && <p>Loading...</p>}
            {result && <p>{result}</p>}
        </div>
    );
}