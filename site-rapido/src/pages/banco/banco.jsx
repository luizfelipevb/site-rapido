import "./banco.css";

function Banco({ pesquisa }) {
  const termo = pesquisa.toLowerCase();
  return (
    <div className="container">
      <h1>Bancos</h1>

      <div className="lista">

        {/* ITAU */}
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRBCb-YrAo97VnBChUiITEa1wInVqFyr_6A&s"
            alt="Itau"
          />
          <br />

          <h2>ITAÚ</h2>

          <a
            href="https://www.itau.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR ITAÚ
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Itaú é um dos maiores bancos do Brasil e da América Latina,
            oferecendo serviços financeiros completos para pessoas físicas e
            empresas, com forte presença digital e física.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta corrente e poupança</li>
            <li>Realizar transferências (Pix, TED, DOC)</li>
            <li>Pagar contas e boletos</li>
            <li>Solicitar empréstimos e financiamentos</li>
            <li>Investir dinheiro (CDB, fundos, ações)</li>
            <li>Usar cartão de crédito e débito</li>
          </ul>
          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🏦 Banco tradicional com alta confiabilidade</li>
            <li>📱 Aplicativo moderno e completo</li>
            <li>💳 Grande variedade de cartões</li>
            <li>📊 Plataforma de investimentos integrada</li>
            <li>🤝 Atendimento digital e em agências físicas</li>
            <li>🔒 Alto nível de segurança</li>
          </ul>

          <h3>Tipos de Conta do Itaú</h3>

          <h4>Conta Corrente (Padrão):</h4>
          <p>
            <strong>Preço:</strong> Pode ter tarifa mensal (varia conforme
            pacote).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Acesso completo a serviços
            bancários, cartão, crédito e investimentos.
          </p>
          <p>
            <strong>Restrições:</strong> Tarifas podem ser cobradas dependendo
            do uso.
          </p>
          <br />

          <h4>Conta Digital (Itaú iConta / Conta Online):</h4>
          <p>
            <strong>Preço:</strong> Geralmente gratuita.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Transferências, Pix e serviços
            digitais sem tarifas.
          </p>
          <p>
            <strong>Restrições:</strong> Menos foco em atendimento presencial.
          </p>
          <br />

          <h4>Conta Universitária:</h4>
          <p>
            <strong>Preço:</strong> Reduzido ou gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Benefícios para estudantes e
            tarifas menores.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário comprovar vínculo
            estudantil.
          </p>
          <br />

          <h3>Cartões Itaú</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Anuidade variável (alguns com isenção).
          </p>
          <p>
            <strong>Benefícios:</strong> Parcelamento, cashback, milhas,
            programa de pontos.
          </p>
          <p>
            <strong>Observações:</strong> Limite sujeito à análise de crédito.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Compras diretas com saldo da conta.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional.
          </p>
          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>💰 Empréstimos pessoais e consignados</li>
            <li>🏠 Financiamento imobiliário</li>
            <li>🚗 Financiamento de veículos</li>
            <li>📈 Investimentos (Tesouro, CDB, fundos, ações)</li>
            <li>📱 App completo com controle financeiro</li>
            <li>🔔 Notificações em tempo real</li>
          </ul>

          <br />

          <h3>Aplicativo Itaú</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>
          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Realizar Pix e transferências</li>
            <li>Pagar contas</li>
            <li>Gerenciar cartões</li>
            <li>Investir e acompanhar rendimentos</li>
          </ul>

          <br />
        </div>

        {/* NUBANK */}
        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="Nubank"
          />
          <br />

          <h2>NUBANK</h2>

          <a
            href="https://nubank.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR NUBANK
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Nubank é um banco digital brasileiro conhecido por sua conta
            totalmente online, sem tarifas abusivas e com foco em simplicidade,
            transparência e controle financeiro pelo aplicativo.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta digital pelo celular</li>
            <li>Fazer Pix e transferências instantâneas</li>
            <li>Pagar boletos e contas</li>
            <li>Usar cartão de crédito e débito</li>
            <li>Controlar gastos em tempo real</li>
            <li>Investir dinheiro (RDB e outras opções)</li>
          </ul>
          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>💜 Banco 100% digital e sem burocracia</li>
            <li>📱 App simples e fácil de usar</li>
            <li>💸 Sem tarifas de manutenção na conta</li>
            <li>⚡ Pix e transferências instantâneas</li>
            <li>📊 Controle completo de gastos em tempo real</li>
            <li>🔒 Segurança avançada com autenticação no app</li>
          </ul>

          <h3>Tipos de Conta do Nubank</h3>

          <h4>Conta Digital:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Pix ilimitado, pagamentos,
            transferências e rendimento automático.
          </p>
          <p>
            <strong>Restrições:</strong> Não possui atendimento físico (100%
            digital).
          </p>
          <br />

          <h4>Conta PJ (Pessoa Jurídica):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Ideal para MEI e pequenas
            empresas.
          </p>
          <p>
            <strong>Restrições:</strong> Funcionalidades mais focadas em
            negócios.
          </p>
          <br />

          <h3>Cartões Nubank</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Sem anuidade.
          </p>
          <p>
            <strong>Benefícios:</strong> Controle pelo app, limite ajustável,
            programa de pontos (opcional).
          </p>
          <p>
            <strong>Observações:</strong> Aprovação depende de análise de
            crédito.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Pagamentos diretos com saldo da conta.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional
            (dependendo do cartão).
          </p>
          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>📈 Investimentos automáticos (RDB do Nubank)</li>
            <li>💳 NuPay para compras online</li>
            <li>🧾 Pagamento de boletos e contas</li>
            <li>💰 Caixinhas para organizar dinheiro</li>
            <li>📊 Controle de gastos inteligente</li>
            <li>🔔 Notificações em tempo real</li>
          </ul>

          <br />

          <h3>Aplicativo Nubank</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>

          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Fazer Pix instantâneo</li>
            <li>Gerenciar cartão de crédito</li>
            <li>Organizar gastos por categorias</li>
            <li>Criar caixinhas de investimento</li>
          </ul>

          <br />
        </div>

        {/* CAIXA ECONÔMICA FEDERAL */}
        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="Caixa Econômica Federal"
          />
          <br />

          <h2>CAIXA ECONÔMICA FEDERAL</h2>

          <a
            href="https://www.caixa.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR CAIXA
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            A Caixa Econômica Federal é um banco público brasileiro muito
            importante, conhecido por atuar em programas sociais, habitação,
            poupança e serviços financeiros acessíveis para a população.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta corrente e poupança</li>
            <li>Receber benefícios sociais (Bolsa Família, FGTS, etc.)</li>
            <li>Realizar Pix, transferências e pagamentos</li>
            <li>Financiamento imobiliário (Casa própria)</li>
            <li>Saque de benefícios e auxílios do governo</li>
            <li>Investimentos em poupança e CDB</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🏦 Banco público com forte atuação social</li>
            <li>🏠 Maior destaque em financiamento imobiliário no Brasil</li>
            <li>💰 Principal banco para benefícios do governo</li>
            <li>📱 App Caixa Tem para serviços digitais simplificados</li>
            <li>📍 Grande rede de agências e lotéricas</li>
            <li>🔒 Segurança em operações governamentais</li>
          </ul>

          <h3>Tipos de Conta da Caixa</h3>

          <h4>Conta Corrente:</h4>
          <p>
            <strong>Preço:</strong> Pode ter tarifa mensal.
          </p>
          <p>
            <strong>Benefícios:</strong> Acesso a crédito, cartão e serviços
            bancários.
          </p>
          <p>
            <strong>Restrições:</strong> Tarifas variam conforme pacote.
          </p>
          <br />

          <h4>Conta Poupança:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Benefícios:</strong> Rendimento automático do dinheiro.
          </p>
          <p>
            <strong>Restrições:</strong> Menos funcionalidades bancárias.
          </p>
          <br />

          <h4>Conta Caixa Tem:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Benefícios:</strong> Ideal para benefícios sociais e
            pagamentos.
          </p>
          <p>
            <strong>Restrições:</strong> Funcionalidades limitadas.
          </p>
          <br />

          <h3>Cartões Caixa</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Pode ter anuidade.
          </p>
          <p>
            <strong>Benefícios:</strong> Parcelamento, programas de pontos e
            crédito.
          </p>
          <p>
            <strong>Observações:</strong> Depende de análise de crédito.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Compras e saques diretamente da conta.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional.
          </p>

          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>🏠 Financiamento habitacional (Minha Casa Minha Vida)</li>
            <li>💰 Saque FGTS e benefícios sociais</li>
            <li>📈 Investimentos em poupança e fundos</li>
            <li>📱 Caixa Tem para serviços básicos digitais</li>
            <li>💳 Pagamentos de contas e boletos</li>
            <li>📊 Crédito pessoal e consignado</li>
          </ul>

          <br />

          <h3>Aplicativos da Caixa</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>

          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Realizar Pix e transferências</li>
            <li>Receber benefícios sociais</li>
            <li>Consultar FGTS</li>
            <li>Pagar contas e boletos</li>
          </ul>

          <br />
        </div>

        {/* BANCO DO BRASIL */}
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/52/BB-logo1.jpg"
            alt="Banco do Brasil"
            style={{ width: "100px", height: "auto" }}
          />
          <br />

          <h2>BANCO DO BRASIL</h2>

          <a
            href="https://www.bb.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR BANCO DO BRASIL
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Banco do Brasil é um dos bancos mais antigos do país, com grande
            presença nacional e forte atuação em contas pessoais, empresas,
            agronegócio e serviços públicos.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta corrente e poupança</li>
            <li>Realizar Pix, transferências e pagamentos</li>
            <li>Acessar crédito pessoal e empresarial</li>
            <li>Investir em fundos, ações e renda fixa</li>
            <li>Receber salários e benefícios</li>
            <li>Financiamentos (imobiliário e rural)</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🏦 Um dos bancos mais tradicionais do Brasil</li>
            <li>🌾 Forte atuação no agronegócio</li>
            <li>📱 App moderno com muitos serviços digitais</li>
            <li>💰 Grande variedade de investimentos</li>
            <li>🤝 Atendimento para pessoas físicas e empresas</li>
            <li>🔒 Alta segurança e credibilidade</li>
          </ul>

          <h3>Tipos de Conta do Banco do Brasil</h3>

          <h4>Conta Corrente:</h4>
          <p>
            <strong>Preço:</strong> Pode ter tarifa mensal.
          </p>
          <p>
            <strong>Benefícios:</strong> Acesso completo a serviços bancários,
            cartão e crédito.
          </p>
          <p>
            <strong>Restrições:</strong> Tarifas variam conforme pacote
            escolhido.
          </p>
          <br />

          <h4>Conta Poupança:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Benefícios:</strong> Rendimento automático do saldo.
          </p>
          <p>
            <strong>Restrições:</strong> Funções bancárias mais limitadas.
          </p>
          <br />

          <h4>Conta Digital (BB Digital):</h4>
          <p>
            <strong>Preço:</strong> Pode ser gratuita dependendo do perfil.
          </p>
          <p>
            <strong>Benefícios:</strong> Operações 100% pelo app.
          </p>
          <p>
            <strong>Restrições:</strong> Algumas funções podem exigir agência.
          </p>
          <br />

          <h3>Cartões Banco do Brasil</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Pode ter anuidade.
          </p>
          <p>
            <strong>Benefícios:</strong> Programa de pontos (Livelo),
            parcelamentos e limite.
          </p>
          <p>
            <strong>Observações:</strong> Depende de análise de crédito.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Pagamentos diretos com saldo.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional.
          </p>

          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>📈 Investimentos (Tesouro, CDB, ações e fundos)</li>
            <li>🌾 Crédito rural e financiamento agrícola</li>
            <li>🏠 Financiamento imobiliário</li>
            <li>💳 Empréstimos pessoais e consignados</li>
            <li>📊 Gestão financeira para empresas</li>
            <li>📱 App completo com serviços digitais</li>
          </ul>

          <br />

          <h3>Aplicativo Banco do Brasil</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>

          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Realizar Pix e transferências</li>
            <li>Investir em produtos financeiros</li>
            <li>Pagar contas e boletos</li>
            <li>Gerenciar cartões e limites</li>
          </ul>

          <br />
        </div>

        {/* BRADESCO */}
        <div className="card">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDw0NDQ0NDg0NDQ0NDQ0ODg8NDg0NFREWFhURFRYkHyogGRonGxUVIj0lJykrOi4uFyAzRDMxNyktMCsBCgoKDg0NFQ8PFSseFR0tLSstKystKyszKystLS4tLSswKy0rKysrLS0tLi0rLSstLysrKy4tLS0rKy0rKysrLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAAAAQIGBQcEAwj/xAA7EAACAgECBAQDBQYFBQEAAAAAAQIDBAURBhIhMQcTQVFhcYEUIlKRoSMyQnKxsiQ1c4LBNGJ1orMz/8QAGwEBAQEBAQEBAQAAAAAAAAAAAQIABQQDBgf/xAA3EQEBAAECBAIHBwIGAwAAAAAAAQIDEQQFITESYRNBUXGBkbEGIjKh0eHwI8EUMzRCUnIVJGL/2gAMAwEAAhEDEQA/AMIe5+pgBcAEwVACwSqAFwwqoCVQwXASuAFQwUYKCJqoYKhgowJgQCjRmMCaMykYKRmMwUjMpGCkAUjA0IUjJUjBSMFIwUjBSMDMGYOw4sAKgBUMFQEqgBcMFQErgBUMlcAVcMFQEqhgqGSowUAJgTMoAVGY0BNGZSMFIzGjBSMxoApGCkKVIwUjBSMFIyVIwUYGjBRgy513HgBRgqAFQAqAFwyVQAuAlUMFwEqhguAFQyVQ0CjAmCgBMCaMTAmjMaMFIzKMykYGjBSAKQhSMFIwUjJUjBSMFIwNGCkYGYMuddyIAMMFwEqgBUALhgqAlZgqAlcAKhgqGSoAuGBMFGBMCAUaMxgVIzGjBSMykYGgZSEKRgpAFIQpGSpGCkYGjBSMFIyTRmMyWXOu5IBUMlUALgBUMlcAKgBUMlcAVcMlUAKhgqGSowUYEAWz0Dw31DLSst5cSp9U7U3a17qv0+rRUwtcfiuecPo3w4ffy8u3z/TdraPCXDSXmZeVKXq4Kqtfk4v+pXo/NysvtHr7/dwxk+N/vH45vhJS1/h822MvRXQhYn9Vy7B6PzXp/aTUl/qacs8t5+rC8Q8JZ2m/evrUqd9lkVNzq39E33i/mkRcbO7vcHzLh+K6YXbL2Xv+/wAHERLoKRgpGY0YKRmUgCkZKkINGCkYKRkqRgpGCjA0YKRgZgyx1nKMFQAqAFQErhguAFQEqhguAlcMFAFGiVQ0CjQEwU9j8OOCIY0K87LhzZU0p01zXTGg+z2/G/07e5eOPrr8fzfml1sro6V/pzv5/t9XV4w45xtM3qivPy9t/JjLaNe/Z2S9Pl3+Xccs9ve83L+U6vF/e/Dp+32+55fqfH2q5Lf+KdEX2rx0qlH/AHfvfqfO5X2v1GhybhNKfg8V9t6/l2/JzquI9Sg+aOoZm/xyLZJ/NN7MPFfa9WXAcLlNro4/KNLpHiTmQ/ZZ0K83HknGxShGFvK+jXRcsltv0a6+4zOzv1cziOQ6OX3tC3DOdvXP1nz+DicVUafG2FunXc9F8HY6GpKeLPfZ1vf09vl7bNzltv0e7l+fE3C4cTjtlj03/wCXm4yB7zMykYKQA0YKQhSMFIyVIwUjBSMFIwNGCkYGYKMGVOs5cMFAlQBUALhk1UAVcMFQErgBUMFwyVAFGBfRh4lt841UVztsl2hXFzk/jt7Ep1NTDTx8WeUk83ofCPhrlK6jIz/KrqrnGx4/N5lk2uqUtvupb7er9i5hfW/P8fzzTunlp6G9t6b9v3+j1LNz8fHSeRfTRGW6UrbIVJv4Ns+m781p6WepdsMbb5Tdlo1cMKUpOelWTlJylO2+q+UpN7tuUpNt7kfc8nT35ntJJnJPZLPo+7Ho4fs+7XDR5/CCxJf0H7r4Z58fj1yupPf4n0WcJaTYv+gxNn611xh+sdjeDH2Ix5jxeN/zcvnf7uLn+GOl2r9l5+O/Ty7HOP1Ut+nyaJunHt0ufcXh+KzL3z9NmN1zw0z8ZOePKOXWuu0F5dyX8jez+j3+BF07Ha4Xn+hq2Y6s8F+c+bGOLi3GSalFuMotbOMl3TXoyHcllm87GjMaMykYKQBSEKRkqRgpGCkYKRgaMlSMFIwNGBmZlTrOXDJXACoAVDJXACoCVwwVAC4ZKoAVDBUMlRgp09F17MwPN+yXeU7lGNjUITbUW9tm09u77G3s7PPxHB6PEeH0uO/h7d3oPhHqORlZObPJyLrpRpr5fNslNRTm99k+i7LsVh3rgc90NPR09KaeExm97RzvGfLcszHo/hpxudfz2Te/6QiTqXrs9f2d05NDPP127fKfu8+RD9CewF9OHm30Pei62l996rJ1v9GadOz5amjp6nTUxmXvm7V6P4kaljtK6UMuv1jalCzb4TX/ACmXNSxyeI5Dw2pN8N8L5dZ8r/bZ6fwvxZianF+TJwuit549mysiu3MvSUfivrsfXHKV+X43l2twl+/N8b2s7ftXM8QOEa86mzJpgo5lUHJOK2+0Riv/AM5e727P6dgzx36+t6eU8yy4bUmnnf6V/Lzn93i6Pg/cKRgpAFIwUhCkYGjBSMlSMFIwUYGjBRgpGAMGWOq5sAKgJXAFVDBcBKoAXDBUBK4YKAKNEqhoFGBMFNn4UaisfUY1ye0cqqdHw8zdTj/a1/uHC/ecfnuhdThPFO+N3+Havu8ZsWUc3Hu/htxVBfzwnLm/ScTak6vj9ndSXh88PXLv85+zAIh+hMCaMykYPq03MtxrqsiltW1TjOG2/V/h+Ka3W3xNLs+WvpYaullp5/hs/l+Hd/RuZlQoqsvtfLCquVk2/SKW7PVa/m2np5Z5zDHrbdo/m1fLbfrt7fA8r+m9uikYKQBSEGjBSMlSMFIwUjBSMDRgpGCjAzAzBlTqudASqAFwAqGSuAFQyVQAuGC4CVQwUZKgCjAmYrpslCUZwk4zhKM4SXeMk9019QbLGZY3HKbyvV8y2HEul/s+Valh7WSqWybs22ko/wDbNdvZpLfofT8c835PTxy5Vxv3v8nPpv5frPX+7ymUXFuMk4yi2pRa2aa7pr0Z8n6+WWbztRGLbSSbbaSSW7bfoga2Sb3s7uZwlnY+J9uyK1TXzwgq7G1c+btLl26fJ7P4DcbJvXg0uZ6GrxHoNO+K9es7dPP+Rx6a5TlGEIynOT2jCCcpSfskurB7sspjLlldpPa9F4U4QrwVHUtYnXRGpqdNE5LpNdYyn7v1UVu99vkfTHDbrk/M8fzTLiN+G4OXLfvZ9J5e2ubxxxtLUf8ADY6lXhxknLm6TyGn0cl6R9Uvq/ZGee/bs9fK+UThv6ur11Pp+/n8mPR83bNCFIApGSpCFIwUjBSMFIwUZJowUjA0YGYKMzKHUc+AFQAqGSuAFwEqhguAFQyVgFQwqoZKjAmBAKMC+rTNQvxLY349kqrYdpR9vVNdmvgzdur562hp6+Fw1Md8a/fXdWszrp5NsKYWTjFTVMHCMmltzNbvqzZX1o4XhseG0ppY22T2/R6dPhTE0yWjulSndZqVCsvm95yXlWPlS7Rjul0Xsu59LjMfD735acx1uLnETO7YzC7Sdu8dLxY/yyf+vR/cOp+F8OQ/63H3X6PL9B4nyNPrshjV48bLZbvJlVz3xWyXInvty9N9mvVnzmW3Z+p4rl2lxWeOWrlltP8Abv097n6hqGRlT83Jusun6SnJvlXtFdor4Im3fu9OjoaWjj4dLGYzy/nV+CM+poApGCkYKQhSMFIyVIwUjA0YKRgowMwUjA0YGZmUOo8AJVAFXDBUBKoYLgJXACoYKhgoImqhgowJgowIBRozCXZ/Jhexe+cVfv6L/wCUo/8AjafbP/b738/4H8PEf9L9Y+PxY/yyf+vR/cbU/C+/If8AW4+6/R4qj4v3CkYGjMpGCkAUhCkYGjJUjBSMFIwUjBSMDRgpGBmBowMwZQ6bwwAuGCoCVwAqGSuAFwwVASqGCjJUYKAEwJmUaAmZhsBbvU/EazJeG3hwj9jyYZK2ub8xxhKPL+70/e+PYu577dOzgaPIppTUnpd/HNu3brL7fJ+PFPHtmpY7xXiwpTshNzVrsf3Xvttyo2We822XwPJseF1vS+k36Wbbbd/jWQRDtmjBSMxowUjBSBKkIUjBSMFIyVIwUYGjBSMDRgZgozAwZQ6bxQAuGSqAFwEqhguAlUMFgFGiVQ0CnR0jRMrN8z7PTKcaoudtnSNdcUt+sn036du4Phr8XpaG3pMtre09dfAgeoATAmjEwJmZ0LtHyq8evMsplDHtmq6py2TsbjKSaj35dovqbbpu82PF6WetdHHLfOTe+XxfEjPQozKRgaAKRgpGCkIUjBSMlSMFIwUjA0YKRgZgowNGBmBmZkzpPHAC4YVUBNXDBUBK4AVDBUMlUAVcMC9c8JKnZpmfXHbmnfbCO/RbuiCW44et+U57lMeL07fVJ9a4OZ4VahXXz124104x3dUXOMm9u0W1s389g8Fjoaf2g4fLPbLGye39f5XC4W4VyNTsvqrnXTLHinNXKae7bXLsl0e6ZMm/Z7+N5jp8JjhllLlMu2z7c7gHOxsO3OyHTXGpKTpcpO3lclH22XdPbc1xsm9fLS5zoauvjo4S3f1+p2IeE+Y4bvKxVPbfl2scd/bm2/4K9HXkv2j0fF007t8P5+bHa3o2RgXvGyIbWbKUeV80bIt7KUX6rdP8j52Wd3a4Xi9LidL0unen097U6Z4YahfWrLZ043Mt41zcpWLf8SS2j+ZXo7Y5Wt9oOHwy8OEuW3r7T4NJ4tVOvTsKD23hk1Qe3bdUWLoVqdo5v2fvi4vUvtxv1jL6F4d52XVG+c6sauaUq1bzOyUX2lyrsn8X9CZp2urxXPNDRzunjLlZ327fNy+JuF8rS5RWQoSrs38u6ttwk1/C91upbddvy32YZY2PXwPMdHjJfR9Mp3l/nWO5pnhpnX1xtsspx+dKUa5807En25kuifw3YzTrwa/P+HwzuOGNy29fafBwtY4eycPKjhSUbb5qDrVLlJWKbajtuls+jJuO12e/h+O0tfQuvPu4zvv6tmlx/C/OlBSnkY1c2t/L+/Pb4OW39Ny/R1zM/tDoTLbHC2e3pPycbSOEszMuvopdLjj2Oq7I55eQpp7NRe28n9Py3RMwtr28RzTQ0NLHPPffKbyevbz69HT1Xw6z8euVtc6slQTlOFfNG3ZesYv9789/gyrp2PLoc84fVzmOUuO/t6z9mRR83Yq0YKRgaMFIwUjA0ZKkYGZlIwBgZmZM6TyQyVwAqAFQyVwBVwyVQAqGCoZKjBT1jwrbWlak02mrb2mujT+zwKw7V+V53P8A3dL3T61y/BzMyJZt1bsslTLGlZZGUnKCsU4KMvn1l+oafd6/tBpaWOhjlJJlvt8Nq0/CUIR1vXVWko/sZPb8b6z+vM5Dj+PJzeOtvL+F8Xfr+35PPeIL8vUdUvxvNnJ2Zs8WqEpyVUIRscI9OySS3f1ZF61+h4TDR4XgsdXw9sfFbt1t23/ZqpcP6PpeRjxytSzXn712RlXuurlsn0jLZNprZyfQqzGXrerk/wCM4zi9HP0Wjj6Lr/O87eUdzizHrs1jQVYk05ZUuvrKEVOH/skOf48Xj4HPLHgOK8P/AM/ndr+TJ+MWXc8yuhzmqY40LIQ3ag5uc057er6JfQjVt3df7O6Wn6DLPaeLxbb+W0aPxBrjPC0eFn7k87DjPf8AA6pJ/puXn2jmcoyuOvxFx7zDL6x93iBTpdixq9Sy8jHh+0lVXSpcljXKm5bQl1W62/mY57et8eVZcXjc8uG05lem9vq7+c7s7xbr2l2aXHCxcueRbRKjyXbXb5m0Jbczk4JbqLaJys8O0dHl/BcVjxt1tXT8OOW++1m3Weze+t01q2lcRU042TOePlJpwr5nBq7bb7jf3Zr4Pr8B3mXSvLeG4zleplq6c8WHt79PP1z+dXxcMcOSwNajTdZ5yjh23Ytr33a5lDbb0aTmtl77+oYzbJ6ON47HieW+LDHw3xSZT4W/n0cDxEzL5ankRlZYo0upURUpRUIOuMt4/NtvcjO/edDk+lpzgsLMZvlvv861eizdPDdttEnG11Zc5Tj0mpu2UXLf3UV3+B9J0wcjiZNTm+OOpPu74zby2j4PCC+zzsyrmk6vKrscW24xs5mt17Nrf57fANN6PtDhjMNPLb729nwY/X64QzM2ENuSOXkRil2SVkui/ofPLvXZ4TK5cPpXLv4Z9HxIH3UjBSMFGBowUjA0YKRgZmBgZmZM6LywwXACoCVQwXASuGCoAUaJqoaBRoC3XAXGWJpuPfjZVN1kb7XNupQkuVwjFxabXt+o45bOJzPlmrxOrjqaeUm0267+232OnPxA03CqshpGnuuyzvOyEK4b+jls3Ke276No3ik/DHnnJuJ185eK1d5PO2/pHE4F4uq06/LyMuN90spJuVahKTs53KUpbtd9ycctr1e/mfLc+J09PDRskw9u/b5VwrdVlHOnn0fdl9ssyqlNb7b2OajJJ/HZ9Sd+u7348NLws0NT/jMbt7tm8v450TMdd+dptzya4x2lGMJ7bPdJS5otpPfuvU+nixveODjyjjtGZYaOtPBfOz8tq4nGfGcc+/DvxIW0Sw3OUJ2cvM5uUGnst1/D79dyMst7K93LeVXh9LV09azKZ+z4/q7cuPdKza61qmnSnbWns4QhbBP15W5KST27fqyvHjfxR4f/AA3F8Plf8LrbY3zs+fqczjrjHG1KinGx6Lq402xsUrOSPRQlFRSTf4vf0DPOXpHr5XyrV4XVy1NTKXebdN/bL5PvwuPsTIx4Y+sYbyJV7bWwhCxTaW3O4tpxlt7e/p2Hxy948+ryXW0tW6nB6nhl9W9m3l5z3uNxLrWl3Rohp+n+R5d8bbJzhXCVsEn+zezbae/r7BlcfVHt4Lg+LwueXEa3i3m0m9u19vqd7G4r4ejOOQtKsryINTjyU07Ka6pr76Xf12KmWPsc/PlvMrjdO6++F872+ThatxlkX59WoVRVX2dclNTfMnX15lP35uZ9u3T23Iue+W7ocPyrT0+Fy4fO7+Lrb5+rb3NHkcaaNl8tubpk55EIpda6bV/KpOS3W7fdepfjxveObhynjtDfDR1tsL52flt9HL4c4yqwZZNDx52addZZOuluEraYz7w2f3ZRa9N/z3YY57e56uM5VnxEw1PHJrSSW9drt6/bK6MuN9PxKrIaTguq23q5zhCEFL0bSbctvboh8cnaPLOUcTr5zLi9XfGedt/b3sE5OTcpNuUm5Sk+8pN7tv47nyfoZJJJO0NGZSMFIwNGCkYKMDMDRgZgZmBmZM6LzQyauAKowVASuAFQyVwwUYKAEyVGYmCgBUjMEBUjMaMFIzKRgaMykYKRgpAFIUqRgpGCkYKRgaMlSMFIwNGBmCjMDAzMDMyh0HngBUBK4YKgBcMlQBUMFQyVGCjAgFGBNGJmJoGNGZSMFGY0YKRgpAFIwUhCkYGjBSMlSMFIwUYKMDMFIwNGBmBmYGYGZlDoPhASqAFwwVASuGCgCjRKoYKhgTBRgQCjRmMCaMykYKRmMwUZlIwUjBSMDRgpGSpGCkYKRgpGCkYGjBSMDMDRgZgZmBmBmZQ974wAqGSqAFwAuGSqGCjBQJJgowJmUAKjMEBUjMpGCkZjRgpAxoQpAFIyVIQpGCkYKRkqRmUjJNGCkYGjAzBRmCMDMwMwMz//2Q=="
            alt="Bradesco"
            style={{ width: "120px", height: "auto" }}
          />
          <br />

          <h2>BRADESCO</h2>

          <a
            href="https://www.bradesco.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR BRADESCO
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Bradesco é um dos maiores bancos privados do Brasil, oferecendo
            serviços financeiros completos para pessoas físicas, empresas e
            investimentos, com forte presença em agências e no digital.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta corrente e poupança</li>
            <li>Realizar Pix, transferências e pagamentos</li>
            <li>Usar cartão de crédito e débito</li>
            <li>Solicitar empréstimos e financiamentos</li>
            <li>Investir em renda fixa e variável</li>
            <li>Receber salário e benefícios</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🏦 Um dos maiores bancos privados do Brasil</li>
            <li>📱 App completo com praticamente todos os serviços</li>
            <li>💳 Grande variedade de cartões de crédito</li>
            <li>📊 Plataforma de investimentos integrada</li>
            <li>🤝 Atendimento em agências físicas e digital</li>
            <li>🔒 Alta segurança em transações</li>
          </ul>

          <h3>Tipos de Conta do Bradesco</h3>

          <h4>Conta Corrente:</h4>
          <p>
            <strong>Preço:</strong> Pode ter tarifa mensal (cesta de serviços).
          </p>
          <p>
            <strong>Benefícios:</strong> Acesso completo a serviços bancários,
            crédito e cartões.
          </p>
          <p>
            <strong>Restrições:</strong> Algumas funções podem ter tarifas
            dependendo do plano.
          </p>
          <br />

          <h4>Conta Digital:</h4>
          <p>
            <strong>Preço:</strong> Pode ser gratuita ou com baixa tarifa.
          </p>
          <p>
            <strong>Benefícios:</strong> Operações pelo app com Pix, pagamentos
            e transferências.
          </p>
          <p>
            <strong>Restrições:</strong> Menos foco em agência física.
          </p>
          <br />

          <h4>Conta Universitária:</h4>
          <p>
            <strong>Preço:</strong> Reduzido ou gratuito.
          </p>
          <p>
            <strong>Benefícios:</strong> Condições especiais para estudantes.
          </p>
          <p>
            <strong>Restrições:</strong> Necessário comprovar matrícula.
          </p>
          <br />

          <h3>Cartões Bradesco</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Pode ter anuidade.
          </p>
          <p>
            <strong>Benefícios:</strong> Programa de pontos (Livelo), descontos,
            salas VIP e cashback em alguns cartões.
          </p>
          <p>
            <strong>Observações:</strong> Limite sujeito à análise de crédito.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Compras diretas com saldo da conta.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional.
          </p>

          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>📈 Investimentos (CDB, fundos, ações e Tesouro Direto)</li>
            <li>💰 Empréstimos pessoais e consignados</li>
            <li>🏠 Financiamento imobiliário</li>
            <li>🚗 Financiamento de veículos</li>
            <li>🛡️ Seguros diversos (vida, carro, residencial)</li>
            <li>📱 App Bradesco com controle total da conta</li>
          </ul>

          <br />

          <h3>Aplicativo Bradesco</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>

          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Fazer Pix e transferências</li>
            <li>Pagar boletos e contas</li>
            <li>Gerenciar cartões e limites</li>
            <li>Investir e solicitar crédito</li>
          </ul>

          <br />
        </div>

        {/* SANTANDER */}
        <div className="card">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEXsAAD////97e3vW1z//Pz1mJjvQEDxaGjtERP3rKz5x8byg4PuHRztHh7++PjsDg7vSUn72dn73t7ycXHxa2v60dHyenr5w8PvUVH0o6PuNjb4u7vtIyPuMjL3srLzgYH0j5DwZGPvUE/85eXwV1fydHT1lpbtKSn0np761NXuOzv2p6f96er5y8vwXl7uMjM11Bv7AAAEAUlEQVR4nO3YC1+iShjHcR4iybwgimbeErHV8tL7f3dn5hkgyd22s3taY8/v2+eTjAzI/GUu6HkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Jnm4aWvoEau40tfQY3cyfHSl1Afd+Jf+hLq41pkeelrqIeo7c1EgptLX0ctbB88bycyfft+o7WY7h567x88e0w/+jnrh82/v7ivJrbjVVekGkv0JM7i3YO7cvjgxyTyN8wiviw9byRSXT70TU5Z7Afy8JODbz/4MaHI1S9d35cS63jVr95a6yK84/t95+NhpX9FWN+0q/WqE+JSZF2p1UmT5KrttudpGI7dpi93ZZVVMgiLwFdhks7LPTdpkraKsJ6TQXnqcZiEz/9VQz7bYNjU8aph11oyHJU7TNMGJ/XWfTeA+W8HM9/Mo4H0zdYucG/vTJ/289ruFL04P8KGtcrsVrdlNueu2vbPNfd3JCamQzFerbURRVwTs90oK7Z0n6kt5i4x/wPdtv3UtdfcXXutYQK71WWbq62BJ+XBJqyxzdAetDTTrXv//UHxq5hqQ914NfA2UrRbLex23tfMrsCmuNWwAmna98xBYxvW0/qYNmz1J9uf/DysyNMvITN3ojmRzSPRsHz9Duw9pWGNvnddX9Gi7E0r27/ysMq0drbQT+xmU0Rf70/Csnfi8nWAF9nraxGWjm4H6eqQqPeOzoZXIo95YWTDav2x1v6eVR6OTHS8+nZVlItV5mRaZJflj46VsDoi12VYaTE9VMJqShB5Q5uYl4dl9mw6nU772R5co7B2RTixjkP+bVE+WYVuXVrd/Pb5cVijYsX5JqxuZPp4pns0rKaUahXW63U/nhaqzz1t386UQd43fymsTOfK87CWdQorKS/bPy1IdXZq2Sz9vL0/DispVhrnYcV5H9awzADWiG7a9i+qU1heXMazdesGJ6tU0vWWGdI6tvDdsIa2sCkmhvOwFvmjQWrDMgPlfXnuOoUVZWVA0eD1NnM/1TSa2sKxWR5tbDufbOlwHlYmwcyWYndH9rpnYfXy/He6dMjymWC2valVWCcj1W76dsCy68q9pmnvhKF5Hdp/Z2HZerF/Zxexsj+Y6M5mQ13OmYMDDevFnqTfD+wUWa+wvE1T19ni/kt3MSn2tPLwgqUWNcw4zVfwOl/ONCzbRTXQla7lR8M8LO22TfeTon4n2crNAZth+a3ULCxjfD3t733f70+vq0/O69b2fln+ArVJRmMvmtgwXyba8bzJRBN5HoyOdr3urQZhx+vMzc7OxIU+m7y413Bkzr2ZR650HD3qI7k5XfuTWwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg/+ofehIxcAEcIC8AAAAASUVORK5CYII="
            alt="Santander"
            style={{ width: "120px", height: "auto" }}
          />
          <br />

          <h2>SANTANDER</h2>

          <a
            href="https://www.santander.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR SANTANDER
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Santander é um banco privado de origem espanhola, sendo um dos
            maiores do Brasil. Ele oferece serviços financeiros completos para
            pessoas físicas, empresas e investidores, com forte presença digital
            e global.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta corrente e poupança</li>
            <li>Realizar Pix, transferências e pagamentos</li>
            <li>Usar cartão de crédito e débito</li>
            <li>Solicitar empréstimos e financiamentos</li>
            <li>Investir em renda fixa e fundos</li>
            <li>Receber salário e benefícios</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>🏦 Um dos maiores bancos privados do mundo</li>
            <li>📱 App Santander completo e moderno</li>
            <li>💳 Cartões com benefícios e programa de pontos (Esfera)</li>
            <li>💰 Opções de conta com tarifa zero (Conta Free)</li>
            <li>📊 Plataforma de investimentos integrada</li>
            <li>🌍 Atendimento global e serviços internacionais</li>
          </ul>

          <h3>Tipos de Conta do Santander</h3>

          <h4>Conta Corrente:</h4>
          <p>
            <strong>Preço:</strong> Pode ter tarifa mensal (depende do pacote).
          </p>
          <p>
            <strong>Benefícios:</strong> Acesso completo a serviços bancários,
            crédito e cartões.
          </p>
          <p>
            <strong>Restrições:</strong> Algumas tarifas podem ser cobradas.
          </p>
          <br />

          <h4>Conta Free:</h4>
          <p>
            <strong>Preço:</strong> Gratuita.
          </p>
          <p>
            <strong>Benefícios:</strong> Pix ilimitado, saques e serviços
            digitais básicos.
          </p>
          <p>
            <strong>Restrições:</strong> Menos benefícios premium.
          </p>
          <br />

          <h4>Conta Salário:</h4>
          <p>
            <strong>Preço:</strong> Gratuita.
          </p>
          <p>
            <strong>Benefícios:</strong> Recebimento de salário sem taxas.
          </p>
          <p>
            <strong>Restrições:</strong> Uso limitado sem conversão para conta
            corrente.
          </p>
          <br />

          <h4>Conta Select:</h4>
          <p>
            <strong>Preço:</strong> Tarifas elevadas (perfil alta renda).
          </p>
          <p>
            <strong>Benefícios:</strong> Atendimento exclusivo, investimentos e
            vantagens premium.
          </p>
          <p>
            <strong>Restrições:</strong> Exige renda ou investimentos altos.
          </p>
          <br />

          <h3>Cartões Santander</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Pode ter anuidade (alguns isentos).
          </p>
          <p>
            <strong>Benefícios:</strong> Programa Esfera, cashback, milhas e
            descontos.
          </p>
          <p>
            <strong>Observações:</strong> Limite sujeito à análise de crédito.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Compras diretas com saldo da conta.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional.
          </p>

          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>📈 Investimentos (CDB, fundos, ações e previdência)</li>
            <li>💰 Empréstimos pessoais e consignados</li>
            <li>🏠 Financiamento imobiliário</li>
            <li>🚗 Financiamento de veículos</li>
            <li>💳 Seguros diversos</li>
            <li>📱 App Santander com controle completo da conta</li>
          </ul>

          <br />

          <h3>Aplicativo Santander</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>

          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Fazer Pix e transferências</li>
            <li>Pagar contas e boletos</li>
            <li>Gerenciar cartões e limites</li>
            <li>Investir e solicitar crédito</li>
          </ul>

          <br />
        </div>

        {/* BANCO INTER */}
        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="Banco Inter"
            style={{ width: "120px", height: "auto" }}
          />
          <br />

          <h2>BANCO INTER</h2>

          <a
            href="https://www.bancointer.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR BANCO INTER
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O Banco Inter é um banco digital brasileiro que oferece uma conta
            gratuita e completa, com serviços financeiros, investimentos e um
            marketplace integrado, tudo dentro de um único aplicativo.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta digital sem tarifas</li>
            <li>Fazer Pix, transferências e pagamentos</li>
            <li>Usar cartão de crédito e débito</li>
            <li>Investir em renda fixa e variável</li>
            <li>Comprar produtos no Inter Shop</li>
            <li>Receber salário e movimentar dinheiro</li>
          </ul>

          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>💰 Conta totalmente gratuita (sem tarifas)</li>
            <li>📱 Super app com vários serviços integrados</li>
            <li>🛍️ Inter Shop com cashback em compras</li>
            <li>📈 Plataforma completa de investimentos</li>
            <li>💳 Cartão sem anuidade</li>
            <li>🌎 Conta global em dólar (para alguns clientes)</li>
          </ul>

          <h3>Tipos de Conta do Banco Inter</h3>

          <h4>Conta Digital:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Pix ilimitado, transferências,
            pagamentos e cartão sem anuidade.
          </p>
          <p>
            <strong>Restrições:</strong> Atendimento 100% digital.
          </p>
          <br />

          <h4>Conta PJ:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Ideal para empresas e MEIs.
          </p>
          <p>
            <strong>Restrições:</strong> Focado em uso empresarial.
          </p>
          <br />

          <h4>Conta Global:</h4>
          <p>
            <strong>Preço:</strong> Pode ter custos em câmbio.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Conta internacional em dólar com
            cartão.
          </p>
          <p>
            <strong>Restrições:</strong> Sujeito a elegibilidade.
          </p>
          <br />

          <h3>Cartões Banco Inter</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Sem anuidade.
          </p>
          <p>
            <strong>Benefícios:</strong> Cashback, controle pelo app e
            possibilidade de upgrade (Gold, Platinum, Black).
          </p>
          <p>
            <strong>Observações:</strong> Limite depende de análise de crédito.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Compras com saldo da conta.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional.
          </p>

          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>🛍️ Inter Shop com cashback em lojas parceiras</li>
            <li>📈 Investimentos (CDB, fundos, ações, criptomoedas)</li>
            <li>💰 Empréstimos e crédito pessoal</li>
            <li>🏠 Financiamento imobiliário</li>
            <li>🧾 Pagamento de contas e boletos</li>
            <li>📱 App completo com múltiplos serviços</li>
          </ul>

          <br />

          <h3>Aplicativo Banco Inter</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>

          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Realizar Pix instantâneo</li>
            <li>Gerenciar cartão de crédito</li>
            <li>Investir diretamente pelo app</li>
            <li>Comprar com cashback no Inter Shop</li>
          </ul>

          <br />
        </div>

        {/* Prime */}
        {/* PAGBANK */}
        <div className="card">
          <img
            src="data:image/png;base64,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"
            alt="PagBank"
            style={{ width: "120px", height: "auto" }}
          />
          <br />

          <h2>PAGBANK</h2>

          <a
            href="https://pagbank.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR PAGBANK
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            O PagBank é um banco digital criado pelo PagSeguro, focado em contas
            gratuitas, pagamentos e soluções financeiras tanto para pessoas
            físicas quanto para quem vende online ou presencialmente.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta digital sem tarifas</li>
            <li>Fazer Pix, transferências e pagamentos</li>
            <li>Receber dinheiro de vendas (maquininhas e online)</li>
            <li>Usar cartão de crédito e débito</li>
            <li>Investir dinheiro com rendimento automático</li>
            <li>Pagar contas e recarregar serviços</li>
          </ul>
          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>💰 Conta gratuita sem mensalidade</li>
            <li>📈 Dinheiro rende automaticamente mais que poupança</li>
            <li>💳 Cartão internacional sem anuidade</li>
            <li>🧾 Pagamento de contas e boletos pelo app</li>
            <li>🛍️ Integração com vendas (maquininhas PagSeguro)</li>
            <li>📱 App completo com serviços financeiros</li>
          </ul>

          <h3>Tipos de Conta do PagBank</h3>

          <h4>Conta Digital:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Pix ilimitado, transferências,
            pagamentos e rendimento automático.
          </p>
          <p>
            <strong>Restrições:</strong> Conta 100% digital (sem agência).
          </p>
          <br />

          <h4>Conta PJ (Empresarial):</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Ideal para quem vende com
            maquininhas ou online.
          </p>
          <p>
            <strong>Restrições:</strong> Focado em negócios e vendas.
          </p>
          <br />

          <h3>Cartões PagBank</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Sem anuidade.
          </p>
          <p>
            <strong>Benefícios:</strong> Possibilidade de limite garantido e
            compras internacionais.
          </p>
          <p>
            <strong>Observações:</strong> Pode funcionar com saldo investido
            como limite.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Compras e saques com saldo da conta.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional.
          </p>

          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>📈 Investimentos (CDB com rendimento acima da poupança)</li>
            <li>💰 Empréstimos e antecipação de FGTS</li>
            <li>🛍️ Recarga de celular e serviços com cashback</li>
            <li>📱 Pagamentos via QR Code</li>
            <li>💳 Pagamento de boletos parcelados no cartão</li>
            <li>🏧 Saques em caixas Banco24Horas</li>
          </ul>

          <br />

          <h3>Aplicativo PagBank</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>

          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Realizar Pix instantâneo</li>
            <li>Pagar contas e boletos</li>
            <li>Investir diretamente pelo app</li>
            <li>Gerenciar cartão e limites</li>
          </ul>

          <br />
        </div>

        {/* NEON */}
        <div className="card">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAolBMVEVHcEwA6/YAtfsAof0A0vgA+fQApf0A4PYAvvoAmv4A3PcAx/kA/PMAkP8Akf8AzfgA3vYAwfoA9vMA/vIA+vP///8AtfsAlv8B2fcAwvoArvwA0vgAvPoAn/4AxfkF5fUApv0Ao/0D7PUA8PQAzfgAyfkA6fUAqfwA8/QAm/4A9/MA+/PI9P7e+f6e6/zw/f+17P1W7PiS2v0/1fpRwP1v0PzywzyXAAAAFXRSTlMAUJ3vHexQ/g2XlcuZy+rqouqSy6dH63HSAAABbklEQVQ4jYWTa3eCMAyGcerA69xcUFSgbiITCwXB///Xljapt7lDDh84ydO+TfrWca7x+jJ6j5K30bDjPAnvxfc3myBKdrv1cjnrPdYHq5UF1gi47vB+eTd9BGLXu9Z7W/EX2H9dZLzwOfBt9+j+B/T5fAcL+NyFJjTw82EEFhYoQdUaWEpQsQEyLTIgIG0AowySXa1/JAGfCCx4BzB5BOAGOOJ8CQhzBqL8Duiggga2Z5NGiRP/MDB2JgYIcY3OFwHVoWJg7kw1EDZwMkvPBQPcxbGPZ0TgIEGUOl+bD8ONKwMcCQibRpjDlVAYQLkFVAhgG1M6ZCpoaxUZEelCvieJCc/BJ+AUGCkpwUhkc25T0CBB2TlAHnObPChB/Z+DyPZpB+XcAnITJVQvLqPmyxJ6lAqvO1KmTtedja/XnUpcr/1Q55BX7Iesd2OYdHWx/ZodRYZpt1y7aVtt3/5w2p/e3ePVwMx7rOt4+vx/AU6JW7nvJ9VdAAAAAElFTkSuQmCC"
            alt="Neon"
          />
          <br />

          <h2>NEON</h2>

          <a
            href="https://neon.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR NEON
          </a>
          <br />

          <h3 className="legenda">DESCRIÇÃO</h3>

          <p>
            A Neon é uma fintech brasileira focada em conta digital simples, sem
            burocracia e com baixo custo, oferecendo serviços essenciais para
            controle financeiro direto pelo celular.
          </p>
          <br />

          <p>
            <strong>Para que é usado:</strong>
          </p>

          <ul>
            <li>Gerenciar conta digital sem tarifas</li>
            <li>Fazer Pix, transferências e pagamentos</li>
            <li>Usar cartão de débito e crédito</li>
            <li>Controlar gastos em tempo real</li>
            <li>Pagar contas e boletos</li>
            <li>Organizar finanças pessoais</li>
          </ul>
          <br />

          <h4>Diferenciais</h4>

          <ul>
            <li>💰 Conta gratuita sem mensalidade</li>
            <li>📱 App leve, simples e intuitivo</li>
            <li>💳 Cartão sem anuidade</li>
            <li>📊 Controle financeiro facilitado</li>
            <li>⚡ Pix rápido e ilimitado</li>
            <li>🔒 Segurança com autenticação no app</li>
          </ul>

          <h3>Tipos de Conta da Neon</h3>

          <h4>Conta Digital:</h4>
          <p>
            <strong>Preço:</strong> Gratuito.
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Pix, transferências, pagamentos e
            cartão sem anuidade.
          </p>
          <p>
            <strong>Restrições:</strong> Conta 100% digital (sem agência
            física).
          </p>
          <br />

          <h4>Conta Neon+ (Benefícios Extras):</h4>
          <p>
            <strong>Preço:</strong> Gratuito (condições podem ser exigidas).
          </p>
          <p>
            <strong>Chave Benefícios:</strong> Mais vantagens no uso da conta e
            crédito.
          </p>
          <p>
            <strong>Restrições:</strong> Depende de critérios internos.
          </p>
          <br />

          <h3>Cartões Neon</h3>

          <h4>Cartão de Crédito:</h4>
          <p>
            <strong>Preço:</strong> Sem anuidade.
          </p>
          <p>
            <strong>Benefícios:</strong> Controle total pelo app e opção de
            limite garantido.
          </p>
          <p>
            <strong>Observações:</strong> Aprovação depende de análise de
            crédito.
          </p>
          <br />

          <h4>Cartão de Débito:</h4>
          <p>
            <strong>Preço:</strong> Incluso na conta.
          </p>
          <p>
            <strong>Benefícios:</strong> Compras com saldo disponível.
          </p>
          <p>
            <strong>Observações:</strong> Uso nacional e internacional.
          </p>

          <br />

          <h3>Outros Serviços</h3>

          <ul>
            <li>📊 Controle de gastos automático</li>
            <li>💰 Empréstimos pessoais</li>
            <li>🧾 Pagamento de boletos e contas</li>
            <li>📱 Recarga de celular</li>
            <li>🏧 Saques em caixas Banco24Horas</li>
            <li>🔔 Notificações em tempo real</li>
          </ul>

          <br />

          <h3>Aplicativo Neon</h3>

          <p>
            <strong>Disponível em:</strong> Android e iOS
          </p>

          <p>
            <strong>Principais funções:</strong>
          </p>

          <ul>
            <li>Consultar saldo e extrato</li>
            <li>Realizar Pix instantâneo</li>
            <li>Pagar contas e boletos</li>
            <li>Gerenciar cartão de crédito</li>
            <li>Acompanhar gastos em tempo real</li>
          </ul>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Banco;