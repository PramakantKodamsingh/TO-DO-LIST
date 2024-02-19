let p=document.getElementsByTagName("p")
let btn=document.getElementById("btn")
let val=document.getElementById("inp")
let del=document.getElementsByClassName("del")
let arr=Array.from(del)

var i=0
function get(){
	p[i].innerHTML=val.value
	val.value=""
	del[i].style.display="block"
	i++
}
	arr.forEach(d=>{
		d.addEventListener('click',function(e){
			d.previousElementSibling.innerHTML=""
			d.style.display="none"
	})

});
btn.addEventListener('click',get)
