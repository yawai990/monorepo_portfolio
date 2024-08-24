import Image from "next/image";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <>
      <h1>Hello portfoli</h1>
      <Button variant="default" className="bg-secondary">
        Hello world
      </Button>
      <Button variant="destructive">Hello 123</Button>
    </>
  );
}
