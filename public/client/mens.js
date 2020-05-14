const api =  'http://localhost:1337/mens/items' 

//const output = document.getElementById('output')
const itemlist = document.getElementById('realdata')
//const realdata = document.getElementById('realdata')


fetch(api).then(response => response.json())
    .then(data => {
        data.forEach( item => {

          const name = document.createElement('LI')
          name.innerHTML = item.name

          const id = document.createElement('LI')
          id.innerHTML = item.itemId

          const price = document.createElement('LI')
          price.innerHTML = item.price

          const description = document.createElement('LI')
          description.innerHTML = item.description

          const category = document.createElement('LI')
          category.innerHTML = item.category

          
          itemlist.appendChild(name)
          itemlist.appendChild(id)
          itemlist.appendChild(price)
          itemlist.appendChild(description)
          itemlist.appendChild(category)
          

          
   



          
            //const itemdiv = document.createElement('P')
           // itemdiv.innerHTML= item.name + item.itemId 
            //output.appendChild(itemdiv) 
           

        })
    })



/*
fetch(api).then(response => response.json())
      .then(result => {
        result.items.forEach(item => {
          const div = document.createElement('div');
  
          const header = document.createElement('h3');
          header.textContent = item.name;
  
          const contents = document.createElement('p');
          contents.textContent = item.content;
  
          const date = document.createElement('small');
          date.textContent = new Date(item.created);
  
          div.appendChild(header);
          div.appendChild(contents);
          div.appendChild(date);
  
          itemsElement.appendChild(div);
        });
    })
    */