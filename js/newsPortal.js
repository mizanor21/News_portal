const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
}

const displayCategory = categorys => {
    const categorysContainer = document.getElementById('categoy_container');
    for (const category of categorys) {
        const categoryList = document.createElement('li');
        categoryList.classList.add('nav-item');
        categoryList.innerHTML = `
            <a class="nav-link active" href="#">${category.category_name}</a>
        `;
        categorysContainer.appendChild(categoryList);
    }


}

loadCategory();