type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <h1 className="mb-8 text-xl font-bold leading-7 text-gray-800 sm:mb-10 sm:truncate sm:text-2xl sm:tracking-tight">
      {title}
    </h1>
  );
};

