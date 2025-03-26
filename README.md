# back-end-tf-web
“Back-End do trabalho final da disciplina de WEB”

Grupo:
- Marianny Santos,
- Tauanna Larissa,
- Gabriel Dias,
- Lara Emanuelly

Ferramentas:
- github.com, codespace, vercel.com, neontech.com, brModelo.

Documentação:

URL API: https://back-end-tf-web-pi.vercel.app

[GET] /usuario
Descrição: Retorna todos os usuários.
Observações: É necessário token de acesso via header (x-access-token)

[GET] /usuario/{id}
Descrição: Retorna um único usuário.
Observações: É necessário token de acesso via header (x-access-token)

[POST] /usuario
Descrição: Cadastra um usuário.
Body:
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
}
​
[PUT] /usuario/{id}
Descrição: Atualiza dados do usuário.
Observações: É necessário token de acesso via header (x-access-token)
Body:
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
}

[DELETE] /usuario/{id}
Descrição: Exclui um único usuário.
Observações: É necessário token de acesso via header (x-access-token)

[POST] /login
Descrição: Autentica usuário e gera token de acesso.
Observações: É necessário que o usuário esteja cadastrado.
Body:
{
  "senha": "***",
  "email": "email-usuario@email.com"
}