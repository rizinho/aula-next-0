import Link from 'next/link';
export default function Page () {
   return(
      <>
        <h1>Hello, Next.Js!</h1>
        <h2>Título 2</h2>
        <h3>Título 3</h3>
        <p>A lorena é loca</p>
        
      <ul>
         <li><Link href={'/sobre'}>Sobre</Link></li>
         <li><Link href={'/cadusuario'}>Cadastro de usuario</Link></li>
      </ul>
      
      </>
   )
}