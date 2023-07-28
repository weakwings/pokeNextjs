import Link from "next/link";
import Image from "next/image";
import "../../components/Nav/nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image className="icon" src="/pokeball.png" alt="PokeNext" width={40} height={40} />
        <h1>PokeNext</h1>
      </div>
      <div id="filter">
        <input tipe="text" className="Pfilter" placeholder="  PokeNext Filter"></input>
      </div>
      <ul className="link_item">
        <li>
          <Link href="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
