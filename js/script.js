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
const useCount = document.querySelector(".text span");
let coloredPaperCount = 0

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


// json형식의 배열을 만들어주는 함수
const setData = (arr, ele) => {
    // 색종이가 가로, 세로 연속되어 붙어있는지 판단할 count 변수 
    let widthCount = 0;
    let heightCount = 0;
    // 가로, 세로의 값을 담을 변수들
    let widthVel = 0;
    let heightVel = 0;

    for(let i = 0; i < 5; i++){
        if(arr.includes(ele + i)){
            if(widthVel === i){
                widthVel = i + 1;
                widthCount += 1;
            }
        }
        if(arr.includes(ele + i*10)){
            if(heightVel === i){
                heightVel = i + 1;
                heightCount += 1;
            }
        }
    }
    size = widthCount > heightCount ? heightCount : widthCount;
    return {id: ele, width_len: widthCount, height_len: heightCount, size}
}

// 데이터를 걸려내는 함수
const dataFilter = (string) => {
    const str = string.replace(/\s*/g, "");
    const arr = str.split("");

    // 해당 배열의 값이 1이면 그 해당배열 인덱스 + 1의 값을 배열에 담기
    arr.filter((ele, idx) => { 
        ele === "1" ? dataIdxList.push(idx+1) : false ;
        // if(ele === "1"){
        //     paper[idx].style.background = "#000"
        // }
    });

    // 배열을 json형식의 배열로 만들기
    dataIdxList.forEach((ele, idx) => {
        paperList.push(setData(dataIdxList, ele)) 
    })
};


// 색을 칠해주는 함수
const fillBlock = () => {
    // 배열 size 내림차순으로 재정의
    paperList = paperList.sort((a, b) => {
        return b.size - a.size;
    })

    // paperList에 0번째 값이 없을때까지 while문 반복
    while(paperList[0]){
        count = 0;                  // 배열에 해당 번호가 있으면 카운트 +1
        numList = [];               // 색종이의 위치를 담을 배열
        size = paperList[0].size;   // 0번째에 들어올 색종이의 크기
        paperIdxList = []           // 색종이를 지울때 사용할 색종이들의 id값이 담긴 배열

        // paperIdxList에 색종이들의 id 담기
        for(let i = 0; i < paperList.length; i++){
            paperIdxList.push(paperList[i].id)
        }

        // 해당 배열에 색종이가 있으면 count +1
        for(let i = 0; i < size; i++){
            for(let j = 0; j < size; j++){
                num = paperList[0].id + i*10 + j;
                numList.push(num);
                if(paperIdxList.includes(num)){ count+=1 }
            }
        }
        
        // 색종이가 있을 위치에 색종이가 다 채워져 있으면 실행
        if(count == numList.length){
            coloredPaperCount += 1
            colorpaper[size-1] = colorpaper[size-1] - 1
            // 색종이가 모자랄때에 설명은 없어서 아직 안만듬

            thisColor = color[size - 1];
            for(let i = 0; i < numList.length; i++){
                for(let j = 0; j < paperList.length; j ++){
                    if(numList[i] === paperList[j].id){
                        paperList.splice(j, 1)
                        paperIdxList.splice(j, 1)
                    }
                }
                paper[numList[i] - 1].style.background = `${thisColor}`;
            }

            // 값 초기화
            paperList = []
            // 배열 재정의
            paperIdxList.forEach((ele, idx) => {
                paperList.push(setData(paperIdxList, ele)) 
            })
        }
    }

    useCount.innerHTML = coloredPaperCount
    // console.log(colorpaper);

}



// dataFilter( data1 );
// dataFilter( data2 );
// dataFilter( data3 );
dataFilter( data4 );
// dataFilter( data5 );

fillBlock()

