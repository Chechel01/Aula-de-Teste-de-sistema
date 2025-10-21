// Data Storage
let products = JSON.parse(localStorage.getItem('products')) || [];
let currentUser = null;

// Page Navigation Functions
function showLogin() {
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('registerPage').classList.add('hidden');
    document.getElementById('forgotPasswordPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.add('hidden');
}

function showRegister() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('registerPage').classList.remove('hidden');
    document.getElementById('forgotPasswordPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.add('hidden');
}

function showForgotPassword() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('registerPage').classList.add('hidden');
    document.getElementById('forgotPasswordPage').classList.remove('hidden');
    document.getElementById('dashboardPage').classList.add('hidden');
}

function showDashboard() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('registerPage').classList.add('hidden');
    document.getElementById('forgotPasswordPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    document.getElementById('userEmail').textContent = currentUser;
}

// Form Handlers
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // --- INÍCIO DA CORREÇÃO ---
    // Credenciais corretas (para simular o cenário de teste)
    const emailCorreto = "admin@teste.com";
    const senhaCorreta = "123456";

    // Valida o login BEM-SUCEDIDO
    if (email === emailCorreto && password === senhaCorreta) {
        alert("Login bem-sucedido!"); // Mensagem do cenário
        currentUser = email;
        showDashboard();
    } 
    // Trata todos os outros casos (MAL-SUCEDIDO, VAZIO, etc.)
    else {
        alert("Usuário ou senha incorretos."); // Mensagem do cenário
    }
    // --- FIM DA CORREÇÃO ---
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }
    
    alert('Conta criada com sucesso!');
    showLogin();
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Link de recuperação enviado para o email informado.');
    showLogin();
});

// Product Management Functions
function showProductForm() {
    document.getElementById('productFormCard').classList.remove('hidden');
    document.getElementById('productListCard').classList.add('hidden');
}

function hideProductForm() {
    document.getElementById('productFormCard').classList.add('hidden');
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
}

function showProductList() {
    document.getElementById('productListCard').classList.remove('hidden');
    document.getElementById('productFormCard').classList.add('hidden');
    renderProducts();
}

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const productId = document.getElementById('productId').value;
    const product = {
        id: productId || Date.now().toString(),
        name: document.getElementById('productName').value,
        price: document.getElementById('productPrice').value,
        quantity: document.getElementById('productQuantity').value
    };
    
    if (productId) {
        const index = products.findIndex(p => p.id === productId);
        products[index] = product;
    } else {
        products.push(product);
    }
    
    localStorage.setItem('products', JSON.stringify(products));
    hideProductForm();
    showProductList();
});

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productQuantity').value = product.quantity;
        showProductForm();
    }
}

function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
    }
}

function renderProducts() {
    const tbody = document.getElementById('productTableBody');
    tbody.innerHTML = '';
    
    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${product.name}</td>
            <td>R$ ${parseFloat(product.price).toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct('${product.id}')">Editar</button>
                <button class="action-btn delete-btn" onclick="deleteProduct('${product.id}')">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function logout() {
    currentUser = null;
    showLogin();
}

// Initialize
showLogin();