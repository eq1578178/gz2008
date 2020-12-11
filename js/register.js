/* 功能分析
1、点击 ‘登录’（class名为load的元素）时，对change元素class名进行判断，如果有class名‘lb’就去掉，如果没有就添加
2、当以上点击事件发生时，对form元素进行判断，有class名none的就去掉，没有就添加
3、对id名为phone的元素的内容判断，如果输入的内容满足手机的正则条件就添加class名OK，显示打勾的图，不满足就显示打x的图，且显示错误提示信息
4、对class名为yzm的元素进行判断，验证码输入框的内容匹配右边的数字就添加显示打勾图，反之就显示打x的图
   注意：只能让一张图显示的同时另一张要隐藏，否则第二张会发生覆盖第一张图，无法正确实现效果
5、点击class名为btn的元素时，判断，如果#phone存在ok的class名，且zc存在class名为ok,则进行跳转，否则就显示.errorCode
6、

*/
//获取上面点击转换为登录界面的元素
let denglu = document.querySelector('.load');
//获取change元素
let change = document.querySelectorAll('.change');
//获取表单元素
let form = document.querySelectorAll('.mainlist-bottom');
//获取手机号输入错误提示信息元素
let errorcode = document.querySelector('.errorCode');
//获取手机号输入框元素
let phone = document.querySelectorAll('#phone');
//获取手机号输入框内打勾的图片元素
let ok = document.querySelector('.ok');
//获取手机输入框内打x的图片元素
let error = document.querySelector('.error');

//获取验证码输入框的元素
let yzm = document.querySelector('.yzm');
//获取验证码打勾的图片元素
let t = document.querySelector('.t');
//获取验证码打x的图片元素
let f = document.querySelector('.f');
//获取验证码元素
let yzt = document.querySelector('.yzt');
//获取换一个按钮元素
let ht = document.querySelector('.ht')
//获取下一步按钮的元素
let btn = document.querySelectorAll('.btn');
//获取box元素
let box = document.querySelectorAll('.box');


denglu.onclick = function () {
    //change是一个元素集合是伪数组不能直接循环遍历出每个元素
    //需要先转化为真数组再用数组的方法
    change = Array.from(change);
    //循环数组，给元素转换class名
    change.forEach(function (ele) {
        ele.classList.toggle('lb');
    })
    //同理，循环给form转换class名
    form = Array.from(form);
    form.forEach(function (ele) {
        ele.classList.toggle('none');
    })
}
//声明一个手机号的正则
let str = /^1(3|4|5|6|7|8|9)\d{9}$/;
//给手机输入框元素集合转为数组
let res = Array.from(phone);
//循环给每个输入框绑定oninput事件
res.forEach(function (ele) {
    ele.oninput = function () {
        //对输入框的内容进行匹配
        if(str.test(this.value)){
            //如果满足正则条件就显示打勾的图片
          ok.style.display = 'block';
          error.style.display = 'none';
          errorcode.style.display = 'none';
        }
        //不满足就显示打x的图片
        else  {
            error.style.display = 'block';
            ok.style.display = 'none';
            errorcode.style.display = 'block';
        }
    }
})

//给btn绑定点击事件
ht.onclick = function(){
    let num = parseInt(Math.random()*9000 +1000);
    yzt.innerHTML= num;
}

//对yzm绑定oninput事件
yzm.oninput = function () {
   let reg = yzm.value;
    if(reg == yzt.innerHTML){
        t.style.display = 'block';
        f.style.display = 'none';       
    }
    else{
        f.style.display = 'block';
        t.style.display = 'none';
    }
}

btn.onclick = function(){
   if(reg == yzt.innerHTML &&)
}