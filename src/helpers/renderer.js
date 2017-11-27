import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStatic } from 'glamor/server';
import { rehydrate } from 'glamor';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

import Routes from 'client/Routes';
export default (req, store, context) => {
	let { html, css, ids } = renderStatic(() =>
		renderToString(
			<Provider store={store}>
				<StaticRouter location={req.path} context={context}>
          <div>
            {renderRoutes(Routes)}
          </div>
				</StaticRouter>
			</Provider>
		)
	);

  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${css}</style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        <link rel="stylesheet" href="https://use.typekit.net/vvc5rso.css">
        <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
        <script>${rehydrate(ids)}</script>
      </body>
    </html>
  `;
};
