import fotoBaleia from '../../assets/6622.png'
import QuemSomos from '../../components/QuemSomos'
import { dataMembros } from '../../components/QuemSomos/data'
import './style.scss'

function Home() {
  return (
    <>
      <main>
        <div className='pai_conteudo_inicial'>
          <section className='filho_conteudo_inicial_first'>
            <p>Somos um grupo de <span style={{ backgroundColor: '#0c5fc5ce', paddingLeft: '5px', paddingRight: '5px' }}>estudantes</span> dedicados a desenvolver soluções inovadoras para desafios globais críticos. Nosso projeto,
              Aqua Clean, nasceu da necessidade urgente de abordar a escassez de água potável que afeta milhões de pessoas ao redor do mundo. Como futuros profissionais,
              acreditamos no poder da ciência e da tecnologia para promover mudanças significativas e sustentáveis. Nosso objetivo é garantir acesso universal à água limpa e segura,
              utilizando tecnologias avançadas e métodos ecológicos. Com entusiasmo e compromisso, estamos prontos para contribuir para a melhoria da qualidade de vida das comunidades carentes,
              promovendo saúde e bem-estar através do nosso projeto.</p>
            <div className='buttons'>
              <button id='button_faleconosco'>Fale conosco</button>
              <button id='button_quemsomos'>Quem somos</button>
            </div>
          </section>
          <section className='filho_conteudo_inicial'>
            <img src={fotoBaleia} />
          </section>
        </div>

       <QuemSomos />
      </main>
    </>
  )
}

export default Home