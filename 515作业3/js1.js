window.onload = function () {
    var oBtn1 = document.getElementById("btn_1");
    var oDiv1 = document.getElementById("div_hide1");

    oBtn1.onclick = function () {
        oDiv2.style.display = 'none'
        oDiv3.style.display = 'none'
        oDiv4.style.display = 'none'
        
        if (oDiv1.style.display == 'none') {
            oDiv1.style.display = 'block'
        } else {
            oDiv1.style.display = 'none'
        }
    }

    var oBtn2 = document.getElementById("btn_2");
    var oDiv2 = document.getElementById("div_hide2");
    oBtn2.onclick = function () {
        oDiv1.style.display = 'none'
        oDiv3.style.display = 'none'
        oDiv4.style.display = 'none'
        if (oDiv2.style.display == 'none') {
            oDiv2.style.display = 'block'
        } else {
            oDiv2.style.display = 'none'
        }
    }

    var oBtn3 = document.getElementById("btn_3");
    var oDiv3 = document.getElementById("div_hide3");
    oBtn3.onclick = function () {
        oDiv2.style.display = 'none'
        oDiv1.style.display = 'none'
        oDiv4.style.display = 'none'
        if (oDiv3.style.display == 'none') {
            oDiv3.style.display = 'block'
        } else {
            oDiv3.style.display = 'none'
        }
    }



    var oBtn4 = document.getElementById("btn_4");
    var oDiv4 = document.getElementById("div_hide4");
    oBtn4.onclick = function () {
        oDiv2.style.display = 'none'
        oDiv3.style.display = 'none'
        oDiv1.style.display = 'none'
        if (oDiv4.style.display == 'none') {
            oDiv4.style.display = 'block'
        } else {
            oDiv4.style.display = 'none'
        }

    }

    var oDiv0 = document.getElementById('div0');
    var obtnSousuo = document.getElementById('b');
    obtnSousuo.onclick = function () {
        oDiv0.style.display = 'block';

    }
    var obtnQuxiao = document.getElementById('c');
    obtnQuxiao.onclick = function () {
        oDiv0.style.display = 'none';
    }
    var oLi1 = document.getElementById('li_E1');
    var oLi2 = document.getElementById('li_E2');
    var oLi3 = document.getElementById('li_E3');
    var oLi4 = document.getElementById('li_E4');
    var oLi5 = document.getElementById('li_E5');
    var oLi6 = document.getElementById('li_E6');
    var oDivshow1 = document.getElementById('show1');
    var oDivshow2 = document.getElementById('show2');
    var oDivshow3 = document.getElementById('show3');
    var oDivshow4 = document.getElementById('show4');
    var oDivshow5 = document.getElementById('show5');
    var oDivshow6 = document.getElementById('show6');


    oLi1.onclick = function () {
        oDivshow1.style.display = 'block';
        oDivshow2.style.display = 'none';
        oDivshow3.style.display = 'none';
        oDivshow4.style.display = 'none';
        oDivshow5.style.display = 'none';
        oDivshow6.style.display = 'none';
    }
    oLi2.onclick = function () {
            oDivshow2.style.display = 'block';
            oDivshow1.style.display = 'none';
            oDivshow3.style.display = 'none';
            oDivshow4.style.display = 'none';
            oDivshow5.style.display = 'none';
            oDivshow6.style.display = 'none';
        }
        oLi3.onclick = function () {
            oDivshow3.style.display = 'block';
            oDivshow1.style.display = 'none';
            oDivshow2.style.display = 'none';
            oDivshow4.style.display = 'none';
            oDivshow5.style.display = 'none';
            oDivshow6.style.display = 'none';
        }
        oLi4.onclick = function () {
            oDivshow4.style.display = 'block';
            oDivshow1.style.display = 'none';
            oDivshow3.style.display = 'none';
            oDivshow2.style.display = 'none';
            oDivshow5.style.display = 'none';
            oDivshow6.style.display = 'none';
        }
        oLi5.onclick = function () {
            oDivshow5.style.display = 'block';
            oDivshow1.style.display = 'none';
            oDivshow3.style.display = 'none';
            oDivshow4.style.display = 'none';
            oDivshow2.style.display = 'none';
            oDivshow6.style.display = 'none';
        }
        oLi6.onclick = function () {
            oDivshow6.style.display = 'block';
            oDivshow1.style.display = 'none';
            oDivshow3.style.display = 'none';
            oDivshow4.style.display = 'none';
            oDivshow5.style.display = 'none';
            oDivshow2.style.display = 'none';
        }
       
        var banner_item = document.getElementById("banner").children;
        var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        var x=0;
        next.onclick = function(){
            x++;
            if(x>banner_item.length-1){
                    x=o;
                }
                for(var i=0;i<banner_item.length;i++){
                    banner_item[i].style.display = "none";
                }
                for(var j=x+3;j<x+7;j++){
                    banner_item[j].style.display = "block";
                }
               

        }
        var y=x;
        prev.onclick = function(){
            y--;
            if(y<0){
                y = banner_item.length-1
            };
            for(var i=0;i<banner_item.length;i++){
                banner_item[i].style.display = "none";
            }
            for(var j=y-3;j<y+7;j++){
                banner_item[j].style.display = "block";
            }
        }
        
        var banner_item1 = document.getElementById("banner1").children;
        var prevOne = document.getElementById("prev1");
        var nextOne = document.getElementById("next1");
        var x=0;
        nextOne.onclick = function(){
            x++;
            if(x>banner_item1.length-1){
                    x=o;
                }
                for(var i=0;i<banner_item1.length;i++){
                    banner_item1[i].style.display = "none";
                }
                for(var j=x+3;j<x+7;j++){
                    banner_item1[j].style.display = "block";
                }
               

        }
        var y=x;
        prevOne.onclick = function(){
            y--;
            if(y<0){
                y = banner_item1.length-1
            };
            for(var i=0;i<banner_item1.length;i++){
                banner_item1[i].style.display = "none";
            }
            for(var j=y-3;j<y+3;j++){
                banner_item1[j].style.display = "block";
            }
        }
        var banner_item2 = document.getElementById("banner2").children;
        var prev2 = document.getElementById("prev2");
        var next2 = document.getElementById("next2");
        var x=0;
        next2.onclick = function(){
            x++;
            if(x>banner_item2.length-1){
                    x=o;
                }
                for(var i=0;i<banner_item2.length;i++){
                    banner_item2[i].style.display = "none";
                }
                
                for(var j=x+3;j<x+8;j++){
                    banner_item2[j].style.display = "block";
                }
                
               

        }
        prev2.onclick = function(){
            x--;
            if(x<0){
                x = banner_item2.length-1
            };
            for(var i=0;i<banner_item2.length;i++){
                banner_item2[i].style.display = "none";
            }
           
            for(var j=x-3;j<x+8;j++){
                banner_item2[j].style.display = "block";
            }
            
        }
        var sl1 = document.getElementById('buttonOne');
        var dls1 = document.getElementById('dlOne');

        sl1.onclick = function () {
            dls2.style.display = 'none';
            dls3.style.display = 'none';
            dls4.style.display = 'none';
            if (dls1.style.display == 'block')
                dls1.style.display = 'none'
            else
                dls1.style.display = 'block'
        }
        var sl2 = document.getElementById('buttonTwo');
        var dls2 = document.getElementById('dlTwo');

        sl2.onclick = function () {
            dls1.style.display = 'none';
            dls3.style.display = 'none';
            dls4.style.display = 'none';
            if (dls2.style.display == 'block')
                dls2.style.display = 'none';
            else
                dls2.style.display = 'block';
        }
        
        var sl3 = document.getElementById('buttonThree');
        var dls3 = document.getElementById('dlThree');

        sl3.onclick = function () {
            dls2.style.display = 'none';
            dls1.style.display = 'none';
            dls4.style.display = 'none';
            if (dls3.style.display == 'block')
                dls3.style.display = 'none';
            else
                dls3.style.display = 'block';
        }
        var sl4 = document.getElementById('buttonFour');
        var dls4 = document.getElementById('dlFour');

        sl4.onclick = function () {
            dls2.style.display = 'none';
            dls3.style.display = 'none';
            dls1.style.display = 'none';
            if (dls4.style.display == 'block')
                dls4.style.display = 'none';
            else
                dls4.style.display = 'block';
        }

        var sl5 = document.getElementById('buttonFive');
        var dls5 = document.getElementById('dlFive');

        sl5.onclick = function () {
            dls6.style.display = 'none';
            dls7.style.display = 'none';
            
            if (dls5.style.display == 'block')
                dls5.style.display = 'none';
            else
                dls5.style.display = 'block';
        }
        var sl6 = document.getElementById('buttonSix');
        var dls6 = document.getElementById('dlSix');

        sl6.onclick = function () {
            dls5.style.display = 'none';
            dls7.style.display = 'none';
            
            if (dls6.style.display == 'block')
                dls6.style.display = 'none';
            else
                dls6.style.display = 'block';
        }
        var sl7 = document.getElementById('buttonSeven');
        var dls7 = document.getElementById('dlSeven');

        sl7.onclick = function () {
            dls6.style.display = 'none';
            dls5.style.display = 'none';
            
            if (dls7.style.display == 'block')
                dls7.style.display = 'none';
            else
                dls7.style.display = 'block';
        }


        var sl8 = document.getElementById('buttonEight');
        var dls8 = document.getElementById('dlEight');

        sl8.onclick = function () {
            dls9.style.display = 'none';
            dls10.style.display = 'none';
            dls11.style.display = 'none';
            
            if (dls8.style.display == 'block')
                dls8.style.display = 'none';
            else
                dls8.style.display = 'block';
        }
        var sl9 = document.getElementById('buttonNine');
        var dls9 = document.getElementById('dlNine');

        sl9.onclick = function () {
            dls8.style.display = 'none';
            dls10.style.display = 'none';
            dls11.style.display = 'none';
            
            if (dls9.style.display == 'block')
                dls9.style.display = 'none';
            else
                dls9.style.display = 'block';
        }
        var sl10 = document.getElementById('buttonTen');
        var dls10 = document.getElementById('dlTen');

        sl10.onclick = function () {
            dls11.style.display = 'none';
            dls9.style.display = 'none';
            dls8.style.display = 'none';
            
            if (dls10.style.display == 'block')
                dls10.style.display = 'none';
            else
                dls10.style.display = 'block';
        }
        var sl11 = document.getElementById('buttonEleven');
        var dls11 = document.getElementById('dlEleven');

        sl11.onclick = function () {
            dls8.style.display = 'none';
            dls9.style.display = 'none';
            dls10.style.display = 'none';
            
            if (dls11.style.display == 'block')
                dls11.style.display = 'none';
            else
                dls11.style.display = 'block';
        }
        var sl12 = document.getElementById('buttonTwelve');
        var dls12 = document.getElementById('dlTwelve');

        sl12.onclick = function () {
            dls16.style.display = 'none';
            dls15.style.display = 'none';
            dls14.style.display = 'none';
            dls13.style.display = 'none';
            dls17.style.display = 'none';
            
            if (dls12.style.display == 'block')
                dls12.style.display = 'none';
            else
                dls12.style.display = 'block';
        }
        var sl13 = document.getElementById('buttonThirteen');
        var dls13 = document.getElementById('dlThirteen');

        sl13.onclick = function () {
            dls16.style.display = 'none';
            dls15.style.display = 'none';
            dls14.style.display = 'none';
            dls17.style.display = 'none';
            dls12.style.display = 'none';
            
            if (dls13.style.display == 'block')
                dls13.style.display = 'none';
            else
                dls13.style.display = 'block';
        }
        var sl14 = document.getElementById('buttonForteen');
        var dls14 = document.getElementById('dlForteen');

        sl14.onclick = function () {
            dls16.style.display = 'none';
            dls15.style.display = 'none';
            dls17.style.display = 'none';
            dls13.style.display = 'none';
            dls12.style.display = 'none';
            
            if (dls14.style.display == 'block')
                dls14.style.display = 'none';
            else
                dls14.style.display = 'block';
        }
        var sl15 = document.getElementById('buttonFifteen');
        var dls15 = document.getElementById('dlFifteen');

        sl15.onclick = function () {
            dls16.style.display = 'none';
            dls17.style.display = 'none';
            dls14.style.display = 'none';
            dls13.style.display = 'none';
            dls12.style.display = 'none';
            
            if (dls15.style.display == 'block')
                dls15.style.display = 'none';
            else
                dls15.style.display = 'block';
        }
        var sl16 = document.getElementById('buttonSixteen');
        var dls16 = document.getElementById('dlSixteen');

        sl16.onclick = function () {
            dls17.style.display = 'none';
            dls15.style.display = 'none';
            dls14.style.display = 'none';
            dls13.style.display = 'none';
            dls12.style.display = 'none';
            
            if (dls16.style.display == 'block')
                dls16.style.display = 'none';
            else
                dls16.style.display = 'block';
        }
        var sl17 = document.getElementById('buttonSeventeen');
        var dls17 = document.getElementById('dlSeventeen');

        sl17.onclick = function () {
            dls16.style.display = 'none';
            dls15.style.display = 'none';
            dls14.style.display = 'none';
            dls13.style.display = 'none';
            dls12.style.display = 'none';
            
            if (dls17.style.display == 'block')
                dls17.style.display = 'none';
            else
                dls17.style.display = 'block';
        }
    }

   
       
