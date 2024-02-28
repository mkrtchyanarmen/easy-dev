import ScrollElement from "@/components/ScrollElement";

const HomePage = () => {
  return (
    <div>
      <ScrollElement name="home">
        <div className="h-[1000px] mb-36 border border-red-400">Home</div>
      </ScrollElement>
      <ScrollElement name="about">
        <div className="h-[1000px] mb-36 border border-red-400">About</div>
      </ScrollElement>
    </div>
  );
};

export default HomePage;
