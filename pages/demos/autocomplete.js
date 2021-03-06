import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./autocomplete${props.lang}.md`)}
      demos={{
        'pages/demos/autocomplete/IntegrationDownshift.js': {
          js: require('docs/src/pages/demos/autocomplete/IntegrationDownshift').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/autocomplete/IntegrationDownshift'), 'utf8')
`,
        },
        'pages/demos/autocomplete/IntegrationAutosuggest.js': {
          js: require('docs/src/pages/demos/autocomplete/IntegrationAutosuggest').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/autocomplete/IntegrationAutosuggest'), 'utf8')
`,
        },
        'pages/demos/autocomplete/IntegrationReactSelect.js': {
          js: require('docs/src/pages/demos/autocomplete/IntegrationReactSelect').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/autocomplete/IntegrationReactSelect'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
