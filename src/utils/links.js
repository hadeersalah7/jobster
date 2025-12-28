import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

export const links = [
    {
        id: 1,
        title: "stats",
        path: "/",
        icon: <IoBarChartSharp />
    }, 
    {
        id: 2,
        title: "all jobs",
        path: "all-jobs",
        icon: <MdQueryStats />
    },
    {
        id: 3,
        title: "add job", 
        path: "add-job",
        icon: <FaWpforms />
    },
    {
        id: 4,
        title: "profile",
        path: "profile",
        icon: <ImProfile />
    }
]