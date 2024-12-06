"use client";
import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/infrastructure/library/bannerImg.png";
import background from "../../public/research/r-and-cell/background.png";
import BestPractices from "../../public/FooterPDf/BestPractices.pdf";

function IQAC() {
  const button = [
    { title: "About", linkTo: "/about-iqac/" },
    { title: "Vision & Mission", linkTo: "/iqac-vision-mission/" },
    { title: "Structure", linkTo: "/iqac-structure/" },
    { title: "Minutes Of Meeting", linkTo: "/minutes-of-meeting/" },
    { title: "Annual Report", linkTo: "/annual-report/" },
    { title: "Audited Statements", linkTo: "/audit-statements/" },
    { title: "Feedback", linkTo: "/feedback/" },
    { title: "Best Practices", linkTo: BestPractices },
  ];
  return (
    <>
      <head>
        <title>
          IQAC | Best Engineering College in Dehradun, Uttarakhand | Tula's
          Institute
        </title>
        <meta
          name="description"
          content="Learn about the Internal Quality Assurance Cell (IQAC) at Tula's Institute, Dehradun. Committed to enhancing educational standards, IQAC drives continuous improvement through quality initiatives and best practices for academic excellence."
        />
      </head>
      <body>
        <Navbar />
        <Banner
          image={BannerImg}
          title={<>IQAC</>}
          description={<></>}
          belowTitle={<></>}
          belowPara={
            <>
              The Internal Quality Assurance Cell (IQAC) is an integral part of
              our institute's commitment to fostering and sustaining quality in
              every aspect of its functioning. The IQAC plays a vital role in
              enhancing the overall academic and administrative performance of
              the institution. It functions as a driving force for continuous
              improvement by developing and implementing a quality benchmark
              system, ensuring that all our processes align with the
              institution's mission and objectives. The IQAC facilitates the
              creation of a learner-centric environment, encourages the use of
              innovative teaching and learning methodologies, and fosters
              research and collaboration among faculty and students. By
              regularly conducting internal audits, feedback sessions, and
              quality improvement initiatives, the IQAC ensures that our
              institute remains at the forefront of delivering exceptional
              education and upholds a culture of excellence and accountability.
            </>
          }
        />
        <div className="w-full relative overflow-hidden">
          <Image
            src={background}
            className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
            alt=""
          />
        </div>
        <div className="py-8 md:py-20 w-full bg-transparent overflow-hidden px-3 md:px-0 flex flex-col justify-center items-center gap-4">
          {button.map((button, index) => (
            <button
              key={index}
              onClick={() => (window.location.href = `${button.linkTo}`)}
              className="py-2 w-[210px] md:w-[400px] rounded-full bg-white text-[clamp(15px,1.2vw,50px)] text-[#760135]"
            >
              {button.title}
            </button>
          ))}
        </div>
        <div className="w-full h-fit z-50">
          <Footer color={true} />
        </div>
      </body>
    </>
  );
}

export default IQAC;
