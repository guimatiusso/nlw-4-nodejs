import express from 'express';

const app = express();

/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

 app.get("/", (request, response) => { 
     return response.json({message: "Hello World - NLW04"});
 })

 // 1° parametro => Rota (Recurso API)
 // 2° parametro => request, response

 app.post("/", (request, response) => {
     //Os dados já foram recebidos para salvar
     return response.json({message: "Os dados foram salvos com sucesso!"})
 })

app.listen(3333, () => console.log("Server is runnig!"));