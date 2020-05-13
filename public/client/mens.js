const api =  'http://localhost:1337/mens' 

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