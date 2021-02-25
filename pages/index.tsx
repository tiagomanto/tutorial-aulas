import Head from 'next/head'

//import styles from '../styles/global.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tutorial Aulas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <main>
        <h1 className="title">
          Tutorial Aulas 
        </h1>

        <p className="description">
         <code> Resumo de todas as aula</code>
        </p>

        <div className="grid">
          
          <a className="card">
            <h3>Microsoft Word &rarr;</h3>
              <h4>Alterando as Margens do Documento</h4>
                <ol>
                  <li>Clique na Guia Exibir - Procure a caixa de seleção Régua</li>
                  <img width="100%"  src="https://s2.glbimg.com/V7F3yJvg1kcoMD56LHDHdR0aM0w=/0x0:695x370/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/Y/J/JuDVFHRqOqzPoMmkfWJQ/captura-de-tela-2-.jpg" alt=""/>
              
                  <img width="100%" src="https://s2.glbimg.com/R3n3GSgeLGEXO48zIt3t9P9BT_Y=/0x0:695x370/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/9/z/snppnWRue2cfnbYXsXTw/captura-de-tela-4-.jpg" alt=""/>
            
                  <li>Clique duas vezes na parte cinza da regua</li>
                  <p>Altere as margens com desejar Superior | inferior | Esquerda | Direita</p>
                  <img width="100%" src="https://support.content.office.net/pt-br/media/84c3af93-2f3e-4a29-bfef-2136351d04df.jpg" alt=""/>
                </ol>


              <h4>Copiar Texto da Internet e colando no Word</h4>
              <ol>
                <li>Abra o Google Crome</li>
                <li>entre em www.google.com</li>
                <li>pesquise o site desejado</li>
                <li>Para pesquisa especifica utilize o operador site:http://sitedesejado.com conteudo</li>
              
                <h5>Se quiser pesquisa tipos de arquivos mais avançada dentro de um site determinado </h5>
                  <code>site:tjsp.gov.br conteundo a ser pesquisado filetype: pdf </code> 
                  <br/><br/>
                <li>Selecione o texto desejado </li>
                <li>Abra o Word e cole o texto copiado </li>
                <img src="https://i1.wp.com/ramalho.com.br/wp-content/uploads/2013/10/Estado-colando-no-word.jpg?resize=275%2C376" alt=""/>

                <li>Troque as fontes para Titutlo do Texto: Arial, Tamanho 14, Negrito, Corpo do Texto: Arial, 12</li>
                <img src="https://support.content.office.net/pt-br/media/ca77bbe6-9425-4816-a40e-d922acfcd7b4.png" alt=""/>
                <br/><br/><br/>
                <li>Na <code>Pagina Inicial</code> procure por espaçamento entre linhas e aplique ao corpo do texto </li>
                <br/><br/><br/>
                <img src="https://support.content.office.net/pt-br/media/34405a69-2093-42ae-9708-fd6120bff239.png" alt=""/>
    


                </ol>

              <h4></h4>


            </a>

      
          

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
 
    </div>
  )
}
