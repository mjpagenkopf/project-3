import { Link } from 'react-router-dom';
import Nav from './Nav';
import banner from '../assets/banner.jpg'

const navLinks = [
  {
      name: "Home",
      path: "/home"
  },
  {
      name: "Soccer",
      path: "/soccer"
  },
  {
      name: "Basketball",
      path: "/basketball"
  },
  {
    name: "Baseball",
    path: "/baseball"
  },
  {
    name: "Create",
    path: "/create"
  },
  {
    name: "Team Form",
    path: "/team"
  },
  {
    name: "Player Form",
    path: "/player"
  },
]

export default function Header() {
  return ( 
      <header className="header">
          <Link to="/" id="home-link">
              <h1 className="mb-4"><i className="text-3xl"></i> LETS TALK STATS</h1>
          </Link>
          <Nav links={navLinks} />             
      </header>
  )
}