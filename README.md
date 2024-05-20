Cloned UI
install nanoid as : *npm i nanoid*
make useState[title,setTitle] and applied on change om input tag
<!-- log and check title working or not -->
apply on submit on the form and pass the refrence of function submitHandler function.
make a tasks array using useState.
make submitHandler function and inside it make store the data in a varibale, and then deepClone the existing tasks array and in setTasks add that varibale holding new task.
<!-- log and check tasks array getting updated or not -->
now we have to store the data somewhere so that we get data even after page is restored, for that we will be using localStorage of browser for storing the data.
to store the data in localStorage we have to simply write localStorage.setItem("name with which we want to save the data", data in string form)
now get the data at the time of starting the web page for that simply update the data in tasks useState as if there is already data present in localStorage then load that data otherwise just make a array
now simply update the frontend and make the value of total tasks dynamic by writing in place of 0/0 as 0/{tasks.length}