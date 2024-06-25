"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { CircleUser, Menu, MessageCircleMore, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigationMenuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Tutors", href: "/tutors" },
  { name: "Classes", href: "/classes" },
  { name: "Resources", href: "/resources" },
];

const profileMenuItems = [
  { name: "Settings", foo: "bar" },
  { name: "Support", foo: "bar" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-center">
      <div className="max-w-6xl flex justify-between w-full">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <GraduationCap className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-auto">
          {navigationMenuItems.map((item) => (
            <Link key={item.name} className={cn(pathname.startsWith(item.href) ? "text-foreground" : "text-muted-foreground", "transition-colors hover:text-foreground")} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
            <Button variant="secondary" size="icon" className="rounded-full">
              <MessageCircleMore className="h-5 w-5" />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {profileMenuItems.map((item) => (
                <DropdownMenuItem key={item.name}>{item.name}</DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-3 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <GraduationCap className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {navigationMenuItems.map((item) => (
              <Link key={item.name} className={cn(pathname === "/" ? "text-foreground" : "text-muted-foreground", "hover:text-foreground")} href={item.href}>
                {item.name}
              </Link>
            ))}
            {/* <div className="mt-auto">
              <div className="">Profile</div>
              <div className="flex flex-col gap-6">
                {profileMenuItems.map((item) => {
                  return (
                    <Link className="text-muted-foreground" href="#">
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div> */}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
