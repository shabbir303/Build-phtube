const handleButton = async()=> {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const allButton =await res.json();
    console.log(allButton.data);
    const buttonContainer = document.getElementById('button-container');
    allButton.data.forEach((eachButton) => {
        const everyButton = document.createElement('div');
        everyButton.innerHTML = `
        <div>
        <button onclick = "buttonDetails('${eachButton.category_id}')" class='btn mx-[15px]'>${eachButton.category}</button>
        </div>
        `
        buttonContainer.appendChild(everyButton);
    });

}

const buttonDetails = async(id) =>{
    const res =await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const allDetails = await res.json();
    console.log(allDetails.data);
    console.log()
    const detailsContainer = document.getElementById('button-details');
    detailsContainer.innerHTML = '';
    allDetails.data.forEach((eachData)=>{
        

        const eachContainer = document.createElement('div');
        eachContainer.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src=${eachData.thumbnail} alt="Shoes" class="w-full max-h-[200px]" /></figure>
            <div class="p-[30px]">
            <div class=" flex  gap-[20px] items-center">
                <div class="avatar">
                <div class="w-[40px] rounded-full">
                <img src=${eachData?.authors[0]?.profile_picture} />
                </div>
                </div>

               
                
                <p class="text-[16px] font-[700]">${eachData.title}</p>
                
                
            </div>
                <div class='ml-[60px]'>
                    <div class='flex gap-[10px]'>
                    <h2 class="text-[14px] font-[400]">${eachData?.authors[0]?.profile_name}</h2>
                    <h3>${eachData?.authors[0]?.verified? '<img src="image/google-verified.png" alt="" class="w-[20px] h-[20px]">':''}</h3></div>

                    
                    <h1 class="text-[14px] font-[400]">${eachData?.others?.views? eachData?.others?.views:'no views'} views</h1>
                </div>

            </div>
        </div>
        `
        detailsContainer.appendChild(eachContainer);
    })
}    
buttonDetails('1005')
handleButton()