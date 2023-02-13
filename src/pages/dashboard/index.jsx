import LeftSidebar from "./LeftSidebar"
import ContentBar from "./ContentBar"
import RightSidebar from "./RightSidebar"

function index() {
  return (
    <section className='bg-background grid grid-cols-[auto_1fr_auto] h-screen'>
     <LeftSidebar/>
     <ContentBar/>
     <RightSidebar/>
    </section>
  )
}

export default index