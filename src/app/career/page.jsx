import CareerHero from "@/sections/career/CareerHero";
import CareerApplicationSection from "@/sections/career/CareerApplicationSection";
import CareerGrow from "@/sections/career/CareerGrow";
import CareerTech from "@/sections/career/CareerTech";
import CareerProcess from "@/sections/career/CareerProcess";
import CareerFirst from "@/sections/career/CareerFirst";

export const metadata = {
  title: "Career | Technodha",
};

export default function CareerPage() {
  return (
    <div>
      <CareerFirst/>
      <CareerHero />
      <CareerGrow/>
      <CareerProcess/>
      <CareerTech/>
      <CareerApplicationSection />
    </div>
  );
}
