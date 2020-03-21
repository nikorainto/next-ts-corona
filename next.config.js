const withPWA = require('next-pwa')

const development = process.env.NODE_ENV === 'development'

// Use service-worker only with prod builds
module.exports = development
  ? {}
  : withPWA({
      pwa: {
        dest: 'public',
      },
    })
