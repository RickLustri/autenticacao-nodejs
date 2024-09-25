function exibirPaginaLogin(request, response) {
  response.render('login')
}


function autenticarUser(request, response) {
  const { email, senha } = request.body

  console.log("Email:", email, "Senha:", senha)

  if (email == 'admin@admin.com' && senha == 'admin') {
    
    // Salvar a sessão do usuário
    request.session.user = {
      email: email
    }

    response.redirect('/dashboard')
  } else {
    console.log("Email ou senha inválidos")
  }
}

function deslogarUser(request, response) {
  // Remover a sessão do usuário
  request.session.destroy()

  // Redirecionar o usuário para a página de login
  response.redirect('/login')
}



module.exports = {
  exibirPaginaLogin,
  autenticarUser,
  deslogarUser
}