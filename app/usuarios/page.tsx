import Link from 'next/link';
export default function ListaUsuarios () {
    return(
         <>
         <h1>Usuarios</h1>
         <p>Usuario 1</p>
         <p>Usuario 2</p>
         <p>Usuario 3</p>
         <p>Usuario 4</p>
           
           
          <ul>
            <li><Link href={'/'}>Voltar</Link></li>
          </ul>
         </>
    );
}