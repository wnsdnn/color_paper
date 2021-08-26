let data = ["0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
"1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
"0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 1 1 1 0 1 1 1 1 1 0 1 1 1 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1",
"0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 1 1 0 0 0 0 1 1 1 0 1 1 0 0 0 0 1 1 1 0 0 0 0 0 1",
], 
colorpaper = [5,5,5,5,5], // // 1x1 2x2 3x3 4x4 5x5 순서로 색종이 개수
color = ['red','orange','yellow','yellowgreen','skyblue']; // 1x1 2x2 3x3 4x4 5x5 순서로 색종이 색깔
// 위의 코드는 고치지 않는다
 



const data1 = data[0];
const data2 = data[1];
const data3 = data[2];
const data4 = data[3];
const data5 = data[4];


const paper = document.querySelectorAll(".paper .paper_box");


const dataFilter = (string) => {
    const str = string.replace(/\s*/g, "");
    const arr = str.split("");

    arr.map((ele, idx) => {
        if(ele === "1"){
            paper[idx].style.background = "#000";
        }
    })
}


// dataFilter( data1 );
// dataFilter( data2 );
// dataFilter( data3 );
// dataFilter( data4 );
dataFilter( data5 );


// const box = data.map((ele) => ele);
// console.log(box[0]);
// // console.log(s)

// const paper = document.querySelector(".paper");
// for(let i=0; i<paper.length; i++){

// }


// console.log(a)
// [...a].forEach(element => {
    
// });



// console.log(paper.children.length)