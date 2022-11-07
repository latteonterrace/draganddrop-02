
// 드래그할 대상 
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
    console.log("dragStart");
    ev.currentTarget.classList.add("dragging");
    ev.dataTransfer.clearData();
    console.log(ev.target.innerText);
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
});

// source.addEventListener("drag", (e) => { 
//     e.preventDefault();
//     // console.log("drag");
// });


// source.addEventListener("dragend", (e) => { 
//     e.preventDefault();
//     console.log("dragend");
// });


source.addEventListener("dragend", (ev) =>
    ev.target.classList.remove("dragging")
);


// // 드랍될 대상 
const target = document.querySelector("#target");

// dragover 핸들러 없으면 drop이 되지 않음
target.addEventListener("dragover", (ev) => {
    // console.log("dragOver");
    ev.preventDefault();
});


target.addEventListener("drop", (ev) => {
    console.log("Drop");
    ev.preventDefault();
    // Get the data, which is the id of the source element
    const data = ev.dataTransfer.getData("text");
    console.log(data);
    let p = document.createElement("p");
    p.innerText = data; 
    ev.target.appendChild(p);
});
