module.exports = {
    '/ksql': {
      target: 'http://centraldev.commsignia.net:8088',
      secure: false, // It's still ssl, but don't validate self signed cert
      changeOrigin: true,
      logLevel: 'debug',
    },
  };
  