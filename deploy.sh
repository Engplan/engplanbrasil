#!/bin/bash

# ========================
# DEPLOY COMPLETO ENGPLAN
# ========================

# 1️⃣ Compila SCSS (se estiver usando)
if [ -f "scss/style.scss" ]; then
    echo "Compilando SCSS..."
    sass scss/style.scss:style.css
else
    echo "SCSS não encontrado, pulando compilação."
fi

# 2️⃣ Adiciona todos os arquivos ao git
echo "Adicionando arquivos ao git..."
git add .

# 3️⃣ Commit com mensagem padrão
echo "Criando commit..."
git commit -m "Atualizações banner 3D, paralaxe, camadas, textos e botões"

# 4️⃣ Push para a branch principal
echo "Enviando arquivos para o repositório..."
git push origin main

# 5️⃣ Informa o usuário sobre a etapa do Render
echo "💡 Acesse o Render: Dashboard → Services → seu serviço → Manual Deploy"
echo "Marque a opção 'Clear Cache' e clique em Deploy para garantir que tudo suba."

# 6️⃣ Abrir site no navegador para conferir alterações
read -p "Deseja abrir o site no navegador agora? (s/n) " abrir
if [[ "$abrir" == "s" ]]; then
    # Altere a URL para seu site
    xdg-open "https://www.engplanbrasil.com.br" 2>/dev/null || open "https://www.engplanbrasil.com.br"
fi

echo "✅ Script finalizado. Verifique o site após o deploy no Render."
