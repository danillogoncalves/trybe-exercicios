-- 1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT
  CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS Manager,
  CONCAT(M.FIRST_NAME, ' ', M.LAST_NAME) AS Employees
FROM hr.employees AS E
INNER JOIN hr.employees AS M
ON E.EMPLOYEE_ID = M.MANAGER_ID
WHERE E.DEPARTMENT_ID <> M.DEPARTMENT_ID;

-- 2. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.