import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-custom pt-20 text-slate-50 text-4xl roboto text-center pb-4 font-semibold">
        <span>DJI Phantom 4 RTK</span>
      </div>

      <div className="flex flex-col bg-[url('/img/svg.png')] bg-cover bg-center h-88 w-full items-center">
        <Image
          src="/img/phantom-2.png"
          alt="phantom"
          height={500}
          width={500}
          className="pt-5"
        />
      </div>

      <div className="mt-28 grid grid-cols-3 ">
        {/* Kiri */}
        <div className="col-span-2 flex flex-col mr-32">
          <div className="text-blue-900 text-2xl roboto font-semibold text-right">
            <span>What made this outstanding?</span>
          </div>
          <div className="mt-5">
            <div className="flex flex-row gap-4 justify-self-end">
              <div className="roboto text-lg text-blue-900 font-semibold">
                <span>Real Time Kinematic</span>
              </div>
              
              <Image
                src="/img/target.png"
                alt="target"
                width={30}
                height={30}
              />
            </div>
            <div className="text-sm ml-40 justify-self-end text-gray-600 mt-1 font-semibold roboto">
              <span>
                Generating more precision geospatial data than using standard
                GPS
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-row gap-4 justify-self-end">
              <div className="roboto text-lg text-blue-900 font-semibold">
                <span>Real Time Kinematic</span>
              </div>
              
              <Image
                src="/img/target.png"
                alt="target"
                width={30}
                height={30}
              />
            </div>
            <div className="text-sm ml-40 justify-self-end text-gray-600 mt-1 font-semibold roboto">
              <span>
                Generating more precision geospatial data than using standard
                GPS
              </span>
            </div>
          </div>
        </div>
        {/* Kanan */}
        <div>
          <Image src="/img/why.png" alt="why" width={200} height={200} />
        </div>
      </div>
    </main>
  );
}
