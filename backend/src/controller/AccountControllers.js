import bcrypt from 'bcrypt';
class AccountControllers {
    async Cadastro(req, res) {

        const dadosCad = req.body;

        const nome = dadosCad.nome;
        const email = dadosCad.email;
        const senha = dadosCad.senha;
        const confirmarSenha = dadosCad.confirmarSenha;
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

        if (senha && senha != confirmarSenha) {
            return res.status(400).json({ message: "As senhas não coincidem." });

        } else {
            senhaDigitada = await bcrypt.hash(senha, 10);
        }


        const dadosSalvosCad = {
            nomeCad: nome,
            emailCad: email,
            senhaCad: senhaDigitada
        };

        return res.status(200).json({
            message: "Cadastro Concluído com Sucesso",
            dadosSalvosCad: dadosSalvosCad
        });
    }

}

export default new AccountControllers();
