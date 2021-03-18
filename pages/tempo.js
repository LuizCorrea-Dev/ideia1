function Tempo (props) {
  console.log('🚀Passando pelo Front-End')
  const dynamicDate = new Date()
  const dynamicDateString = dynamicDate.toGMTString()

  return(
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático: revalidado)</div>
    </div>
  )
}

/*------------------------↓ BACK-END ↓------------------------------------------*/

  export function getStaticProps() { // estes dados não vai para o front-end
    console.log('passando pelo 🧩 getStaticProps')
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return{
      props: { //este props será injeto do componente TEMPO da página
        staticDateString
      },
      revalidate:1 // tempo em segudos para revalidar os dados da pagina. está página carrega com sucesso .
    }
  }

/*------------------------↑ BACK-END ↑------------------------------------------*/

export default Tempo