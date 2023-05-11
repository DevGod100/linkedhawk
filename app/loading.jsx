'use-client';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="loading">
          <div className="loading__spinner animate-spin"></div>
      </div>
    );
  }