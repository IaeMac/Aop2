// 1. Criar o objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Configurar a requisição (GET ou POST, e a URL)
xhr.open('GET', 'url-api-alvo', true);

// 3. Monitorar as mudanças de estado
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Tratar a resposta quando a requisição for bem-sucedida
        console.log(xhr.responseText);
    }
};

// 4. Enviar a requisição ao servidor
xhr.send();
