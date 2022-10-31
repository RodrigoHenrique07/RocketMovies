# RocketMovies

Desafio  - Curso Explorer - Rocketseat.


# Tecnologias utilizadas
<div style="display: inline_block"><br>
  <img align="center" alt="Rodrigo-react" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg">
</div>

   
## Status ✅
<p> A ideia do desafio foi criar o front-end da aplicação em React.js onde o usuário pode fazer anotações e classificar seus filmes favoritos, podendo adicionar ou remover um filme e criar uma resenha sobre eles, tendo as seguinte telas: </p>

- Login e cadastrar nova conta;
- Home;
- Profile;
- Movie Preview e;
- Movie Create.

Tela de login (SignIn)

![image](https://user-images.githubusercontent.com/99925589/199086829-c9e9b8ab-00d7-415c-854d-b52ef4b50596.png)

Foi utilizando a componentização para criar componentes com o styled-components, onde, para esta tela foi desenvolvido um componente do tipo Input,
passando propriedade para receber um icon e o placeholder e também um componente para o botão com uma propriedade de title.

Tela Home: 

![image](https://user-images.githubusercontent.com/99925589/199087808-b41e3dd2-8cc2-4b2f-a469-5bde0aebf4da.png)

- Foi utilizado o display: grid para dividar a tela em linhas (header e conteúdo);
- Desenvoldido um componente para o header;
- Desenvoldido um componente para as seções de filme e um componente para as tags de gênero;
- Reaproveitamento do componente criado para o botão


Tela Profile:

![image](https://user-images.githubusercontent.com/99925589/199089487-58da3809-cb3d-413d-9028-8481af64c327.png)

- Reaproveitamento do componente Input;
- Desenvolvido um novo componente para o botão voltar
- Desenolviedo um componente Avatar, onde o mesmo recebe um imagem do grithub e um input do tipo file para carregar uma nova imagem;
- Reaproveitamento do componente Button.


Tela Movie Create:


![image](https://user-images.githubusercontent.com/99925589/199091431-de7d8bc3-2dbf-4b10-b403-32467207bb47.png)

- Reaproveitamento do componente Header;
- Reaproveitamento do componente do botão voltar;
- Reaproveitamento do componente Input;
- Desenvolvido um novo componente do tipo TextArea com as observações
- Desenvolvido um novo componente para os marcadores, neste caso foi usando o if ternário para adicionar ou remover as bordas
- Reaproveitamento do componente Button, mas passando uma nova propriedade (isNew) para criar uma condição com o if ternário e modificar tanto o background quanto a cor da fonte


Tela Movie Preview:

![image](https://user-images.githubusercontent.com/99925589/199092320-c95f6a01-1b72-4eda-873f-13ca0f56755d.png)


Neta tela o usuário poderá ver suas anotações/comentários sobre o filme e sua classificação

- Reaproveitamento do Header;
- Reaproveitamento do botão voltar;
- Reaproveitamento das tags de gênero




## Aprendizado 

 * <p> Como escolher e instalar um setup ja pronto (npm create vite@latest); </p>
 * <p> como executar o projeto (npm run dev); </p>
 * <p> Estrutura de pasta;</p>
 * <p> Separar as pastas para em paginas e para os componentes;</p>
 * <p> Regra da componentização;</p>
 * <p> Instalação e utilização do styled-components;</p>
 * <p> Uso de um tema global com as cores usando o ThemeProvider;</p>
 * <p> Estilização global;</p>
 * <p> Componentização;</p>
 * <p> Propriedades;</p>
 * <p> Usa da biblioteca React-Icon;</p>
 * <p> Uso do if ternário.</p>
 
 

 ## Mobile 📱
 Neste desafio não foi trabalhado o mobile
