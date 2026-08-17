'use client';

import Image, { type ImageProps } from 'next/image';
import { ImageOff } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/cn';

export function SafeImage({ alt, className, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          'flex h-full w-full items-center justify-center bg-gray-100 text-gray-400',
          className
        )}
      >
        <ImageOff className="h-1/3 w-1/3 min-h-4 min-w-4 max-h-8 max-w-8" />
      </div>
    );
  }

  return <Image alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}
