"use client";
import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import BannerImg from "../../../public/Components/Banner/bannerImg.png";
import background from "../../../public/AboutDehradun/background.png";
import Footer from "@/component/Footer";
import Image from "next/image";
import Table from "./Table";
import eProspectus from "../../../public/admission-procedure/e-prospectus.png";
import { Fade } from "react-awesome-reveal";
import Vision from "@/component/Programs/Vision";
const title = (
  <>
    <span className="text-[#007A83]">ADMISSIONS</span>
  </>
);

function AdmissionPage() {
  const academicFees = [
    {
      for: "For Academic Fee",
      bank: "Punjab National Bank(PNB)",
      accountName: "Rishabh Educational Trust",
      ifsc: "PUNB0518810",
      accountNo: "51881011000036",
    },
    {
      for: "For Hostel Fee",
      bank: "Punjab National Bank(PNB)",
      accountName: "Rishabh Educational Trust",
      ifsc: "PUNB0117500",
      accountNo: "1175002100007996",
    },
  ];
  const sectionsData = [
    {
      title: "E - Prospectus",
      description: (
        <>
          The institute also provides the facilities of downloading e-prospectus
          by the following procedure:
          <br />
          <ul className="list-disc ml-5">
            <li>
              Student will be required to fill all the details given in the form
              available below.
            </li>
            <li>
              After successful registration, a mail will be sent to student’s
              registered e-mail ID.
            </li>
            <li>
              The e-mail will be comprised of e-prospectus of the institute that
              may be downloaded.
            </li>
          </ul>
        </>
      ),
      image: eProspectus,
    },
  ];
  const [expandedSection, setExpandedSection] = useState(null);
  const bankRef = useRef(null);
  useEffect(() => {
    if (window.location.pathname === "/bank-details/" && bankRef.current) {
      bankRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const handleButtonClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const feesRef = useRef(null);
  useEffect(() => {
    if (window.location.pathname === "/pay-fee-online/" && feesRef.current) {
      feesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const prospectusRef = useRef(null);
  useEffect(() => {
    if (
      window.location.pathname === "/download-e-prospectus/" &&
      prospectusRef.current
    ) {
      prospectusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Banner
        image={BannerImg}
        title={title}
        description={<></>}
        belowTitle={<></>}
        belowPara={
          "Education is not only a way of learning new things but also looking at the world differently. My 35 Years of Experience in Business, Social & Public space has enabled me to provide an ECO system that will help you make a correct decision in matters of careers & life."
        }
      />

      {/* Background and Form Button */}
      <div className="w-full relative overflow-hidden">
        <Image
          src={background}
          className="w-full fixed h-screen top-0 left-0 -z-10 object-cover"
          alt=""
        />
        <div className="py-10 md:py-20">
          <div className="w-full items-center flex flex-col gap-8 justify-center">
            <h3 className="text-white font-[TTChocolatesBold] md:text-[40px] border-b-2 border-white">
              Admission Eligibility
            </h3>
            <button
              onClick={() => {
                window.location.href = "/admissions2024";
              }}
              className="font-[TTChocolatesBold] mb-8 bg-white rounded-full text-[#760135] text-[18px] md:text-[24px] text-center items-center py-2 px-10 md:px-32"
            >
              Apply Now
            </button>
            <Table />
            <button
              onClick={() => {
                window.location.href = "/admissions2024";
              }}
              className="font-[TTChocolatesBold] mb-8 bg-white rounded-full text-[#760135] text-[18px] md:text-[24px] text-center items-center py-2 px-10 md:px-32"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div ref={bankRef} className="w-full h-fit bg-white">
        <div className="py-10 md:py-20 px-2 max-w-[1000px] mx-auto">
          <h3 className="text-[#3D001B] text-center font-[600] text-[clamp(25px,2.8vw,60px)]">
            Bank Details
          </h3>
          <h4 className="text-black text-center text-[clamp(15px,1vw,22px)]">
            The institute provides the facility of payment of respective fee
            (Academic & Hostel Fee) in the below mentioned accounts :
          </h4>
          <div className="flex flex-col md:flex-row pt-10 mx-auto w-fit justify-center items-center h-fit gap-10">
            {academicFees.map((fees, index) => (
              <div
                key={index}
                className="border rounded-3xl px-10 py-10 border-[#3D001B] group hover:bg-[#3D001B] flex flex-col gap-3 justify-around items-center transition-all ease-linear duration-300"
              >
                <h3 className="text-[#3D001B] font-[600] group-hover:text-white text-[clamp(12px,1.9vw,35px)]">
                  {fees.for}
                </h3>
                <div className="text-center">
                  <h3 className="text-[#3D001B] group-hover:text-white text-[clamp(12px,1vw,25px)]">
                    Bank: {fees.bank}
                  </h3>
                  <h3 className="text-[#3D001B] group-hover:text-white text-[clamp(12px,1vw,25px)]">
                    Account Name: {fees.accountName}
                  </h3>
                  <h3 className="text-[#3D001B] group-hover:text-white text-[clamp(12px,1vw,25px)]">
                    IFSC code: {fees.ifsc}
                  </h3>
                  <h3 className="text-[#3D001B] group-hover:text-white text-[clamp(12px,1vw,25px)]">
                    Account Number: {fees.accountNo}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[70%] mx-auto flex pt-10 justify-center items-center">
            <div className="w-3 h-3 rounded-full bg-[#3D0018]"></div>
            <div className="w-full h-[2px] bg-[#3D0018]"></div>
            <div className="w-3 h-3 rounded-full bg-[#3D0018]"></div>
          </div>
          <div
            ref={feesRef}
            className="flex w-full mx-auto pt-10 gap-2 md:gap-10"
          >
            <div className="w-full">
              <button
                onClick={() => handleButtonClick("academic")}
                className="font-[TTChocolatesBold] mb-8 bg-[#760135] rounded-full text-white text-[15px] md:text-[24px] text-center items-center py-2 w-full"
              >
                Pay Academic Fee
              </button>
              {expandedSection === "academic" && (
                <div className="w-full">
                  <div className="w-full flex flex-col justify-center items-center gap-2">
                    <button
                      onClick={() => {
                        window.open(
                          "https://pages.razorpay.com/pl_EemYzSuH4dRF2e/view",
                          "_blank"
                        );
                      }}
                      className="font-[TTChocolatesBold] bg-[#760135] rounded-full text-white text-[10px] md:text-[16px] text-center items-center py-2 w-full"
                    >
                      Payment for Existing Student
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://pages.razorpay.com/pl_Eemb9cp24Dac8R/view",
                          "_blank"
                        );
                      }}
                      className="font-[TTChocolatesBold] bg-[#760135] rounded-full text-white text-[10px] md:text-[16px] text-center items-center py-2 w-full"
                    >
                      Payment for New Student
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full">
              <button
                onClick={() => handleButtonClick("hostels")}
                className="font-[TTChocolatesBold] mb-8 bg-[#760135] rounded-full text-white text-[15px] md:text-[24px] text-center items-center py-2 w-full"
              >
                Pay Hostel Fee
              </button>
              {expandedSection === "hostels" && (
                <div className="w-full">
                  <div className="flex flex-col justify-center items-center w-full gap-2">
                    <button
                      onClick={() => {
                        window.open(
                          "https://pages.razorpay.com/pl_Ef8FofNuC4SR5C/view",
                          "_blank"
                        );
                      }}
                      className="font-[TTChocolatesBold] bg-[#760135] rounded-full text-white text-[10px] md:text-[16px]  text-center items-center py-2 w-full"
                    >
                      Payment for Existing Student
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://pages.razorpay.com/pl_EfCHelq0PvHmwp/view",
                          "_blank"
                        );
                      }}
                      className="font-[TTChocolatesBold] bg-[#760135] rounded-full text-white text-[10px] md:text-[16px]  text-center items-center py-2 w-full"
                    >
                      Payment for New Student
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div ref={prospectusRef}>
        <Vision sections={sectionsData} />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => {
            window.location.href = "";
          }}
          className="font-[TTChocolatesBold] mb-8 bg-white rounded-full text-[#760135] text-[18px] md:text-[24px] text-center items-center py-2 px-10 md:px-32 font-[600]"
        >
          Download E-Prospectus
        </button>
      </div>
      <div className="w-full h-fit z-40">
        <Footer />
      </div>
    </>
  );
}

export default AdmissionPage;
