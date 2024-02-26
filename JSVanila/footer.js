// // nav.js
const createfooter = () => {
    const navElement = document.createElement('nav');
    navElement.innerHTML = `
    <div class="footer d-flex align-items-end mt-5">
        <div class="card bg-white">
            <img src="../img/footer1.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
    </div>
    `;
    document.body.appendChild(navElement);
};

export default createfooter;