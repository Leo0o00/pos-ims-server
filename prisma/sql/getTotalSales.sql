SELECT (
    SELECT sum(total_amount)
    FROM "Sales" AS S
    WHERE S.date BETWEEN (date_trunc('month', now()) - interval '1 month') AND (date_trunc('month', now()) - interval '1 day') AND deleted_at IS NULL
) AS prev_month, (
    SELECT sum(total_amount)
    FROM "Sales" AS S
    WHERE S.date BETWEEN date_trunc('month', now()) AND now() AND deleted_at IS NULL
) AS this_month;