"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function TutorLanguage({ params }: { params: { language: string } }) {
  const tutor = params.language;
  return (
    <>
      <h1>Language</h1>
      {tutor}
    </>
  );
}
