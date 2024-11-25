import React from "react";
import SitesList from "@/components/SitesList";
import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function page() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="pt-3 pb-10">{/* <Breadcrumbs pages={pages} /> */}</div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <SitesList offset={offset} limit={limit} /> */}
      </Suspense>
    </div>
  );
}
