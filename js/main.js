
document.addEventListener("DOMContentLoaded", () => {
 
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".form-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      
      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });

  
  const searchBtn = document.getElementById("btn-search-negotiations");
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
     
      const inputEmpresa = document.getElementById("filter-company").value;
      const selectStatus = document.getElementById("filter-status").value;
      const selectPeriod = document.getElementById("filter-period").value;
      alert(
        `Buscando negociações para:\nEmpresa: ${inputEmpresa}\nStatus: ${selectStatus}\nPeríodo: ${selectPeriod}`
      );
    });
  }

  
  const addMaterialBtn = document.getElementById("btn-add-material");
  if (addMaterialBtn) {
    addMaterialBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const tipo = document.getElementById("material-type").value;
      const qtd = document.getElementById("material-quantity").value;
      const unidade = document.getElementById("material-unit").value;
      const preco = document.getElementById("material-price").value;
      const condicao = document.getElementById("material-condition").value;

      if (!tipo) {
        alert("Selecione um tipo de material.");
        return;
      }
     
      alert(
        `Material cadastrado:\nTipo: ${tipo}\nQuantidade: ${qtd} ${unidade}\nPreço: R$ ${preco}\nCondição: ${condicao}`
      );
     
    });
  }


  const convItems = document.querySelectorAll(".conversation-item");
  convItems.forEach((item) => {
    item.addEventListener("click", () => {
      convItems.forEach((c) => c.classList.remove("active"));
      item.classList.add("active");
     
      const chatHeaderName = document.getElementById("chat-header-name");
      chatHeaderName.textContent = item.querySelector("h4").textContent;
     
      const messagesArea = document.querySelector(".chat-messages");
      messagesArea.innerHTML = "";
      const dummyMsg = document.createElement("div");
      dummyMsg.classList.add("message", "receiver");
      dummyMsg.innerHTML = `<p>Esta é uma mensagem de exemplo inicial da conversa com <strong>${chatHeaderName.textContent}</strong>.</p>
                            <span class="timestamp">10:00</span>`;
      messagesArea.appendChild(dummyMsg);
    });
  });

 
  const sendMsgBtn = document.getElementById("btn-send-msg");
  if (sendMsgBtn) {
    sendMsgBtn.addEventListener("click", () => {
      const inputField = document.getElementById("input-message");
      const text = inputField.value.trim();
      if (!text) return;
      const messagesArea = document.querySelector(".chat-messages");
      const newMsg = document.createElement("div");
      newMsg.classList.add("message", "sender");
      newMsg.innerHTML = `<p>${text}</p><span class="timestamp">Agora</span>`;
      messagesArea.appendChild(newMsg);
      inputField.value = "";
      messagesArea.scrollTop = messagesArea.scrollHeight;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  
  const loginForm = document.getElementById("form-login");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("login-email").value.trim();
      const senhaInput = document.getElementById("login-senha").value.trim();
      const errorDiv = document.getElementById("login-error");

  
      if (emailInput === "admin@fortes.com.br" && senhaInput === "123456") {
        
        errorDiv.style.display = "none";
      
        setTimeout(() => {
          window.location.href = "history.html";
        }, 300);
      } else if (
        emailInput === "cooperativas@fortes.com.br" &&
        senhaInput === "123456"
      ) {
        
        errorDiv.style.display = "none";
        setTimeout(() => {
          window.location.href = "materials.html";
        }, 300);
      } else {
       
        errorDiv.textContent = "E-mail ou senha incorretos.";
        errorDiv.style.display = "block";
      }
    });
  }


  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".form-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });


  const searchBtn = document.getElementById("btn-search-negotiations");
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const inputEmpresa = document.getElementById("filter-company").value;
      const selectStatus = document.getElementById("filter-status").value;
      const selectPeriod = document.getElementById("filter-period").value;
      alert(
        `Buscando negociações para:\nEmpresa: ${inputEmpresa}\nStatus: ${selectStatus}\nPeríodo: ${selectPeriod}`
      );
    });
  }

 
  const addMaterialBtn = document.getElementById("btn-add-material");
  if (addMaterialBtn) {
    addMaterialBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const tipo = document.getElementById("material-type").value;
      const qtd = document.getElementById("material-quantity").value;
      const unidade = document.getElementById("material-unit").value;
      const preco = document.getElementById("material-price").value;
      const condicao = document.getElementById("material-condition").value;

      if (!tipo) {
        alert("Selecione um tipo de material.");
        return;
      }
      alert(
        `Material cadastrado:\nTipo: ${tipo}\nQuantidade: ${qtd} ${unidade}\nPreço: R$ ${preco}\nCondição: ${condicao}`
      );
    });
  }


  const convItems = document.querySelectorAll(".conversation-item");
  convItems.forEach((item) => {
    item.addEventListener("click", () => {
      convItems.forEach((c) => c.classList.remove("active"));
      item.classList.add("active");
      const chatHeaderName = document.getElementById("chat-header-name");
      chatHeaderName.textContent = item.querySelector("h4").textContent;
      const messagesArea = document.querySelector(".chat-messages");
      messagesArea.innerHTML = "";
      const dummyMsg = document.createElement("div");
      dummyMsg.classList.add("message", "receiver");
      dummyMsg.innerHTML = `<p>Esta é uma mensagem de exemplo inicial da conversa com <strong>${chatHeaderName.textContent}</strong>.</p>
                            <span class="timestamp">10:00</span>`;
      messagesArea.appendChild(dummyMsg);
    });
  });


  const sendMsgBtn = document.getElementById("btn-send-msg");
  if (sendMsgBtn) {
    sendMsgBtn.addEventListener("click", () => {
      const inputField = document.getElementById("input-message");
      const text = inputField.value.trim();
      if (!text) return;
      const messagesArea = document.querySelector(".chat-messages");
      const newMsg = document.createElement("div");
      newMsg.classList.add("message", "sender");
      newMsg.innerHTML = `<p>${text}</p><span class="timestamp">Agora</span>`;
      messagesArea.appendChild(newMsg);
      inputField.value = "";
      messagesArea.scrollTop = messagesArea.scrollHeight;
    });
  }
});
