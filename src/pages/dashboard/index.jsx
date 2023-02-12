import LeftSidebar from "./LeftSidebar"
import ContentBar from "./ContentBar"

function index() {
  return (
    <section className='bg-background grid grid-cols-[auto_1fr_auto] h-screen'>
     <LeftSidebar/>
     <ContentBar/>
    </section>
  )
}

export default index