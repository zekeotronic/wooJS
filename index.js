const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

class Woo {
  constructor(url, key, secret, options = {
    wpAPIPrefix: '',
    version: 'wc/v3',
    encoding: 'utf-8',
    queryStringAuth: false,
    port: '',
    timeout: 0
  }) {
    this.client = new WooCommerceRestApi({
      url: url,
      consumerKey: key,
      consumerSecret: secret,
      version: options.version,
      wpAPIPrefix: options.wpAPIPrefix,
      encoding: options.encoding,
      queryStringAuth: options.queryStringAuth,
      port: options.port,
      timeout: options.timeout
    });
  }
}


module.exports = Woo;