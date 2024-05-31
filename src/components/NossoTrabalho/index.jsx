import RobotImage from '../../assets/imagem robo.png'
import './style.scss'

function NossoTrabalho () {
 return (
  <>
   <div className="pai">
    <h1 className='title'>AquaClean</h1>
    <div className="container">
     <div className="left"> {/* início do left content */}
      <div className='internal_left_one'>
      <section>
       <div className='circle'>
        <p>01</p>
       </div>
       <p className='texto'>Um drone submarino capaz de pegar o lixo e armazenar 
        para depois ser despejado de uma maneira correta</p>
      </section>
      <section>
       <div className='circle'>
        <p>01</p>
       </div>
       <p className='texto'>Um drone submarino capaz de pegar o lixo e armazenar 
        para depois ser despejado de uma maneira correta</p>
      </section>
      </div>
     </div>  {/* fim do left content */}
     <div className="right">
      {/* <img src={RobotImage} id='image_right'/> */}
     </div>
    </div>
   </div>
  </>
 )
}

export default NossoTrabalho