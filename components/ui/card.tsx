import Image from "next/image";

function Card({ title, tagline, icon }: any) {
    return (
      <div className="bg-[#1A1714] p-10 flex flex-col text-white text-center justify-center items-center rounded-lg">
        <div className="bg-orangeFont p-4 rounded-full mb-4">
          <Image src={icon} alt="Solar Panel" width={28} height={28} />
        </div>
        <div className="text-4xl font-Bebas_Neue mb-4">{title}</div>
        <p className="text-xs font-sans text-orangeFont">{tagline}</p>
      </div>
    );
  }

export default Card