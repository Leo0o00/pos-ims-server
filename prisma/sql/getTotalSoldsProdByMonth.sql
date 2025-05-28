SELECT (
    SELECT sum(quantity)
    FROM "Sales" AS S
    INNER JOIN "Products_sales" AS Ps on S.sales_id = Ps.sale_id
    WHERE S.date BETWEEN (date_trunc('month', now()) - interval '1 month') AND (date_trunc('month', now()) - interval '1 day') AND deleted_at IS NULL
) AS prev_month, (
    SELECT sum(quantity)
    FROM "Sales" AS S
    INNER JOIN "Products_sales" AS Ps on S.sales_id = Ps.sale_id
    WHERE S.date BETWEEN date_trunc('month', now()) AND now() AND deleted_at IS NULL
) AS this_month;