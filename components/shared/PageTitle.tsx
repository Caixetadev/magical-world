import SocialIcons from "./SocialIcons";
import ConnectIcons from "./ConnectIcons";

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
  icons = false,
}: IProps) {
  return (
    <section>
      <h1
        className={`mb-2 font-primary text-4xl leading-loose tracking-wide sm:text-4xl md:mb-4 md:text-5xl lg:mb-6 ${
          center && "md:text-center"
        } `}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="prose  text-green-100 md:prose-lg">{subtitle}</p>
      )}
      {icons && <ConnectIcons margin />}
    </section>
  );
}
