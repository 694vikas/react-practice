import About from "./About"
import All from "./All"
import Course from "./Course"
import Money from "./Money"

 

const Nav = () => {
  return (
    <div className="flex items-center bg-red-500 h-[10vh] justify-evenly font-bold">
<Course></Course>
<About></About>
<All></All>
<Money></Money>
    </div>
  )
}

export default Nav