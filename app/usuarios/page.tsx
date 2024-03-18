import Link from 'next/link';
export default function ListaUsuarios () {
    return(
         <>
         <h1>Usuarios</h1>
         <p><Link href={'/usuarios/1'}>Usuario 1</Link></p>
         <p><Link href={'/usuarios/2'}>Usuario 2</Link></p>
         <p><Link href={'/usuarios/3'}>Usuario 3</Link></p>
         <p><Link href={'/usuarios/4'}>Usuario 4</Link></p>
           
           
          <ul>
            <li><Link href={'/'}>Voltar</Link></li>
          </ul>
         </>
    );
}