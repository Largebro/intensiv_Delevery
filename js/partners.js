
const rendeerItems = (data) => {
    console.log(data);
}

fetch('https://delivery-food-504a3-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        rendeerItems(data)
    })
    .catch((e) => { console.log(e) })
    .finally(() => console.log('Very good'))