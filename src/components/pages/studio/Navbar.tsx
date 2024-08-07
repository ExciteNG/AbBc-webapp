import Link from "next/link";
import Image from "next/image";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="w-full flex items-center">
        <Image
          src="/assets/AbBC logo full color 1.svg"
          alt="AbBC-logo"
          width={130}
          height={60}
        />
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
