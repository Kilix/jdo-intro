import Document, { Head, Main, NextScript } from 'next/document';
import { getRenderer } from '../fela';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const renderer = getRenderer();
    const css = renderer.renderToString();

    renderer.clear();

    return {
      ...page,
      css,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <title>JDO</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <style id="fela-stylesheet">{this.props.css}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://www.gstatic.com/firebasejs/3.7.4/firebase.js" />
        </body>
      </html>
    );
  }
}
