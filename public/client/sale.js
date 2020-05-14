const api =  'http://localhost:1337/sale/items' 

//const output = document.getElementById('output')
const itemlist = document.getElementById('realdata')
//const realdata = document.getElementById('realdata')


fetch(api).then(response => response.json())
    .then(data => {
        data.forEach( item => {

          const name = document.createElement('P')
          name.innerHTML = "Name: " + item.name

          const id = document.createElement('P')
          id.innerHTML = "Item Id: " + item.itemId

          const price = document.createElement('P')
          price.innerHTML = "Price: " + item.price

          const description = document.createElement('P')
          description.innerHTML = "Description: " + item.description

          const category = document.createElement('P')
          category.innerHTML = "Category: " + item.category +  "<br/> " + "---------------"

          
          itemlist.appendChild(name)
          itemlist.appendChild(id)
          itemlist.appendChild(price)
          itemlist.appendChild(description)
          itemlist.appendChild(category)
          

        

        })
    })
