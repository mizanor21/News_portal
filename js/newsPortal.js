const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
}

const displayCategory = categorys => {
    const categorysContainer = document.getElementById('categoy_container');
    for (const category of categorys) {
        // console.log(category.category_name)
        const caregoryList = document.createElement('ul');
        caregoryList.classList.add('items')
        caregoryList.innerHTML = `
            <li>${category.category_name}</li>
        `;
        categorysContainer.appendChild(caregoryList);
    }


}

loadCategory();