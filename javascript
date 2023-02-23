Const Posts =[{
    Identificación: 1,
    Título: "Mi Primer Post",
    imagen: "wawa.com/img",
    Etiquetas: "whata",
},
{
    Identificación: 2,
    Título: "Mi segundo post",
    imagen: "wawa.com/img",
    Etiquetas: "nosa",
},
{
    Identificación: 3,
    Título: "The When The",
    imagen: "wawa.com/img",
    Etiquetas: "yesa",
}]
puestos. find(post=>post. id==1)
puestos. some(post=>post. id===1)
puestos. some(post=>post. . includes("whata"))
puestos. every(post=>post. . includes("nosa"))
puestos. map(post=>post. título)
puestos. filter(post=>post. . includes("whata"))
puestos. filter(post=>post?. imagen)
puestos. reduce((allTags, posts)=>{
    volver [... allTags,... puestos. Etiquetas]
})
puestos. reduce((allTags, posts)=>{
    devolver Array. de  (new Set([... allTags,... puestos. Etiquetas]))
},[])
puestos. reduce((allTags, posts)=>{
    volver [... allTags,... puestos. Etiquetas]
},[]). filter((post, index, self)=>index===self. IndexOf(post))
