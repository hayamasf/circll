import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs({
  pages,
}: {
  pages: { name: string; href: string; current: boolean }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex flex-wrap items-center space-x-1 gap-y-2">
        <li>
          <div>
            <Link href={"/"} className="text-gray-400 hover:text-gray-500">
              <HomeIcon aria-hidden="true" className="h-5 w-5 shrink-0" />
              <span className="sr-only">ホーム</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="whitespace-nowrap">
            <div className="flex items-center">
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-gray-400"
              />
              {page.href ? (
                <Link
                  href={page.href}
                  aria-current={page.current ? "page" : undefined}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {page.name}
                </Link>
              ) : (
                <span className="ml-4 text-sm font-semibold text-gray-900">
                  {page.name}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
