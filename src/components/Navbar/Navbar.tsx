import "./Navbar.css"
import Link from "next/link"

const Navbar = () => {

  return (
    <ul className="Nav">
       <Link href="/"> <li>Home </li></Link>
      <Link href="/about"> <li>About</li></Link>
      <Link href="/pricing"><li>Pricing</li></Link>


    </ul>
  )
}

export default Navbar