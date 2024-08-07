import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/assets/AbBC logo full color 1.svg"
        alt="AbBC-logo"
        width={80}
        height={40}
        className="object-cover"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
