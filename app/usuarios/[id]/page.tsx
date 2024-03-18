import Link from 'next/link';
export default function PerfilUsuario ( {params}:{params:{id:string}} ) {
    return(
         <>
         <h1>Sobre</h1>
           <p>Nome do usuario</p>


            <li><Link href={'/usuario'}>Voltar</Link></li>
         </>
    );
}