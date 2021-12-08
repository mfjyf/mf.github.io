timedCount(0);
function timedCount(num){
    if(num%2 == 0){
        
        num = num + 7;
    }else if(num%3 == 0){
        num = num + 5;
    }else{
        num++;
    }
    if(num > 100){
        abox1p.innerHTML = '100%';

       setTimeout(() => {
            document.getElementsByClassName('abox' + pageNum)[0].classList.add('active');
            var fonts = document.getElementsByClassName('font');
            for (var i = 0; i < fonts.length; i++) {
                fonts[i].classList.add('fontactive' + i);
            }
            var vs = document.getElementsByClassName('triangle');
            for (var i = 0; i < vs.length; i++) {
                vs[i].classList.add('tractive' + i);
            }
            if (!(pageNum >= pageTotal)) {
                pageNum++;
            }
            document.getElementsByClassName('abox' + pageNum)[0].classList.remove('active');
       }, 500);
    }else{
        if(num < 100){
            abox1p.innerHTML = num + '%';
            var t = setTimeout(() => {
                timedCount(num);
            }, 200);
        }
    }
}

var pageNum = 1;
var pageTotal = 4;
var startY = 0,
    endY = 0,
    moveY = 0;

var boxs = document.getElementsByClassName("box");
// alert(boxs[0].attributes['class'].nodeValue)
for (var i = 0; i < boxs.length; i++) {

    boxs[i].addEventListener('touchstart', function (e) {
        startY = e.targetTouches[0].pageY;
        console.log(startY)
    }, false)

    boxs[i].addEventListener('touchmove', function (e) {
        console.log(e.targetTouches[0].pageY)
        endY = e.targetTouches[0].pageY
    }, false)

    if(boxs[i].className.indexOf('abox2') != -1){
        boxs[i].addEventListener('touchend', function (e) {
            moveY = startY - endY;
            console.log(moveY);
            if (!(moveY == startY) && moveY > 120) {
                console.log('下一页')
                document.getElementsByClassName('abox' + pageNum)[0].classList.add('active');

                var abox3s = document.getElementsByClassName('abox3active');
                abox3s[0].style.display = 'block';
                for(var i = 0;i < abox3s.length;i++){
                    abox3s[i].classList.add('toleft' + i);
                }

                var triangleTwos = document.getElementsByClassName('triangleTwo');
                for(var i = 0;i < triangleTwos.length;i++){
                    triangleTwos[i].classList.add('tractive' + i);
                }

                if (!(pageNum >= pageTotal)) {
                    pageNum++;
                }
                document.getElementsByClassName('abox' + pageNum)[0].classList.remove('active');
            } else {
                return;
            }
            startY = 0;
            endY = 0;
            moveY = 0;
        }, false)
    }else{
        boxs[i].addEventListener('touchend', function (e) {
            moveY = startY - endY;
            console.log(moveY);
            if (!(moveY == startY)) {
                if (moveY > 120) {
                    console.log('下一页')
                    document.getElementsByClassName('abox' + pageNum)[0].classList.add('active');
                    
                    var abox4actives = document.getElementsByClassName('abox4active');
                    abox4actives[1].style.display = 'block';
                    for(var i = 0;i < abox4actives.length;i++){
                        abox4actives[i].classList.add('box4active' + i);
                    }

                    if (!(pageNum >= pageTotal)) {
                        pageNum++;
                    }
                    document.getElementsByClassName('abox' + pageNum)[0].classList.remove('active');
                }
            } else {
                return;
            }
            startY = 0;
            endY = 0;
            moveY = 0;
        }, false)
    }
}


//第四页

//点击这个按钮获取用户名和职业
var username,work,score,username2,work2;
function toNext(){
    username = document.getElementById('inputtext').value;
    work = a1p.innerHTML;
    if(username.length == 0){
        alert("请输入姓名")
    }else if(username.length == 1 || username.length > 4){
        alert("昵称字符2-4")
    }else if(work == '选择职业'){
        alert("请选择职业！");
    }else{
        var count = document.getElementById('inputpre').getAttribute('iscount');
        if(count == '0'){
            if(work == '学生'){
                b0.innerHTML = '软糖';
                b1.innerHTML = '雪糕';
                b2.innerHTML = '辣条';
            }else{
                b0.innerHTML = '素食';
                b1.innerHTML = '米粉';
                b2.innerHTML = '煎饼';
            }
    
            username2 = username;
            work2 = work;
    
            document.getElementById('inputpre').setAttribute('iscount','1');
            document.getElementsByClassName('abox4')[0].classList.add('active');
            document.getElementsByClassName('abox5')[0].classList.remove('active');
            
        }else{
            if(username != username2 || work != work2){
                jp.innerHTML = '请点击按键<br>&nbsp;&nbsp;&nbsp;开始计算';
                source.innerHTML = '';
                eq.innerHTML = '=';
                var beans = document.getElementsByClassName('bean');
                for(var i = 0;i < beans.length - 3;i++){
                    beans[i].classList.remove('abox5hoveractive');
                    beans[i].setAttribute('value',100);
                }
                for(var i = beans.length - 3;i < beans.length; i++){
                    beans[i].classList.remove('abox5hoveractive');
                    beans[i].setAttribute('value',50);
                }
                document.getElementsByClassName('special')[2].setAttribute('isno','0')
                if(work == '学生'){
                    b0.innerHTML = '软糖';
                    b1.innerHTML = '雪糕';
                    b2.innerHTML = '辣条';
                }else{
                    b0.innerHTML = '素食';
                    b1.innerHTML = '米粉';
                    b2.innerHTML = '煎饼';
                }
                document.getElementsByClassName('abox4')[0].classList.add('active');
                document.getElementsByClassName('abox5')[0].classList.remove('active');

                username2 = username;
                work2 = work;
            }else{
                if(work == '学生'){
                    b0.innerHTML = '软糖';
                    b1.innerHTML = '雪糕';
                    b2.innerHTML = '辣条';
                }else{
                    b0.innerHTML = '素食';
                    b1.innerHTML = '米粉';
                    b2.innerHTML = '煎饼';
                }
                document.getElementsByClassName('abox4')[0].classList.add('active');
                document.getElementsByClassName('abox5')[0].classList.remove('active');

                username2 = username;
                work2 = work;
            }
        }
        
    }
   
}

function topre(){
    document.getElementsByClassName('abox5')[0].classList.add('active');
    document.getElementsByClassName('abox4')[0].classList.remove('active');
}

function beanbackground(e){
    if(document.getElementsByClassName('special')[2].getAttribute('isno') == 0){

        document.getElementById('audio2').play();

        if(jp.innerHTML == '请点击按键<br>&nbsp;&nbsp;&nbsp;开始计算'){
            jp.innerHTML = '';
        }
        jp.innerHTML += e.attributes['value'].nodeValue;
        
        e.classList.add('abox5hoveractive')
        e.attributes['value'].nodeValue='';

        document.getElementById('add').classList.add('addbig');
        setTimeout(() => {
            document.getElementById('add').classList.remove('addbig');
        }, 1000);
    }
}
function beanbackgroundadd(e){
    if(document.getElementsByClassName('special')[2].getAttribute('isno') == 0){

        document.getElementById('audio2').play();

        if(jp.innerHTML == '请点击按键<br>&nbsp;&nbsp;&nbsp;开始计算'){
            jp.innerHTML = '';
        }
        if(jp.innerHTML.charAt(jp.innerHTML.length - 1).indexOf("+") == -1 && jp.innerHTML != ""){
            jp.innerHTML += e.attributes['value'].nodeValue;
        }

        //样式变化
        e.classList.remove('special')
        e.classList.add('abox5hoveractive')
        setTimeout(() => {
            e.classList.remove('abox5hoveractive')
            e.classList.add('special')
        }, 200);
    }
}

function dy(){

    document.getElementById('audio2').play();
    // var beans = document.getElementsByClassName('bean');
    if(eq.innerHTML == '='){
        
        if(eval(jp.innerHTML) == undefined){
            jp.innerHTML = '请点击按键<br>&nbsp;&nbsp;&nbsp;开始计算';
        }else if(eval(jp.innerHTML) >= 500){

            source.innerHTML = '优';
            evavalue.innerHTML = '您的饮食习惯很好，加上适当的运动，身体会更棒。希望您继续保持哟';
            eq.innerHTML = '我的健康报告';
            score = eval(jp.innerHTML);
            jp.innerHTML = jp.innerHTML + '=' + eval(jp.innerHTML);

            document.getElementsByClassName('special')[2].setAttribute('isno','1');
            
        }else if(eval(jp.innerHTML) >= 200){

            source.innerHTML = '良';
            evavalue.innerHTML = '您的饮食习惯正常，还需多吃健康食品才能有足够精力工作学习哟！';
            eq.innerHTML = '我的健康报告';
            score = eval(jp.innerHTML);
            jp.innerHTML = jp.innerHTML + '=' + eval(jp.innerHTML);

            document.getElementsByClassName('special')[2].setAttribute('isno','1');
        }else{

            source.innerHTML = '差';
            evavalue.innerHTML = '您的饮食习惯欠佳，请多吃五谷杂粮，少吃零食快餐才行哟！';
            eq.innerHTML = '我的健康报告';
            score = eval(jp.innerHTML);
            jp.innerHTML = jp.innerHTML + '=' + eval(jp.innerHTML);
        }
        
       
    }else{
        name1.innerHTML = username;
        score1.innerHTML = score;
        eva.innerHTML = source.innerHTML;
        eva2.innerHTML = source.innerHTML;
        
        document.getElementById('newdiv').style.display = 'block';
        document.getElementById('newdiv').classList.add('newdivactive')
        document.getElementById('fade').style.display = 'block';
        document.getElementById('fade').classList.add('newdivactive2')
    }
}


//出现弹出层后点击任何位置使他消失
function prepage(){
    document.getElementById('newdiv').style.display = 'none';
    document.getElementById('newdiv').classList.remove('newdivactive')
    document.getElementById('fade').style.display = 'none';
    document.getElementById('fade').classList.remove('newdivactive2')
}

function rm(e){
    document.getElementById('audio2').play();

    jp.innerHTML = '';
    source.innerHTML = '';
    eq.innerHTML = '=';
    var beans = document.getElementsByClassName('bean');
    for(var i = 0;i < beans.length - 3;i++){
        beans[i].classList.remove('abox5hoveractive');
        beans[i].setAttribute('value',100);
    }
    for(var i = beans.length - 3;i < beans.length; i++){
        beans[i].classList.remove('abox5hoveractive');
        beans[i].setAttribute('value',50);
    }

    document.getElementsByClassName('special')[2].setAttribute('isno','0')

    e.classList.remove('special')
    e.classList.add('abox5hoveractive')
    setTimeout(() => {
        e.classList.remove('abox5hoveractive')
        e.classList.add('special')
    }, 200);

}

function openmusic(){
    document.getElementById('audio').play();
    document.getElementsByClassName('music1')[0].style.display = 'none';
    document.getElementsByClassName('music')[0].style.display = 'block';
}
function closemusic(){
    document.getElementById('audio').pause();
    document.getElementsByClassName('music1')[0].style.display = 'block';
    document.getElementsByClassName('music')[0].style.display = 'none';
}

function up(){
    var a1 = document.getElementById('a1')
    var a2 = document.getElementById('a2')
    var a3 = document.getElementById('a3')
    
    if(a1.getAttribute('value') == '0'){
        a2.style.opacity = '1';
        a3.style.opacity = '1';
        a1.setAttribute('value','1')
        document.getElementById('a1img').classList.add('a1active')
    }else{
        a2.style.opacity = '0';
        a3.style.opacity = '0';
        a1.setAttribute('value','0')
        document.getElementById('a1img').classList.remove('a1active')
    }
}
function is(e){
    if(e.style.opacity != 0){
        a1p.innerHTML = a2.innerHTML
        up();
    }
   
}
function is2(e){
    if(e.style.opacity != 0){
        a1p.innerHTML = a3.innerHTML
        up();
    }
}