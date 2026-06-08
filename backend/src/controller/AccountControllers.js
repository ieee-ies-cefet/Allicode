import bcrypt from 'bcrypt';
import banco from '../database/conexaodb.js';
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
        const querySQL = `
        INSERT INTO usuarios (nome, email, senha) 
        VALUES ($1, $2, $3) 
        RETURNING id, nome, email;
    `;
        const valores = [nome, email, senhaDigitada];
        const resultado = await banco.query(querySQL, valores);
        const usuarioCriado = resultado.rows[0];

        return res.status(201).json({
            message: "Cadastro Concluído com Sucesso",
            usuarios: usuarioCriado
        });
    }

}

export default new AccountControllers();
