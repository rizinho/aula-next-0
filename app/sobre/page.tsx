import Link from 'next/link';
export default function Sobre () {
    return(
         <>
         <h1>Sobre</h1>
           <p>Informações sobre o site </p>

          <ul>
            <li><Link href={'/'}>Voltar</Link></li>
          </ul>
         </>
    );
}