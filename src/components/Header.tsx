import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Github } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 w-full supports-[backdrop-filter]:bg-background/60 border-b border-border bg-background/95">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href="https://github.com/sankalp51"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href="https://x.com/Sankalp_31"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <FaXTwitter className="w-10 px-0" />
                <span className="sr-only">twitter</span>
              </div>
            </Link>
          </nav>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

{
  /* <h1>My Blog</h1>
<ThemeToggle /> */
}
