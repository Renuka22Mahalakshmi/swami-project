"use client";

import dynamic from "next/dynamic";

const BookReader = dynamic(() => import("@/components/book"), {
  ssr: false, // 🚀 stops server-side execution
});

export default function Page() {
  return (
    <div>
      <BookReader />
    </div>
  );
}
