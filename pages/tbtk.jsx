import Image from "next/image";
import React from "react";
import { FaRegSun } from "react-icons/fa";
import Link from "next/link";
import Heading from "../components/Heading";

function tbtk() {
  return (
    <div className="w-full">
      <Heading
        title="Mehmet YILDIZ | Turkish Society for History of Science"
        description="Full-stack web development and web master services for Turkish Society for History of Science"
      />
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/90 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/tbtk.jpg"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1280px] w-full p-5 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
          <h2 className="py-2">Türk Bilim Tarihi Kurumu</h2>
          <h4>Wordpress, Multilingual, Donations</h4>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h6>Webmaster</h6>
          <h2 className="py-4">
            Website of Turkish Society for History of Science
          </h2>
          <div className="py-2 space-y-4">
            <p>
              In this project I built a Wordpress website using Kadence Theme
              integrated with Polylang and Woocommerce plugins. I also handled
              hosting and mailing services.
            </p>
            <p>
              While many plugins in Wordpress supports donations in payment
              systems such as PayPal, these common payment systems are not
              operating in Turkey. For this reason, I had to take advantage of
              Woocommerce system to implement donations accepting local payment
              methods. As they are planning to make certification programs, I
              have integrated event booking with Woocommerce as well.
            </p>
            <hr className="border-gold-1 w-[25%]" />
            <p>
              Below you can see a full screen picture of landing page design.
              Clicking the image should open the website in new tab.
            </p>
          </div>
          <div className="py-4">
            <Link href="/#projects">
              <p className="underline cursor-pointer text-gold-1">
                Go Back to Homepage
              </p>
            </Link>
          </div>
          <div>
            <Link href="https://tbtk.org.tr">
              <a rel="noopener noreferrer" target="_blank">
                <Image
                  src="/assets/projects/tbtk.png"
                  alt="/"
                  width="1903px"
                  height="6522px"
                  objectFit="contain"
                  className="cursor-pointer py-8"
                  priority={true}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:grid h-60 md:col-span-1 shadow-lg shadow-gold-2 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Features</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> Wordpress
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> Multilingual
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> Donations
              </p>
              <p className="text-lightgold-1 py-2 flex items-center">
                <FaRegSun className="pr-2" /> Booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tbtk;
