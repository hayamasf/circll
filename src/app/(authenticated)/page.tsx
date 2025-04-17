import { Suspense } from "react";
import Loading from "../loading";
import Stats from "@/components/Stats";

export default function Page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Stats />
      </Suspense>
    </>
  );
}
