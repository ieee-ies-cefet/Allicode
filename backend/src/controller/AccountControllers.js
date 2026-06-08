class accountControllers{
     async Cadastro(req, res){

    const dadosCad = req.body;
    
    const nome = dadosCad.nome;
    const email = dadosCad.email;
    const senha = dadosCad.senha;
    let senhaDigitada = null;

     if (nome == "") {
        return res.status(400).json({ message: "O nome é obrigatório." });
    }

    if (email == "") {
        return res.status(400).json({ message: "O email é obrigatório." });
    }

    if (senha == "") {
        return res.status(400).json({ message: "A senha é obrigatória." });
    }

    const dadosSalvosCad = {
        nomeCad: nome,
        emailCad: email,
        senhaCad: senha
    };

      return res.status(200).json({
        message: "Cadastro Concluído com Sucesso", 
        dadosSalvosCad: dadosSalvosCad
    });
  }

}

export default new AccountControllers();
