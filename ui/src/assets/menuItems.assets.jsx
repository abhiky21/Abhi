import { Link } from "react-router-dom";

import {
  marks_history,
  certificate,
  calender,
  holidays,
  leave,
  syllabus,
  feedback,
  school_trip,
  library,
  hostel,
  transport,
  events,
  laboratory,
} from "./icon";
import {
  BankTwoTone,
  CreditCardTwoTone,
  HomeTwoTone,
  ScheduleTwoTone,
  TrophyTwoTone,
} from "@ant-design/icons";

export const navBarMenuItems = [
  {
    id: 0,
    title: "Personal",
    items: [
      {
        key: 1,
        label: "Marks history",
        image: marks_history,
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
      { key: 2, label: "School trips", image: school_trip },
      { key: 3, label: "Feedback", image: feedback },
    ],
  },
  {
    id: 4,
    title: "Facilities",
    items: [
      { key: 1, label: "Library", image: library },
      { key: 2, label: "Hostel", image: hostel },
      { key: 3, label: "Transport", image: transport },
      { key: 4, label: "Sports & Events", image: events },
      { key: 5, label: "Laboratory", image: laboratory },
    ],
  },
];

export const headerMenu = {
  items: [
    {
      key: 1,
      label: (
        <Link to="/profile" className="text-[10px]" rel="noopener noreferrer">
          Profile <i class="fa-solid fa-user"></i>
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link to="/logout" className="text-[10px]" rel="noopener noreferrer">
          Logout <i className="fa-solid fa-right-from-bracket"></i>
        </Link>
      ),
    },
  ],
};

export const siderMenuItems = [
  { key: "/dashboard", label: "Dashboard", icon: <HomeTwoTone /> },
  { key: "/schedule", label: "Schedule", icon: <ScheduleTwoTone /> },
  { key: "/functions", label: "Functions", icon: <TrophyTwoTone /> },
  { key: "/facilities", label: "Facilities", icon: <BankTwoTone /> },
  { key: "/fee-payment", label: "Fee Payment", icon: <CreditCardTwoTone /> },
];

export const menuItems = {
  schedule: [{ label: "Academic Calender", image: calender }],
};
