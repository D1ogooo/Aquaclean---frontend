import './style.scss'

function FaleConosco () {
  return (
   <>
    <div className='FaleConoscoContent'>
     <div className="ThirdContainer">
      <form className="ThirdPai">
        <h1>Deixe seu recado</h1>
       <input type="email" placeholder='Declare seu email...' />
       {/* <input type="text" placeholder='Sobre o que deseja falar?...'/> */}
       <textarea name="deixe_seu_recado" id="deixe_seu_recado" cols={47} rows={15} placeholder='O que deseja falar?'></textarea>
       <input type="submit" value="Enviar" />
      </form>
     </div>
    </div>
   </>
  )
}

export default FaleConosco