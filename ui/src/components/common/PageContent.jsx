export function PageHeading({
  title,
  subtitle = "",
  className = "",
  extra = "",
}) {
  return (
    <div className={`mb-4 flex items-center justify-between ${className}`}>
      <div>
        <div className="text-[22px] text-black font-medium leading-[22px]">
          {title}
        </div>
        {subtitle && (
          <div className="text-[12px] pt-[5px] text-black/50">{subtitle}</div>
        )}
      </div>

      {extra && <div className="flex-shrink-0">{extra}</div>}
    </div>
  );
}

export default function PageContent({ children }) {
  return <div className="px-4 py-3">{children}</div>;
}
