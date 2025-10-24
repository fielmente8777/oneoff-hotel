import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="max-w-[200px] w-full relative aspect-square">
        <Image src="/logo.png" alt="logo" fill className="object-contain" />
      </div>
    </div>
  );
}
