function Tempo (props) {
  const dynamicDate = new Date()
  const dynamicDateString = dynamicDate.toGMTString()

  return(
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
    </div>
  )
}

export function getStaticProps() { // estes dados não vai para o front-end
  const staticDate = new Date()
  const staticDateString = staticDate.toGMTString()

  return{
    props: { //este props será injeto do componente TEMPO da página
      staticDateString
    }
  }
}

export default Tempo