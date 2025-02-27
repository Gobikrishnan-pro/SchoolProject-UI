import { CiHome } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router-dom"
function Menu() {
    return (
        <div className="min-h-screen sticky top-0 w-full text-black">
            {/* LOGO */}
            <div className="flex items-center justify-evenly h-20">
                <img src="/js.jpg" alt="Logo" className="h-7 w-6" />
                <h1 className="text-md font-semibold lg:text-2xl">JS HEAVEN</h1>
            </div>
            {/* MENU */}
            <div className="flex flex-col w-full text-center">
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <CiHome className="inline-block text-2xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Home</span>
                    </a>
                </div>
                <div>
                    <Link to="/list/teachers" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <RiGraduationCapLine className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Teachers</span>
                    </Link>
                </div>
                <div>
                    <Link to="student" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <IoPeopleOutline className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm  font-thin">Students</span>
                    </Link>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <LuNotebookPen className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Subjects</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Menu