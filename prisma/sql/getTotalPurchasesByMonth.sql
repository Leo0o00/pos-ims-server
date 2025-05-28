SELECT
SUM(CASE WHEN extract(month from purchase_date) = '01' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) January,
SUM(CASE WHEN extract(month from purchase_date) = '02' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) February,
SUM(CASE WHEN extract(month from purchase_date) = '03' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) March,
SUM(CASE WHEN extract(month from purchase_date) = '04' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) April,
SUM(CASE WHEN extract(month from purchase_date) = '05' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) May,
SUM(CASE WHEN extract(month from purchase_date) = '06' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) June,
SUM(CASE WHEN extract(month from purchase_date) = '07' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) July,
SUM(CASE WHEN extract(month from purchase_date) = '08' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) August,
SUM(CASE WHEN extract(month from purchase_date) = '09' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) September,
SUM(CASE WHEN extract(month from purchase_date) = '10' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) October,
SUM(CASE WHEN extract(month from purchase_date) = '11' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) November,
SUM(CASE WHEN extract(month from purchase_date) = '12' THEN (Pp.product_quantity * Pp.product_unit_price)
ELSE 0 END) December
FROM "Purchases"
INNER JOIN "Products_purchases" Pp on "Purchases".purchases_id = Pp.purchase_id
WHERE purchase_date BETWEEN date_trunc('year', now()) AND now() AND deleted_at IS NULL;