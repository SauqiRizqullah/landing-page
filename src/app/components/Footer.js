import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
        <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 L 0,100 C 71.50239234449762,81.04306220095694 143.00478468899524,62.086124401913864 247,74 C 350.99521531100476,85.91387559808614 487.48325358851673,128.69856459330146 603,126 C 718.5167464114833,123.30143540669856 813.0622009569378,75.11961722488039 892,57 C 970.9377990430622,38.88038277511962 1034.267942583732,50.82296650717704 1123,63 C 1211.732057416268,75.17703349282296 1325.8660287081339,87.58851674641147 1440,100 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#473289"
          fill-opacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,400 L 0,233 C 79.77033492822966,213.54545454545453 159.54066985645932,194.09090909090907 249,206 C 338.4593301435407,217.90909090909093 437.6076555023924,261.1818181818182 550,271 C 662.3923444976076,280.8181818181818 788.0287081339712,257.18181818181813 899,248 C 1009.9712918660288,238.81818181818184 1106.2775119617224,244.0909090909091 1194,244 C 1281.7224880382776,243.9090909090909 1360.8612440191387,238.45454545454544 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#473289"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
      <div className="bg-blue-custom text-white pb-5">
      
      <div className="text-center font-medium text-xl md:text-2xl lg:text-3xl">CONTACT</div>
      <div className="flex justify-center lg:gap-14 md:gap-13 gap-12 pt-6 mt-2 lg:pb-5 md:pb-7 pb-10">
        <Link href="">
          <Image
            width={20}
            height={20}
            src="/img/linkedin.png"
            alt="linkedin"
            className="invert lg:w-[25px] lg:h-[25px] md:w-[22px] md:h-[22px]"
          />
        </Link>
        <Link href="">
          <Image
            width={20}
            height={20}
            src="/img/instagram.png"
            alt="instagram"
            className="invert lg:w-[25px] lg:h-[25px] md:w-[22px] md:h-[22px]"
          />
        </Link>
        <Link href="">
          <Image
            width={20}
            height={20}
            src="/img/youtube.png"
            alt="youtube"
            className="invert lg:w-[25px] lg:h-[25px] md:w-[22px] md:h-[22px]"
          />
        </Link>
      </div>
    </div>
    </footer>
    
  );
}
