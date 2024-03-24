
import Image from "next/image";

export const Avatar = () => (
    <Image
      src="/images/ProfilePic.png"
      width={30}
      height={30}
      alt="Image of a solar panel"
      className="rounded-full mr-4"
    />
  );