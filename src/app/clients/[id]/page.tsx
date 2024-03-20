"use client";

import { useParams } from "next/navigation";
import { formatDateTime } from "@/utils/dateUtils";
import EditLink from "@/components/EditLink";

export default function Page() {
  const params = useParams();
  const clientId = Number(params.id);

  if (isNaN(clientId)) {
    console.log("不正な顧客IDです.");
    return "顧客IDをご確認ください.";
  }

  return (
    <div>{clientId}</div>
    // <div className="container mx-auto max-w-3xl">
    //     <div className="px-4 sm:px-0">
    //         <div className="flex items-center justify-between">
    //             <h3 className="text-base font-semibold leading-7 text-gray-900">
    //                 {client.name}
    //             </h3>
    //             <EditLink href={`/contractors/${client.id}/edit`} />
    //         </div>
    //         <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
    //             {client.title} {client.representative}
    //         </p>
    //         <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
    //             〒 {client.zipCode}
    //         </p>
    //         <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
    //             {client.prefecture}
    //             {client.city}
    //             {client.town}
    //             {client.address}
    //         </p>
    //         {client.address2 && (
    //             <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
    //                 {client.address2}
    //             </p>
    //         )}
    //     </div>
    //     <div className="mt-6">
    //         <dl className="grid grid-cols-1 sm:grid-cols-2">
    //             <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
    //                 <dt className="text-sm font-medium leading-6 text-gray-900">
    //                     登録
    //                 </dt>
    //                 <dd className="mt-1 text-xs leading-6 text-gray-700 sm:mt-2">
    //                     {formatDateTime(client.createdAt)}
    //                 </dd>
    //                 <dd className="text-xs leading-6 text-gray-700">
    //                     {client.createdBy}
    //                 </dd>
    //             </div>

    //             <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
    //                 <dt className="text-sm font-medium leading-6 text-gray-900">
    //                     更新
    //                 </dt>
    //                 {client.updatedBy && (
    //                     <div>
    //                         <dd className="mt-1 text-xs leading-6 text-gray-700 sm:mt-2">
    //                             {client.createdAt.toLocaleString("ja-JP")}
    //                         </dd>
    //                         <dd className="text-xs leading-6 text-gray-700">
    //                             {client.updatedBy}
    //                         </dd>
    //                     </div>
    //                 )}
    //             </div>
    //         </dl>
    //     </div>
    // </div>
  );
}
