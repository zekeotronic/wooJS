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
   * @async
   * Creates a new coupon
   * @param {object} data Object containing the data to create a coupon
   * @return {object} Response
   */
  async couponAdd(data) {
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
   * Make changes to a coupon.
   * @async
   * @param {number} id 
   * @param {object} data 
   * @returns {object} Response
   */
  async couponEdit(id, data) {
    try {
      const response = await this.client.put(`coupons/${id}`, data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Delete a coupon.
   * @async
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
   * Delete a coupon.
   * @async
   * @param {number} id
   * @param {object} params
   * @returns {object} Response
   */
  async couponRemove(id, params = { force: false}) {
    try {
      const response = await this.client.delete(`coupons/${id}`, params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Batch create, update and delete multiple coupons.
   * @async
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
   * @async
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

  ////////// CUSTOMERS //////////

  /**
   * Create a new customer.
   * @async
   * @param {object} data 
   * @returns {object} Response
   */
  async customerCreate(data) {
    try {
      const response = await this.client.post('customers', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Create a new customer.
   * @async
   * @param {object} data 
   * @returns {object} Response
   */
  async customerAdd(data) {
    try {
      const response = await this.client.post('customers', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Retrieve and view a specific customer by ID.
   * @async
   * @param {number} id 
   * @returns {object} Response
   */
  async customerRetrieve(id) {
    try {
      const response = await this.client.get(`customers/${id}`);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Retrieve and view a specific customer by ID.
   * @async
   * @param {number} id 
   * @returns {object} Response
   */
  async customerGet(id) {
    try {
      const response = await this.client.get(`customers/${id}`);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * View all the customers.
   * @async
   * @param {object} params 
   * @returns {object} Response
   */
  async customerList(params = {}) {
    try {
      const response = await this.client.get('customers', params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * View all the customers.
   * @async
   * @param {object} params 
   * @returns {object} Response
   */
  async customerGetAll(params = {}) {
    try {
      const response = await this.client.get('customers', params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Make changes to a customer.
   * @async
   * @param {number} id 
   * @param {object} data 
   * @returns {object} Response
   */
  async customerUpdate(id, data) {
    try {
      const response = await this.client.put(`customers/${id}`, data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Make changes to a customer.
   * @async
   * @param {number} id 
   * @param {object} data 
   * @returns {object} Response
   */
  async customerEdit(id, data) {
    try {
      const response = await this.client.put(`customers/${id}`, data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Delete a customer.
   * @async
   * @param {number} id
   * @param {object} params
   * @returns {object} Response
   */
  async customerDelete(id, params = { force: true}) {
    try {
      const response = await this.client.delete(`customers/${id}`, params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Delete a customer.
   * @async
   * @param {number} id
   * @param {object} params
   * @returns {object} Response
   */
  async customerRemove(id, params = { force: true}) {
    try {
      const response = await this.client.delete(`customers/${id}`, params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Batch create, update and delete multiple coupons.
   * @async
   * @param {object} data 
   * @returns 
   */
  async customerBatchUpdate(data) {
    try {
      const response = await this.client.post('customers/batch', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Batch create, update and delete multiple coupons.
   * @async
   * @param {object} data 
   * @returns {object} Response
   */
  async customerBatch(data) {
    try {
      const response = await this.client.post('customers/batch', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Retrieve customer downloads permissions.
   * @async
   * @param {number} id 
   * @returns {object} Response
   */
  async customerDownloads(id) {
    try {
      const response = await this.client.get(`customers/${id}/downloads`);
      return response
    } catch (error) {
      return error
    }
  }

  ////////// ORDERS //////////

  /**
   * Create a new order.
   * @async
   * @param {object} data 
   * @returns {object} Response
   */
  async orderCreate(data) {
    try {
      const response = await this.client.post('orders', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Create a new order.
   * @async
   * @param {object} data 
   * @returns {object} Response
   */
  async orderAdd(data) {
    try {
      const response = await this.client.post('orders', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Retrieve and view a specific order by ID.
   * @async
   * @param {number} id 
   * @param {object} params
   * @returns {object} Response
   */
  async orderRetrieve(id, params = {}) {
    try {
      const response = await this.client.get(`orders/${id}`, params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Retrieve and view a specific order by ID.
   * @async
   * @param {number} id 
   * @param {object} params
   * @returns {object} Response
   */
  async orderGet(id, params = {}) {
    try {
      const response = await this.client.get(`orders/${id}`, params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * View all the orders.
   * @async
   * @param {object} params 
   * @returns {object} Response
   */
  async orderList(params = {}) {
    try {
      const response = await this.client.get('orders', params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * View all the orders.
   * @async
   * @param {object} params 
   * @returns {object} Response
   */
  async orderGetAll(params = {}) {
    try {
      const response = await this.client.get('orders', params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Make changes to an order.
   * @async
   * @param {number} id 
   * @param {object} data 
   * @returns {object} Response
   */
  async orderUpdate(id, data) {
    try {
      const response = await this.client.put(`orders/${id}`, data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Make changes to an order.
   * @async
   * @param {number} id 
   * @param {object} data 
   * @returns {object} Response
   */
  async orderEdit(id, data) {
    try {
      const response = await this.client.put(`orders/${id}`, data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Delete an order.
   * @async
   * @param {number} id
   * @param {object} params
   * @returns {object} Response
   */
  async orderDelete(id, params = { force: false}) {
    try {
      const response = await this.client.delete(`orders/${id}`, params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Delete an order.
   * @async
   * @param {number} id
   * @param {object} params
   * @returns {object} Response
   */
  async orderRemove(id, params = { force: false}) {
    try {
      const response = await this.client.delete(`orders/${id}`, params);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Batch create, update and delete multiple orders.
   * @async
   * @param {object} data 
   * @returns {object} Response
   */
  async orderBatchUpdate(data) {
    try {
      const response = await this.client.post('orders/batch', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Batch create, update and delete multiple orders.
   * @async
   * @param {object} data 
   * @returns {object} Response
   */
  async orderBatch(data) {
    try {
      const response = await this.client.post('orders/batch', data);
      return response
    } catch (error) {
      return error
    }
  }

  /**
   * Create a new note for an order.
   * @async
   * @param {number} orderID 
   * @param {object} data 
   * @returns {object} Response
   */
  async orderNoteCreate(orderID, data) {
    try {
      const response = await this.client.post(`orders/${orderID}/notes`, data)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Create a new note for an order.
   * @async
   * @param {number} orderId 
   * @param {object} data 
   * @returns {object} Response
   */
  async orderNoteAdd(orderID, data) {
    try {
      const response = await this.client.post(`orders/${orderID}/notes`, data)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Retrieve and view a specific note from an order.
   * @async
   * @param {number} orderID 
   * @param {number} noteID 
   * @returns {object} Response
   */
  async orderNoteRetrieve(orderID, noteID) {
    try {
      const response = await this.client.get(`orders/${orderID}/notes/${noteID}`)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Retrieve and view a specific note from an order.
   * @async
   * @param {number} orderID 
   * @param {number} noteID 
   * @returns {object} Response
   */
  async orderNoteGet(orderID, noteID) {
    try {
      const response = await this.client.get(`orders/${orderID}/notes/${noteID}`)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * View all the notes from an order.
   * @async
   * @param {number} orderID 
   * @returns {object} Response
   */
  async orderNoteList(orderID) {
    try {
      const response = await this.client.get(`orders/${orderID}/notes`)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * View all the notes from an order.
   * @async
   * @param {number} orderID 
   * @returns {object} Response
   */
  async orderNoteGetAll(orderID) {
    try {
      const response = await this.client.get(`orders/${orderID}/notes`)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Delete an order note.
   * @async
   * @param {number} orderID 
   * @param {number} noteID 
   * @returns {object} Response
   */
  async orderNoteDelete(orderID, noteID) {
    try {
      const response = await this.client.delete(`orders/${orderID}/notes/${noteID}`, { force: true })
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Delete an order note.
   * @async
   * @param {number} orderID 
   * @param {number} noteID 
   * @returns {object} Response
   */
  async orderNoteRemove(orderID, noteID) {
    try {
      const response = await this.client.delete(`orders/${orderID}/notes/${noteID}`, { force: true })
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Create a new refund for an order.
   * @async
   * @param {number} orderID 
   * @param {object} data 
   * @returns {object} Response
   */
  async refundCreate(orderID, data) {
    try {
      const response = await this.client.post(`orders/${orderID}/refunds`, data)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Create a new refund for an order.
   * @async
   * @param {number} orderID 
   * @param {object} data 
   * @returns {object} Response
   */
  async refundAdd(orderID, data) {
    try {
      const response = await this.client.post(`orders/${orderID}/refunds`, data)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Retrieve and view a specific refund from an order.
   * @async
   * @param {number} orderID 
   * @param {number} refundID 
   * @param {object} params
   * @returns {object} Response
   */
  async refundRetrieve(orderID, refundID, params = {}) {
    try {
      const response = await this.client.get(`orders/${orderID}/refunds/${refundID}`, params)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Retrieve and view a specific refund from an order.
   * @async
   * @param {number} orderID 
   * @param {number} refundID 
   * @param {object} params
   * @returns {object} Response
   */
  async refundGet(orderID, refundID, params = {}) {
    try {
      const response = await this.client.get(`orders/${orderID}/refunds/${refundID}`, params)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * View all the refunds from an order.
   * @async
   * @param {number} orderID 
   * @param {object} params
   * @returns {object} Response
   */
  async refundList(orderID, params = {}) {
    try {
      const response = await this.client.get(`orders/${orderID}/refunds`, params)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * View all the refunds from an order.
   * @async
   * @param {number} orderID 
   * @param {object} params
   * @returns {object} Response
   */
  async refundGetAll(orderID, params = {}) {
    try {
      const response = await this.client.get(`orders/${orderID}/refunds`, params)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Delete an order refund.
   * @async
   * @param {number} orderID 
   * @param {number} refundID 
   * @param {object} params
   * @returns {object} Response
   */
  async refundDelete(orderID, refundID, params = { force: true }) {
    try {
      const response = await this.client.delete(`orders/${orderID}/refunds/${refundID}`, params)
      return response
    } catch (error) {
        return error
    }
  }

  /**
   * Delete an order refund.
   * @async
   * @param {number} orderID 
   * @param {number} refundID 
   * @param {object} params
   * @returns {object} Response
   */
  async refundRemove(orderID, refundID, params = { force: true}) {
    try {
      const response = await this.client.delete(`orders/${orderID}/refunds/${refundID}`, params)
      return response
    } catch (error) {
        return error
    }
  }



}


module.exports = Woo;