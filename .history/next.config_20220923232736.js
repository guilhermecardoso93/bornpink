const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['your.domain']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)