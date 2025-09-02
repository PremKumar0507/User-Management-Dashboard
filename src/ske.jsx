import React from "react";

function SkeletonLoader() {
  return (
    <div className="skeleton-list">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="skeleton-card"></div>
      ))}
    </div>
  );
}

export default SkeletonLoader;

