import { Link } from "react-router";
import { LottieLight } from "lottie-react";
import animation404 from "../assets/lotties/404.json";

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <LottieLight
        className="w-5/6 sm:w-4/6 md:w-lg xl:w-2xl"
        src={animation404}
        loop
        autoplay
      />
      <div className="mb-5">
        <h1 className="text-md md:text-xl lg:text-2xl text-center font-bold text-[#0857A0]">
          Something Went Wrong
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-center font-bold text-gray-500">
          Sorry, page not found!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link
          to="/"
          className="inline-flex items-center px-3 py-2 bg-[#0857A0] text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2
          focus:ring-blue-500 transition-all duration-200 font-medium shadow-md transform hover:-translate-y-0.5"
        >
          <p className="text-sm md:text-md">Back to Portofolio</p>
        </Link>
      </div>
    </main>
  );
}
