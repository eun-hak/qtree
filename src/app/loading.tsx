import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-emerald-600 mb-3"></div>
        <p className="text-gray-600">로딩 중...</p>
      </div>
    </div>
  );
}



