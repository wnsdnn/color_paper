let data = ["0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 1 1 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
"1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
"0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
"0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 1 1 1 0 1 1 1 1 1 0 1 1 1 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1",
"0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 1 1 1 1 1 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 1 1 1 0 1 1 0 0 0 0 1 1 1 0 1 1 0 0 0 0 1 1 1 0 0 0 0 0 1",
], 
colorpaper = [5,5,5,5,5], // // 1x1 2x2 3x3 4x4 5x5 순서로 색종이 개수
color = ['red','orange','yellow','yellowgreen','skyblue']; // 1x1 2x2 3x3 4x4 5x5 순서로 색종이 색깔
// 위의 코드는 고치지 않는다
 



const data1 = data[0];   // data에 1번째 데이터
const data2 = data[1];   // data에 2번째 데이터
const data3 = data[2];   // data에 3번째 데이터
const data4 = data[3];   // data에 4번째 데이터
const data5 = data[4];   // data에 5번째 데이터


const paper = document.querySelectorAll(".paper .paper_box");

// 채워져 있는 칸의 번호가 있는 배열
let dataIdxList = [];
let paperList = [];

// paperList = [
//     {
//         id: 10,
//         width_len: 0,
//         height_len: 0,
//         size: 0
//     },
// ]


const setData = (arr) => {
    arr.forEach((ele, idx) => {
        widthCount = 0
        heightCount = 0
        widthVel = 0
        heightVel = 0
        for(let i = 0; i < 5; i++){
            if(arr.includes(ele + i)){
                if(widthVel === i){
                    widthVel = i + 1
                    widthCount += 1
                }
            }
            if(arr.includes(ele + i*10)){
                if(heightVel === i){
                    heightVel = i + 1
                    heightCount += 1
                }
            }
        }
        size = widthCount > heightCount ? heightCount : widthCount
        paperList.push({id: ele, width_len: widthCount, height_len: heightCount, size})
    })
}


const dataFilter = (string) => {
    const str = string.replace(/\s*/g, "");
    const arr = str.split("");
    

    arr.filter((ele, idx) => { 
        ele === "1" ? dataIdxList.push(idx+1) : false 
    });

    setData(arr)
};



const fillBlock = () => {
    // 배열 size 내림차순으로 재정의
    paperList = paperList.sort((a, b) => {
        return b.size - a.size;
    })

    delNumList = []
    console.log(paperList);
    console.log(dataIdxList);

    for(const ele of paperList){
        console.log(ele );
        let bool = false
        for(const data of delNumList){
            if(data === ele.id){
                bool = true
                // console.log(data);
            }
        }
        if(bool){continue}
        count = 0
        numList = []
        size = ele.size
        for(let i = 0; i < size; i ++){
            for(let j = 0; j < size; j++){
                num = ele.id + i*10 + j
                // console.log(num);
                numList.push(num)
                if(dataIdxList.includes(num)){count += 1}
            }
        }
        if(count === numList.length){
            thisColor = color[size - 1]
            delNumList = [...delNumList, ...numList]
            for(let i = 0; i < numList.length; i++){
                for(let j = 0; j < dataIdxList.length; j++){
                    if(numList[i] == dataIdxList[j]){
                        dataIdxList.splice(j, 1)
                    }
                }
                paper[numList[i] - 1].style.background = `${thisColor}`;
            }
        }
    }

}



dataFilter( data1 );
// dataFilter( data2 );
// dataFilter( data3 );
// dataFilter( data4 );
// dataFilter( data5 );

fillBlock()

