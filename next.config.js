module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    dev = true
    return {
      '/': { page: '/' },
      '/one.html': { page: '/one' },
    }
  },
}
