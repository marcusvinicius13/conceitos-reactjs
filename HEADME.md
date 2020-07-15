#               Conceitos ReactJS                           #

#   Essa anotação foi feita com o intuito de aprendizagem, nesse caso o projeto vai ser criado apartir do comando (yarn init -y) para criar uma versão muito simples de um projeto e irmos adicionando o que formos precisando para conhecermos os fundamentos da criação de um projeto react. 

#  Biblioteca para construção de interfaces  SPA.
#  Trabalha fortemente com componentes.
#  Cria-se componentes, quando podemos isolar o código sem interferir no restante da aplicação :  (Conjunto de lógica estilização e estruturação).

#           Utilizaremos            # 

# Babel     :   Converte (Transpila) código do React para um código que os browsers entendam.
# Webpack   :   Para cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente.

# Loaders   :   Babel-loader, css-loader, image-loader (Cada arquivo loader ensina o Webpack como converter os arquivos para javaScript)  




# Criação do projeto : 
    yarn init -y


#               Adicionando Bibliotecas                     #

# React e React Dom : 
    yarn add react react-dom
    yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli 
    yarn add @babel/cli
    yarn add babel-loader
    yarn add webpack-dev-server -D
    yarn add style-loader css-loader
    yarn add file-loader
    yarn add axios
    yarn add @babel/plugin-transform-runtime -D



# Comandos para executar o webpack : 
    yarn webpack --mode development

    ou, quando colocamos o devServer
    
    yarn webpack-dev-server --mode development


# Conceitos mais importantes do React :

# 1°    Componente
# 2°    Propriedade
# 3°    Estado & Imutabilidade