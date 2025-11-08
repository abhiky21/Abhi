import { Link } from "react-router-dom";
import Mhistory from "../assets/marks_history.png";
import certificate from "../assets/certificate.png";
import calender from "../assets/calender.png";
import holidays from "../assets/holidays.png";
import leave from "../assets/leave.png";
import syllabus from "../assets/syllabus.png";
import feedback from "../assets/feedback.png";
import trip from "../assets/school_trip.png";
import library from "../assets/library.png";
import hostal from "../assets/hostal.png";
import transport from "../assets/transport.png";
import sports from "../assets/events.png";
import laboratory from "../assets/laboratory.png";








export const navBarMenuItems = [
  {
    id: 0,
    title: "Personal",
    items: [
      {
        key: 1,
        label: "Marks history",
        image: Mhistory,
      },
      { key: 2, label: "Request for transfer certificate", image: certificate },
    ],
  },
  {
    id: 1,
    title: "Schedule",
    items: [
      {
        key: 1,
        label: "Academic Calendar",
        image: calender,
      },
      {
        key: 2,
        label: "Holidays",
        image: holidays,
      },
      {
        key: 3,
        label: "Apply for leave",
        image: leave,
      },
    ],
  },
  {
    id: 2,
    title: "Function",
    items: [
      {
        key: 1,
        label: "Syllabus",
        image: syllabus,
      },
      { key: 2, label: "School trips", image: trip },
      { key: 3, label: "Feedback", image: feedback },
    ],
  },
  {
    id: 4,
    title: "Facilities",
    items: [
      { key: 1, label: "Library", image: library },
      { key: 2, label: "Hostel", image: hostal },
      { key: 3, label: "Transport", image: transport },
      { key: 4, label: "Sports & Events", image: sports },
      { key: 5, label: "Laboratory", image: laboratory },
    ],
  },
];

export const headerMenu = {
  items: [
    {
      label: (
        <Link to="/profile" className="text-[10px]" rel="noopener noreferrer">
          Profile <i class="fa-solid fa-user"></i>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/logout" className="text-[10px]" rel="noopener noreferrer">
          Logout <i className="fa-solid fa-right-from-bracket"></i>
        </Link>
      ),
      key: "1",
    },
  ],
};
