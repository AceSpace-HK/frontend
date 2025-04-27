import Header from "@/components/layout/Header";
import MainBottomSection from "@/components/main/MainBottomSection";
import MainTopSection from "@/components/main/MainTopSection";

const Home = () => {
  return (
    <div>
      <Header isTransparent />
      <MainTopSection />
      <MainBottomSection />
    </div>
  );
};

export default Home;
