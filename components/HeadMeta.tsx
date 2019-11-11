import {Helmet} from 'react-helmet';
import 'materialize-css/dist/css/materialize.min.css';

interface Props {
  children?: JSX.Element;
}

function HeadMeta(props: Props) {
  return (
    <Helmet>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />>
      <script
        defer
        src="../node_modules/materialize-css/dist/js/materialize.min.js"
      ></script>
    </Helmet>
  );
}

export default HeadMeta;
