import Custmer from "@/components/custmer";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Heading from "@/components/heading";
import Hero from "@/components/Hero";
import Listing from "@/components/listing";
import Listing2 from "@/components/listings2";
import Style from "@/components/style";
import TopHeader from "@/components/Topheader";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <Heading />
      <Listing />
      <Listing2 />
      <Style />
      <Custmer />
      <Footer />
    </div>
  );
}
