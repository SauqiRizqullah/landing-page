import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-custom pt-20 text-slate-50 text-4xl roboto text-center pb-4 font-semibold">
        <span className="mx-6">DJI Phantom 4 RTK</span>
      </div>

      <div className="flex flex-col bg-[url('/img/svg.png')] bg-cover bg-center h-88 w-full items-center">
        <Image
          src="/img/phantom-2.png"
          alt="phantom"
          height={352}
          width={500}
          className="pt-5 mx-6 w-[400px] h-[282px] md:w-[500px] md:h-[352px]"
        />
      </div>

      <div className="text-blue-900 text-2xl roboto font-semibold text-center mt-28">
        <span>What made this outstanding?</span>
      </div>

      <div className="mt-12 lg:grid hidden grid-cols-5">
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
              <div></div>
              <div className="col-span-2 text-sm text-gray-600 mt-1 font-semibold roboto text-right">
                <span>
                  Generating more precision geospatial data than using standard
                  GPS.
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
              <div></div>
              <div className="col-span-2 text-sm text-gray-600 mt-1 font-semibold roboto text-right">
                <span>
                  By combining with RTK, it could producing a pin-sharp photo.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Tengah*/}
        <div className="">
          <Image src="/img/plus.png" alt="plus" width={220} height={220} />
        </div>
        {/* Kanan */}

        <div className="col-span-2 flex flex-col ml-5">
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
                Suitable for huge project by flying within 1km<sup>2</sup> in 30
                minutes with high accuration.
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-row gap-4 justify-self-start">
              <Image
                src="/img/sensor.png"
                alt="sensor"
                width={30}
                height={30}
              />
              <div className="roboto text-lg text-blue-900 font-semibold">
                <span>Sensor of Obstacle Avoidance</span>
              </div>
            </div>
            <div className="text-sm mr-40 justify-self-start text-gray-600 mt-1 font-semibold roboto">
              <span>
                With 10 - 20 Hz detection speed, allowing to prevent from an
                unpredictable obstacle while flying.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pro's mobile / tablet section */}
      <div className="justify-self-center lg:hidden mt-6 mx-5">
        <Image src="/img/plus.png" alt="plus" width={220} height={220} />
      </div>

      {/* 4 Points table*/}
      <div className="grid grid-cols-2 gap-10 lg:hidden mt-6">
        {/* Kiri */}
        <div className="flex flex-col">
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
              <div></div>
              <div className="col-span-2 text-sm text-gray-600 mt-1 font-semibold roboto text-right">
                <span>
                  Generating more precision geospatial data than using standard
                  GPS.
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
              <div></div>
              <div className="col-span-2 text-sm text-gray-600 mt-1 font-semibold roboto text-right">
                <span>
                  By combining with RTK, it could producing a pin-sharp photo.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Kanan */}
        <div className="flex flex-col">
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
                Suitable for huge project by flying within 1km<sup>2</sup> in 30
                minutes with high accuration.
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex flex-row gap-4 justify-self-start">
              <Image
                src="/img/sensor.png"
                alt="sensor"
                width={30}
                height={30}
              />
              <div className="roboto text-lg text-blue-900 font-semibold">
                <span>Sensor of Obstacle Avoidance</span>
              </div>
            </div>
            <div className="text-sm mr-40 justify-self-start text-gray-600 mt-1 font-semibold roboto">
              <span>
                With 10 - 20 Hz detection speed, allowing to prevent from an
                unpredictable obstacle while flying.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-blue-900 text-2xl roboto font-semibold text-center mt-28">
        <span>Our Clients Reviews</span>
      </div>

      {/* Card */}
      <div className="mt-12 flex lg:justify-center items-center lg:flex-row flex-col mb-10 lg:gap-4 gap-8 mx-5">
        {/* Review */}
        <div className="outline-2 outline-offset-2 outline-gray-500/40 rounded-lg w-100 md:w-140 lg:w-72 ">
          {/* Konten Review Card */}
          <div className="flex flex-col mt-3">
            <div className="self-center">
              <Image
                src="/img/reviewer-1.png"
                alt="reviewer-1"
                width={60}
                height={60}
                className="rounded-full outline-2 outline-offset-2 outline-blue-900"
              />
            </div>
            <div className="self-center pt-5">
              <Image
                src="/img/double-quotes.png"
                alt="double-quotes"
                width={20}
                height={20}
                className="rotate-180"
              />
            </div>
            <div className="text-gray-600/70 roboto font-semibold text-xs mt-3 mx-4 text-center leading-5 lg:leading-4">
              <span>
                Sebagai surveyor, akurasi adalah segalanya. Dengan RTK yang
                presisi hingga tingkat sentimeter, saya bisa mengumpulkan data
                topografi tanpa perlu koreksi manual yang memakan waktu.
                Hasilnya? Pekerjaan lebih cepat dan efisien!
              </span>
            </div>

            {/* Bintang */}
            <div className="flex justify-center gap-4 mt-3">
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
            </div>

            <div className="roboto text-blue-custom font-semibold self-center text-sm mt-4">
              <span>Sauqi Rizqullah</span>
            </div>

            <div className="text-gray-600/70 roboto font-semibold text-xs mt-1 mx-4 text-center mb-2">
              <span>Surveyor Lapangan</span>
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="outline-2 outline-offset-2 outline-gray-500/40 rounded-lg w-100 md:w-140 lg:w-72 ">
          {/* Konten Review Card */}
          <div className="flex flex-col mt-3">
            <div className="self-center">
              <Image
                src="/img/reviewer-2.png"
                alt="reviewer-2"
                width={60}
                height={60}
                className="rounded-full outline-2 outline-offset-2 outline-blue-900"
              />
            </div>
            <div className="self-center pt-5">
              <Image
                src="/img/double-quotes.png"
                alt="double-quotes"
                width={20}
                height={20}
                className="rotate-180"
              />
            </div>
            <div className="text-gray-600/70 roboto font-semibold text-xs mt-3 mx-4 text-center leading-5 lg:leading-4">
              <span>
                Sebagai surveyor, akurasi adalah segalanya. Dengan RTK yang
                presisi hingga tingkat sentimeter, saya bisa mengumpulkan data
                topografi tanpa perlu koreksi manual yang memakan waktu.
                Hasilnya? Pekerjaan lebih cepat dan efisien!
              </span>
            </div>

            {/* Bintang */}
            <div className="flex justify-center gap-4 mt-3">
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
            </div>

            <div className="roboto text-blue-custom font-semibold self-center text-sm mt-4">
              <span>Sauqi Rizqullah</span>
            </div>

            <div className="text-gray-600/70 roboto font-semibold text-xs mt-1 mx-4 text-center mb-2">
              <span>Surveyor Lapangan</span>
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="outline-2 outline-offset-2 outline-gray-500/40 rounded-lg w-100 md:w-140 lg:w-72 ">
          {/* Konten Review Card */}
          <div className="flex flex-col mt-3">
            <div className="self-center">
              <Image
                src="/img/reviewer-3.png"
                alt="reviewer-3"
                width={60}
                height={60}
                className="rounded-full outline-2 outline-offset-2 outline-blue-900"
              />
            </div>
            <div className="self-center pt-5">
              <Image
                src="/img/double-quotes.png"
                alt="double-quotes"
                width={20}
                height={20}
                className="rotate-180"
              />
            </div>
            <div className="text-gray-600/70 roboto font-semibold text-xs mt-3 mx-4 text-center leading-5 lg:leading-4">
              <span>
                Sebagai surveyor, akurasi adalah segalanya. Dengan RTK yang
                presisi hingga tingkat sentimeter, saya bisa mengumpulkan data
                topografi tanpa perlu koreksi manual yang memakan waktu.
                Hasilnya? Pekerjaan lebih cepat dan efisien!
              </span>
            </div>

            {/* Bintang */}
            <div className="flex justify-center gap-4 mt-3">
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
              <Image src="/img/star.png" alt="star" width={15} height={15} />
            </div>

            <div className="roboto text-blue-custom font-semibold self-center text-sm mt-4">
              <span>Sauqi Rizqullah</span>
            </div>

            <div className="text-gray-600/70 roboto font-semibold text-xs mt-1 mx-4 text-center mb-2">
              <span>Surveyor Lapangan</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
