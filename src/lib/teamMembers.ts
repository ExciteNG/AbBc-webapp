import claire from "@/../public/assets/claire.svg";
import chantal from "@/../public/assets/chantal.svg";
import tijani from "@/../public/assets/tijani.svg";
import ian from "@/../public/assets/ian.svg";

interface Management {
  id: number;
  fullName: string;
  img: string;
  role: string;
  description: string;
}

export const managementTeamMembers: Management[] = [
  {
    id: 1,
    fullName: "Claire Thuning-Roberson",
    img: claire,
    role: "PhD (CEO)",
    description:
      "Entrepreneur in biologics: strategic planning, product development,  and international regulatory affairs.  Director, Goodwin Institute  Cancer Research; Founder/CEO, Goodwin Biotechnology (CMO),  VP Product Dev Sunol Molecular, Dir Pharma Dev Thallion Pharma",
  },
  {
    id: 2,
    fullName: " Chantal Miklósi",
    img: chantal,
    role: "MBA (CFO part-time)",
    description:
      "CFO for public companies in US and Canada: Managing Director  JMP Securities, CFO DiagnoCure and Optina Dx",
  },
  {
    id: 3,
    fullName: "Rasheed Tijani",
    img: tijani,
    role: "MS (Co-founder)",
    description:
      " Bioprocess scientist with experience in biologics, antibodies and  AAV gene therapy manufacturing. Has held multiple leadership  position in companies like Lonza, Momenta, Sarepta, Aruvant  sciences, and Pioneering Medicine.",
  },
  {
    id: 4,
    fullName: "Ian Estepan",
    img: ian,
    role: "(Executive Chairman)",
    description:
      "Executive Vice President and Chief Financial Officer of Sarepta  Therapeutics. Prior positions: served as Sarepta’s Senior Vice  President, Chief of Staff and Corporate Affairs; managed a portfolio  on the buyside at Spectra Financial Group, overseeing  pharmaceutical, biotech, and medtech equities",
  },
];
export const advisoryTeamMembers: Management[] = [
  {
    id: 1,
    fullName: "Michael Rosenblum",
    img: claire,
    role: "PhD",
    description:
      "nventor of GrB platform technology  Head Immunopharmacology & Targeted Therapy Lab,  MD Anderson Cancer Center",
  },
  {
    id: 2,
    fullName: "Nasir Khan",
    img: chantal,
    role: "(Co-founder)",
    description:
      "25 years managing biologics CMC development, GMP manufacture and  global supply chain operations. Leadership/Management positions in DSM  Biologics, Aveo Oncology, Momenta Pharmaceuticals, Janssen, and  Sarepta Therapeutics",
  },
  {
    id: 3,
    fullName: "Stephen B. Howell",
    img: tijani,
    role: " MD, DSc",
    description:
      "Distinguished Professor of Medicine, Division of Hematology/Oncology,  Moores UCSD Comprehensive Cancer Center  Director, Laboratory of Pharmacology  Program Director, Cancer Therapeutics Training  Co-founder of DepoTech, Beacon Laboratories, and Targa Pharmaceuticals",
  },
  {
    id: 4,
    fullName: "Vlad Bogin",
    img: ian,
    role: "MD",
    description: "CEO and Founder, Cromos Pharma  CEO, Nobilis Therapeutics",
  },
  {
    id: 5,
    fullName: "Stephanie Finnegan",
    img: claire,
    role: "MBA",
    description: "COO, Cromos Pharma  KOL in accelerated clinical development",
  },
];
