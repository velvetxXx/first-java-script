const generateBtn = document.querySelector('#generateBtn')
const gridContainer = document.querySelector('#gridContainer')

generateBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1 // 1부터 1000사이 
    const imgUrl = `https://picsum.photos/500?random=${randomNumber}` // 랜덤한
    
    const img = document.createElement('img')
    //img.src = imgUrl
    img.src = `https://picsum.photos/500?random=${Math.floor(Math.random() * 1000) + 1}`
    console.log(Math.floor(Math.random() * 1000) + 1)

        gridContainer.appendChild(img)

        if (gridContainer.children.length >= 30) {
            const confirmed = confirm("최대치인 30개의 이미지가 모두 생성하였습니다.모든 사진을 지우시겠습니까?");
        if (confirmed) {
        gridContainer. innerHTML = ""; // 이미지 모두 삭제
        }
    }
})