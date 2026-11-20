# 数据库

数据库相关笔记。

## RisingWave
In RisingWave, you can list materialized views and sinks in a specific schema either with quick SHOW commands or by querying the rw_catalog system tables when you need richer metadata (such as definitions, IDs, or combined results).

```
SELECT
    s.name AS schema_name,
    'materialized_view' AS object_type,
    mv.id,
    mv.name AS object_name,
    mv.definition
FROM rw_catalog.rw_materialized_views mv
JOIN rw_catalog.rw_schemas s
    ON mv.schema_id = s.id
WHERE s.name = 'bts'
UNION ALL
SELECT
    s.name AS schema_name,
    'sink' AS object_type,
    snk.id,
    snk.name AS object_name,
    snk.definition
FROM rw_catalog.rw_sinks snk
JOIN rw_catalog.rw_schemas s
    ON snk.schema_id = s.id
WHERE s.name = 'bts'
ORDER BY object_type, object_name;
```