import { Metadata } from "next";

export const metadata: Metadata = {
  title: "circll - サークル | 業者",
  description: "circll サークル アプリケーション",
};

export default function Contractors() {
  return (
    <div>
      <main className="py-10">
        <div className="mx-auto bg-green-200 max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Your content */}
          <p>コントラクター</p>
        </div>
      </main>
    </div>
  );
}
