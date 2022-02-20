const sketchpad = document.querySelector('#sketchpad');
const clearBtn = document.querySelector('#clearBtn');

let sketchSize = 800;

function drawPad (width){
    for (i = 0; i < width; i++){
        const padLine = document.createElement('div');
        padLine.style.width = `${sketchSize}px`;
        padLine.style.height = `${sketchSize/width}px`;
        sketchpad.appendChild(padLine);
        for (j = 0; j < width; j++){
            const padSquare = document.createElement('div');
            padSquare.style.display = 'inline-block';
            padSquare.style.width = `${sketchSize/width -2}px`;
            padSquare.style.height = `${sketchSize/width -2}px`;
            padSquare.style.border = '1px solid black';

            padSquare.addEventListener('mouseover', function(event){
                let redScore = Math.floor(Math.random()* 256);
                let greenScore = Math.floor(Math.random()* 256);
                let blueScore = Math.floor(Math.random()* 256);
                event.target.style.backgroundColor = `rgb(${redScore}, ${greenScore}, ${blueScore})`;
            })

            padLine.appendChild(padSquare);
        }
    }
}

drawPad(16);

function clearPad(){
    sketchpad.innerHTML='';
    let newWidth = 0;
    while (newWidth < 1 || newWidth > 100){
       newWidth = window.prompt('Select the squares per side for new grid, between 1 and 100.', 16);
    }

    drawPad(newWidth);

}

clearBtn.addEventListener('click', clearPad);