const handleButton = async()=> {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const allButton =await res.json();
    console.log(allButton.data);
    const buttonContainer = document.getElementById('button-container');

    
    allButton.data.forEach((eachButton) => {
        const everyButton = document.createElement('div');
        
           
       
        everyButton.innerHTML = `
        <div>
        <button onclick = "buttonDetails('${eachButton.category_id}')" class='btn active:bg-violet-700  focus:bg focus:bg-violet-300 mx-[15px]'>${eachButton.category}</button>
        </div>
        `
        buttonContainer.appendChild(everyButton);
        console.log(eachButton.category_id.length)
       
    });

}

const buttonDetails = async(id) =>{
    const res =await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const allDetails = await res.json();
    console.log(allDetails.data);
    console.log(allDetails.data.length)
    const noContent = document.getElementById('no-content')
    if(allDetails.data.length === 0){
        noContent.classList.remove('hidden')
    }else{
        noContent.classList.add('hidden')
    }
    const detailsContainer = document.getElementById('button-details');
    detailsContainer.innerHTML = '';

    console.log(typeof allDetails?.data[0]?.others.posted_date)


    
    allDetails.data.forEach((eachData)=>{

        // console.log( eachData.others.posted_date);
        const postedDate = eachData.others.posted_date;
        const seconds = parseInt(postedDate);
        console.log(seconds)
        const day = seconds / 86400;
        const remaining_seconds = seconds % 86400;
        const hours = remaining_seconds / 3600;
        const remainingSeconds = seconds % 3600;
        const minitues = remainingSeconds /60;
        console.log(day, hours, minitues);
        
        
        const eachContainer = document.createElement('div');
        
        eachContainer.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class='relative'><img src=${eachData.thumbnail} alt="Shoes" class="w-full max-h-[200px]" />
            <h1 id="time" class="absolute bg-black text-white px-[10px] ml-[250px] mt-[150px] w-[70%] mr-[30px]">${parseInt(day)?parseInt(day)+'day':''} ${parseInt(hours)?parseInt(hours)+'hrs':''} ${parseInt(minitues)?parseInt(minitues)+'min ago' :''}</h1>
            </figure>
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
        // console.log(eachData.length)

       
    })
    
}  




let isAnswerVisible = ''; 
//please press 2 times to the blog button
// 1st press you will show the que and answer
// 2nd press hide the que and ans
const blogClicked = () => {
    const createAns = document.getElementById('que-ans');
    
    
    if (isAnswerVisible) {
        
        createAns.innerHTML = ''; 
        isAnswerVisible = '';
    } else {
        
        const queAnswer = document.createElement('div');
        queAnswer.innerHTML = `
        <div class= "border-[1px] p-[20px] ">
        <h1 class= 'text-[20px] font-bold'>
        Que:1-Discuss the scope of var, let, and const?
        </h1>
        <h2>
        Ans:
        </h2>
        <h1 class= 'text-[20px] font-bold mt-[10px]'>
        Que:2-Tell us the use cases of null and undefined?
        </h1>
        <h2>
        Ans:
        </h2>
        <h1 class= 'text-[20px] font-bold mt-[10px]'>
        Que:3-What do you mean by REST API?
        </h1>
        <h2>
        Ans:
        </h2>
        </div>
        `;
        createAns.appendChild(queAnswer);
        isAnswerVisible = ' ';
    }
}

const sortView = () =>{

}

buttonDetails('1000')
handleButton()