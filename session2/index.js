  	/*Answer the questions:
		1: boolean là một kiểu dữ liệu dùng để mô tả một trong hai giá trị true (đúng) hoặc false (sai)
		Ví dụ về kiểu boolean :
		10 > 9 // trả về true
		10 == 9 // trả về false
		10 < 9 // trả về false

		2 Lưu đồ thuật toán là công cụ dùng để biểu diễn thuật toán, mô tả nhập (input), 
					dữ liệu xuất (output) và luồng xữ lý thông qua các ký hiệu hình học

		3 Điều kiện lồng nhau là một điều kiện có thể lồng trong 1 điều kiện khác 

		ví dụ :
		let x = 10;
		let y = 10;

		if (x < y){
		console.log("x là con y");
		}

		else{

		if (x > y){

		console.log("x là bố y");
		}

		else{

		console.log("x là anh em song sinh y")
		}

		}

	
	Turtle exercises
		Bài1:
		 color("red")
		 for(let i=0; i<4; i++){
		 lt(30)
		 fd(100)
		 rt(60)
		 fd(100)
		 rt(120)
		 fd(100)
		 rt(60)
		 fd(100)
		 lt(30)
		 rt(90)
		 };
		Bai 2
		
			color("blue");
			rt(30);
			for(let i=0;i<17;i++){
			fd(100);
			if(i<2){
			rt(120);
			};
			else if(i<7){
			rt(72);
			}

			else if(i<11){
			 color("red");
			 rt(90);
			}
			else{
			 rt(60);
			}
			}
			clear();

		   

	Serious exercises:

	let height= prompt("Nhập vào height(cm) ?");
	let weight= prompt("Nhập vào weight(kg) ?");
	let conversion = height/100;
	let BMI= (weight)/(conversion*conversion);
		if(BMI<=16){
		    console.log("Severely Underweigh")
		}
		else if(BMI<=18.5){
		    console.log("Underweigh")
		}
		else if(BMI<=25){
		    console.log("Normal")
		}
		else if(BMI<=30){
		    console.log("Overweigh")
		}
		else{
		    console.log("Obese")
		}
		2.
		let n= prompt("Nhập n n :");
		let result=1;
		for (let i=1; i<=n; i++){
		    result=result*i;
		}
		console.log(result;
		*/