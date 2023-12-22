export class Router {
  routes = {};

  //Adicionando as rotas e criando refs
  add(ref, source) {
    this.routes[ref] = source;
  }

  //Evento disparado ao clicar em um link,adicionando-o ao estado do historico.
  pushPath() {
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handleUrl();
  }

  //Extraindo da URL somente o pathname que foi posto pelo pushPath(), validando path name e buscando seu conteúdo pelo fetch.
  handleUrl() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((response) => response.text())
      .then((page) => (document.querySelector(".app").innerHTML = page));
  }
}
