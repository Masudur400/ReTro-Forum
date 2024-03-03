 const allPosts =async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const allData = data.posts;

    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
     allData.forEach((item)=>{
        // console.log(item.posted_time);
        const div = document.createElement('div');
        div.innerHTML = ` 
                <div class="lg:flex mb-10 bg-gray-200 rounded-lg p-4">
                    <div class="lg:w-[40%] mb-24 lg:mb-0 ">
                        <div class="absolute">
                            <img class="w-[31%] mb-5 lg:w-[24%] rounded-lg" src="${item.image}" alt="">
                        </div>
                        <div class="w-[10px] h-[10px] rounded-full bg-green-500  relative left-20  lg:top-0 lg:left-36">

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
                            <div>
                                <button class="h-[30px] w-[30px] rounded-full bg-green-500 "><i class="fa-regular fa-envelope-open text-le font-bold text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </div>  
        `;
        cardContainer.appendChild(div);
        
     })
 }
 
 allPosts();
 