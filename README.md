# Embed Optimize - IMG

O projeto "Embed's Optimized" foi desenvolvido por André J. Bez Birolo com um intuito de transformar embed's e scripts externos mais performáticos trazendo para seus projetos mais velocidade e boas práticas de HTML.


## 🚀 Começando

Para utilizar em seu projeto você deve ter o arquivo Javscript onde contém o script e seguir os padrões de uso em HTML.

A função do código é fazer com que seu projeto seja mais performático. Ao invés de colocarmos o iframe diretamente no nosso HTML, colocamos uma imagem otimizada e leve instruindo o usuário sobre o que é o conteúdo e realizamos chamadas Javascript para carregar o iframe apenas quando é necessário. Ou seja, não haverá scripts externos carregando enquanto seu site termina de carrega. (Cá entre nós, scripts externos pesam bastante!)


### 📋 Pré-requisitos

Basta você ter HTML e JavaScript.


### 🔧 Explicando os eventos 

Nossa função javascript tem atualmente (07/05/2021) 4 casos possíveis de utilização, são eles:
Obs: não é obrigatório passar um valor, por padrão vem o "onvisible".

```
1. Quando o usuário clicar na imagem substituta do embed. **(onclick)**
2. Quando o usuário passar o mouse em cima da imagem substituta. **(onmouseover)**
3. Alguns segundos após o carregamento do DOM da página. **(ondelay)**
4. Quando a imagem ficar visível para o usuário. -Default-  **(onvisible)**
```
Esse valores são passados no data embed type do IMG.

### 🔧 Explicando os parametros dentro da tag IMG

```
- Width. *
- Height. *
- Alt. *
- data-embed-src (src do seu iframe, caso seja um pdf).
- data-embed-type. (onclick, onmouseover, ondelay, onvisible).
- data-embed-time (em MS)(Utilizado apenas no tipo ondelay).
- data-embed-video (Passar a url do seu vídeo seja ele no YouTube ou Vimeo).
Observação: Não necessário passar o data-src porque será puxado a thumbnail automaticamente.
- data-embed-player-button (Passar url da sua imagem de player, caso não tenha, não tem problema, foi colocado uma padrão.)
- data-embed-maps (Passar o código presente após o ../maps/{código} em incorporar um mapa, depois de clicar em compartilhar).

* OBRIGATÓRIO
```

## ⚙️ Testando para ver se está tudo ok!

Código exemplo em HTML:
```
<img class="embed-optimize" alt="Meu Iframe" data-embed-type="/type/" data-embed-time="/time/" data-embed-src="https://meuiframe.com.br" data-embed-video="https://youtu.be/hPZXtCHzdPw" width="100" height="100">
```
Observação: existe uma classe especifica que deve ser colocada na tag IMG que é embed-optimize.

## 📦 Resultados

Ao fazermos nosso embed carregar apenas quando é necessário, isso evita que script's externos atrapalhem o processamento do seu site fazendo com que o processador esteja mais disponivel para o que realmente é vital para o site. 


## 📌 Versão

v2.1 - Implementação de boas práticas e correções de bugs.

v2.0 - Implementado o suporte ao Vimeo.

- Facilitado a utilização.
- Reestruturação do código.

v1.2 - Implementado o suporte ao Google Maps.

v1.1 - Implementado o suporte ao Youtube.

- Um novo data foi criado na tag IMG de forma opcional para indicar se é vídeo do youtube ou não. [data-youtube]
- Caso haver esse atributo será utilizado a thumbnail do vídeo na imagem. Observação: é importante colocar um src na imagem de carregando ou do seu gosto para não aparecer apenas o texto alternativo até carregar a imagem.


v1.0 - Código inicial do projeto.

## 📄 Licença

Este projeto está sob a licença (Apache License 2.0) - veja o arquivo [LICENSE.md](https://github.com/AndreBezBirolo/embed-optimize-open-source/blob/main/LICENSE) para detalhes.

## 🎁 Considerações finais

* Utilizando IFRAME: [Clique aqui](https://github.com/AndreBezBirolo/embed-optimize-open-source/tree/iframeAlternative)
* Divulgue a ideia e vamos crescer juntos! 📢
* Co-criador: Cayman Sistemas.

---
por [André Bez Birolo](https://gist.github.com/AndreBezBirolo) 
