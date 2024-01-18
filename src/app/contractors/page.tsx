import PageHeader from "@/components/PageHeader";
import { prisma } from "@/lib/prisma";

async function getContractors() {
  const allContractors = await prisma.contractor.findMany()
  return console.log(allContractors);
}

export default function Page() {
  getContractors()

  return (
    <>
      <PageHeader title="業者" />
    </>
  );
}
