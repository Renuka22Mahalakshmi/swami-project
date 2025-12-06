"use client";

import dynamic from "next/dynamic";

// ✅ Use relative import
const BookReader = dynamic(() => import("@/components/book"), {
  ssr: false, // stops server-side execution
});

export default function Page() {
  return (
    <div>
      <BookReader pdfUrl="/book.pdf" pageWidth={900} />
    </div>
  );
}
