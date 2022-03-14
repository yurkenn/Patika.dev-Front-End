// -  Bu fonksiyon **"async"** olarak tanımlanmalı ve default olarak dışa aktarılmalıdır. Fonksiyonun içindeki asenkron fonksiyonlar **"await"** ile tanımlanmalıdır.
// -  Fonksiyon **Number** tipinde tek parametre alır. Bu parametre **user id**'yi belirtir.
// -  Fonksiyonun görevi aşağıdaki endpoint'e giderek parametrede verilen user id ile ilgili kullanıcının verilerini çekmek olmalı. İstekleri **"axios"** kütüphanesini kullanarak yapmanız gerekiyor. İsteği yaparken aşağıdaki endpointin sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

// 	 [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)

// -  Yine aynı fonksiyonun içerisinde ve yine aynı user id için bir de "posts" isteği yapılmalıdır.İsteği yaparken aşağıdaki endpoint'in sonundaki rakamı parametrede gelen user id'ile değiştirmeniz gerekiyor.

// 	[https://jsonplaceholder.typicode.com/posts?userId=1](https://jsonplaceholder.typicode.com/posts?userId=1)

// -  Artık elimizde kullanıcı bilgileri ve bu kullanıcının post'ları var. Bu iki veriyi birleştirip return edin. Birleştirme sonucunda elinizde aşağıdaki gibi bir obje bulunması gerekiyor.


import axios from 'axios';

async function getData(user_id) {
    const { data: users } = await axios('https://jsonplaceholder.typicode.com/users/' + user_id)
    const { data: posts } = await axios('https://jsonplaceholder.typicode.com/posts/' + user_id)

    console.log(users)
    console.log(posts)
}

export default getData; 