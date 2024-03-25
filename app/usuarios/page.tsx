import Link from 'next/link';

import usuarios from '../../src/usuarios';

export default function ListaUsuarios () {
    
  
    return(
         <>
         <h1>Usuarios</h1>
         {/* <p><Link href={'/usuarios/1'}>Usuario 1</Link></p>
         <p><Link href={'/usuarios/2'}>Usuario 2</Link></p>
         <p><Link href={'/usuarios/3'}>Usuario 3</Link></p>
         <p><Link href={'/usuarios/4'}>Usuario 4</Link></p> */}

         {
            usuarios.map((usuario) => <p>Nome:{usuario.nome}</p>)
         }
           
           

            <li><Link href={'/'}>Voltar</Link></li>
         </>
    );
}