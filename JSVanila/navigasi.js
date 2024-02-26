const createNavigation = () => {
    const navElement = document.createElement('nav');
    navElement.innerHTML = `
    <ul class="nav nav-pills justify-content-end shadow-sm p-3 mb-5 rounded "> <!-- fixed-top-->  
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="index.html">About</a>
    </li>
  
    <li class="nav-item">
      <a class="nav-link" href="pasar.html">Pasar investasi</a>
    </li>
    
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Daftar investasi
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="saham.html">Saham</a></li>
        <li><a class="dropdown-item" href="obligasi.html">Obligasi </a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="emas.html">Emas</a></li>
      </ul>
    </li>
  
    <li class="nav-item">
      <a class="nav-link" href="portovolio.html">Portovolio</a>
    </li>
  </ul>
    `;
    document.body.appendChild(navElement);
  };
  
  export default createNavigation;