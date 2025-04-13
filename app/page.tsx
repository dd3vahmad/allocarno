import { Button, Card, CardBody, CardHeader, CardFooter } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-xl font-bold">Welcome to HeroUI with Next.js 15</h2>
        </CardHeader>
        <CardBody>
          <p>This is a simple example using HeroUI components.</p>
        </CardBody>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="bordered">Cancel</Button>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
