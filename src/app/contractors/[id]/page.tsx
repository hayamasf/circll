import { prisma } from "@/lib/prisma"

export default async function Page({ params }: { params: { id: string } }) {

    const contractor = await prisma.contractor.findUnique({ where: { id: params.id } });

    if (!contractor) {
        return <div>該当する業者が見つかりませんでした.</div>
    }

    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">{contractor.name}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
            </div>
            <div className="mt-6">
                <dl className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">Margot Foster</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">Backend Developer</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">margotfoster@example.com</dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">$120,000</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}