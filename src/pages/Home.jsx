import React from "react";
import Maintop from "../components/layout/main/maintop";
import ShopOurBestSeller from "../components/layout/main/ShopOurBestSeller";
import GreenerAndHealthierDiv from "../components/layout/main/GreenerAndHealthierDiv";
import EcoBookSection from "../components/layout/main/EcoBookSection";


function Home() {
  return (
    <>
      <Maintop />
      <ShopOurBestSeller />
      <GreenerAndHealthierDiv />
      <EcoBookSection />
    </>
  );
}
export default Home;
