# Embed Optimize - IFRAME

O projeto "Embed's Optimized" foi desenvolvido por André J. Bez Birolo com um intuito de transformar embed's e scripts externos mais performáticos trazendo para seus projetos mais velocidade e boas práticas de HTML.


## 🚀 Começando

Para utilizar em seu projeto você deve ter o arquivo Javscript onde contém o script e seguir os padrões de uso em HTML.

A função do código é fazer com que seu projeto seja mais performático. Ao invés de colocarmos o iframe diretamente no nosso HTML, colocamos uma imagem otimizada e leve instruindo o usuário sobre o que é o conteúdo e realizamos chamadas Javascript para carregar o iframe apenas quando é necessário. Ou seja, não haverá scripts externos carregando enquanto seu site termina de carrega. (Cá entre nós, scripts externos pesam bastante!)


### 📋 Pré-requisitos

Basta você ter HTML e JavaScript.


### 🔧 Explicando os eventos 

Nossa função javascript tem atualmente (10/03/2021) 4 casos possíveis de utilização, são eles:

```
1. Quando o usuário clicar na imagem substituta do embed. **(onclick)**
2. Quando o usuário passar o mouse em cima da imagem substituta. **(onmouseover)**
3. Alguns segundos após o carregamento do DOM da página. **(ondelay)**
4. Quando a imagem ficar visível para o usuário. -Default-  **(onvisible)**
```
Esse valores são passados no data embed type do IMG.

### 🔧 Explicando os parametros dentro da tag IMG

```
- Width.
- Height.
- Alt.
- data-background-url (Imagem que irá aparecer antes do carregamento do seu iframe).
- data-src (src do seu iframe).
- data-embed-type. (onclick, onmouseover, ondelay, onvisible).
- data-embed-time (em MS)(Utilizado apenas no tipo ondelay).
- data-youtube (Passar o ID do vídeo, caso seja Youtube).
- data-maps (Passar o código presente após o ../maps/{código} em incorporar um mapa).
```

## ⚙️ Testando para ver se está tudo ok!

Código exemplo em HTML:
```
<iframe title="Meu Iframe" data-background-url="/url/" data-youtube="/ID/" data-youtube-button="/URL/" data-maps="/código/" data-embed-type="/type/" data-embed-time="/time/" data-src="https://meuiframe.com.br" width="100" height="100"></frame>
```

## 📦 Resultados

Ao fazermos nosso embed carregar apenas quando é necessário, isso evita que script's externos atrapalhem o processamento do seu site fazendo com que o processador esteja mais disponivel para o que realmente é vital para o site. 

## 🚀 Exemplos de uso  🚀 

- Utilizando o Google Maps
Observações: Para obter seu código do maps basta selecionar o ponto no maps, compartilhar, incorporar um mapa e pegar o resultado após ../maps/(código).
```
 <iframe title="Meu iframe" width="200" height="200" data-maps="/seu código/" data-background-url="/sua foto de background/"></iframe>
```

- Utilizando o YouTube
Observações: O background é gerado automaticamente baseado na thumbnail do vídeo.
```
<iframe title="Meu iframe" width="200" height="200" data-youtube="/id do video/" data-youtube-button="/url opcional/" data-background-url="/sua foto de background/"></iframe>
```

## 📌 Versão


v1.0 - Código inicial do projeto. Contendo implementação de suporte à Google Maps e YouTube.

## 📄 Licença

Este projeto está sob a licença (Apache License 2.0) - veja o arquivo [LICENSE.md](https://github.com/AndreBezBirolo/embed-optimize-open-source/blob/main/LICENSE) para detalhes.

## 🎁 Considerações finais

* Divulgue a ideia e vamos crescer juntos! 📢
* Co-criador: Cayman Sistemas.

---
por [André Bez Birolo](https://gist.github.com/AndreBezBirolo) 
