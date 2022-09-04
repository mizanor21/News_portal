const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
}

const displayCategory = categorys => {
    const categorysContainer = document.getElementById('categoy_container');
    for (const category of categorys) {
        const categoryList = document.createElement('li');
        categoryList.classList.add('nav-item', 'mx-2');
        categoryList.innerHTML = `
            <a class="nav-link fs-5" href="#">${category.category_name}</a>
        `;
        categorysContainer.appendChild(categoryList);
    }


}

loadCategory();

// main area start 
const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayNews(data.data))
}

const displayNews = newses => {
    const mainContainer = document.getElementById('main_container');
    for (news of newses) {
        console.log(news);
        const mainDiv = document.createElement('div');
        mainDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 100%;">
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src="${news.thumbnail_url}" class="img-fluid w-100 rounded-start" alt="Image Not Found!">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title my-4">${news.title}</h5>
                            <p class="card-text text-muted">${news.details}</p>
                        </div>
                        <div class="mt-4">
                            <div class="d-flex">
                                <img class="w-25" src="${news.author.img}" alt="Image Not Found">
                                <div class="mt-4 ms-3">
                                    <h5>${news.author.name}</h5>
                                    <p class="text-muted">${news.author.published_date}</p>
                                </div>
                                <div>
                                    <h4></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                `;
        mainContainer.appendChild(mainDiv);
    }
}
loadNews();