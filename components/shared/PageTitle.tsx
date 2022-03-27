import SocialIcons from "./SocialIcons";

interface IProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  icons?: boolean;
}

export default function PageTitle({
  title,
  subtitle = "",
  center = false,
  icons = true,
}: IProps) {
  return (
    <div className="mb-16">
      <h1 className="mb-2 font-primary text-4xl leading-loose  tracking-wider md:mb-4 md:text-5xl lg:mb-8">
        {title}
      </h1>
      {subtitle && (
        <p className="content-sizes prose text-green-100">{subtitle}</p>
      )}
      {icons && <SocialIcons />}
    </div>
  );
}
