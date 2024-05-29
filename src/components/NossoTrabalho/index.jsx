import RobotImage from '../../assets/imagem robo.png'
import './style.scss'

function NossoTrabalho () {
 return (
  <>
   <div className="pai">
    <div className="container">
    <h1 className='title'>AquaClean</h1>

     <div className="left">
      <section>
       <div className='circle'>
        <p>01</p>
       </div>
       <p className='texto'>Um drone submarino capaz de pegar o lixar e armazenar 
        para depois ser despejado de uma maneira correta</p>
      </section>
      <section>
       <div className='circle'>
        <p>02</p>
       </div>
       <p className='texto'>Vai ser movido a bateria sustentável,
        vai ser construido a base resido recicláveis.</p>
      </section>
      <section>
      <div className='circle'>
        <p>03</p>
       </div>
       <p className='texto'>sistema inteligente e sistema de filtragem para identificar o lixo e filtra-lo</p>
      </section>
      <section>
      <div className='circle'>
        <p>04</p>
       </div>
       <p className='texto'>Sensores avançado para detectar o lixo e navegação autónoma para 
       ter o mínimo controle humano sobre o drone</p>
      </section>
     </div>
     <div className="right">
      <img src={RobotImage} id='image_right'/>
     </div>
    </div>
   </div>
  </>
 )
}

export default NossoTrabalho