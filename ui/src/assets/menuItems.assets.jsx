import { Link } from "react-router-dom";

export const navBarMenuItems = {
  personal: {
    items: [
      { key: 1, label: <Link to="marks-history">Marks history</Link> },
      { key: 2, label: <Link to="transfer-certificate">Request for transfer certificate</Link> },
    ],
  },
  schedule: {
    items: [
      { key: 1, label: <Link to="academic-calendar">Academic Calendar</Link> },
      { key: 2, label: <Link to="holidays">Holidays</Link> },
      { key: 3, label: <Link to="leave-application">Apply for leave</Link> },
    ],
  },
  function: {
    items: [
      { key: 1, label: <Link to="syllabus">Syllabus</Link> },
      { key: 1, label: <Link to="trip">School trips</Link> },
      { key: 1, label: <Link to="feedback">Feedback</Link> },
    ],
  },
  facilities: {
    items: [
      { key: 1, label: <Link to="library">Library</Link> },
      { key: 2, label: <Link to="hostel">Hostel</Link> },
      { key: 3, label: <Link to="transport">Transport</Link> },
      { key: 4, label: <Link to="event">Sports & Events</Link> },
      { key: 5, label: <Link to="laboratory">Laboratory</Link> },
    ],
  },
};

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
