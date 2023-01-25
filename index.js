const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

class Woo {
  /**
   * Initialize the WooCommerce API
   * @param {string} url 
   * @param {string} key 
   * @param {string} secret 
   * @param {object} options 
   * @param {string} options.version
   * @param {string} options.encoding
   * @param {boolean} options.queryStringAuth
   * @param {string} options.port
   * @param {number} options.timeout
   * @returns {Woo} Woo
   */
  constructor(url, key, secret, options = {
    version: 'wc/v3',
    encoding: 'utf-8',
    queryStringAuth: false,
    port: '',
    timeout: 5000
  }) {
    this.client = new WooCommerceRestApi({
      url: url,
      consumerKey: key,
      consumerSecret: secret,
      version: options.version,
      encoding: options.encoding,
      queryStringAuth: options.queryStringAuth,
      port: options.port,
      timeout: options.timeout
    });
  }

  ////////// COUPONS //////////

  /**
   * @async
   * Creates a new coupon
   * @param {object} data Object containing the data to create a coupon
   * @return {object} Response
   */
  async couponCreate(data) {
    try {
      const response = await this.client.post('coupons', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Retrieve and view a specific coupon by ID
   * @async
   * @param {number} id Coupon ID
   * @returns {object} Response
   */
  async couponRetrieve(id) {
    try {
      const response = await this.client.get(`coupons/${id}`);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Retrieve and view a specific coupon by ID
   * @async
   * @param {number} id Coupon ID
   * @returns {object} Response
   */
  async couponGet(id) {
    try {
      const response = await this.client.get(`coupons/${id}`);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * List all the coupons that have been created.
   * @async
   * @param {object} params 
   * @returns {object} Response
   */
  async couponList(params = {}) {
    try {
      const response = await this.client.get('coupons', params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * List all the coupons that have been created.
   * @async
   * @param {object} params 
   * @returns {object} Response
   */
  async couponGetAll(params = {}) {
    try {
      const response = await this.client.get('coupons', params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Make changes to a coupon.
   * @async
   * @param {number} id 
   * @param {object} data 
   * @returns {object} Response
   */
  async couponUpdate(id, data) {
    try {
      const response = await this.client.put(`coupons/${id}`, data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Delete a coupon.
   * @param {number} id
   * @param {object} params
   * @returns {object} Response
   */
  async couponDelete(id, params = { force: false}) {
    try {
      const response = await this.client.delete(`coupons/${id}`, params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Batch create, update and delete multiple coupons.
   * @param {object} data 
   * @returns 
   */
  async couponBatchUpdate(data) {
    try {
      const response = await this.client.post('coupons/batch', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Batch create, update and delete multiple coupons.
   * @param {object} data 
   * @returns {object} Response
   */
  async couponBatch(data) {
    try {
      const response = await this.client.post('coupons/batch', data);
      return response
    } catch (error) {
      return error
    }
  }
}


module.exports = Woo;