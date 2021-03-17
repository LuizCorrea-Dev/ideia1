import Link from 'next/link'

function Home () {
  return (
    <>
       <div>Home</div>

      <Link href="/sobre">
        <a>Acessar a página Sobre</a> 
      </Link>
    </>  
  )
}

export default Home