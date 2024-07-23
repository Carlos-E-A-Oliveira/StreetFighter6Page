document.addEventListener('DOMContentLoaded', function() {
     // ======= Carrocel de Div
     var looping = 1;
     var direction = "D";
     var point1 = document.getElementById('mark1');
     var point2 = document.getElementById('mark2');
     var point3 = document.getElementById('mark3');
     var point4 = document.getElementById('mark4');
     var point5 = document.getElementById('mark5');
     
     document.querySelector('.roll_left').addEventListener('click', move_boxes_left);
     document.querySelector('.roll_right').addEventListener('click', move_boxes_right);
     document.querySelector('.mark1').addEventListener('click', set_box1); 
     document.querySelector('.mark2').addEventListener('click', set_box2); 
     document.querySelector('.mark3').addEventListener('click', set_box3); 
     document.querySelector('.mark4').addEventListener('click', set_box4); 
     document.querySelector('.mark5').addEventListener('click', set_box5); 
     document.querySelector('.rol1').addEventListener('click', AtivarVideo);
     document.querySelector('.videomodal').addEventListener('click', DesativarVideo);

     var carrocel = document.getElementById('carrocel');
     var box1 = document.getElementById('rol1');
     var box2 = document.getElementById('rol2');
     var box3 = document.getElementById('rol3');
     var box4 = document.getElementById('rol4');
     var box5 = document.getElementById('rol5');
     var num1 = document.getElementById('info');
     var video = document.getElementById('videomodal');
     var Btn_video = document.getElementById('Btn_video');


     


    function move_boxes_left() {
        
        if(looping >= 5)
        {   
            looping = 0;
        }
        looping +=1;
        direction = "E";
        
        checkPosition();

     }
 
     function move_boxes_right() {
        
        if(looping <= 1)
            {
                looping = 6;
            }
        looping -=1;
        direction = "D";
       
        checkPosition();
     }
     
     function set_box1()
     {
        looping = 1;
        direction = "N";
        checkPosition();
        resetTransiction();
     }
     function set_box2()
     {
        looping = 2;
        direction = "N";
        checkPosition();
        resetTransiction();
     }
     function set_box3()
     {
        looping = 3;
        direction = "N";
        checkPosition();
        resetTransiction();
     }
     function set_box4()
     {
        looping = 4;
        direction = "N";
        checkPosition();
        resetTransiction();
     }
     function set_box5()
     {
        looping = 5;
        direction = "N";
        checkPosition();
        resetTransiction();
     }

     if(looping ==1)
     {
        
     }
     
     function checkPosition() {

        point1.style.backgroundColor = "rgb(64, 54, 77)";
        point2.style.backgroundColor = "rgb(64, 54, 77)";
        point3.style.backgroundColor = "rgb(64, 54, 77)";
        point4.style.backgroundColor = "rgb(64, 54, 77)";
        point5.style.backgroundColor = "rgb(64, 54, 77)";


        /* num1.textContent = direction; */

        if(direction == "N")
            {
                box1.style.transition = "none";
                box2.style.transition = "none";
                box3.style.transition = "none";
                box4.style.transition = "none";
                box5.style.transition = "none";
            }
        
        if(looping == 1)
        {
            if(direction == "D")
            {
                box5.style.transition = "none";
            }

            if(direction == "E")
            {
                box5.style.transition = "0.2s";
            }

            if(direction !="N"){
                box2.style.transition = "0.2s";
                box3.style.transition = "0.2s";
                box4.style.transition = "0.2s";

            }
            
            box1.style.left = "-500px";
            box2.style.left = "-500px";
            box3.style.left = "-500px";
            box4.style.left = "-500px";
            box5.style.left = "-500px";
            
            point1.style.backgroundColor = "rgb(255,255,255)";
            
            

        }
        if(looping == 2)
        {
            if(direction == "D")
                {
                    box4.style.transition = "none";
                }
            if(direction == "E")
                {
                    box4.style.transition = "0.2s";
                }       
            if(direction !="N"){
                box1.style.transition = "0.2s";
                box2.style.transition = "0.2s";
                box3.style.transition = "0.2s";
                box5.style.transition = "0.2s";
            }
            
            box1.style.left = "-40px";
            box2.style.left = "-40px";
            box3.style.left = "-40px";
            box4.style.left = "-40px";
            box5.style.left = "-2500px";
           
            point2.style.backgroundColor = "rgb(255,255,255)";
            
    
        }
        if(looping == 3)
        {
            if(direction == "D")
            {
                box3.style.transition = "none";
                box4.style.transition = "0.2s";
            }
            if(direction == "E")
            {
                box3.style.transition = "0.2s";
                box4.style.transition = "none";
            }
            if(direction !="N"){
                box1.style.transition = "0.2s";
                box2.style.transition = "0.2s";
                box5.style.transition = "0.2s";
            }
            
            box1.style.left = "440px";
            box2.style.left = "440px";
            box3.style.left = "440px";
            box4.style.left = "-1860px";
            box5.style.left = "-1860px";
           
            point3.style.backgroundColor = "rgb(255,255,255)";
                
        
        }
        if(looping == 4)
        {
            if(direction =="D")
            {
                box3.style.transition = "0.2s";
                box2.style.transition = "none";
            }
            if(direction == "E")
            {
                box3.style.transition = "none";
                box2.style.transition = "0.2s";
            }
            if(direction !="N"){
                box1.style.transition = "0.2s";
                box4.style.transition = "0.2s";
                box5.style.transition = "0.2s";
            }
            
            box1.style.left = "900px";
            box2.style.left = "900px";
            box3.style.left = "-1400px";
            box4.style.left = "-1400px";
            box5.style.left = "-1400px";
            
            //carrocel.style.left = "-05%";        
            point4.style.backgroundColor = "rgb(255,255,255)";
                    
            
        }
        if(looping == 5)
        {
            
            if(direction !="N"){
                box1.style.transition = "0.2s";
                box2.style.transition = "0.2s";
                box3.style.transition = "0.2s";
                box4.style.transition = "0.2s";
                box5.style.transition = "0.2s";
            }
            
            box1.style.left = "1350px";
            box2.style.left = "-960px";
            box3.style.left = "-960px";
            box4.style.left = "-960px";
            box5.style.left = "-960px";
            
            //carrocel.style.left = "40%";
            point5.style.backgroundColor = "rgb(255,255,255)";
                        
                
        }
    } 
     function resetTransiction(){
        
        box1.style.opacity = "0";
        box2.style.opacity = "0";
        box3.style.opacity = "0";
        box4.style.opacity = "0";
        box5.style.opacity = "0";
        setTimeout(()=>{
            box1.style.transition = "0.2s";
            box2.style.transition = "0.2s";
            box3.style.transition = "0.2s";
            box4.style.transition = "0.2s";
            box5.style.transition = "0.2s";
            box1.style.opacity = "1";
            box2.style.opacity = "1";
            box3.style.opacity = "1";
            box4.style.opacity = "1";
            box5.style.opacity = "1";
        },50)
        
        
    }
     checkPosition();

     function AtivarVideo()
    {
        video.style.display = "flex";
    }
     
     function DesativarVideo(){
        var video1 = video.querySelector('video');
        video1.pause();
        video1.currentTime = 0;
        video.style.display = "none";
     }
 });

