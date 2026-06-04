async function ReceberForm (req, res){
    const dadosforms = res.body;
    const nome = dadosforms.name;
    const email = dadosforms.email;
    const mensagem = dadosforms.mensagem;

    if (nome == ""){
        return res.status(400)("O nome é obrigatório.");

    }

     if (email == ""){
        return res.status(400)("O email é obrigatório.");

    }

     if (mensagem == ""){
        return res.status(400)("Informe-nos sua mensagem.");

    }

    return res.status(200)("Sua mensagem foi enviada!");
}
