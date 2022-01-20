import Document,{Html,Head,Main,NextScript} from 'next/document'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html>
          <Head>
              <title>Mi portafolio</title>
              <meta name="description" content="Este mi portafolio, está hecho con React js, Next js y bootstrap. Aquí pueden ver mi CV y algunos proyectos."></meta>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>  
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument;