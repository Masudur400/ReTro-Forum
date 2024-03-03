
const cardContainer = document.getElementById('card-container');

const allPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const allData = data.posts;

    cardContainer.textContent = '';
    allData.forEach((item) => {
        // console.log(item.isActive);  
        const div = document.createElement('div');
        div.innerHTML = ` 
                <div class="lg:flex mb-10 bg-gray-200 rounded-lg p-4">
                    <div class="lg:w-[40%] mb-24 lg:mb-0 ">
                        <div class="absolute">
                            <img class="w-[31%] mb-5 lg:w-[24%] rounded-lg" src="${item.image}"  alt="">
                        </div>
                        <div class= "w-[10px] h-[10px] rounded-full ${item.isActive ? 'bg-green-500' : 'bg-red-500'} relative left-20  lg:top-0 lg:left-36"> 
                        </div>
                    </div>
                    <div class="lg:w-full">
                        <div class="flex justify-between gap-3 mb-4">
                            <p class="flex"># <span>${item.category}</span></p>
                            <p class="text-sm">Author : <span>${item.author.name}</span></p>
                        </div> 
                        <h3 class="text-xl font-bold mb-4">${item.title}</h3>
                        <p class="text-base font-normal opacity-80"> ${item.description}</p>
                        <div class="divider"></div> 
                        <div class="flex justify-between">
                            <p><i class="fa-regular fa-message"></i> <span>${item.comment_count}</span></p>
                            <p><i class="fa-regular fa-eye"></i><span> ${item.view_count}</span></p>
                            <p><i class="fa-regular fa-clock"></i> <span> ${item.posted_time}</span> min</p>
                            <div class="text-center">
                                <button id="card-btn" onclick="clickHandle('${escape(item.title)}','${item.view_count}')" class=" btn  rounded-full bg-green-500 "><i class="fa-regular fa-envelope-open text-2xl font-bold text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </div>  
        `;
        cardContainer.appendChild(div);
    })
    // hide loading 
    loading(false);
}


const latestPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();
    const latestData = data;
    const latestPostContainer = document.getElementById('latestPost-container');
    latestPostContainer.textContent = '';

    latestData.forEach((item) => {
        // console.log(item.profile_image);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-gray-50 border-2 border-gray-200 rounded-xl p-4">
                <div class="mb-5">
                    <img class="w-full" src="${item.cover_image}" alt="">
                </div>
                <div class="space-y-2">
                    <p><i class="fa-solid fa-calendar-days opacity-70"> <span>${item.author?.posted_date || 'No publish date'}</span></i></p>
                    <h3 class="text-lg font-bold">${item.title}</h3>
                    <p class="text-base font-medium opacity-80">${item.description}</p>
                </div>
                <div class="flex gap-5 mt-2">
                    <div>
                        <img class="w-[60px] h-[60px] rounded-full" src="${item.profile_image}" alt="">
                    </div>
                    <div>
                        <p class="text-base lg:text-lg font-bold">${item.author?.name}</p>
                        <p class="text-base">${item.author?.designation || 'Unknown'}</p>
                    </div>
            </div> 
            </div>
        `;
        latestPostContainer.appendChild(div);
    })
}

let count = 1;
const clickHandle = (title, view) => {
    // console.log(title,view); 
    const mark = document.getElementById('mark');
    mark.innerText = count;
    count = count + 1;

    const clickShowCard = document.getElementById('click-show-card');
    const div = document.createElement('div');
    div.innerHTML = `
     <div class="lg:flex gap-10 mb-6 bg-white rounded-lg p-4">
        <h3 class="text-base lg:w-[80%] lg:text-lg font-bold">${unescape(title)}</h3>
        <p class="flex mt-5 lg:w-[20%]"><i class="fa-regular fa-eye">  <span>${view}</span></i></p>
    </div>
     `;
    clickShowCard.appendChild(div);
}


//  search content 
const searchCard = async (value) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${value}`);
    const data = await response.json();
    const catCard = data.posts;
    cardContainer.textContent = '';
    if (catCard.length > 0) {
        catCard.forEach((item) => {
            // console.log(item);

            const div = document.createElement('div');
            div.innerHTML = ` 
                <div class="lg:flex mb-10 bg-gray-200 rounded-lg p-4">
                    <div class="lg:w-[40%] mb-24 lg:mb-0 ">
                        <div class="absolute">
                            <img class="w-[31%] mb-5 lg:w-[24%] rounded-lg" src="${item.image}"  alt="">
                        </div>
                        <div class= "w-[10px] h-[10px] rounded-full ${item.isActive ? 'bg-green-500' : 'bg-red-500'} relative left-20  lg:top-0 lg:left-36"> 
                        </div>
                    </div>
                    <div class="lg:w-full">
                        <div class="flex justify-between gap-3 mb-4">
                            <p class="flex"># <span>${item.category}</span></p>
                            <p class="text-sm">Author : <span>${item.author.name}</span></p>
                        </div> 
                        <h3 class="text-xl font-bold mb-4">${item.title}</h3>
                        <p class="text-base font-normal opacity-80"> ${item.description}</p>
                        <div class="divider"></div> 
                        <div class="flex justify-between">
                            <p><i class="fa-regular fa-message"></i> <span>${item.comment_count}</span></p>
                            <p><i class="fa-regular fa-eye"></i><span> ${item.view_count}</span></p>
                            <p><i class="fa-regular fa-clock"></i> <span> ${item.posted_time}</span> min</p>
                            <div class="text-center">
                                <button id="card-btn" onclick="clickHandle('${escape(item.title)}','${item.view_count}')" class=" btn  rounded-full bg-green-500 "><i class="fa-regular fa-envelope-open text-2xl font-bold text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </div>  
        `;
            cardContainer.appendChild(div);
        })
    }
    else {
        alert('No data available');
    }
    // console.log(catCard)

    //hide loading
    loading(false);
}


//search feild
const searchPosts = () => {
    loading(true);
    const value = document.getElementById('search-feild').value;

    // console.log(value);
    if (value) {
        searchCard(value);
    }
    else {
        alert('No data available')
    }
}


const loading = (isLoading) => {
    const load = document.getElementById('loading-section');
    if (isLoading) {
        load.classList.remove('hidden');
    }
    else {
        load.classList.add('hidden');
    }
}

latestPosts();

allPosts();




