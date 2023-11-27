export const productos = [
    {id: '1', category: 'decor', img: 'images/img-2.png'},
    {id: '2', category: 'decor', img: 'images/img-3.png'},
    {id: '3', category: 'decor', img: 'images/img-4.png'},
    {id: '4', category: 'decor', img: 'images/img-6.png'},
    {id: '5', category: 'decor', img: 'images/img-7.png'},
    {id: '6', category: 'decor', img: 'images/img-9.png'},
    {id: '7', category: 'decor', img: 'images/img-10.png'},
    {id: '8', category: 'decor', img: 'images/img-8.png'}
]

export const getProducts = ()=>{
    return new Promise((resolve, reject) => {
        const error = false
        setTimeout(()=>{
            if(error){
                reject('no data, try later')
            }else{
                resolve(productos)
            }
            resolve(productos)
        })
    })
}