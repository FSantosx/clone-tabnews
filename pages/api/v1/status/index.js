import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query('SELECT 1+2 as SUM;');
  console.log(result.rows)
  response.status(200).json({ mensagem: "ficando acima da média" });
}

export default status;
