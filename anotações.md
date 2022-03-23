## AREA DIREITA DO WPP →

- Iniciou criando arquvios ChatIntro em js e css nos components e importando no app.js
- criando uma tela básica com intro e icone no ChatIntro, adiciando frases no H1 e H2 e img

## AO CLICAR NA CONVERSA, IRA SUMIR A TELA DE INTRO E VAI ABRIR A TELA DA CONVERSA DO CHAT

- Adicionando const activeChat no App.js para dizer qual chat vai ser ativo ou não ao clikar na conversa 
    -Adicioanando const activeChat no app.js para dizer qual chat está sendo ativado
    - adicionando o 'activechat.chatId' que é o responsavel por indentificar qual chat está aberto e adicionando '!==' q siginifica 'diferente de ' no caso undefined siginifica q tem um chat ativo, então adicionando o componente de chat 'ChatWindow' e depois invertendo se for '===' 'igual á ' undefined  ou seja não existir um chat ativo, ele irá mostrar o 'ChatIntro' 
    - criando o componente ChatWindown em js e css
    - Adicionando a propriedade 'onClick' no 'chatListItem' e adicionando o setChatList nessa propriedade
    - Adicionando um chatId na const do chatlist = 'useState' e adicionando  informações como title e img  
    - repetindo o 'onClick' no export default do chatListItem e passar ela para a div principal 'chatListItem'
    - adicionando o 'active' no <chatListItem> e fazendo uma comparação ao adicioar 'true' e adicionar o 'active' no export default do chatListItem na div principal vc substitui a div para fazer um comparativo dizendo se 'active' for 'true' adiciiona uma classe 'active' caso contrario n coloca nd ''
    - Ao adicionar isso no css com <chatListItem.active> vc muda o bg quando ele tiver ativo.
    - Mudando o 'true' do active do <chatListItem> do app.js, pois acaba ativando todos os chats. então muda para 'activeChat.chatId' === igual á 'chatlist[key].chatId' 
    - Para receber os intes do chat como title e img tem q adicionar o 'data' = '{item}' no <chatLisItem> e adicionar o 'data' no export default do msm.
    - Substituindo o titulo e avatar do <chatListItem> por {data.title} e {data.image}

    ## TELA DO LADO DIREITO AO CLICAR NA CONVERSA → CHATWINDOW 

    * A tela do chat tem 3 subdivisões parte de cima o header no meio o chat, em baixo onde é digitado 
    - Iniciou criando a div principal <chatWindow> e em seguida as 3 divisões <chatWindow header, body e footer>
