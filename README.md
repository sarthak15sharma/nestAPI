## Steps to run

- npm i -g @nestjs/cli
- npm install
- npm run start:dev

## Routes

Base URL: localhost:3000/

### Product routes
**POST** /product/newproduct (make a new product)
> Body
```
{
  "id": <product_id>,
  "name": <product_name>,
  "description": <product_description>,
  "price": <product_price>,
  "imageURL": <product_image> (null if not specified)
}
```

**GET** /product/getallproducts (get an array of all products)

**GET** /product/getproduct (get the product with specific id)
> Query
```
{
  "productid": <product_id>
}
```

### cartitem routes
**POST** /cartiem/newcart (make a new cart, with productid 0 to represent an empty cart)
> Body
```
{
  "cartid": <cart_id>
}
```

**POST** /cartiem/newcartitem (make a new cartitem)
> Body
```
{
  "cartid": <cart_id>,
  "product": <product_id>,
  "quantity": <product_quantity>
}
```

**POST** /cartiem/updatequantity (update the quantity of an existing cartitem)
> Body
```
{
  "cartid": <cart_id>,
  "product": <product_id>,
  "quantity": <new_product_quantity>
}
```

**POST** /cartiem/deletecartitem (delete an existing cartitem)
> Body
```
{
  "cartid": <cart_id>,
  "product": <product_id>
}
```

**GET** /cartiem/getcart (get the cartitems associated to a cart)
> Query
```
{
  "cartid": <cart_id>
}
```

