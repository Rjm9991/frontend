const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { ProvidePlugin } = require('webpack');
const { merge } = require('webpack-merge');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), async (config) => {
  return merge(config, {
    plugins: [
      new ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      }),
    ],
    node: { global: true },
    resolve: {
      fallback: {
        buffer: false,
        crypto: false,
        events: false,
        path: false,
        stream: false,
        string_decoder: false,
        http: false,
        zlib: false,
        https: false,
        url: false,
      },
    },
  });
});
