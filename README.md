# wooJS

## JavaScript Library for WooCommerce REST API

Extends [`@woocommerce/woocommerce-rest-api
`](https://www.npmjs.com/package/@woocommerce/woocommerce-rest-api?activeTab=readme) with more descriptive methods.

### Installation

```bash
npm i woojs
```

### Usage

```javascript
const Woo = require('woojs)
```

```javascript
const woo = new Woo(url, consumerKey, consumerSecret);
```

> [How to generate REST API keys](https://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#rest-api-keys)

#### Constructor Parameters

```javascript
WOO(url, key, secret {options})
```

| Parameter | Type   | Required | Description           |
| --------- | ------ | -------- | --------------------- |
| url       | string | yes      | WooCommerce store URL |
| key       | string | yes      | Consumer Key          |
| secret    | string | yes      | Consumer Secret       |
| options   | object | no       | Options object        |

### Options

| Option          | Type    | Default | Description                                                                |
| --------------- | ------- | ------- | -------------------------------------------------------------------------- |
| version         | string  | 'wc/v3' | WooCommerce REST API version                                               |
| queryStringAuth | boolean | false   | Use query string authentication instead of using the Authorization header. |
| timeout         | number  | 5000    | Request timeout in milliseconds.                                           |
| encoding        | string  | 'utf8'  | Request encoding.                                                          |
| port            | string  | ''      | Request port.                                                              |
