# back-end-tf-web
“Back-End do trabalho final da disciplina de WEB”

Grupo:
Nicolas Morais & Pedro H. Rocha

Ferramentas Utilizadas:
- github.com
- codespace
- vercel.com
- neontech.com
- uploadcare.com
- brModelo

Documentação

URL API: https://back-end-tf-web-liard.vercel.app
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