import Image from "next/image";
import React from "react";
import Pipeline from "../Pipeline";

const ProductPipeLinePage = () => {
  return (
    <section className="mb-20">
      <div className="relative h-[601px] flex justify-start items-center">
        <Image
          src={"/assets/product-pipeline-banner.svg"}
          layout="fill"
          alt="banner"
          objectFit="cover"
          className="object-contain"
        />
        <div className="absolute pl-8 text-white">
          <h1 className="text-5xl font-bold mb-2 tracking-wider">
            Product Pipeline
          </h1>
          <p className="w-[45%] capitalize">
            Our robust pipeline includes several promising candidates at various
            stages of development, from discovery to clinical trials.
          </p>
        </div>
      </div>
      <div className="pl-4 my-10 flex flex-col md:flex-row gap-6">
        <h4 className="h-10 w-[12rem] flex items-center justify-center border-[1px] border-[#456689] rounded-full p-4 text-[#456689]">
          Product Pipeline
        </h4>
        <p className="w-[80%]">
          We excel on bioprocessing and manufacturing, enabling streamlined and
          scalable production of biopharmaceuticals, vaccines and other
          biological products.
        </p>
      </div>
      <Pipeline />
    </section>
  );
};

export default ProductPipeLinePage;
