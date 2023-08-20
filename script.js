const startBtn = document.querySelector("button")

const hourOutput = document.querySelector(".hour span")
const minuteOutput = document.querySelector(".minute span")
const secondOutput = document.querySelector(".second span")

let seconds = 0;
let minutes = 0;
let hours = 0;

const Start = () => {
    startBtn.addEventListener("click", (e) => {

        e.preventDefault();
        startBtn.style.visibility = "hidden";
        let interval = setInterval(function() {
            console.log(`${hours}h ${minutes}m ${seconds}s`);
          let sec= String( seconds++).padStart(2,"0");
        secondOutput.innerText=sec
            if (seconds >= 60) {
                seconds = 0;
               
                let min= String( minutes++).padStart(2,"0");
                minuteOutput.innerText=min
        
                if (minutes >= 60) {
                    minutes = 0;
                    let hour= String( hours++).padStart(2,"0");
                    hourOutput.innerText=hour
                    
                 
                }
            }
        }, 1000);

        


    })
}

Start()
const end = () => {
    startBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const form = document.querySelector("form")
        const stop = document.createElement("button")
        stop.innerText = "Stop"
       
        form.append(stop)


    })
}
end()