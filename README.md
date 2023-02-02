# wooJS

## JavaScript Library for WooCommerce REST API

Extends [`@woocommerce/woocommerce-rest-api
`](https://www.npmjs.com/package/@woocommerce/woocommerce-rest-api?activeTab=readme) with more descriptive methods.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Constructor Parameters](#constructor-parameters)
  - [Options](#options)
- [Coupons](#coupons)
  - [Coupon Properties](#coupon-properties)
    - [Coupon Meta Data Properties](#coupon---meta-data-properties)
  - [Methods](#coupon-methods)
    - [Create Coupon](#create-coupon)
    - [Retrieve Coupon](#retrieve-coupon)
    - [List Coupons](#list-coupons)
      - [List Coupons Parameters](#list-coupons-parameters)
    - [Update Coupon](#update-coupon)
    - [Delete Coupon](#delete-coupon)
      - [Delete Coupon Parameters](#delete-coupon-parameters)
    - [Batch Update Coupons](#batch-update-coupons)
- [Customers](#customers)
  - [Customer Properties](#customer-properties)
    - [Customer Billing Properties](#customer---billing-properties)
    - [Customer Shipping Properties](#customer---shipping-properties)
    - [Customer Meta Data Properties](#customer---meta-data-properties)
  - [Methods](#customer-methods)
    - [Create Customer](#create-customer)
    - [Retrieve Customer](#retrieve-customer)
    - [List Customers](#list-customers)
      - [List Customers Parameters](#list-customers-parameters)
    - [Update Customer](#update-customer)
    - [Delete Customer](#delete-customer)
      - [Delete Customer Parameters](#delete-customer-parameters)
    - [Batch Update Customers](#batch-update-customers)
    - [Retrieve Customer Downloads](#retrieve-customer-downloads)
- [Orders](#orders)
  - [Order properties](#order-properties)
    - [Order - Billing properties](#order---billing-properties)
    - [Order - Shipping properties](#order---shipping-properties)
    - [Order - Meta Data properties](#order---meta-data-properties)
    - [Order - Line items properties](#order---line-items-properties)
    - [Order - Tax lines properties](#order---tax-lines-properties)
    - [Order - Shipping lines properties](#order---shipping-lines-properties)
    - [Order - Fee lines properties](#order---fee-lines-properties)
    - [Order - Coupon lines properties](#order---coupon-lines-properties)
    - [Order - Refunds properties](#order---refunds-properties)
    - [Order - Taxes properties](#order---taxes-properties)
  - [Order Methods](#order-methods)
    - [Create Order](#create-order)
    - [Retrieve Order](#retrieve-order)
    - [List Orders](#list-orders)
      - [List Orders Parameters](#list-orders-parameters)
    - [Update Order](#update-order)
    - [Delete Order](#delete-order)
      - [Delete Order Parameters](#delete-order-parameters)
    - [Batch Update Orders](#batch-update-orders)
- [Order Notes](#order-notes)
  - [Order Notes Properties](#order-notes-properties)
  - [Order Notes Methods](#order-notes-methods)
    - [Create Order Note](#create-order-note)
    - [Retrieve Order Note](#retrieve-order-note)
    - [List All Order Notes](#list-all-order-notes)
      - [List All Order Notes Parameters](#list-all-order-notes-parameters)
    - [Delete Order Note](#delete-order-note)
      - [Delete Order Note Parameters](#delete-order-note-parameters)
- [Order Refunds](#order-refunds)
  - [Order Refunds Properties](#order-refunds-properties)
  - [Order Refunds Methods](#order-refunds-methods)
    - [Create Order Refund](#create-order-refund)
    - [Retrieve Order Refund](#retrieve-order-refund)
    - [List All Order Refunds](#list-all-order-refunds)
      - [List All Order Refunds Parameters](#list-all-order-refunds-parameters)
    - [Delete Order Refund](#delete-order-refund)
      - [Delete Order Refund Parameters](#delete-order-refund-parameters)
- [Products](#products)
  - [Products properties](#products-properties)
  - [Products methods](#products-methods)
    - [Create Product](#create-product)
    - [Retrieve Product](#retrieve-product)
    - [List Products](#list-all-products)
      - [List Products Parameters](#list-all-products-parameters)
    - [Update Product](#update-product)
    - [Delete Product](#delete-product)
      - [Delete Product Parameters](#delete-product-parameters)
    - [Batch Update Products](#batch-update-products)
- [Product Variations](#product-variations)
  - [Product Variations Properties](#product-variations-properties)
    - [Product Variation - Meta Data Properties](#product-variation---meta-data-properties)
    - [Product Variation - Dimensions Properties](#product-variation---dimensions-properties)
    - [Product Variation - Image Properties](#product-variation---image-properties)
    - [Product Variation - Attributes Properties](#product-variation---attributes-properties)
    - [Product Variation - Meta data Properties](#product-variation---meta-data-properties)
  - [Product Variations Methods](#product-variations-methods)
    - [Create Product Variation](#create-product-variation)
    - [Retrieve Product Variation](#retrieve-product-variation)
    - [List Product Variations](#list-product-variations)
      - [List Product Variations Parameters](#list-product-variations-parameters)
    - [Update Product Variation](#update-product-variation)
    - [Delete Product Variation](#delete-product-variation)
      - [Delete Product Variation Parameters](#delete-product-variation-parameters)
    - [Batch Update Product Variations](#batch-update-product-variations)
- [Product Attributes](#product-attributes)
  - [Product Attributes Properties](#product-attribute-properties)
  - [Product Attributes Methods](#product-attribute-methods)
    - [Create Product Attribute](#create-product-attribute)
    - [Retrieve Product Attribute](#retrieve-product-attribute)
    - [List Product Attributes](#list-product-attributes)
      - [List Product Attributes Parameters](#list-product-attributes-parameters)
    - [Update Product Attribute](#update-product-attribute)
    - [Delete Product Attribute](#delete-product-attribute)
      - [Delete Product Attribute Parameters](#delete-product-attribute-parameters)
    - [Batch Update Product Attributes](#batch-update-product-attributes)

---

## Installation

```bash
npm i woojs
```

## Usage

```javascript
const Woo = require("woojs");
const woo = new Woo(url, consumerKey, consumerSecret);
```

> [How to generate REST API keys](https://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#rest-api-keys)

### Constructor Parameters

```javascript
Woo(url, key, secret {options})
```

| Parameter | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| `url`     | string | yes      | WooCommerce store URL |
| `key`     | string | yes      | Consumer Key          |
| `secret`  | string | yes      | Consumer Secret       |
| `options` | object | no       | Options object        |

### Options

| Option            | Type    | Default | Description                                                                |
| ----------------- | ------- | ------- | -------------------------------------------------------------------------- |
| `version`         | string  | 'wc/v3' | WooCommerce REST API version                                               |
| `queryStringAuth` | boolean | false   | Use query string authentication instead of using the Authorization header. |
| `timeout`         | number  | 5000    | Request timeout in milliseconds.                                           |
| `encoding`        | string  | 'utf8'  | Request encoding.                                                          |
| `port`            | string  | ''      | Request port.                                                              |

## Coupons

### Coupon Properties

| Attribute                     | Type      | Description                                                                                                                          |
| ----------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                          | integer   | Unique identifier for the object `READ-ONLY`                                                                                         |
| `code`                        | string    | Coupon code. `MANDATORY`                                                                                                             |
| `amount`                      | string    | Amount of discount.                                                                                                                  |
| `date_created`                | date-time | The date the coupon was created. `READ-ONLY`                                                                                         |
| `date_created_gmt`            | date-time | The date the coupon was created, as GMT. `READ-ONLY`                                                                                 |
| `date_modified`               | date-time | The date the coupon was last modified. `READ-ONLY`                                                                                   |
| `date_modified_gmt`           | date-time | The date the coupon was last modified, as GMT. `READ-ONLY`                                                                           |
| `discount_type`               | string    | Determines the type of discount that will be applied. Options: `percent`, `fixed_cart` and `fixed_product`. Default is `fixed_cart`. |
| `description`                 | string    | Coupon description.                                                                                                                  |
| `date_expires`                | date-time | Coupon expiry date.                                                                                                                  |
| `date_expires_gmt`            | date-time | Coupon expiry date, as GMT.                                                                                                          |
| `usage_count`                 | integer   | Number of times the coupon has been used already. `READ-ONLY`                                                                        |
| `individual_use`              | boolean   | If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. Default is `false`.          |
| `product_ids`                 | array     | List of product IDs the coupon can be used on.                                                                                       |
| `excluded_product_ids`        | array     | List of product IDs the coupon cannot be used on.                                                                                    |
| `usage_limit`                 | integer   | How many times the coupon can be used in total.                                                                                      |
| `usage_limit_per_user`        | integer   | How many times the coupon can be used per customer.                                                                                  |
| `limit_usage_to_x_items`      | integer   | Maximum number of items in the cart the coupon can be applied to.                                                                    |
| `free_shipping`               | boolean   | If true and if the free shipping method requires a coupon, this coupon will enable free shipping. Default is `false`.                |
| `product_categories`          | array     | List of category IDs the coupon can be used on.                                                                                      |
| `excluded_product_categories` | array     | List of category IDs the coupon cannot be used on.                                                                                   |
| `exclude_sale_items`          | boolean   | If true, the coupon will not apply to items that have sale prices. Default is `false`.                                               |
| `minimum_amount`              | string    | Minimum order amount that needs to be in the cart before coupon applies.                                                             |
| `maximum_amount`              | string    | Maximum order amount allowed when using the coupon.                                                                                  |
| `email_restrictions`          | array     | List of email addresses that can use this coupon.                                                                                    |
| `used_by`                     | array     | List of user IDs who have used the coupon. `READ-ONLY`                                                                               |
| `meta_data`                   | array     | Meta data. See [Coupon - Meta data properties](#coupon---meta-data-properties)                                                       |

<a name="coupon---meta-data-properties"></a>

### Coupon - Meta Data Properties

| Attribute | Type    | Description |
| --------- | ------- | ----------- |
| `id`      | integer | Meta ID.    |
| `key`     | string  | Meta key.   |
| `value`   | string  | Meta value. |

<a name="coupon-methods"></a>

### Coupon Methods

#### Create Coupon

`.couponCreate()` or `.couponAdd()`

> (method) Woo.couponCreate(data: object): object

> (method) Woo.couponAdd(data: object): object

Creates a new coupon.

Example:

```javascript
woo
  .couponCreate(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

> [`data` props](#coupon-properties)

#### Retrieve Coupon

`.couponRetrieve()` or `.couponGet()`

> (method) Woo.couponRetrieve(id: number): object

> (method) Woo.couponGet(id: number): object

Retrieve and view a specific coupon by ID.

Example:

```javascript
woo
  .couponRetrieve(id)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .couponGet(id)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### List Coupons

`.couponList()` or `.couponGetAll()`

> (method) Woo.couponList(params?: object): object

> (method) Woo.couponGetAll(params?: object): object

List all coupons.

Example:

```javascript
woo
  .couponList()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .couponGetAll()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### List Coupons parameters:

| Parameter         | Type    | Description                                                                                                                  |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `context`         | string  | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`. |
| `page`            | integer | Current page of the collection. Default is `1`.                                                                              |
| `per_page`        | integer | Maximum number of items to be returned in result set. Default is `10`.                                                       |
| `search`          | string  | Limit results to those matching a string.                                                                                    |
| `after`           | string  | Limit response to resources published after a given ISO8601 compliant date.                                                  |
| `before`          | string  | Limit response to resources published before a given ISO8601 compliant date.                                                 |
| `modified_after`  | string  | Limit response to resources modified after a given ISO8601 compliant date.                                                   |
| `modified_before` | string  | Limit response to resources modified before a given ISO8601 compliant date.                                                  |
| `dates_are_gmt`   | boolean | Whether to consider GMT post dates when limiting response by published or modified date.                                     |
| `exclude`         | array   | Ensure result set excludes specific IDs.                                                                                     |
| `include`         | array   | Limit result set to specific ids.                                                                                            |
| `offset`          | integer | Offset the result set by a specific number of items.                                                                         |
| `order`           | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `asc`.                                   |
| `orderby`         | string  | Sort collection by object attribute. Options: `date`, `id`, `include`, `title`, `slug`. Default is `date`.                   |
| `code`            | string  | Limit result set to coupons with a specific code.                                                                            |

#### Update Coupon

`.couponUpdate()` or `.couponEdit()`

> (method) Woo.couponUpdate(id: number, data: object): object

> (method) Woo.couponEdit(id: number, data: object): object

Make changes to a coupon.

Example:

```javascript
woo
  .couponUpdate(id, data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

> [`data` props](#coupon-properties)

#### Delete Coupon

`.couponDelete()` or `.couponRemove()`

> (method) Woo.couponDelete(id: number, params?: object): object

> (method) Woo.couponRemove(id: number, params?: object): object

Delete a coupon.

Example:

```javascript
woo
  .couponDelete(id, { force: true }})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### Delete Coupon parameters:

| Parameter | Type    | Description                                                              |
| --------- | ------- | ------------------------------------------------------------------------ |
| `force`   | boolean | Use `true` whether to permanently delete the coupon, Default is `false`. |

#### Batch Update Coupons

> Note: By default it's limited to up to 100 objects to be created, updated or deleted.

`.couponBatchUpdate()` or `.couponBatch()`

> (method) Woo.couponBatchUpdate(data: object): object

> (method) Woo.couponBatch(data: object): object

Update multiple coupons.

Example:

```javascript
const data = {
  create: [
    {
      code: "20off",
      discount_type: "percent",
      amount: "20",
      individual_use: true,
      exclude_sale_items: true,
      minimum_amount: "100.00"
    },
    {
      code: "30off",
      discount_type: "percent",
      amount: "30",
      individual_use: true,
      exclude_sale_items: true,
      minimum_amount: "100.00"
    }
  ],
  update: [
    {
      id: 719,
      minimum_amount: "50.00"
    }
  ],
  delete: [
    720
  ]
};

woo.couponBatchUpdate(, data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Customers

### Customer properties

| Property             | Type      | Description                                                                                          |
| -------------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| `id`                 | integer   | Unique identifier for the resource. `READ-ONLY`                                                      |
| `date_created`       | date-time | The date the customer was created, in the site's timezone. `READ-ONLY`                               |
| `date_created_gmt`   | date-time | The date the customer was created, as GMT. `READ-ONLY`                                               |
| `date_modified`      | date-time | The date the customer was last modified, in the site's timezone. `READ-ONLY`                         |
| `date_modified_gmt`  | date-time | The date the customer was last modified, as GMT. `READ-ONLY`                                         |
| `email`              | string    | Customer email address. `MANDATORY`                                                                  |
| `first_name`         | string    | Customer first name.                                                                                 |
| `last_name`          | string    | Customer last name.                                                                                  |
| `role`               | string    | Customer role. `READ-ONLY`                                                                           |
| `username`           | string    | Customer login name.                                                                                 |
| `password`           | string    | Customer password. `WRITE-ONLY`                                                                      |
| `billing`            | object    | List of billing address data. See [Customer - Billing Properties](#customer---billing-properties)    |
| `shipping`           | object    | List of shipping address data. See [Customer - Shipping Properties](#customer---shipping-properties) |
| `is_paying_customer` | boolean   | Shows if the customer is a paying customer. `READ-ONLY`                                              |
| `avatar_url`         | string    | Avatar URL. `READ-ONLY`                                                                              |
| `meta_data`          | array     | Meta data. See [Customer - Meta data properties](#customer---meta-data-properties)                   |

#### Customer - Billing Properties

| Attribute    | Type   | Description                                          |
| ------------ | ------ | ---------------------------------------------------- |
| `first_name` | string | First name.                                          |
| `last_name`  | string | Last name.                                           |
| `company`    | string | Company name.                                        |
| `address_1`  | string | Address line 1.                                      |
| `address_2`  | string | Address line 2.                                      |
| `city`       | string | City name.                                           |
| `state`      | string | ISO code or name of the state, province or district. |
| `postcode`   | string | Postal code.                                         |
| `country`    | string | ISO code of the country.                             |
| `email`      | string | Email address.                                       |
| `phone`      | string | Phone number.                                        |

#### Customer - Shipping Properties

| Attribute    | Type   | Description                                          |
| ------------ | ------ | ---------------------------------------------------- |
| `first_name` | string | First name.                                          |
| `last_name`  | string | Last name.                                           |
| `company`    | string | Company name.                                        |
| `address_1`  | string | Address line 1.                                      |
| `address_2`  | string | Address line 2.                                      |
| `city`       | string | City name.                                           |
| `state`      | string | ISO code or name of the state, province or district. |
| `postcode`   | string | Postal code.                                         |
| `country`    | string | ISO code of the country.                             |

#### Customer - Meta data properties

| Attribute | Type   | Description          |
| --------- | ------ | -------------------- |
| `id`      | number | Meta ID. `READ-ONLY` |
| `key`     | string | Meta key.            |
| `value`   | string | Meta value.          |

### Customer methods

#### Create Customer

`.customerCreate()` or `.customerAdd()`

> (method) Woo.customerCreate(data: object): object

> (method) Woo.customerAdd(data: object): object

Create a customer.

Example:

```javascript
woo
  .customerCreate(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Retrieve Customer

`.customerRetrieve()` or `.customerGet()`

> (method) Woo.customerRetrieve(id: number): object

> (method) Woo.customerGet(id: number): object

Retrieve and view a specific customer by ID.

Example:

```javascript
woo
  .customerRetrieve(1)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### List Customers

`.customerList()` or `.customerGetAll()`

> (method) Woo.customerList(params?: object): object

> (method) Woo.customerGetAll(params?: object): object

View all the customers.

Example:

```javascript
woo
  .customerList()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### List Customers parameters

| Parameter  | Type    | Description                                                                                                                                                                                 |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context`  | string  | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`.                                                                |
| `page`     | integer | Current page of the collection. Default is `1`.                                                                                                                                             |
| `per_page` | integer | Maximum number of items to be returned in result set. Default is `10`.                                                                                                                      |
| `search`   | string  | Limit results to those matching a string.                                                                                                                                                   |
| `exclude`  | array   | Ensure result set excludes specific IDs.                                                                                                                                                    |
| `include`  | array   | Limit result set to specific ids.                                                                                                                                                           |
| `offset`   | integer | Offset the result set by a specific number of items.                                                                                                                                        |
| `order`    | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `asc`.                                                                                                  |
| `orderby`  | string  | Sort collection by object attribute. Options: `id`, `include`, `name` and `registered_date`. Default is `name`.                                                                             |
| `email`    | string  | Limit result set to resources with a specific email.                                                                                                                                        |
| `role`     | string  | Limit result set to resources with a specific role. Options: `all`, `administrator`, `editor`, `author`, `contributor`, `subscriber`, `customer` and `shop_manager`. Default is `customer`. |

#### Update Customer

`.customerUpdate()` or `.customerEdit()`

> (method) Woo.customerUpdate(id: number, data: object): object

> (method) Woo.customerEdit(id: number, data: object): object

Update a customer.

Example:

```javascript
woo
  .customerUpdate(1, data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

> [`data` options](#customer-properties)

#### Delete Customer

`.customerDelete()` or `.customerRemove()`

> (method) Woo.customerDelete(id: number, params?: object): object

> (method) Woo.customerRemove(id: number, params?: object): object

Delete a customer.

Example:

```javascript
woo
  .customerDelete(1)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### Delete Customer parameters

| Parameter  | Type    | Description                                                   |
| ---------- | ------- | ------------------------------------------------------------- |
| `force`    | boolean | Required to be `true`, as resource does not support trashing. |
| `reassign` | integer | User ID to reassign posts to.                                 |

#### Batch Update Customers

> Note: By default it's limited to up to 100 objects to be created, updated or deleted.

`.customerBatch()` or `.customerBatchUpdate()`

> (method) Woo.customerBatch(data: object): object

> (method) Woo.customerBatchUpdate(data: object): object

Update multiple customers in a single request.

Example:

```javascript
const data = {
  create: [
    {
      email: "john.doe2@example.com",
      first_name: "John",
      last_name: "Doe",
      username: "john.doe2",
      billing: {
        first_name: "John",
        last_name: "Doe",
        company: "",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555",
      },
      shipping: {
        first_name: "John",
        last_name: "Doe",
        company: "",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
      },
    },
    {
      email: "joao.silva2@example.com",
      first_name: "João",
      last_name: "Silva",
      username: "joao.silva2",
      billing: {
        first_name: "João",
        last_name: "Silva",
        company: "",
        address_1: "Av. Brasil, 432",
        address_2: "",
        city: "Rio de Janeiro",
        state: "RJ",
        postcode: "12345-000",
        country: "BR",
        email: "joao.silva@example.com",
        phone: "(55) 5555-5555",
      },
      shipping: {
        first_name: "João",
        last_name: "Silva",
        company: "",
        address_1: "Av. Brasil, 432",
        address_2: "",
        city: "Rio de Janeiro",
        state: "RJ",
        postcode: "12345-000",
        country: "BR",
      },
    },
  ],
  update: [
    {
      id: 26,
      billing: {
        phone: "(11) 1111-1111",
      },
    },
  ],
  delete: [11],
};

woo
  .customerBatch(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

> [`data` options](#customer-properties)

#### Retrieve Customer Downloads

`.customerDownloads()`

> (method) Woo.customerDownloads(id: number): object

Retrieve customer downloads permissions.

Example:

```javascript
woo
  .customerDownloads(1)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Orders

### Order properties

| Attribute              | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                   | integer   | Unique identifier for the resource. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `parent_id`            | integer   | Order parent ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `number`               | string    | Order number. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `order_key`            | string    | Order key. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `created_via`          | string    | Shows where the order was created. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `version`              | string    | Version of WooCommerce which last updated the order. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `status`               | string    | Order status. Options: `pending`, `processing`, `on-hold`, `completed`, `cancelled`, `refunded`, `failed` and `trash`. Default is `pending`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `currency`             | string    | Currency the order was created with, in ISO format. Options: `AED`, `AFN`, `ALL`, `AMD`, `ANG`, `AOA`, `ARS`, `AUD`, `AWG`, `AZN`, `BAM`, `BBD`, `BDT`, `BGN`, `BHD`, `BIF`, `BMD`, `BND`, `BOB`, `BRL`, `BSD`, `BTC`, `BTN`, `BWP`, `BYR`, `BZD`, `CAD`, `CDF`, `CHF`, `CLP`, `CNY`, `COP`, `CRC`, `CUC`, `CUP`, `CVE`, `CZK`, `DJF`, `DKK`, `DOP`, `DZD`, `EGP`, `ERN`, `ETB`, `EUR`, `FJD`, `FKP`, `GBP`, `GEL`, `GGP`, `GHS`, `GIP`, `GMD`, `GNF`, `GTQ`, `GYD`, `HKD`, `HNL`, `HRK`, `HTG`, `HUF`, `IDR`, `ILS`, `IMP`, `INR`, `IQD`, `IRR`, `IRT`, `ISK`, `JEP`, `JMD`, `JOD`, `JPY`, `KES`, `KGS`, `KHR`, `KMF`, `KPW`, `KRW`, `KWD`, `KYD`, `KZT`, `LAK`, `LBP`, `LKR`, `LRD`, `LSL`, `LYD`, `MAD`, `MDL`, `MGA`, `MKD`, `MMK`, `MNT`, `MOP`, `MRO`, `MUR`, `MVR`, `MWK`, `MXN`, `MYR`, `MZN`, `NAD`, `NGN`, `NIO`, `NOK`, `NPR`, `NZD`, `OMR`, `PAB`, `PEN`, `PGK`, `PHP`, `PKR`, `PLN`, `PRB`, `PYG`, `QAR`, `RON`, `RSD`, `RUB`, `RWF`, `SAR`, `SBD`, `SCR`, `SDG`, `SEK`, `SGD`, `SHP`, `SLL`, `SOS`, `SRD`, `SSP`, `STD`, `SYP`, `SZL`, `THB`, `TJS`, `TMT`, `TND`, `TOP`, `TRY`, `TTD`, `TWD`, `TZS`, `UAH`, `UGX`, `USD`, `UYU`, `UZS`, `VEF`, `VND`, `VUV`, `WST`, `XAF`, `XCD`, `XOF`, `XPF`, `YER`, `ZAR` and `ZMW`. Default is `USD`. |
| `date_created`         | date-time | The date the order was created, in the site's timezone. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `date_created_gmt`     | date-time | The date the order was created, as GMT. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `date_modified`        | date-time | The date the order was last modified, in the site's timezone. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `date_modified_gmt`    | date-time | The date the order was last modified, as GMT. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `discount_total`       | string    | Order discount total. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `discount_tax`         | string    | Order discount tax. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `shipping_total`       | string    | Order shipping total. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `shipping_tax`         | string    | Order shipping tax. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `cart_tax`             | string    | Order cart tax. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `total`                | string    | Order total. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `total_tax`            | string    | Order total tax. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `prices_include_tax`   | boolean   | Are prices inclusive of tax. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `customer_id`          | integer   | User ID who owns the order. 0 for guests. Default is `0`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `customer_ip_address`  | string    | Customer IP address. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `customer_user_agent`  | string    | Customer user agent. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `customer_note`        | string    | Customer note.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `billing`              | object    | Billing address. See [Order - Billing properties](#order---billing-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `shipping`             | object    | Shipping address. See [Order - Shipping properties](#order---shipping-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `payment_method`       | string    | Payment method ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `payment_method_title` | string    | Payment method title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `transaction_id`       | string    | Transaction ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `date_paid`            | date-time | Date the order was paid. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `date_paid_gmt`        | date-time | Date the order was paid, as GMT. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `date_completed`       | date-time | Date the order was completed. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `date_completed_gmt`   | date-time | Date the order was completed, as GMT. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `cart_hash`            | string    | MD5 hash of cart items to ensure orders are not modified. `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `meta_data`            | array     | Meta data. See [Order - Meta data properties](#order---meta-data-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `line_items`           | array     | Line items. See [Order - Line items properties](#order---line-items-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `tax_lines`            | array     | Tax lines. See [Order - Tax lines properties](#order---tax-lines-properties) `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `shipping_lines`       | array     | Shipping lines. See [Order - Shipping lines properties](#order---shipping-lines-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `fee_lines`            | array     | Fee lines. See [Order - Fee lines properties](#order---fee-lines-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `coupon_lines`         | array     | Coupon lines. See [Order - Coupon lines properties](#order---coupon-lines-properties)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `refunds`              | array     | Refunds. See [Order - Refunds properties](#order---refunds-properties) `READ-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `set_paid`             | boolean   | Define if the order is paid. It will set the status to processing and reduce stock items. Default is `false`. `WRITE-ONLY`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

#### Order - Billing Properties

| Attribute    | Type   | Description                                          |
| ------------ | ------ | ---------------------------------------------------- |
| `first_name` | string | First name.                                          |
| `last_name`  | string | Last name.                                           |
| `company`    | string | Company name.                                        |
| `address_1`  | string | Address line 1.                                      |
| `address_2`  | string | Address line 2.                                      |
| `city`       | string | City name.                                           |
| `state`      | string | ISO code or name of the state, province or district. |
| `postcode`   | string | Postal code.                                         |
| `country`    | string | Country code in ISO 3166-1 alpha-2 format.           |
| `email`      | string | Email address.                                       |
| `phone`      | string | Phone number.                                        |

#### Order - Shipping Properties

| Attribute    | Type   | Description                                          |
| ------------ | ------ | ---------------------------------------------------- |
| `first_name` | string | First name.                                          |
| `last_name`  | string | Last name.                                           |
| `company`    | string | Company name.                                        |
| `address_1`  | string | Address line 1.                                      |
| `address_2`  | string | Address line 2.                                      |
| `city`       | string | City name.                                           |
| `state`      | string | ISO code or name of the state, province or district. |
| `postcode`   | string | Postal code.                                         |
| `country`    | string | Country code in ISO 3166-1 alpha-2 format.           |

#### Order - Meta data properties

| Attribute | Type    | Description          |
| --------- | ------- | -------------------- |
| `id`      | integer | Meta ID. `READ-ONLY` |
| `key`     | string  | Meta key.            |
| `value`   | string  | Meta value.          |

#### Order - Line items properties

| Attribute      | Type    | Description                                                                       |
| -------------- | ------- | --------------------------------------------------------------------------------- |
| `id`           | integer | Item ID. `READ-ONLY`                                                              |
| `name`         | string  | Product name.                                                                     |
| `product_id`   | integer | Product ID.                                                                       |
| `variation_id` | integer | Variation ID, if applicable.                                                      |
| `quantity`     | integer | Item quantity.                                                                    |
| `tax_class`    | string  | Slug of the tax class of product.                                                 |
| `subtotal`     | string  | Line subtotal (before discounts).                                                 |
| `subtotal_tax` | string  | Line subtotal tax (before discounts). `READ-ONLY`                                 |
| `total`        | string  | Line total (after discounts).                                                     |
| `total_tax`    | string  | Line total tax (after discounts). `READ-ONLY`                                     |
| `taxes`        | array   | Taxes data. See [Order - Taxes properties](#order---taxes-properties) `READ-ONLY` |
| `meta_data`    | array   | Meta data. See [Order - Meta data properties](#order---meta-data-properties)      |
| `sku`          | string  | Stock keeping unit. `READ-ONLY`                                                   |
| `price`        | integer | Product price. `READ-ONLY`                                                        |

#### Order - Tax lines properties

| Attribute            | Type    | Description                                                                  |
| -------------------- | ------- | ---------------------------------------------------------------------------- |
| `id`                 | integer | Item ID. `READ-ONLY`                                                         |
| `rate_code`          | string  | Tax rate code. `READ-ONLY`                                                   |
| `rate_id`            | integer | Tax rate ID. `READ-ONLY`                                                     |
| `label`              | string  | Tax rate label. `READ-ONLY`                                                  |
| `compound`           | boolean | Whether or not the tax is a compound tax. `READ-ONLY`                        |
| `tax_total`          | string  | Tax total (not including shipping taxes) `READ-ONLY`                         |
| `shipping_tax_total` | string  | Shipping tax total `READ-ONLY`                                               |
| `meta_data`          | array   | Meta data. See [Order - Meta data properties](#order---meta-data-properties) |

#### Order - Shipping lines properties

| Attribute      | Type    | Description                                                                       |
| -------------- | ------- | --------------------------------------------------------------------------------- |
| `id`           | integer | Item ID. `READ-ONLY`                                                              |
| `method_title` | string  | Shipping method name.                                                             |
| `method_id`    | string  | Shipping method ID.                                                               |
| `total`        | string  | Shipping total.                                                                   |
| `total_tax`    | string  | Shipping tax total. `READ-ONLY`                                                   |
| `taxes`        | array   | Taxes data. See [Order - Taxes properties](#order---taxes-properties) `READ-ONLY` |
| `meta_data`    | array   | Meta data. See [Order - Meta data properties](#order---meta-data-properties)      |

#### Order - Fee lines properties

| Attribute    | Type    | Description                                                                       |
| ------------ | ------- | --------------------------------------------------------------------------------- |
| `id`         | integer | Item ID `READ-ONLY`                                                               |
| `name`       | string  | Fee name.                                                                         |
| `tax_class`  | string  | Tax class of fee.                                                                 |
| `tax_status` | string  | Tax status of fee. Options: `taxable` and `none`.                                 |
| `total`      | string  | Line total (after discounts).                                                     |
| `total_tax`  | string  | Line total tax (after discounts).`READ-ONLY`                                      |
| `taxes`      | array   | Taxes data. See [Order - Taxes properties](#order---taxes-properties) `READ-ONLY` |
| `meta_data`  | array   | Meta data. See [Order - Meta data properties](#order---meta-data-properties)      |

#### Order - Coupon lines properties

| Attribute      | Type    | Description                                                                  |
| -------------- | ------- | ---------------------------------------------------------------------------- |
| `id`           | integer | Item ID. `READ-ONLY`                                                         |
| `code`         | string  | Coupon Code.                                                                 |
| `discount`     | string  | Discount total. `READ-ONLY`                                                  |
| `discount_tax` | string  | Discount total tax. `READ-ONLY`                                              |
| `meta_data`    | array   | Meta data. See [Order - Meta data properties](#order---meta-data-properties) |

#### Order - Refunds properties

| Attribute | Type    | Description                |
| --------- | ------- | -------------------------- |
| `id`      | integer | Refund ID. `READ-ONLY`     |
| `reason`  | string  | Refund reason. `READ-ONLY` |
| `total`   | string  | Refund total. `READ-ONLY`  |

#### Order - Taxes properties

| Attribute            | Type    | Description                                                                  |
| -------------------- | ------- | ---------------------------------------------------------------------------- |
| `id`                 | integer | Item ID. `READ-ONLY`                                                         |
| `rate_code`          | string  | Tax rate code. `READ-ONLY`                                                   |
| `rate_id`            | string  | Tax rate ID. `READ-ONLY`                                                     |
| `label`              | string  | Tax rate label. `READ-ONLY`                                                  |
| `compound`           | boolean | Show if is a compound tax rate. `READ-ONLY`                                  |
| `tax_total`          | string  | Tax total (not including shipping taxes).`READ-ONLY`                         |
| `shipping_tax_total` | string  | Shipping tax total. `READ-ONLY`                                              |
| `meta_data`          | array   | Meta data. See [Order - Meta data properties](#order---meta-data-properties) |

### Order Methods

#### Create Order

`.orderCreate()` or `.orderAdd()`

> (method) Woo.orderCreate(data: object): object

> (method) Woo.orderAdd(data: object): object

Create a new order.

Example:

```javascript
woo
  .orderCreate(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderAdd(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Retrieve Order

`.orderRetrieve()` or `.orderGet()`

> (method) Woo.orderRetrieve(id: number, params?: object): object

> (method) Woo.orderGet(id: number, params?: object): object

Retrieve and view a specific order by ID.

Example:

```javascript
woo
  .orderRetrieve(id)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderGet(id)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### Retrieve Order parameters

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| `dp`      | string | Number of decimal points to use. |

#### List Orders

`.orderList()` or `.orderGetAll()`

> (method) Woo.orderList(params?: object): object

> (method) Woo.orderGetAll(params?: object): object

Retrieve and view a specific order by ID.

Example:

```javascript
woo
  .orderList(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderGetAll(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### List Orders parameters

| Parameter       | Type    | Description                                                                                                                                                                              |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context`       | string  | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`.                                                             |
| page            | integer | Current page of the collection. Default is `1`.                                                                                                                                          |
| per_page        | integer | Maximum number of items to be returned in result set. Default is `10`.                                                                                                                   |
| search          | string  | Limit results to those matching a string.                                                                                                                                                |
| after           | string  | Limit response to resources published after a given ISO8601 compliant date.                                                                                                              |
| before          | string  | Limit response to resources published before a given ISO8601 compliant date.                                                                                                             |
| modified_after  | string  | Limit response to resources modified after a given ISO8601 compliant date.                                                                                                               |
| modified_before | string  | Limit response to resources modified before a given ISO8601 compliant date.                                                                                                              |
| exclude         | array   | Ensure result set excludes specific IDs.                                                                                                                                                 |
| include         | array   | Limit result set to specific ids.                                                                                                                                                        |
| offset          | integer | Offset the result set by a specific number of items.                                                                                                                                     |
| order           | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `desc`.                                                                                              |
| orderby         | string  | Sort collection by object attribute. Options: `date`, `id`, `include`, `title` and `slug`. Default is `date`.                                                                            |
| parent          | array   | Limit result set to those of particular parent IDs.                                                                                                                                      |
| parent_exclude  | array   | Limit result set to all items except those of a particular parent ID.                                                                                                                    |
| status          | string  | Limit result set to orders assigned a specific status. Options: `any`, `pending`, `processing`, `on-hold`, `completed`, `cancelled`, `refunded`, `failed` and `trash`. Default is `any`. |
| customer        | integer | Limit result set to orders assigned a specific customer ID.                                                                                                                              |
| product         | integer | Limit result set to orders that include a specific product ID.                                                                                                                           |
| dp              | string  | Number of decimal points to use. Default is `2`.                                                                                                                                         |

#### Update Order

`.orderUpdate()` or `.orderEdit()`

> (method) Woo.orderUpdate(id: number, data: object): object

> (method) Woo.orderEdit(id: number, data: object): object

Update a specific order by ID.

Example:

```javascript
woo
  .orderUpdate(id, data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderEdit(id, data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

> [`data` properties](#order-properties)

#### Delete Order

`.orderDelete()` or `.orderRemove()`

> (method) Woo.orderDelete(id: number, params?: object): object

> (method) Woo.orderRemove(id: number, params?: object): object

Delete a specific order by ID.

Example:

```javascript
woo
  .orderDelete(id, params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderRemove(id, params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### Delete Order parameters

| Parameter | Type   | Description                                                             |
| --------- | ------ | ----------------------------------------------------------------------- |
| `force`   | string | Use `true` whether to permanently delete the order, Default is `false`. |

#### Batch Update Orders

> Note: By default it's limited to up to 100 objects to be created, updated or deleted.

`.orderBatchUpdate()` or `.orderBatch()`

> (method) Woo.orderBatchUpdate(data: object): object

> (method) Woo.orderBatch(data: object): object

Update multiple orders in a single request.

Example:

```javascript
const data = {
  create: [
    {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555",
      },
      shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
      },
      line_items: [
        {
          product_id: 79,
          quantity: 1,
        },
        {
          product_id: 93,
          quantity: 1,
        },
        {
          product_id: 22,
          variation_id: 23,
          quantity: 1,
        },
      ],
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "30.00",
        },
      ],
    },
    {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555",
      },
      shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
      },
      line_items: [
        {
          product_id: 22,
          variation_id: 23,
          quantity: 1,
        },
        {
          product_id: 22,
          variation_id: 24,
          quantity: 1,
        },
      ],
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "20.00",
        },
      ],
    },
  ],
  update: [
    {
      id: 727,
      shipping_methods: "Local Delivery",
    },
  ],
  delete: [723],
};
```

```javascript
woo
  .orderBatchUpdate(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderBatch(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Order Notes

### Order Notes properties

| Attribute          | Type      | Description                                                                                                                                          |
| ------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | integer   | Unique identifier for the resource. `READ-ONLY`                                                                                                      |
| `author`           | string    | Note author. `READ-ONLY`                                                                                                                             |
| `date_created`     | date-time | The date the note was created, in the site’s timezone. `READ-ONLY`                                                                                   |
| `date_created_gmt` | date-time | The date the note was created, as GMT. `READ-ONLY`                                                                                                   |
| `note`             | string    | Note content. `MANDATORY`                                                                                                                            |
| `customer_note`    | boolean   | If `true`, the note will be shown to customers and they will be notified. If `false`, the note will be for admin reference only. Default is `false`. |
| added_by_user      | boolean   | If `true`, this note will be attributed to the current user. If `false`, the note will be attributed to the system. Default is `false`.              |

### Order Notes methods

#### Create Order Note

`.orderNoteCreate()` or `.orderNoteAdd()`

> (method) Woo.orderNoteCreate(orderID: number, data: object): object

> (method) Woo.orderNoteAdd(orderID: number, data: object): object

Create a new note for an order.

Example:

```javascript
const data = {
  note: "This is a note.",
  customer_note: true,
};
```

```javascript
woo
  .orderNoteCreate(orderID, data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderNoteAdd(orderID, data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Retrieve Order Note

`.orderNoteRetrieve()` or `.orderNoteGet()`

> (method) Woo.orderNoteRetrieve(orderID: number, noteID: number): object

> (method) Woo.orderNoteGet(orderID: number, noteID: number): object

Retrieve and view a specific note from an order.

Example:

```javascript
woo
  .orderNoteRetrieve(orderID, noteID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderNoteGet(orderID, noteID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### List all Order Notes

`.orderNoteList()` or `.orderNoteGetAll()`

> (method) Woo.orderNoteList(orderID: number, params?: object): object

> (method) Woo.orderNoteGetAll(orderID: number, params?: object): object

View all the notes from an order.

Example:

```javascript
woo
  .orderNoteList(orderID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderNoteGetAll(orderID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### List all Order Notes parameters

| Parameter | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `context` | string | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`. |
| `type`    | string | Limit result to customers or internal notes. Options: `any`, `customer` and `internal`. Default is `any`.                    |

#### Delete Order Note

`.orderNoteDelete()` or `.orderNoteRemove()`

> (method) (method) Woo.orderNoteDelete(orderID: number, noteID: number, params?: object): object

> (method) Woo.orderNoteRemove(orderID: number, noteID: number, params?: object): object

Delete a specific note from an order.

Example:

```javascript
woo
  .orderNoteDelete(orderID, noteID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

```javascript
woo
  .orderNoteRemove(orderID, noteID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### Delete Order Note parameters

| Parameter | Type   | Description                                                   |
| --------- | ------ | ------------------------------------------------------------- |
| `force`   | string | Required to be `true`, as resource does not support trashing. |

## Order Refunds

### Order Refunds properties

| Attribute          | Type      | Description                                                                                                                                                                     |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | integer   | Unique identifier for the resource. `READ-ONLY`                                                                                                                                 |
| `date_created`     | date-time | The date the refund was created, in the site’s timezone. `READ-ONLY`                                                                                                            |
| `date_created_gmt` | date-time | The date the refund was created, as GMT. `READ-ONLY`                                                                                                                            |
| `amount`           | string    | Total refund amount. `Optional`. If this parameter is provided, it will take precedence over line item totals, even when total of line items does not matches with this amount. |
| `reason`           | string    | Refund reason.                                                                                                                                                                  |
| `refunded_by`      | integer   | ID of the user doing the refund. Default is the current user.                                                                                                                   |
| refunded_payment   | boolean   | If the payment was refunded via the API. See `api_refund`.                                                                                                                      |
| `meta_data`        | array     | Meta data. See [Order Refund Meta data properties](#order-refund-meta-data-properties).                                                                                         |
| `line_items`       | array     | List of line items. See [Order Refund Line Items properties](#order-refund-line-items-properties).                                                                              |

| `api_refund` | boolean | When `true`, the payment gateway API is used to generate the refund. Default is `true`. `WRITE-ONLY` |

#### Order Refund Meta data properties

| Attribute | Type    | Description          |
| --------- | ------- | -------------------- |
| `id`      | integer | Meta ID. `READ-ONLY` |
| `key`     | string  | Meta key.            |
| `value`   | string  | Meta value.          |

#### Order Refund Line Items properties

| Attribute      | Type    | Description                                                                                             |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `id`           | integer | Line item ID. `READ-ONLY`                                                                               |
| `name`         | string  | Product name.                                                                                           |
| `product_id`   | integer | Product ID.                                                                                             |
| `variation_id` | integer | Variation ID, if applicable.                                                                            |
| `quantity`     | integer | Quantity.                                                                                               |
| `tax_class`    | integer | Tax class.                                                                                              |
| `subtotal`     | string  | Line item subtotal.                                                                                     |
| `subtotal_tax` | string  | Line item subtotal tax. `READ-ONLY`                                                                     |
| `total`        | string  | Line item total.                                                                                        |
| `total_tax`    | string  | Line item total tax. `READ-ONLY`                                                                        |
| `taxes`        | array   | List of taxes. See [Order Refund Line Item Taxes properties](#order-refund-line-item-taxes-properties). |
| `meta_data `   | array   | Meta data. See [Order Refund Meta data properties](#order-refund-meta-data-properties).                 |
| `sku`          | string  | SKU.                                                                                                    |
| `price`        | integer | Product price.                                                                                          |
| `refund_total` | number  | Refund total. `WRITE-ONLY`                                                                              |

##### Order Refund Line Item Taxes properties

| Attribute      | Type    | Description                                    |
| -------------- | ------- | ---------------------------------------------- |
| `id`           | integer | Tax ID. `READ-ONLY`                            |
| `total`        | string  | Tax total. `READ-ONLY`                         |
| `subtotal`     | string  | Tax subtotal. `READ-ONLY`                      |
| `refund_total` | string  | The amount to refund for this tax `WRITE-ONLY` |

### Order Refunds methods

#### Create Order Refund

`.refundCreate()` or `.refundAdd()`

> (method) Woo.refundCreate(orderID: number, data: object): object

> (method) Woo.refundAdd(orderID: number, data: object): object

Create a new refund for an order.

Example:

```javascript
woo
  .refundCreate(orderID, {
    amount: "10.00",
    reason: "Refund for order",
    refunded_by: 1,
    line_items: [
      {
        id: 1,
        quantity: 1,
        refund_total: 10,
      },
    ],
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Retrieve Order Refund

`.refundRetrieve()` or `.refundGet()`

> (method) Woo.refundRetrieve(orderID: number, refundID: number, params?: object): object

> (method) Woo.refundGet(orderID: number, refundID: number, params?: object): object

Retrieve and view a specific refund from an order.

Example:

```javascript
woo
  .refundRetrieve(orderID, refundID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### Retrieve Order Refund parameters

| Parameter | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| `dp`      | string | Number of decimal points to use in each resource. |

#### List All Order Refunds

`.refundList()` or `.refundGetAll()`

> (method) Woo.refundList(orderID: number, params?: object): object

> (method) Woo.refundGetAll(orderID: number, params?: object): object

View all the refunds from an order.

Example:

```javascript
woo
  .refundList(orderID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### List All Order Refunds parameters

| Parameter        | Type    | Description                                                                                                                  |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `context`        | string  | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`. |
| `page`           | integer | Current page of the collection. Default is `1`.                                                                              |
| `per_page`       | integer | Maximum number of items to be returned in result set. Default is `10`.                                                       |
| `search`         | string  | Limit results to those matching a string.                                                                                    |
| `after`          | string  | Limit response to resources published after a given ISO8601 compliant date.                                                  |
| `before`         | string  | Limit response to resources published before a given ISO8601 compliant date.                                                 |
| `exclude`        | array   | Ensure result set excludes specific IDs.                                                                                     |
| `include`        | array   | Limit result set to specific ids.                                                                                            |
| `offset`         | integer | Offset the result set by a specific number of items.                                                                         |
| `order`          | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `desc`.                                  |
| `orderby`        | string  | Sort collection by object attribute. Options: `date`, `include`, `id`, `title` and `slug`. Default is `date`.                |
| `parent`         | array   | Limit result set to those of particular parent IDs.                                                                          |
| `parent_exclude` | array   | Limit result set to all items except those of a particular parent ID.                                                        |
| `dp`             | string  | Number of decimal points to use in each resource.                                                                            |

#### Delete Order Refund

`.refundDelete()` or `.refundRemove()`

> (method) Woo.refundDelete(orderID: number, refundID: number, params?: object): object

> (method) Woo.refundRemove(orderID: number, refundID: number, params?: object): object

Delete an order refund.

Example:

```javascript
woo
  .refundDelete(orderID, refundID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### Delete Order Refund parameters

| Parameter | Type    | Description                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| `force`   | boolean | Required to be `true`, as resource does not support trashing. |

## Products

### Products properties

### Products methods

#### Create Product

`.productCreate()` or `.productAdd()`

> (method) Woo.productCreate(data: object): object

> (method) Woo.productAdd(data: object): object

Create a new product.

Example:

```javascript
const data = {
  name: "Premium Quality",
  type: "simple",
  regular_price: "21.99",
  description:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  short_description:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  categories: [
    {
      id: 9,
    },
    {
      id: 14,
    },
  ],
  images: [
    {
      src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg",
    },
    {
      src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
    },
  ],
};

woo
  .productCreate(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Retrieve Product

`.productRetrieve()` or `.productGet()`

> (method) Woo.productRetrieve(productID: number): object

> (method) Woo.productGet(productID: number): object

Retrieve a product.

Example:

```javascript
woo
  .productRetrieve(productID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### List All Products

`.productList()` or `.productGetAll()`

> (method) Woo.productList(params?: object): object

> (method) Woo.productGetAll(params?: object): object

View all products.

Example:

```javascript
woo
  .productList()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### List All Products parameters

| Parameter         | Type    | Description                                                                                                                                    |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `context`         | string  | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`.                   |
| `page`            | integer | Current page of the collection. Default is `1`.                                                                                                |
| `per_page`        | integer | Maximum number of items to be returned in result set. Default is `10`.                                                                         |
| `search`          | string  | Limit results to those matching a string.                                                                                                      |
| `after`           | string  | Limit response to resources published after a given ISO8601 compliant date.                                                                    |
| `before`          | string  | Limit response to resources published before a given ISO8601 compliant date.                                                                   |
| `modified_after`  | string  | Limit response to resources modified after a given ISO8601 compliant date.                                                                     |
| `modified_before` | string  | Limit response to resources modified before a given ISO8601 compliant date.                                                                    |
| `dates_are_gmt`   | boolean | Whether to consider GMT post dates when limiting response by published or modified date.                                                       |
| `exclude`         | array   | Ensure result set excludes specific IDs.                                                                                                       |
| `include`         | array   | Limit result set to specific ids.                                                                                                              |
| `offset`          | integer | Offset the result set by a specific number of items.                                                                                           |
| `order`           | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `desc`.                                                    |
| `orderby`         | string  | Sort collection by object attribute. Options: `date`, `id`, `include`, `title`, `slug`, `price`, `popularity` and `rating`. Default is `date`. |
| `parent`          | array   | Limit result set to those of particular parent IDs.                                                                                            |
| `parent_exclude`  | array   | Limit result set to all items except those of a particular parent ID.                                                                          |
| `slug`            | string  | Limit result set to products with a specific slug.                                                                                             |
| `status`          | string  | Limit result set to products assigned a specific status. Options: `any`, `draft`, `pending`, `private` and `publish`. Default is `any`.        |
| `type`            | string  | Limit result set to products assigned a specific type. Options: `simple`, `grouped`, `external` and `variable`.                                |
| `sku`             | string  | Limit result set to products with a specific SKU.                                                                                              |
| `featured`        | boolean | Limit result set to featured products.                                                                                                         |
| `category`        | string  | Limit result set to products assigned a specific category ID.                                                                                  |
| `tag`             | string  | Limit result set to products assigned a specific tag ID.                                                                                       |
| `shipping_class`  | string  | Limit result set to products assigned a specific shipping class ID.                                                                            |
| `attribute`       | string  | Limit result set to products with a specific attribute.                                                                                        |
| `attribute_term`  | string  | Limit result set to products with a specific attribute term ID (required an assigned attribute).                                               |
| `tax_class`       | string  | Limit result set to products with a specific tax class. Default `options`: `standard`, `reduced-rate` and `zero-rate`.                         |
| `on_sale`         | boolean | Limit result set to products on sale.                                                                                                          |
| `min_price`       | string  | Limit result set to products based on a minimum price.                                                                                         |
| `max_price`       | string  | Limit result set to products based on a maximum price.                                                                                         |
| `stock_status`    | string  | Limit result set to products with specified stock status. Options: `instock`, `outofstock` and `onbackorder`.                                  |

#### Update Product

`.productUpdate()` or `.productEdit()`

> (method) Woo.productUpdate(productID: number, data: object): object

> (method) Woo.productEdit(productID: number, data: object): object

Update a product.

Example:

```javascript
const data = {
  regular_price: "24.54",
};

woo
  .productUpdate(productID, data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Delete Product

`.productDelete()` or `.productRemove()`

> (method) Woo.productDelete(productID: number, params?: object): object

> (method) Woo.productRemove(productID: number, params?: object): object

Delete a product.

Example:

```javascript
woo
  .productDelete(productID)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

##### Delete Product parameters

| Parameter | Type   | Description                                                               |
| --------- | ------ | ------------------------------------------------------------------------- |
| `force`   | string | Use `true` whether to permanently delete the product, Default is `false`. |

#### Batch Update Products

> Note: By default it's limited to up to 100 objects to be created, updated or deleted.

`.productBatch()` or `.productBatchUpdate()`

> (method) Woo.productBatch(data: object): object

> (method) Woo.productBatchUpdate(data: object): object

Batch create, update and delete multiple products.

Example:

```javascript
const data = {
  create: [
    {
      name: "Woo Single #1",
      type: "simple",
      regular_price: "21.99",
      virtual: true,
      downloadable: true,
      downloads: [
        {
          name: "Woo Single",
          file: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg",
        },
      ],
      categories: [
        {
          id: 11,
        },
        {
          id: 13,
        },
      ],
      images: [
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/cd_4_angle.jpg",
        },
      ],
    },
    {
      name: "New Premium Quality",
      type: "simple",
      regular_price: "21.99",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      short_description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      categories: [
        {
          id: 9,
        },
        {
          id: 14,
        },
      ],
      images: [
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg",
        },
        {
          src: "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
        },
      ],
    },
  ],
  update: [
    {
      id: 799,
      default_attributes: [
        {
          id: 6,
          name: "Color",
          option: "Green",
        },
        {
          id: 0,
          name: "Size",
          option: "M",
        },
      ],
    },
  ],
  delete: [794],
};

woo
  .productBatch(data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Product Variations

### Product Variations properties

| Attribute               | Type      | Description                                                                                                            |
| ----------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                    | integer   | Variation ID. `READ-ONLY`                                                                                              |
| `date_created`          | date-time | The date the variation was created, in the site's timezone. `READ-ONLY`                                                |
| `date_created_gmt`      | date-time | The date the variation was created, as GMT. `READ-ONLY`                                                                |
| `date_modified`         | date-time | The date the variation was last modified, in the site's timezone. `READ-ONLY`                                          |
| `date_modified_gmt`     | date-time | The date the variation was last modified, as GMT. `READ-ONLY`                                                          |
| `description`           | string    | Variation description.                                                                                                 |
| `permalink`             | string    | Variation URL. `READ-ONLY`                                                                                             |
| `sku`                   | string    | Unique identifier.                                                                                                     |
| `price`                 | string    | Current variation price. `READ-ONLY`                                                                                   |
| `regular_price`         | string    | Variation regular price.                                                                                               |
| `sale_price`            | string    | Variation sale price.                                                                                                  |
| `date_on_sale_from`     | date-time | Start date of sale price, in the site's timezone.                                                                      |
| `date_on_sale_from_gmt` | date-time | Start date of sale price, as GMT.                                                                                      |
| `date_on_sale_to`       | date-time | End data of sale price, in the site's timezone.                                                                        |
| `date_on_sale_to_gmt`   | date-time | End data of sale price, as GMT.                                                                                        |
| `on_sale`               | boolean   | Shows if the variation is on sale. `READ-ONLY`                                                                         |
| `status`                | string    | Variation status. Options: `draft`, `pending`, `private` and `publish`. Default is `publish`.                          |
| `purchasable`           | boolean   | Shows if the variation can be bought. `READ-ONLY`                                                                      |
| `virtual`               | boolean   | If the variation is virtual. Default is `false`.                                                                       |
| `downloadable`          | boolean   | If the variation is downloadable. Default is `false`.                                                                  |
| `downloads`             | array     | List of downloadable files. See [Product variation - Downloads properties](#product-variation---downloads-properties). |
| `download_limit`        | integer   | Number of times downloadable files can be downloaded after purchase. Default is `-1`.                                  |
| `download_expiry`       | integer   | Number of days until access to downloadable files expires. Default is `-1`.                                            |
| `tax_status`            | string    | Tax status. Options: `taxable`, `shipping` and `none`. Default is `taxable`.                                           |
| `tax_class`             | string    | Tax class.                                                                                                             |
| `manage_stock`          | boolean   | Stock management at variation level. Default is `false`.                                                               |
| `stock_quantity`        | integer   | Stock quantity.                                                                                                        |
| `stock_status`          | string    | Controls the stock status of the product. Options: `instock`, `outofstock`, `onbackorder`. Default is `instock`.       |
| `backorders`            | string    | If managing stock, this controls if backorders are allowed. Options: `no`, `notify` and `yes`. Default is `no`.        |
| `backorders_allowed`    | boolean   | Shows if backorders are allowed. `READ-ONLY`                                                                           |
| `backordered`           | boolean   | Shows if the variation is on backordered. `READ-ONLY`                                                                  |
| `weight`                | string    | Variation weight.                                                                                                      |
| `dimensions`            | object    | Variation dimensions. See [Product variation - Dimensions properties](#product-variation---dimensions-properties).     |
| `shipping_class`        | string    | Shipping class slug.                                                                                                   |
| `shipping_class_id`     | string    | Shipping class ID. `READ-ONLY`                                                                                         |
| `image`                 | object    | Variation image data. See [Product variation - Image properties](#product-variation---image-properties).               |
| `attributes`            | array     | List of attributes. See [Product variation - Attributes properties](#product-variation---attributes-properties).       |
| `menu_order`            | integer   | Menu order, used to custom sort products.                                                                              |
| `meta_data`             | array     | Meta data. See [Product variation - Meta data properties](#product-variation---meta-data-properties).                  |

#### Product variation - Downloads properties

| Attribute | Type   | Description |
| --------- | ------ | ----------- |
| `id`      | string | File ID.    |
| `name`    | string | File name.  |
| `file`    | string | File URL.   |

#### Product variation - Dimensions properties

| Attribute | Type   | Description       |
| --------- | ------ | ----------------- |
| `length`  | string | Variation length. |
| `width`   | string | Variation width.  |
| `height`  | string | Variation height. |

#### Product variation - Image properties

| Attribute           | Type      | Description                                                               |
| ------------------- | --------- | ------------------------------------------------------------------------- |
| `id`                | integer   | Image ID.                                                                 |
| `date_created`      | date-time | The date the image was created, in the site's timezone. `READ-ONLY`       |
| `date_created_gmt`  | date-time | The date the image was created, as GMT. `READ-ONLY`                       |
| `date_modified`     | date-time | The date the image was last modified, in the site's timezone. `READ-ONLY` |
| `date_modified_gmt` | date-time | The date the image was last modified, as GMT. `READ-ONLY`                 |
| `src`               | string    | Image URL.                                                                |
| `name`              | string    | Image name.                                                               |
| `alt`               | string    | Image alternative text.                                                   |

#### Product variation - Attributes properties

| Attribute | Type    | Description                   |
| --------- | ------- | ----------------------------- |
| `id`      | integer | Attribute ID.                 |
| `name`    | string  | Attribute name.               |
| `option`  | string  | Selected attribute term name. |

#### Product variation - Meta data properties

| Attribute | Type    | Description          |
| --------- | ------- | -------------------- |
| `id`      | integer | Meta ID. `READ-ONLY` |
| `key`     | string  | Meta key.            |
| `value`   | string  | Meta value.          |

### Product Variations methods

#### Create Product Variation

`.variationCreate()` or `.variationAdd()`

> (method) Woo.variationCreate(productID: number, data: object): object

> (method) Woo.variationAdd(productID: number, data: object): object

Create a new variation.

Example:

```javascript
const data = {
  regular_price: "9.00",
  image: {
    id: 423
  },
  attributes: [
    {
      id: 9,
      option: "Black"
    }
  ]
};

woo.
  .variationCreate( 56, data )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

#### Retrieve Product Variation

`.variationRetrieve()` or `.variationGet()`

> (method) Woo.variationRetrieve(productID: number, variationID: number): object

> (method) Woo.variationGet(productID: number, variationID: number): object

Retrieve and view a specific product variation by ID.

Example:

```javascript
woo.
  .variationRetrieve( 56, 57 )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

#### List Product Variations

`.variationList()` or `.variationGetAll()`

> (method) Woo.variationList(productID: number, params?: object): object

> (method) Woo.variationGetAll(productID: number, params?: object): object

View all the product variations.

Example:

```javascript
woo.
  .variationList( 56 )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

##### List Product Variations parameters

| Parameter        | Type    | Description                                                                                                                             |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `context`        | string  | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`.            |
| `page`           | integer | Current page of the collection. Default is `1`.                                                                                         |
| `per_page`       | integer | Maximum number of items to be returned in result set. Default is `10`. Maximum is `100`.                                                |
| `search`         | string  | Limit results to those matching a string.                                                                                               |
| `after`          | string  | Limit response to resources published after a given ISO8601 compliant date.                                                             |
| `before`         | string  | Limit response to resources published before a given ISO8601 compliant date.                                                            |
| `exclude`        | array   | Ensure result set excludes specific IDs.                                                                                                |
| `include`        | array   | Limit result set to specific ids.                                                                                                       |
| `offset`         | integer | Offset the result set by a specific number of items.                                                                                    |
| `order`          | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `desc`.                                             |
| `orderby`        | string  | Sort collection by object attribute. Options: `date`, `id`, `include`, `title` and `slug`. Default is `date`.                           |
| `parent`         | array   | Limit result set to those of particular parent IDs.                                                                                     |
| `parent_exclude` | array   | Limit result set to all items except those of a particular parent ID.                                                                   |
| `slug`           | string  | Limit result set to products with a specific slug.                                                                                      |
| `status`         | string  | Limit result set to products assigned a specific status. Options: `any`, `draft`, `pending`, `private` and `publish`. Default is `any`. |
| `sku`            | string  | Limit result set to products with a specific SKU.                                                                                       |
| `tax_class`      | string  | Limit result set to products with a specific tax class. Default options: `standard`, `reduced-rate` and `zero-rate`.                    |
| `on_sale`        | boolean | Limit result set to products on sale.                                                                                                   |
| `min_price`      | string  | Limit result set to products based on a minimum price.                                                                                  |
| `max_price`      | string  | Limit result set to products based on a maximum price.                                                                                  |
| `stock_status`   | string  | Limit result set to products with specified stock status. Options: `instock`, `outofstock` and `onbackorder`.                           |

#### Update Product Variation

`.variationUpdate()` or `.variationEdit()`

> (method) Woo.variationUpdate(productID: number, variationID: number, data: object): object

> (method) Woo.variationEdit(productID: number, variationID: number, data: object): object

Make changes to a product variation.

Example:

```javascript
const data = {
  regular_price: "9.00",
  image: {
    id: 423
  },
  attributes: [
    {
      id: 9,
      option: "Black"
    }
  ]
};

woo.
  .variationUpdate( 56, 57, data )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

#### Delete Product Variation

`.variationDelete()` or `.variationRemove()`

> (method) Woo.variationDelete(productID: number, variationID: number, params?: object): object

> (method) Woo.variationRemove(productID: number, variationID: number, params?: object): object

Delete a product variation.

Example:

```javascript
woo.
  .variationDelete( 56, 57 )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

##### Delete Product Variation parameters

| Parameter | Type    | Description                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| `force`   | boolean | Required to be `true`, as resource does not support trashing. |

#### Batch Update Product Variations

> Note: By default it's limited to up to 100 objects to be created, updated or deleted.

`.variationBatch()` or `.variationBatchUpdate()`

> (method) Woo.variationBatch(productID: number, data: object): object

> (method) Woo.variationBatchUpdate(productID: number, data: object): object

Batch create, update and delete multiple product variations.

Example:

```javascript
const data = {
  create: [
    {
      regular_price: "9.00",
      image: {
        id: 423
      },
      attributes: [
        {
          id: 9,
          option: "Black"
        }
      ]
    }
  ],
  update: [
    {
      id: 57,
      regular_price: "9.00",
      image: {
        id: 423
      },
      attributes: [
        {
          id: 9,
          option: "Black"
        }
      ]
    }
  ],
  delete: [ 58 ]
};

woo.
  .variationBatch( 56, data )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

## Product Attributes

### Product Attribute properties

| Attribute      | Type    | Description                                                                                      |
| -------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `id`           | number  | Unique identifier for the resource. `READ-ONLY`                                                  |
| `name`         | string  | Attribute name. `MANDATORY`                                                                      |
| `slug`         | string  | An alphanumeric identifier for the resource unique to its type.                                  |
| `type`         | string  | Type of attribute. By default only `select` is supported.                                        |
| `order_by`     | string  | Default sort order. Options: `menu_order`, `name`, `name_num` and `id`. Default is `menu_order`. |
| `has_archives` | boolean | Enable/Disable attribute archives. Default is `false`.                                           |

### Product Attribute methods

#### Create Product Attribute

`.attributeCreate()` or `.attributeAdd()`

> (method) Woo.attributeCreate(data: object): object

> (method) Woo.attributeAdd(data: object): object

Create a new product attribute.

Example:

```javascript
const data = {
  name: "Color",
  type: "select",
  order_by: "menu_order",
  has_archives: true
};

woo.
  .attributeCreate( data )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

#### Retrieve Product Attribute

`.attributeRetrieve()` or `.attributeGet()`

> (method) Woo.attributeRetrieve(id: number): object

> (method) Woo.attributeGet(id: number): object

Retrieve a product attribute.

Example:

```javascript
woo.
  .attributeRetrieve( 9 )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

#### List Product Attributes

`.attributeList()` or `.attributeGetAll()`

> (method) Woo.attributeList(params?: object): object

> (method) Woo.attributeGetAll(params?: object): object

View all the product attributes.

Example:

```javascript
woo.
  .attributeList()
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

##### List Product Attributes parameters

| Parameter | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `context` | string | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`. |

#### Update Product Attribute

`.attributeUpdate()` or `.attributeEdit()`

> (method) Woo.attributeUpdate(id: number, data: object): object

> (method) Woo.attributeEdit(id: number, data: object): object

Make changes to a product attribute.

Example:

```javascript
const data = {
  name: "Color",
  type: "select",
  order_by: "menu_order",
  has_archives: true
};

woo.
  .attributeUpdate( 9, data )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

#### Delete Product Attribute

> This also will delete all terms from the selected attribute.

`.attributeDelete()` or `.attributeRemove()`

> (method) Woo.attributeDelete(id: number, params?: object): object

> (method) Woo.attributeRemove(id: number, params?: object): object

Delete a product attribute.

Example:

```javascript
woo.
  .attributeDelete( 9, { force: true } )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```

##### Delete Product Attribute parameters

| Parameter | Type    | Description                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| `force`   | boolean | Required to be `true`, as resource does not support trashing. |

#### Batch Update Product Attributes

> Note: By default it's limited to up to 100 objects to be created, updated or deleted.

`.attributeBatch()` or `.attributeBatchUpdate()`

> (method) Woo.attributeBatch(data: object): object

> (method) Woo.attributeBatchUpdate(data: object): object

Batch create, update and delete multiple product attributes.

Example:

```javascript
const data = {
  create: [
    {
      name: "Color",
      type: "select",
      order_by: "menu_order",
      has_archives: true
    }
  ],
  update: [
    {
      id: 9,
      name: "Color",
      type: "select",
      order_by: "menu_order",
      has_archives: true
    }
  ],
  delete: [ 10 ]
};

woo.
  .attributeBatch( data )
  .then( response => {
    console.log( response );
  } )
  .catch( error => {
    console.log( error );
  } );
```
