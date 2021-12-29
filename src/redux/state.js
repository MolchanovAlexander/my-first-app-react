import rerender from 'render'
let state = {
    friends: {
        friendsData: [
            { id: 1, status: 1, name: "Gufiynskay Djigurdaliya", src: 'https://images.unsplash.com/photo-1541433621554-05421e3a3e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 2, status: 1, name: "Nykyhvir Alibabayevich", src: 'https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 3, status: 0, name: "Dniwe Prostodno", src: 'https://images.unsplash.com/photo-1581588636584-5c447d2c9d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 4, status: 1, name: "Ilona", src: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 5, status: 0, name: "Alesya", src: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 6, status: 1, name: "Katya", src: 'https://images.unsplash.com/photo-1580205315085-dd6d20e14e49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 7, status: 1, name: "Sveta", src: 'https://images.unsplash.com/flagged/photo-1553928841-ccac95ad7e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 8, status: 0, name: "Masha Gufkina", src: 'https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 9, status: 1, name: "Solomiya Krushelnytska", src: 'https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 10, status: 0, name: "Viktoriya Monobank", src: 'https://images.unsplash.com/photo-1515161318750-781d6122e367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 11, status: 1, name: "Gufiynskay Djigurdaliya", src: 'https://images.unsplash.com/photo-1541433621554-05421e3a3e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 12, status: 0, name: "Nykyhvir Alibabayevich", src: 'https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 13, status: 1, name: "Dniwe Prostodno", src: 'https://images.unsplash.com/photo-1581588636584-5c447d2c9d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 14, status: 0, name: "Ilona", src: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 15, status: 1, name: "Alesya", src: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 16, status: 0, name: "Katya", src: 'https://images.unsplash.com/photo-1580205315085-dd6d20e14e49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 17, status: 1, name: "Sveta", src: 'https://images.unsplash.com/flagged/photo-1553928841-ccac95ad7e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 18, status: 0, name: "Masha Gufkina", src: 'https://images.unsplash.com/photo-1544963823-6267c70c3e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlraW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 19, status: 1, name: "Solomiya Krushelnytska", src: 'https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
            { id: 20, status: 1, name: "Viktoriya Monobank", src: 'https://images.unsplash.com/photo-1515161318750-781d6122e367?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }
        ]
    },
    profile: {
        postsData: [
            { id: 1, likeCount: 3, message: "How are guf in your house?" },
            { id: 2, likeCount: 0, message: "la la la " },
            { id: 3, likeCount: 2, message: "first Guf crtrtm!!" },
            { id: 4, likeCount: 0, message: "Alo Guf came in to" }

        ]
    },
    messages: {
        dialogData: [
            { id: 1, name: "Gufiynskay Djigurdaliya" },
            { id: 2, name: "Nykyhvir Alibabayevich" },
            { id: 3, name: "Dniwe Prostodno" },
            { id: 4, name: "Ilona" },
            { id: 5, name: "Alesya" },
            { id: 6, name: "Katya" },
            { id: 7, name: "Sveta" }
        ],
        messagesData: [
            { id: 1, message: "How Guf came in to your house?" },
            { id: 2, message: "la la la " },
            { id: 3, message: "How Guf cam!!" },
            { id: 4, message: "How Guf came in to" },
            { id: 5, message: "Hello Dniwe" },
            { id: 6, message: "H11112 came in to your ho...." },
            { id: 7, message: "hjkk to your house?" }
        ]
    }

}
export let addPost = (postMessage) => {
    let newpost = {
        id: 33,
        likeCount: 0,
        message: postMessage
    }

    state.profile.postsData.push(newpost);
    rerender(state);
}

export default state;