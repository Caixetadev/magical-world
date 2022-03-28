import SocialIcons from "./SocialIcons";

interface IProps {
  title: string;
  subtitle?: string;
  image?: string;
  center?: boolean;
  icons?: boolean;
}

export default function PageTitle({
  title,
  subtitle = "",
  center = false,
  image = "",
  icons = true,
}: IProps) {
  return (
    <section>
      <h1 className="mb-2 font-primary text-3xl leading-loose tracking-wide sm:text-4xl md:mb-4 md:text-5xl lg:mb-8">
        {title}
      </h1>
      {subtitle && (
        <p className="content-sizes prose text-green-100">{subtitle}</p>
      )}
      {icons && <SocialIcons />}
    </section>
  );
}
