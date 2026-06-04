class ContactControllers {

  async ReceberForm(req, res) {
    const dadosforms = req.body;
    
    const nome = dadosforms.nome;
    const email = dadosforms.email;
    const mensagem = dadosforms.mensagem;

    if (nome == "") {
        return res.status(400).json({ message: "O nome é obrigatório." });
    }

    if (email == "") {
        return res.status(400).json({ message: "O email é obrigatório." });
    }

    if (mensagem == "") {
        return res.status(400).json({ message: "Informe-nos sua mensagem." });
    }

    const dadosSalvos = {
        nomeusuario: nome,
        emailusuario: email,
        mensagemusuario: mensagem
    };

    return res.status(200).json({
        message: "Sua mensagem foi enviada!", 
        dadosSalvos: dadosSalvos
    });
  }

}

export default new ContactControllers();