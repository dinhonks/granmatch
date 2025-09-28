document.addEventListener('DOMContentLoaded', () => {
    // Referências globais
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const welcomeMessage = document.getElementById('welcome-message');
    const navLinks = document.querySelectorAll('.nav-link');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profileType = document.getElementById('profile-type');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    
    // Elementos do Dashboard do Aluno
    const vagasList = document.getElementById('vagas-list');
    const candidaturasList = document.getElementById('candidaturas-list');
    
    // Elementos do Dashboard da Empresa
    const talentosList = document.getElementById('talentos-list');
    const vagasEmpresaList = document.getElementById('vagas-empresa-list');

    // Dados Mock para simular um banco de dados
    const vagasMock = [
        { id: 1, titulo: "Desenvolvedor Front-end", empresa: "Tech Solutions", score: 95 },
        { id: 2, titulo: "Estágio em UX/UI", empresa: "Design Studio", score: 88 },
        { id: 3, titulo: "Analista de Dados Júnior", empresa: "Data Insights", score: 75 }
    ];

    const candidaturasMock = [
        { vaga: "Analista de Dados", status: "Pendente" },
        { vaga: "Desenvolvedor Back-end Jr.", status: "Aprovada" }
    ];
    
    const talentosMock = [
        { nome: "João Silva", habilidades: "React, Node.js" },
        { nome: "Maria Oliveira", habilidades: "Figma, UX Design" },
        { nome: "Carlos Souza", habilidades: "Python, SQL" }
    ];

    // Funções para manipular o localStorage
    const saveUser = (name, email, password, userType) => {
        const user = { name, email, password, userType };
        localStorage.setItem('currentUser', JSON.stringify(user));
    };

    const checkLogin = (email, password) => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            return storedUser;
        }
        return null;
    };

    const clearUser = () => {
        localStorage.removeItem('currentUser');
    };

    // Lógica para o formulário de login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('#email').value;
            const password = loginForm.querySelector('#password').value;
            
            const userData = checkLogin(email, password);

            if (userData) {
                alert('Login realizado com sucesso!');
                if (userData.userType === 'aluno') {
                    window.location.href = 'dashboard-aluno.html';
                } else if (userData.userType === 'empresa') {
                    window.location.href = 'dashboard-empresa.html';
                }
            } else {
                alert('E-mail ou senha incorretos.');
            }
        });
    }

    // Lógica para o formulário de registro
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = registerForm.querySelector('#name').value;
            const email = registerForm.querySelector('#email').value;
            const password = registerForm.querySelector('#password').value;
            const userType = registerForm.querySelector('#user-type').value;

            saveUser(name, email, password, userType);
            
            alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
            window.location.href = 'index.html';
        });
    }

    // Lógica para os botões de navegação
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            clearUser();
            alert('Sessão encerrada.');
            window.location.href = 'index.html';
        });
    }

    // Lógica para exibir o nome do usuário no dashboard
    if (welcomeMessage) {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser && storedUser.name) {
            welcomeMessage.textContent = `Bem-vindo, ${storedUser.name}!`;
        }
    }
    
    // Lógica para preencher a página de perfil
    if (profileName && profileEmail && profileType) {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            profileName.textContent = storedUser.name;
            profileEmail.textContent = storedUser.email;
            profileType.textContent = storedUser.userType.charAt(0).toUpperCase() + storedUser.userType.slice(1);
        }
    }

    // Lógica para o botão de editar perfil
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            alert('Funcionalidade de edição de perfil em desenvolvimento.');
        });
    }
    
    // Lógica para navegação e destaque
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                navLinks.forEach(nav => nav.classList.remove('active'));
                
                link.classList.add('active');

                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Lógica para o CONTEÚDO DINÂMICO no Dashboard do Aluno
    if (vagasList && candidaturasList) {
        // Renderiza vagas
        vagasMock.forEach(vaga => {
            const li = document.createElement('li');
            li.innerHTML = `Vaga: ${vaga.titulo} | Score: ${vaga.score}% <button class="apply-btn" data-vaga-id="${vaga.id}">Candidatar-se</button>`;
            vagasList.appendChild(li);
        });

        // Renderiza candidaturas
        candidaturasMock.forEach(candidatura => {
            const li = document.createElement('li');
            li.textContent = `Vaga: ${candidatura.vaga} | Status: ${candidatura.status}`;
            candidaturasList.appendChild(li);
        });

        // Adiciona funcionalidade aos botões de candidatura
        const applyButtons = document.querySelectorAll('.apply-btn');
        applyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const vagaId = button.dataset.vagaId;
                alert(`Candidatura para a vaga ${vagaId} enviada!`);
                button.textContent = 'Candidatado!';
                button.disabled = true;
                button.style.backgroundColor = '#6c757d'; // cor de desabilitado
            });
        });
    }
    
    // Lógica para o CONTEÚDO DINÂMICO no Dashboard da Empresa
    if (talentosList && vagasEmpresaList) {
        // Renderiza banco de talentos
        talentosMock.forEach(talento => {
            const li = document.createElement('li');
            li.innerHTML = `Aluno: ${talento.nome} | Habilidades: ${talento.habilidades}`;
            talentosList.appendChild(li);
        });

        // Renderiza vagas da empresa
        vagasMock.forEach(vaga => {
            const li = document.createElement('li');
            li.innerHTML = `Vaga: ${vaga.titulo} | Candidatos: ${Math.floor(Math.random() * 20) + 1}`; // Número de candidatos aleatório
            vagasEmpresaList.appendChild(li);
        });
    }
});