import Home from "./pages/home/Home"
import BottomBar from "./shared/bottombar/BottomBar"
import GetDiscount from "./shared/fixedbar/GetDiscount"
import JoinSeminar from "./shared/fixedbar/JoinSeminar"
import MiddleBar from "./shared/fixedbar/MiddleBar"
import TopBar from "./shared/topbar/TopBar"

function App() {

  return (
    <main className="">
      <TopBar/>
      <Home/>
      <BottomBar/>
      <div className="md:hidden fixed flex justify-center w-full bottom-2 z-20">
        <MiddleBar/>
      </div>
      <div className="hidden md:block fixed z-20 top-1/2 -left-10 -rotate-90">
        <JoinSeminar/>
      </div>
      <div className="hidden md:block fixed z-20 top-1/2 -right-10 rotate-90">
        <GetDiscount/>
      </div>
    </main>
  )
}

export default App
