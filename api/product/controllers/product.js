"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const products = await strapi.services.product.find(ctx.query);
    const count = await strapi.services.product.count(ctx.query);
    return { products, count };
  },
};
