import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">Welcome to Next.js!</h1>
      <Button glassname="blue">Get started</Button>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={283}
        height={64}
        className="rounded-lg"
      />
    </div>
  );
}
