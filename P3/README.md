## Postagens no Stackoverflow

O Stack Exchange (https://api.stackexchange.com) é uma rede de sites de perguntas e respostas sobre uma ampla variedade de tópicos, onde as comunidades de usuários podem fazer perguntas, fornecer respostas e votar nas melhores respostas. A rede foi criada pela Stack Exchange Inc. e é conhecida principalmente pelo seu site mais famoso, o Stack Overflow, que se concentra em questões relacionadas à programação e desenvolvimento de software.

A API do Stack Exchange é uma interface de programação que permite aos desenvolvedores acessar dados públicos da rede Stack Exchange programaticamente. A API fornece uma maneira estruturada de interagir com a vasta quantidade de perguntas, respostas, usuários, comentários, tags, e outros dados disponíveis na rede Stack Exchange.

A API permite obter informações sobre as postagens no Stack Overflow.

### Endpoints da API
A API é composta por endpoints que permitem acessar diferentes tipos de dados. Alguns exemplos incluem:
- /answers: para obter respostas;
- /comments: para obter comentários;
- /questions: para obter perguntas;
- /tags: para obter informações sobre tags;
- /users: para obter informações de usuários.
As respostas da API são retornadas em formato JSON e a estrutura básica da URL de acesso aos endpoints da API é:
```
https://api.stackexchange.com/{versão}/{recurso}
```
Componentes da URL:
- https://api.stackexchange.com: URL base da API;
- {versão}: versão da API. Atualmente, a versão mais recente é _2.3_;
- {recurso}: o recurso específico a ser acessado acessar (por exemplo,  _answers_, _comments_, _questions_, _tags_, _users_, etc.).

Exemplo de URL para obter os _posts_ no site do Stack Overflow:
```
https://api.stackexchange.com/2.3/posts?page=1&pagesize=2&order=desc&sort=creation&site=stackoverflow
```
- A versão é _2.3_;
- O recurso é _posts_;
- Os parâmetros são necessários para especificar a página (_page_), o site (_site_), o início do período (_fromdate_), o final do período (_todate_), campo usado para ordenar o resultado (_sort_) e quantidade de postagens na resposta (_pagesize_).
Para mais detalhes veja https://api.stackexchange.com/docs/posts.