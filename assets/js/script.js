const sobre = document.querySelector("#about")
const formulario = document.querySelector("#formulario")
const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

async function getApiGithub() {
  try {

        const dadosPerfil = await fetch(`https://api.github.com/users/GabrielsDomiciano`)
        const perfil = await dadosPerfil.json()

        let conteudo = `

            <img class="about_imagem"
            src="${perfil.avatar_url}"
            alt="Foto do Perfil do Github - ${perfil.nome}"
            />

            <article id="about_texto" class="flex about_content">
                <h1>Sobre mim</h1>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quae, possimus cumque iste ad pariatur laborum iure tenetur eius soluta quo delectus debitis facilis. Expedita nesciunt nemo qui? Consequuntur, recusandae.
                    
                </p>
                <div id="about_github" class="github_infos">
                    <a
                    href="${perfil.html_url}"
                    target="_blank"
                    class="botao"
                    >
                    Github</a
                    >
                    <div><p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p></div>
                    
                </div>
            </article>
        `;

        sobre.innerHTML += conteudo;
        console.log(conteudo)

    }catch (error) {
        console.error(error)
    }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = document.querySelector("#nome");
  const txtNome = document.querySelector("#txtNome")

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres."
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }

  const campoEmail = document.querySelector("#email");
  const txtEmail = document.querySelector("#txtEmail")

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um e-mail válido."
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  const campoAssunto = document.querySelector("#assunto");
  const txtAssunto = document.querySelector("#txtAssunto")

  if (campoAssunto.value.length < 5) {
    txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres."
    campoAssunto.focus();
    return;
  } else {
    txtAssunto.innerHTML = "";
  }

  formulario.submit();
})

getApiGithub()
