import PrincipalImageFoto from '../../assets/uma-baleia-jubarte-saltando-sobre-o-mar-ai-generative.jpg'
import fotoBaleia from '../../assets/6622.jpg'
import './style.scss'

function Home () {
  return (
   <>

     <main>

      <div className='pai_conteudo_inicial'>
       <section className='filho_conteudo_inicial_first'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga accusamus hic iste nemo asperiores sit,
         ad vitae laboriosam reprehenderit. Eveniet minus temporibus, accusamus ab numquam officiis. 
         ad vitae laboriosam reprehenderit. Eveniet minus temporibus, accusamus ab numquam officiis. 
         ad vitae laboriosam reprehenderit. Eveniet minus temporibus, accusamus ab numquam officiis. 
         ad vitae laboriosam reprehenderit. Eveniet minus temporibus, accusamus ab numquam officiis. 
         Sit aperiam numquam quo!</p>
         <div className='buttons'>
         <button id='button_faleconosco'>Fale conosco</button>
         <button id='button_quemsomos'>Quem somos</button>
         </div>
       </section>
       <section className='filho_conteudo_inicial'>
        <img src={fotoBaleia}/>
       </section>
      </div>

     </main>

   </>
  )
}

export default Home