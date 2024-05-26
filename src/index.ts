import { v4 as uuidV4 } from "uuid"

 type Task={
  id:String,
    title:String,
    completed:Boolean,
    createdAt:Date
 }

const list =document.querySelector<HTMLLIElement>("#list")
const form =document.querySelector("#new-task-form") as HTMLFieldSetElement |null
const input =document.querySelector<HTMLInputElement>("#new-task-title")

form?.addEventListener("submit",e=>{
  e.preventDefault()
  if(input?.value=="" || input?.value==null)
    return
  
  const newTask={
    id: uuidV4(),
    title: input.value,
    completed:false,
    createdAt:new Date()

  }
  addListItem(newTask)
 

})


function addListItem(task:Task){

  const item=document.createElement("li")
  const label =document.createElement("label")
  const checkbox =document.createElement("input")

  checkbox.type="checkbox"
  label.append(checkbox,task.title)
  item.append(label)
  list?.append(item)

}


