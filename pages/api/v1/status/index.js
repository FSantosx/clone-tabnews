function status(request, response) {
  response.status(200).json({ mensagem: "ficando acima da média" });
}

export default status;
