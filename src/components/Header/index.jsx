import { GiBigWave } from "react-icons/gi";
import './style.scss'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
   <>
    <div className='container'>
     <header>
      <Link to='/' className="logo">
       <GiBigWave/>
       <p>AquaClean</p>
      </Link>
      <ul className='header-ul'>
       <li><a href="#">Início</a></li>
       <li><a href="#">Quem somos</a></li>
       <li><a href="#">Nosso trabalho</a></li>
       <li><a href="#">Fale conosco</a></li>
      </ul>
     </header>
    </div>
   </>
  )
}