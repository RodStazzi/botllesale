const searchBtn = document.getElementById('search-btn');
const mealListAll = document.getElementById('meal');
const mealList = document.getElementById('meal');
const mealListbyCategory = document.getElementById('meal');

function getmealListbyCategory() {
    let searchSelector = document.getElementById('meal-selector').value.trim();
    fetch(`https://bot.rosta.cloud/api/v1/product/category/%7Bcategory%7D?category=${searchSelector}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data) {
                data.forEach(meal => {
                    html += `
            <div class = "meal-item newstyle" data-id = "${meal.id}">
            <div class = "meal-img">
                <img src = "${meal.url_image}" alt = "sin imagen">
            </div>
            <div class = "meal-name">
                <h3>${meal.name}</h3>
                <div class="dropdown-divider"></div>
                <div class= "meal-price">
          <h7 href="#">$ ${meal.price}</h7> <svg xmlns="http://www.w3.org/2000/svg" style="float: right;"
          width="25" height="25" fill="currentColor"
          class="bi bi-cart-plus-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
        </div>
            </div>
        </div>
            `;
                });
            }
            if (data.length == 0) {
                fetch(`https://bot.rosta.cloud/api/v1/product`)
                    .then(response => response.json())
                    .then(data => {
                        let html = "";
                        if (data) {
                            data.forEach(meal => {
                                html += `
            <div class = "meal-item newstyle" data-id = "${meal.id}">
            <div class = "meal-img">
                <img src = "${meal.url_image}" alt = "sin imagen">
            </div>
            <div class = "meal-name">
                <h3>${meal.name}</h3>
                <div class="dropdown-divider"></div>
                <div class= "meal-price">
          <h7 href="#">$ ${meal.price}</h7> <svg xmlns="http://www.w3.org/2000/svg" style="float: right;"
          width="25" height="25" fill="currentColor"
          class="bi bi-cart-plus-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
        </div>
            </div>
        </div>
            `;
                            });
                        }
                        mealListAll.innerHTML = html;
                    });
            }
            mealListbyCategory.innerHTML = html;
        });
}





function getMealListAll() {
    const res = fetch(`https://bot.rosta.cloud/api/v1/product`)

    return res
}

getMealListAll().then(response => response.json())
    .then(data => {
        let html = "";
        if (data) {
            data.forEach(meal => {
                html += `
            <div class = "meal-item newstyle" data-id = "${meal.id}">
            <div class = "meal-img">
                <img src = "${meal.url_image}" alt = "sin imagen">
            </div>
            <div class = "meal-name">
                <h3>${meal.name}</h3>
                <div class="dropdown-divider"></div>
                <div class= "meal-price">
          <h7 href="#">$ ${meal.price}</h7> <svg xmlns="http://www.w3.org/2000/svg" style="float: right;"
          width="25" height="25" fill="currentColor"
          class="bi bi-cart-plus-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
        </div>
            </div>
        </div>
            `;
            });
        }
        mealListAll.innerHTML = html;
    });

// event listeners
searchBtn.addEventListener('click', getMealList);

// get drinks list for name containing
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://bot.rosta.cloud/api/v1/product/search/%7Bname%7D?name=${searchInputTxt}`)

        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data) {
                data.forEach(meal => {
                    html += `
                <div class = "meal-item newstyle" data-id = "${meal.id}">
                <div class = "meal-img">
                    <img src = "${meal.url_image}" alt = "sin imagen">
                </div>
                <div class = "meal-name">
                    <h3>${meal.name}</h3>
                    <div class="dropdown-divider"></div>
                    <div class= "meal-price">
              <h7 href="#">$ ${meal.price}</h7> <svg xmlns="http://www.w3.org/2000/svg" style="float: right;"
              width="25" height="25" fill="currentColor"
              class="bi bi-cart-plus-fill" viewBox="0 0 16 16"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
            </div>
                </div>
            </div>
                `;
                });
                mealList.classList.remove('notFound');
            }
            if (data.length == 0) {
                html = '<div class= "meal-lost"><h7>Lo siento, no hay información para esa palabra!</h7></div>';
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}


