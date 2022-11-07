# Text 드래그앤드랍

텍스트를 드래그하려면 text/plain유형을 사용하십시오. 두 번째 데이터 매개변수는 끌어온 문자열이어야 합니다. 

```jsx
event.dataTransfer.setData("text/plain", "This is text to drag");
```


## HTML 작성
다음과 같이 HTML을 작성합니다. 
```html
<div>
    <p id="source" draggable="true">
     이 요소를 선택하세요. 이것을 drop zone으로 드래그한 다음에 놓으세요.  그러면 이 요소가 이동합니다. 
    </p>
</div>

<div id="target">Drop Zone</div>
```  

## 전송 데이터 설정 
전송할 요소의 text를 가져와서 설정합니다. 
```jsx
// 드래그할 대상 
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
    console.log("dragStart");
    ev.currentTarget.classList.add("dragging");
    ev.dataTransfer.clearData();
    console.log(ev.target.innerText);
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
});
```


## 전송 데이터 꺼내기 
getData("text")를 사용하여 전송된 데이터를 가져옵니다. \<p\> 요소를 생성하고 innerText에 값을 설정합니다. target에 붙여 넣습니다.
```jsx

target.addEventListener("drop", (ev) => {
    console.log("Drop");
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    console.log(data);
    let p = document.createElement("p");
    p.innerText = data; 
    ev.target.appendChild(p);
});

```
