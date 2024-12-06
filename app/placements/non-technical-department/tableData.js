const tableData = [
  {
    sNo: 1,
    companyName: "AGRIWATCH",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 4,
    package: "2.16 LPA",
  },
  {
    sNo: 2,
    companyName: "Agrostar",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 8,
    package: "3 LPA",
  },
  {
    sNo: 3,
    companyName: "ANYTECH META",
    programme: "MBA,BBA",
    noOfStudentsPlaced: 2,
    package: "5.5 LPA",
  },
  {
    sNo: 4,
    companyName: "Artech",
    programme: "MBA,BBA",
    noOfStudentsPlaced: 1,
    package: "4.58 LPA",
  },
  {
    sNo: 5,
    companyName: "ARUPAL SUPERDOCS TECH LLP",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 4,
    package: "1.8 LPA",
  },
  {
    sNo: 6,
    companyName: "BHARATPE",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "4 LPA",
  },
  {
    sNo: 7,
    companyName: "Boon",
    programme: "MBA,BBA",
    noOfStudentsPlaced: 1,
    package: "12 LPA",
  },
  {
    sNo: 8,
    companyName: "BRIGHTSUN TRAVEL PVT. LTD.",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 6,
    package: "3.36 LPA",
  },
  {
    sNo: 9,
    companyName: "CALVIN KLEIN",
    programme: "BBA,BAJMC,B.Com(Hons)",
    noOfStudentsPlaced: 9,
    package: "3 LPA",
  },
  {
    sNo: 10,
    companyName: "Capital Via",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "3 LPA",
  },
  {
    sNo: 11,
    companyName: "Ceasefire",
    programme: "MBA",
    noOfStudentsPlaced: 2,
    package: "5.16 LPA",
  },
  {
    sNo: 12,
    companyName: "Corizo",
    programme: "BBA,B.Com(Hons)",
    noOfStudentsPlaced: 8,
    package: "6.5 LPA",
  },
  {
    sNo: 13,
    companyName: "De Facto",
    programme: "BBA,MBA,B.Com(Hons)",
    noOfStudentsPlaced: 8,
    package: "4 LPA",
  },
  {
    sNo: 14,
    companyName: "DSS AGRISOLUTIONS PRIVATE LIMITED",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 4,
    package: "2.16 LPA",
  },
  {
    sNo: 15,
    companyName: "ELITE CORPORATE SOLUTIONS",
    programme: "BBA,B.Com(Hons)",
    noOfStudentsPlaced: 6,
    package: "2.5 LPA",
  },
  {
    sNo: 16,
    companyName: "FIVE X GLOBAL SERVICES PVT LTD",
    programme: "BBA",
    noOfStudentsPlaced: 4,
    package: "2.19 LPA",
  },
  {
    sNo: 17,
    companyName: "FOREIGN EMPLOYMENT WORLD WELFARE FUND",
    programme: "BBA",
    noOfStudentsPlaced: 6,
    package: "2.1 LPA",
  },
  {
    sNo: 18,
    companyName: "Grazziti Interactive",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "5 LPA",
  },
  {
    sNo: 19,
    companyName: "Hike Edu",
    programme: "BBA,MBA",
    noOfStudentsPlaced: 5,
    package: "7 LPA",
  },
  {
    sNo: 20,
    companyName: "HNJ Infra",
    programme: "MBA,BBA",
    noOfStudentsPlaced: 1,
    package: "5 LPA",
  },
  {
    sNo: 21,
    companyName: "INTEK ORGANIC",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "4.5 LPA",
  },
  {
    sNo: 22,
    companyName: "KENT",
    programme: "MBA",
    noOfStudentsPlaced: 3,
    package: "3.6 LPA",
  },
  {
    sNo: 23,
    companyName: "Khanna Paper Mills",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "5 LPA",
  },
  {
    sNo: 24,
    companyName: "LEARNINGSHALA",
    programme: "BBA,B.Com(Hons)",
    noOfStudentsPlaced: 8,
    package: "5 LPA",
  },
  {
    sNo: 25,
    companyName: "Magictap",
    programme: "BBA,B.Com(Hons)",
    noOfStudentsPlaced: 8,
    package: "3 LPA",
  },
  {
    sNo: 26,
    companyName: "MWIDM",
    programme: "BBA,MBA,Bcom(Hons)",
    noOfStudentsPlaced: 12,
    package: "3.5 LPA",
  },
  {
    sNo: 27,
    companyName: "NAWAL ORGANIZATION",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 4,
    package: "1.32 LPA",
  },
  {
    sNo: 28,
    companyName: "OSWAL GROUP",
    programme: "BBA",
    noOfStudentsPlaced: 5,
    package: "3 LPA",
  },
  {
    sNo: 29,
    companyName: "PHRONESIS PARTNERS PTE. LTD.",
    programme: "BBA",
    noOfStudentsPlaced: 6,
    package: "4.5 LPA",
  },
  {
    sNo: 30,
    companyName: "PHYSICS WALA",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "4.5 LPA",
  },
  {
    sNo: 31,
    companyName: "Prodesk IT",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "4.5 LPA",
  },
  {
    sNo: 32,
    companyName: "Realty Assistant",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "5.12 LPA",
  },
  {
    sNo: 33,
    companyName: "Realty Smartz",
    programme: "BBA,MBA,Bcom(Hons)",
    noOfStudentsPlaced: 3,
    package: "6 LPA",
  },
  {
    sNo: 34,
    companyName: "RNF Technologies",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "6 LPA",
  },
  {
    sNo: 35,
    companyName: "SBI LIFE INSURANCE",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "5 LPA",
  },
  {
    sNo: 36,
    companyName: "SELECTION WALA",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "1.83 LPA",
  },
  {
    sNo: 37,
    companyName: "Shine Design Pvt Ltd",
    programme: "MBA",
    noOfStudentsPlaced: 1,
    package: "4.2 LPA",
  },
  {
    sNo: 38,
    companyName: "SKY LARK",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 4,
    package: "3 LPA",
  },
  {
    sNo: 39,
    companyName: "GLOBIVA SERVICES PVT Ltd",
    programme: "BAJMC",
    noOfStudentsPlaced: 1,
    package: "2.16 LPA",
  },
  {
    sNo: 40,
    companyName: "TELEPERFORMANCE",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 5,
    package: "1.32 LPA",
  },
  {
    sNo: 41,
    companyName: "UNIFY HEALTHCARE SERVICES",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 2,
    package: "2.36 LPA",
  },
  {
    sNo: 42,
    companyName: "VACO BINARY SEMANTICS LLP",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 12,
    package: "2.4 LPA",
  },
  {
    sNo: 43,
    companyName: "VAIMANIKA AEROSPACE",
    programme: "B.SC. AGRICULTURE",
    noOfStudentsPlaced: 2,
    package: "1.32 LPA",
  },
  {
    sNo: 44,
    companyName: "Wipro",
    programme: "BBA,B.Com,BAJMC",
    noOfStudentsPlaced: 2,
    package: "3 LPA",
  },
  {
    sNo: 45,
    companyName: "Yhills",
    programme: "BBA,MBA,B.Com(Hons),BAJMC",
    noOfStudentsPlaced: 1,
    package: "7.25 LPA",
  },
];

export default tableData;
