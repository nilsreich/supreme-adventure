

  
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require("./config/cache");

module.exports = withPWA({
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      runtimeCaching,
    },
  })

