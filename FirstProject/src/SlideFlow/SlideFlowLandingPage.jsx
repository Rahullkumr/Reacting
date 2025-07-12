import SFHeader from "./SFHeader";
import SFMainContent from "./SFMainContent";

const SlideFlowLandingPage = () => {
  return (
    <div className="bg-sky-400 w-[98vw] h-[98vh] rounded-4xl p-8 bg-gradient-to-r from-sky-100 to-sky-600 flex flex-col items-center gap-50">
      <SFHeader />
      <SFMainContent/>
    </div>
  );
};

export default SlideFlowLandingPage;
