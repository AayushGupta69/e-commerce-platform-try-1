"use client";

import { Button } from "@e-commerce-platform/ui/components/ui/button";

export default function Home() {
  return (
    <div className="font-bold">
      <div className="bg-red-500">Red</div>
      <div className="bg-green-500">Green</div>
      <div className="bg-blue-500">Blue</div>
      <Button variant={"default"}>Click Me</Button>
    </div>
  );
}
