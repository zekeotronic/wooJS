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

---

## Installation

```bash
npm i woojs
```

## Usage

```javascript
const Woo = require('woojs)
```

```javascript
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
