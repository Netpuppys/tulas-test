"use client";
import React, { useRef } from "react";
import BannerImg from "../../../../public/bsc-agriculture/bannerImg.png";
import Navbar from "@/component/Navbar/Navbar";
import background from "../../../../public/courses/bjmc/background.png";
import Image from "next/image";
import Footer from "@/component/Footer";
import BannerProgram from "@/component/Programs/BannerProgram";
import TopRecruiter from "../../../../component/topRecruiter";
import Program from "@/component/Programs/Program";
import CarouselProgram from "@/component/Programs/CrouselProgram";
import Vision from "@/component/Programs/Vision";
import TableProgram from "@/component/Programs/tableProgram";
import {
  cards,
  content,
  hod,
  HODcontent,
  images,
  items,
  itemsClubs,
  sections,
  selectedCardTable,
} from "./data/data";
import { facultyDataCSE } from "../facultyDataCSE";
function BAJMC() {
  const parentRef = useRef(null);

  return (
    <>
      <head>
        <title>
          Best Computer Science & Engineering( Data Science) College in
          Dehradun, Uttarakhand | Tula's Institute
        </title>
        <meta
          name="description"
          content="Tula's Institute Is the Best Computer Science & Engineering( Data Science) Engineering College in Dehradun, Uttarakhand Offering a Comprehensive Program in Computer Science & Engineering (data Science) for Aspiring Professionals. Visit Now!"
        />
      </head>
      <body>
        <div ref={parentRef}>
          <div className="w-full h-fit bg-white">
            <Navbar position={true} />
          </div>
          <BannerProgram
            image={BannerImg}
            title=<>
              COMPUTER SCIENCE{" "}
              <span className="text-[#760135]">
                & ENGINEERING (Data Science)
              </span>
            </>
            titleColor={""}
            description={
              "The B.Tech in Computer Science and Engineering(Data Science) program is a four-year undergraduate degree that is focused on providing students with a strong foundation in data science."
            }
          />
          <Program parentRef={parentRef} images={images} content={content} />
          <CarouselProgram
            heading={"Discover"}
            items={items}
            background={background}
          />
          <Vision sections={sections} />
          <TableProgram
            cards={cards}
            selectedCardTable={selectedCardTable}
            facultyData={facultyDataCSE}
            hod={hod}
            HODcontent={HODcontent}
          />
          <TopRecruiter />
          <CarouselProgram
            heading={"Explore More"}
            items={itemsClubs}
            background={background}
          />
          <div className="w-full relative overflow-hidden">
            <Image
              src={background}
              className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
              alt=""
            />
          </div>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default BAJMC;
