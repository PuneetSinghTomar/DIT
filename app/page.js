import Image from "next/image";
import HeroicStats from "@/Components/Heroic";
import AcademicSection from "@/Components/Academics";
import ResearchSection from "@/Components/Research";
import RecruiterSection from "@/Components/Recruiter";
import CampusLifeSection from "@/Components/Campus";
import AlumniPopup from "@/Components/AlumniPopup";
import CampusEventsPopup from "@/Components/CampusEventsPopup";
export default function Home() {
  return (
    <>
    <HeroicStats/>
    <AcademicSection/>
    <ResearchSection/>
    <RecruiterSection/>
    <CampusLifeSection/>
    <AlumniPopup/>
    <CampusEventsPopup/>
    </>
  );
}
