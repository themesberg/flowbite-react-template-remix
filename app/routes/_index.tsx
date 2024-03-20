import type { MetaFunction } from "@remix-run/node";
import { DarkThemeToggle } from "flowbite-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Remix</h1>
      <DarkThemeToggle />
    </main>
  );
}
