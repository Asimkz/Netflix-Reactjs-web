import { Routes, Route } from "react-router-dom";
import BannerTwo from "./Components/Banner-Two/BannerTwo";
import Banner from "./Components/Banner/Banner";
import DownloadSection from "./Components/DownloadSection/DownloadSection";
import Footer from "./Components/Footer/Footer";
import SighnUp from "./Components/SighnUp/SighnUp";
import SighnIn from "./Components/SighnIn/SighIn";
import NavButton from "./Components/NavbarButton/NavButton";
import Navbar from "./Components/Navbar/Navbar";
import HomePageNavbar from "./Components/HomePageNavbar/HomePageNavbar";
import Crausal from "./Components/HomePageBannerCrausal/Crausal";
import PopularOnNetflix from "./Components/PopularOnNetflix/PopularOnNetflix";
import Trending from "./Components/Trending/Trending";
import NetflixOriginals from "./Components/NetflixOriginals/NetflixOriginals";
import ForthSlider from "./Components/ForthSlider/ForthSlider";
import Top10 from "./Components/Top10/Top10";
import Rewatch from "./Components/Rewatch/Rewatch";
import List from "./Components/List/List";
import MovieWatch from "./Components/MovieWatch/MovieWatch";
import HomePageFooter from "./Components/HomePageFooter/HomePageFooter";
// import Search from "./Components/Search/Search";
import KidsProfileSection from "./Components/KidsProfileSection/KidsProfileSection";
import Text from "./Components/TextSection/Text";
import NetflixInfo from "./Components/TabsSection/TabsSection";
function App() {
  // const [isauth, setIsAuth] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const myItem = localStorage.getItem("user");
  //   console.log("myItem", myItem);
  //   if (myItem) {
  //     setIsAuth(true);
  //     navigate("/Homepage");
  //   } else {
  //     setIsAuth(false);
  //     navigate("/");
  //   }
  // }, [navigate]);

  return (
    <>
      <Routes>
        {/* {isauth ? ( */}
        <>
          <Route
            path="/Homepage"
            element={
              <>
                <HomePageNavbar />
                <Crausal />
                <PopularOnNetflix />
                <Trending />
                <NetflixOriginals />
                <ForthSlider />
                <Top10 />
                <Rewatch />
                <List />
                <HomePageFooter />
              </>
            }
          />
          {/* <Route
            path="/Search-page"
            element={
              <>
                <div className="app-3">
                  <Search />
                </div>
              </>
            }
          /> */}
          <Route
            path="/MovieWatch"
            element={
              <div className="app-3">
                <MovieWatch />
              </div>
            }
          />
        </>
        {/* ) : ( */}
        <>
          <Route
            path="/"
            element={
              <>
                <div className="app-1">
                  <Navbar button={<NavButton />} />
                  <Banner />
                </div>
                <BannerTwo />
                <DownloadSection />
                <Text />
                <KidsProfileSection />
                <NetflixInfo />
                <Footer
                  footerLinkOne="Invester Relation"
                  footerLinkTwo="Privacy"
                  footerLinkThree="Speed Test"
                  footerLinkFour="Jobs"
                  footerLinkFive="Cookie Preference"
                  footerLinkSix="Legal Notices"
                  footerLinkSeven="Account"
                  footerLinkEight="Ways To Watch"
                  footerLinkNine="Corporate Information"
                  footerLinkTen=" Only On Netflix"
                  footerLinkEleveth="Media Center"
                  footerLinkTwelve=" Terms Of Use"
                  footerLinkThirteen="Contact us"
                  lasttxt=" Netflix Pakistan"
                  footercss="footercss1"
                />
              </>
            }
          />
          <Route path="/SighnUp" element={<SighnUp appcss="app-2" />} />
          <Route path="/SighnIn" element={<SighnIn appcss="app-2" />} />
        </>
        {/* )} */}
      </Routes>
    </>
  );
}

export default App;
