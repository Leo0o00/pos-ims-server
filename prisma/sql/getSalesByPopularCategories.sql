SELECT Pc.name AS product_category_name, sum(Ps.total_price) AS total_sales
FROM "Sales" AS S
    INNER JOIN "Products_sales" AS Ps ON S.sales_id = Ps.sale_id
    INNER JOIN "Products" AS P ON P.product_id = Ps.product_id
    INNER JOIN "Products_categories" AS Pc ON P.category_name = Pc.name
WHERE S.deleted_at IS NULL AND P.deleted_at IS NULL
GROUP BY product_category_name
ORDER BY total_sales DESC;