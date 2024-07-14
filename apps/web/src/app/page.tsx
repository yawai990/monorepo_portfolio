import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <>
      <h1 className="text-blue-500">Hello web</h1>
      <Button variant="default" className="bg-secondary">
        Hello world
      </Button>
      <Button>Hello world</Button>
    </>
  );
}
