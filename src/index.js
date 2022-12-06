document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    form.reset()
  })
});
function toDoList (list){
  let p= document.createElement('p')
  let btn= document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent='x'
  p.textContent = `${list}`
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list_container').appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove()
}