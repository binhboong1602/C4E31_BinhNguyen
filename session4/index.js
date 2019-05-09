REVIEW

// 1 Why should we use functions at all ?
// 	Sử dụng functions để giúp mã nguồn dễ đọc và dễ tái sử dụng hay cũng như bảo trì 
// 2 How to define/declare a function?
// 	Các hàm được định nghĩa hoặc được khai báo, với function từ khóa.
// 3 How to call/use a function ?
// 	 function sayHello(){
// 	 	//code
// 	 	}
// 	 sayHello()	

// 4 return là trả về trước khi ta in ra kết quả 
// 5 Do we have to use return in​every​function?
// 	không
// 6 What are function arguments/parameters, why and how we use it?
// 	ARGUMENTS là giá trị truyền vào khi gọi hàm
// 	PARAMETERS là giá trị mặc định của tham số khi truyền vào

// 7 đưa file chứa hàm đó vào trong window.onload

Turtle exercise
1 function sayHello(){
	let Hello = "HELLO WORD";
	console.log(HELLO);
}
sayHello();
sayHello()
sayHello()

2 
	function tong (x,y){
  		return reuslt = x + y;
}
	tong(3,4);


3
	function draw_star(length){
        rt(20)
        for(let i=0; i<5; i++){
          fd(length);
          rt(144);    
             }
        }
        draw_star(200)
        clear()

4
	 for (let i = 0; i  < 30; i ++){
      draw_square(i * 5, 'red')
      lt(17)
      penup()
      fd(i * 2)
      pendown()
    }


 5
 	function draw_star(length){
        rt(20)
        for(let i=0; i<5; i++){
          fd(length);
          rt(144);    
             }
        }
        draw_star(200)
        clear()  

 Serious exercise
 	6
	 	function remove_dollar_sign(s) {
	    let remove = s.replace(/[$]/gi,"");
	    console.log(remove);
	  
	}
		remove_dollar_sign("1000$")

	7
		function remove_dollar_sign(s) {
		    let remove = s.replace(/[$]/gi,'');
		    console.log(remove);
       		return remove;
		 
		}
		string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
		if (string_with_no_dollars == "80% percent of life is to show up"){
		    console.log("Your function is correct")}
		else{
		    console.log("Oops, there's a bug")}
 8	
 		function get_even_list(l) {
	    let danhsach = [];
	    for (let i = 0; i < l.length; i++){
	        if (l[i] % 2 == 0){
	            danhsach.push(l[i]);
	        }
	    }
	    return danhsach;
	    }
	get_even_list([1, 4, 5, -1, 10]);
 9

 	function get_even_list(l) {
	    let danhsach = [];
	    for (let i = 0; i < l.length; i++){
	        if (l[i] % 2 == 0){
	            danhsach.push(l[i]);
	        }
	    }
	    return danhsach;
		    }
	even_list = get_even_list([1, 2, 5, 9, -10, 6]);
	console.log(even_list);
	  if (even_list = [2, -10, 6]){
	    console.log("Your function is correct")}
	  else{
	    console.log("Ooops, bugs detected")}