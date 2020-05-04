<img src="https://i.ibb.co/5nQNkKF/angler.png" alt="angler" border="0">

> _"Querer ser livre é também querer livres os outros."_ </br>
> – Simone de Beauvoir

## Descrição

Angler é um script de automação que usa o <a href="https://github.com/puppeteer/puppeteer">Puppeter</a> para efetuar o download de um ou vários arquivos.

## Requisitos

Node.js v12.x ou superior

## Instalação

1. Clone o repositório:
```
$ git clone https://github.com/hatysah/angler
```
2. Instale as dependências:
```
$ cd angler && npm install --save 
```
## Links suportadas

Atualmente são suportados links das seguintes fontes:

* Zippyshare
* Google Drive

## Uso

### Arquivo único

***Parâmetros*** ⮕ ```--single``` ou ```-s```.

***Argumentos*** ⮕ url.

***Ação***  ⮕ O comando **single** realiza o download de um único arquivo via linha de comando.

***Exemplo*** ⮕ ```$node src/index --single https://link.de.download/download```.

### Múltiplos arquivos

***Parâmetros*** ⮕ ```--file``` ou ```-f```.

***Argumentos*** ⮕ arquivo de texto.

***Ação***  ⮕ O comando **file** realiza o download de múltiplos links dentro de um arquivo de texto.

***Exemplo*** ⮕ ```$node src/index --file links.txt```.
