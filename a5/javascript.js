var myImages =["https://i5.walmartimages.com/seo/BGZLEU-Happy-Sounds-Cat-Plush-Toy-Happy-Meme-Plush-Happy-Stuffed-Animal-Toys-Figure-Pillow-Used-Home-Decoration-Children-s-Birthday-Gifts_62eea2e9-fbf0-432f-9008-77b5fa5f40bc.9e26f429c761d0b80ee9da229db8a046.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", "https://miro.medium.com/v2/resize:fit:1080/0*A7MUqyCLvZDcHkfM.jpg", "https://www.litter-robot.com/media/magefan_blog/2016/08/shutterstock_191770991-scared-cat-e1531924937271.jpg","https://i.pinimg.com/736x/4f/ac/07/4fac0702bbc58093bcc32fb1a077f34b.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimqHajJktCcjap0gyWZCVWsvhW42kuuTZJGbbHW7bwjfqy_TEaiNb5qUACCKCO5ZObUE&usqp=CAU"];

var captionImages =["This cat is a happy cat","This is a curious cat","This cat is shy","This cat is an embarrassed cat","This cat is laughing tehe"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
