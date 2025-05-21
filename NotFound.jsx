import React from "react";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <AlertCircle size={64} className="text-red-500" />
      <p className="text-4xl font-extrabold">404 Not Found</p>
    </div>
  );
}
