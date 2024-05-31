const product = [
    {
     id: 0,
     image: '',
     title: '',
     price:199,   
    },
    {
        id: 1,
        image: '',
        title: '',
        price:299,   
       },
       {
        id: 2,
        image: '',
        title: '',
        price:199,   
       },
       {
        id: 3,
        image: '',
        title: '',
        price:199,   
       },
]
const categories = [...new Set(product.map((item) => {
    {return item}
}))]
 let i = 0;
 document.getElementById('root').innerHTML = categories



























