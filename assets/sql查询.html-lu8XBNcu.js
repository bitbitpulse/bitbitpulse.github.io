const l=JSON.parse('{"key":"v-081083e4","path":"/posts/database/sql/sql%E6%9F%A5%E8%AF%A2.html","title":"sql查询","lang":"zh-CN","frontmatter":{"sidebar":"auto","description":"sql查询 sql查询子句语法与执行顺序 1个sql查询语句包括1个或多个子句，其语法如下： sql子句的执行顺序如下： FROM子句：确定从哪个表中取数据。如果存在多表联结，就按照联结条件进行组合，返回结果集 WHERE子句：过滤不满足条件的记录 GROUP BY子句：将WHERE过滤后的结果集进行分组， 聚合函数：执行SELECT中的聚合计算：求和...","head":[["meta",{"property":"og:url","content":"https://bitbitpulse.github.io/posts/database/sql/sql%E6%9F%A5%E8%AF%A2.html"}],["meta",{"property":"og:site_name","content":"Bitbitpulse"}],["meta",{"property":"og:title","content":"sql查询"}],["meta",{"property":"og:description","content":"sql查询 sql查询子句语法与执行顺序 1个sql查询语句包括1个或多个子句，其语法如下： sql子句的执行顺序如下： FROM子句：确定从哪个表中取数据。如果存在多表联结，就按照联结条件进行组合，返回结果集 WHERE子句：过滤不满足条件的记录 GROUP BY子句：将WHERE过滤后的结果集进行分组， 聚合函数：执行SELECT中的聚合计算：求和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sql查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"sql查询子句语法与执行顺序","slug":"sql查询子句语法与执行顺序","link":"#sql查询子句语法与执行顺序","children":[]},{"level":2,"title":"SELECT子句","slug":"select子句","link":"#select子句","children":[]},{"level":2,"title":"FROM子句","slug":"from子句","link":"#from子句","children":[]},{"level":2,"title":"WHERE子句","slug":"where子句","link":"#where子句","children":[]},{"level":2,"title":"DISTINCT去重","slug":"distinct去重","link":"#distinct去重","children":[]},{"level":2,"title":"聚合函数与GROUP BY、Having子句","slug":"聚合函数与group-by、having子句","link":"#聚合函数与group-by、having子句","children":[{"level":3,"title":"聚合函数","slug":"聚合函数","link":"#聚合函数","children":[]},{"level":3,"title":"GROUP BY子句","slug":"group-by子句","link":"#group-by子句","children":[]},{"level":3,"title":"HAVING子句","slug":"having子句","link":"#having子句","children":[]}]},{"level":2,"title":"ORDER BY子句","slug":"order-by子句","link":"#order-by子句","children":[]},{"level":2,"title":"LIMIT子句","slug":"limit子句","link":"#limit子句","children":[]},{"level":2,"title":"视图","slug":"视图","link":"#视图","children":[{"level":3,"title":"创建视图","slug":"创建视图","link":"#创建视图","children":[]},{"level":3,"title":"使用视图","slug":"使用视图","link":"#使用视图","children":[]},{"level":3,"title":"删除视图","slug":"删除视图","link":"#删除视图","children":[]}]},{"level":2,"title":"子查询","slug":"子查询","link":"#子查询","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"标量子查询","slug":"标量子查询","link":"#标量子查询","children":[]},{"level":3,"title":"关联子查询","slug":"关联子查询","link":"#关联子查询","children":[]}]},{"level":2,"title":"集合操作","slug":"集合操作","link":"#集合操作","children":[{"level":3,"title":"UNION：并集","slug":"union-并集","link":"#union-并集","children":[]},{"level":3,"title":"INTERSECT：交集","slug":"intersect-交集","link":"#intersect-交集","children":[]},{"level":3,"title":"EXCEPT：差集","slug":"except-差集","link":"#except-差集","children":[]}]},{"level":2,"title":"联结查询","slug":"联结查询","link":"#联结查询","children":[{"level":3,"title":"INNER JOIN：内联接","slug":"inner-join-内联接","link":"#inner-join-内联接","children":[]},{"level":3,"title":"LEFT OUTER JOIN：左外联结","slug":"left-outer-join-左外联结","link":"#left-outer-join-左外联结","children":[]},{"level":3,"title":"RIGHT OUTER JOIN：右外联结","slug":"right-outer-join-右外联结","link":"#right-outer-join-右外联结","children":[]},{"level":3,"title":"CROSS JOIN：交叉联结","slug":"cross-join-交叉联结","link":"#cross-join-交叉联结","children":[]}]},{"level":2,"title":"高级查询","slug":"高级查询","link":"#高级查询","children":[{"level":3,"title":"CASE表达式","slug":"case表达式","link":"#case表达式","children":[{"level":4,"title":"简单CASE表单式","slug":"简单case表单式","link":"#简单case表单式","children":[]},{"level":4,"title":"搜索CASE表达式","slug":"搜索case表达式","link":"#搜索case表达式","children":[]}]},{"level":3,"title":"CTE表达式","slug":"cte表达式","link":"#cte表达式","children":[]},{"level":3,"title":"EXISTS谓词","slug":"exists谓词","link":"#exists谓词","children":[]},{"level":3,"title":"窗口函数","slug":"窗口函数","link":"#窗口函数","children":[]}]}],"git":{},"filePathRelative":"posts/database/sql/sql查询.md","autoDesc":true}');export{l as data};
