SEQUÊNCIA PARA CRIAR O PROJETO

Criar o arquivo package
### npm init

Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
### npm install express

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código
fonte, g significa globalmente
### npm install -g nodemon

Instalar o banco de dados MongoDB
### npm install --save mongodb

instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos
JavaScript para que possam ser utilizados pela aplicação
### npm install --save mongoose

Permitir acesso a API
### npm install --save cors

Gerar backup do banco de dados MongoDB
### mongodump --db celke --out c:\data\db

Restaurar o backup do banco de dados MongoDB
### mongorestore --db celke c:\data\db\celke