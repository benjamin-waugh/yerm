"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage, BreadcrumbLink, BreadcrumbSeparator } from "../ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  const splitPathnames = pathname.split("/");
  const breadcrumbs = splitPathnames.slice(1, splitPathnames.length);

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {breadcrumbs.map((item, i) => {
          const allBefore = breadcrumbs.slice(0, i + 1).join("/");
          const formattedItem = item.replace("-", " ");

          return (
            <React.Fragment key={`fragment-${item}`}>
              <BreadcrumbItem key={`item-${item}`} className="capitalize">
                {i === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>{formattedItem}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={`/${allBefore}`}>{formattedItem}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {i !== breadcrumbs.length - 1 && <BreadcrumbSeparator key={`separator-${item}`} />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
