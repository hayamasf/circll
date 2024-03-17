import { prisma } from "@/lib/prisma";
import { formatDateTime } from "@/utils/dateUtils";
import EditLink from "@/components/EditLink";

export default async function Page({ params }: { params: { id: string } }) {

  const id = Number(params.id);

  if (isNaN(id)) {
    console.error("idは整数のはずです.")
    return;
  }

  const contractor = await prisma.contractor.findUnique({
    where: { id: id },
  });

  if (!contractor) {
    return <div>該当する業者が見つかりませんでした.</div>;
  }

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="px-4 sm:px-0">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {contractor.name}
          </h3>
          <EditLink href={`/contractors/${contractor.id}/edit`} />
        </div>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {contractor.title} {contractor.representative}
        </p>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          〒 {contractor.zipCode}
        </p>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          {contractor.prefecture}
          {contractor.city}
          {contractor.town}
          {contractor.address}
        </p>
        {contractor.address2 && (
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {contractor.address2}
          </p>
        )}
      </div>
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              登録
            </dt>
            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:mt-2">
              {formatDateTime(contractor.createdAt)}
            </dd>
            <dd className="text-xs leading-6 text-gray-700">
              {contractor.createdBy}
            </dd>
          </div>

          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              更新
            </dt>
            {contractor.updatedBy && (
              <div>
                <dd className="mt-1 text-xs leading-6 text-gray-700 sm:mt-2">
                  {contractor.createdAt.toLocaleString("ja-JP")}
                </dd>
                <dd className="text-xs leading-6 text-gray-700">
                  {contractor.updatedBy}
                </dd>
              </div>
            )}
          </div>
        </dl>
      </div>
    </div>
  );
}
