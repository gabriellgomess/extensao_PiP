document.addEventListener('DOMContentLoaded', function() {
    var pipButton = document.getElementById('pipButton');
    pipButton.addEventListener('click', function() {
        // Enviar mensagem ao script de conteúdo para ativar PiP
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "activate_pip"});
        });
    });
});
