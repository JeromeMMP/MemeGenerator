const dataForm = document.querySelector('#dataForm');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const imgLink = document.querySelector('#imgLink'); 
const memeLocation = document.querySelector('.memeLocation');
const memeTile = document.querySelectorAll('#memeTile');
const submitBtn = document.querySelector('#submitBtn');
const deleteMeme = document.querySelectorAll('.delDiv');









function createMeme(){ 
    //memeTile div
    const newDiv = document.createElement('div');
    newDiv.classList = 'memeTile'

    // top caption related 
    const topCap = document.createElement ('div');
    topCap.classList = 'topCaption';
    const tText = document.createElement('p');

    // bottom caption related 
    const bottomCap = document.createElement('div');
    bottomCap.classList = 'bottomCaption';
    const bText = document.createElement('p');
    
    //delete button 
    const delDiv = document.createElement('div');
    delDiv.classList= 'delDiv';
    delDiv.innerText='X';
    // const delCaption = document.createElement('p')
    // delCaption.innerText = 'X'

    // image related. 
    const imgMeme = document.createElement('img');
    imgMeme.setAttribute('width','100%');


    // img
    if(imgLink!==''){
        imgMeme.setAttribute('src',imgLink.value);
        memeLocation.appendChild(newDiv);
        newDiv.appendChild(imgMeme);
    }

// top and bottom text
    if (topText.value!=='' || bottomText.value!==''){
        //top text
        topCap.classList= 'topCaption'
        tText.innerText = topText.value;
        tText.classList = 'topText';
        newDiv.appendChild(topCap);
        topCap.appendChild(tText);

    //bottom text
        bText.innerText = bottomText.value;
        bText.classList = 'bottomText';
        newDiv.appendChild(bottomCap);
        bottomCap.appendChild(bText);
    }   

    newDiv.appendChild(delDiv);


    topText.value = '';
    bottomText.value = '';
    imgLink.value = '';

  
} 

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(imgLink.value!=='' && (topText.value!=='' || bottomText.value!=='')){
    createMeme();
    }

    topText.value = '';
    bottomText.value = '';
    imgLink.value = '';

});

memeLocation.addEventListener('click', function(e){
    console.log(`you just clicked: ${e.target}`);
   
        e.target.parentElement.remove();
  
})