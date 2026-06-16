import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-busy="true">
      <div
        className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-emerald-600"
        role="status"
        aria-label="로딩 중"
      />
    </div>
  );
}
