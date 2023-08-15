'use-client';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <section>
      <div className="flex items-center justify-center h-screen">
      <div className="animate-spin w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      </section>
    );
  }