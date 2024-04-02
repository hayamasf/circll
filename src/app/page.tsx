import Stats from "@/components/Stats";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <>
      <div>これは</div>
      <Suspense fallback={<Loading />}>
        <Stats />
      </Suspense>
    </>
  );
}
