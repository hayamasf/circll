import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ContractorsList() {
  const contractors = await prisma.contractor.findMany();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {contractors.map((contractor) => (
        <li key={contractor.id} className="relative py-5 hover:bg-gray-50">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href={`/contractors/${contractor.id}`}>
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {contractor.isPrefixEntityType && contractor.entityType}
                      {contractor.name}
                      {contractor.entityType &&
                        !contractor.isPrefixEntityType &&
                        contractor.entityType}
                    </Link>
                  </p>
                  <p className="mt-1 flex text-xs leading-5 text-gray-500">
                    {contractor.entityType &&
                      contractor.title + " " + contractor.representative}
                    {contractor.tradeName && contractor.tradeName}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {contractor.prefecture}
                    {contractor.city}
                    {contractor.town}
                    {contractor.address}
                  </p>
                  {contractor.address2 && (
                    <p className="text-sm leading-6 text-gray-900">
                      {contractor.address2}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
