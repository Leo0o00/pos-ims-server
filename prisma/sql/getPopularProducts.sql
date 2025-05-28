-- @param {Int} $1:totalOutValues

SELECT p.branch AS branch, p.model AS model, p.description AS description, sum(quantity) AS quantity
FROM "Sales" AS S
INNER JOIN "Products_sales" AS Ps ON S.sales_id = Ps.sale_id
INNER JOIN "Products" AS P on Ps.product_id = P.product_id
WHERE S.deleted_at IS NULL AND P.deleted_at IS NULL
GROUP BY branch, model, description
ORDER BY quantity DESC
LIMIT $1;