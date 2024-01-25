type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <h1 className="text-xl font-bold leading-7 text-gray-800 sm:truncate sm:text-2xl sm:tracking-tight">
      {title}
    </h1>
  );
};

