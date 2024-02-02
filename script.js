function addNewTask() {
   var list = document.getElementById('list');
   var textInput = document.getElementById('task_name');
   var text = textInput.value;
   var listItem = document.createElement('li');
   listItem.className = 'list-item';

   if (text.length == 0) {
      alert('Você precisa digitar algo para adicionar a lista');
      return;
   }

   const textElement = document.createTextNode(text);
   listItem.appendChild(textElement)
   list.appendChild(listItem)

   textInput.value = '';
}



