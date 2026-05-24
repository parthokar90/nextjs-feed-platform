import Navbar from "@/components/layout/Navbar";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import FeedList from "@/components/feed/FeedList";
import MobileMenu from "@/components/mobile/MobileMenu";
import MobileBottomNavigation from "@/components/mobile/MobileBottomNavigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    // Feed Section Start
    <div className="_layout _layout_main_wrapper">

      {/* Switching Btn Start */}
      <ThemeToggle />
      {/* Switching Btn End */}

      <div className="_main_layout">

        {/* Desktop Menu Start */}
        <Navbar />
        {/* Desktop Menu End */}


        {/* Mobile Menu Start */}
        <MobileMenu />
        {/* Mobile Menu End */}


        {/* Mobile Bottom Navigation  */}
        <MobileBottomNavigation />
        {/* Mobile Bottom Navigation End */}


        {/* Main Layout Structure  */}
        <div className="container _custom_container">
          <div className="_layout_inner_wrap">
            <div className="row">
              {/* Left Sidebar */}
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <LeftSidebar />
              </div>
              {/* Left Sidebar  */}

              {/* Layout Middle  */}
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <FeedList />
              </div>
              {/* Layout Middle  */}


              {/* Right Sidebar  */}
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                <RightSidebar />
              </div>
            </div>
            {/* Right Sidebar  */}
          </div>
        </div>
        {/* Main Layout Structure  */}
      </div>
    </div>
    // Feed Section End
  );
}
