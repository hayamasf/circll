import { prisma } from "@/lib/prisma";
import LinkButton from "./LinkButton";

export default async function ContractorsList() {

    const contractors = await prisma.contractor.findMany()

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">業者</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        システムに登録されている業者の一覧
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <LinkButton href="/contractors/register">新規登録</LinkButton>
                </div>
            </div>
            <div className="-mx-4 mt-8 sm:-mx-0">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                業者名
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                            >
                                代表者
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                住所
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {contractors.map((contractor) => (
                            <tr key={contractor.id}>
                                <td className="w-auto py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                                    {contractor.name}
                                    <dl className="font-normal lg:hidden">
                                        <dt className="sr-only sm:hidden">代表者</dt>
                                        <dd className="mt-1 truncate text-gray-500 sm:hidden">{contractor.title} {contractor.representative}</dd>
                                    </dl>
                                </td>
                                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{contractor.title} {contractor.representative}</td>
                                <td className="px-3 py-4 text-sm text-gray-500">{contractor.prefecture}{contractor.city}{contractor.town}{contractor.address} {contractor.address2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
