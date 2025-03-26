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

      <div className="text-blue-900 text-2xl roboto font-semibold text-center mt-28">
            <span>What made this outstanding?</span>
      </div>

      <div className="mt-12 grid grid-cols-5 ">
        {/* Kiri */}
        <div className="col-span-2 flex flex-col mr-5">
          <div className="mt-5">
            <div className="flex flex-row gap-4 justify-end">
              <div className="roboto text-lg text-blue-900 font-semibold text-right">
                <span>Real Time Kinematic</span>
              </div>

              <Image
                src="/img/target.png"
                alt="target"
                width={30}
                height={30}
              />
            </div>
            <div className="grid grid-cols-3">
              <div>

              </div>
              <div className="col-span-2 text-sm text-gray-600 mt-1 font-semibold roboto text-right">
              <span>
                Generating more precision geospatial data than using standard GPS.
              </span>
              </div>
              
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-row gap-4 justify-end">
              <div className="roboto text-lg text-blue-900 font-semibold text-right">
                <span>20MP Camera Lens</span>
              </div>

              <Image
                src="/img/shutter-camera.png"
                alt="camera"
                width={30}
                height={30}
              />
            </div>
            <div className="grid grid-cols-3">
              <div>

              </div>
              <div className="col-span-2 text-sm text-gray-600 mt-1 font-semibold roboto text-right">
              <span>
                By combining with RTK, it could producing a pin-sharp photo.
              </span>
              </div>
              
            </div>
          </div>
        </div>
        {/* Tengah*/}
        <div className="ml-5">
          <Image src="/img/plus.png" alt="plus" width={200} height={200} />
        </div>
        {/* Kanan */}
        
        <div className="col-span-2 flex flex-col">
          
          <div className="mt-5">
            <div className="flex flex-row gap-4">

              <Image
                src="/img/hourglass.png"
                alt="hourglass"
                width={30}
                height={30}
              />
              <div className="roboto text-lg text-blue-900 font-semibold">
                <span>Wide Flight Time and Range</span>
              </div>
              
              
            </div>
            <div className="text-sm mr-40 text-gray-600 mt-1 font-semibold roboto">
              <span>
                Suitable for huge project by flying within 1km<sup>2</sup> in 30 minutes with high accuration.
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-row gap-4 justify-self-start">

              <Image
                src="/img/target.png"
                alt="target"
                width={30}
                height={30}
              />
              <div className="roboto text-lg text-blue-900 font-semibold">
                <span>Sensor of Obstacle Avoidance</span>
              </div>
              
              
            </div>
            <div className="text-sm mr-40 justify-self-start text-gray-600 mt-1 font-semibold roboto">
              <span>
                With 10 - 20 Hz detection speed, allowing to prevent from an unpredictable obstacle while flying.
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
