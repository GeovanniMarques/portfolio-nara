# Pontos de atenção

1. **Aria-labels**
2. **SEO friendly**
3. **Hero section**


## Conversa com Claude.ai
> Meu hero section, na verdade, pretendia fazer inicialmente, como se fosse um enorme "header", depois, no ato de scroll, apareceria com uma pequena logo.

> O atributo HTML pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" é usado para especificar uma expressão regular que o valor de um campo de entrada (como <input type="text"> ou <input type="email">) deve corresponder para ser considerado válido durante a validação de formulário [1].
Neste caso específico, a expressão regular fornecida é projetada para validar um endereço de e-mail: 
[a-z0-9._%+-]+: Corresponde a um ou mais caracteres que podem ser letras minúsculas, números ou os símbolos '.', '_', '%', '+' ou '-'. Isso cobre a parte do nome de usuário do e-mail.
@: Corresponde ao símbolo literal '@'.
[a-z0-9.-]+: Corresponde a um ou mais caracteres que podem ser letras minúsculas, números, pontos ou hífens. Isso cobre o nome do domínio (por exemplo, 'gmail', 'outlook').
\.: Corresponde a um ponto literal (o caractere \ "escapa" o ponto, pois o ponto sozinho em regex tem um significado especial).
[a-z]{2,}: Corresponde a duas ou mais letras minúsculas. Isso cobre o domínio de nível superior (por exemplo, 'com', 'br', 'org').
$: Marca o fim da string, garantindo que não haja caracteres adicionais após o domínio de nível superior. 
Portanto, ele garante que o usuário insira um valor que se parece com um endereço de e-mail válido antes que o formulário possa ser enviado. Se o padrão não for correspondido, o navegador exibirá uma mensagem de erro padrão (que pode ser personalizada com o atributo title ou oninvalid) e impedirá o envio do formulário [1]. 

## 2. O que nunca pode faltar: Validação no Back-end
Embora o HTML e o JavaScript ajudem o usuário, eles não garantem segurança. Qualquer usuário avançado pode desativar o JavaScript ou alterar o HTML via console do navegador. 
Regra de Ouro: Sempre valide os dados novamente no seu servidor (Back-end) antes de salvá-los no banco de dados. 
Em resumo: Use type="email" e pattern para cobrir 90% dos casos de formato de forma simples e leve. Deixe o JavaScript apenas para refinamentos visuais ou lógicas que dependam de múltiplos campos. 

## 🎨 O que é SVG?
SVG = Scalable Vector Graphics (Gráficos Vetoriais Escaláveis)
São imagens feitas com código em vez de pixels. Por isso:

✅ Nunca pixelizam (ficam nítidas em qualquer tamanho)
✅ São super leves (poucos bytes)
✅ Podem ser estilizadas com CSS
✅ Podem ser animadas


📐 Estrutura básica do SVG
html<svg viewBox="0 0 24 24" width="50" height="50">
    <!-- Aqui dentro vão os desenhos -->
</svg>
O atributo viewBox:
htmlviewBox="0 0 24 24"
         │ │ │  │
         │ │ │  └─ Altura da "tela" (24 unidades)
         │ │ └──── Largura da "tela" (24 unidades)
         │ └────── Posição Y inicial (0)
         └──────── Posição X inicial (0)
Pense assim: É como uma folha de papel quadriculado de 24x24 quadradinhos onde você vai desenhar.

✏️ A tag <path> - Desenhando formas
<path> é o "lápis" do SVG. Você dá comandos de onde o lápis deve ir.
Comandos básicos:
html<path d="M 10 10 L 20 20" />
       │  │      │
       │  │      └─ Comando L = Line (linha até esse ponto)
       │  └──────── Comando M = Move (move o lápis sem desenhar)
       └─────────── d = "data" (os comandos de desenho)
Principais comandos:
ComandoNomeO que fazM x yMoveMove o lápis para a posição (x, y)L x yLineDesenha linha reta até (x, y)CCurveDesenha curva (Bézier)ZCloseFecha o caminho (volta ao início)

## Padrões de Contraste (WCAG 2.1/2.2)

> Para saber se a razão de contraste está ideal, você deve seguir as diretrizes internacionais de acessibilidade conhecidas como WCAG (Web Content Accessibility Guidelines).