import Link from 'next/link';
export default function PerfilUsuario ( {params}:{params:{id:string}} ) {
    return(
         <>
         <h1>Sobre</h1>
           <p>Nome do usuario {params.id}</p>


            <li><Link href={'/usuarios'}>Voltar</Link></li>
         </>
    );
}