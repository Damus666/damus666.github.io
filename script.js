console.log("i managed to run!")

const headContent = /*html*/`
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Damus666</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://raw.githubusercontent.com/Damus666/damus666.github.io/main/style.css"/>`

const headerContent = /*html*/`
<header class="main-header fs-2">
    <div class="align-h" style="width:80%;">
        <img class="main-pfp" src="https://raw.githubusercontent.com/Damus666/damus666.github.io/main/assets/mainpfp.jpg" width="17%", height="17%">
        <h1><a class="clean-link" href="https://linktr.ee/damus666"  target="_blank" id="#title">Damus666</a></h1>  
    </div>
</header>
<div class="navigation">
    <div class="align-h align-self-v">
        <a class="clean-link fs-4 space-h" href="https://damus666.github.io">Home</a>
        <p class="fs-4">|</p>
        <a class="clean-link fs-4 space-h" href="https://damus666.github.io/games">Games</a>
        <p class="fs-4">|</p>
        <a class="clean-link fs-4 space-h" href="https://damus666.github.io/projects">Projects</a>
        <p class="fs-4">|</p>
        <a class="clean-link fs-4 space-h" href="https://damus666.github.io/about">About</a>
    </div>
</div>`

const footerContent = /*html*/`
<div class="navigation">
    <div class="align-h align-self-v">
        <p class="p">This site was possible thanks to <a class="link-col"  target="_blank" href="https://pages.github.com">Github Pages</a></p>
    </div>
</div>
`

console.log("i managed to run the html consts!")

document.getElementById("#head-cp").innerHTML = headContent
document.getElementById("#header-cp").innerHTML = headerContent
document.getElementById("#footer-cp").innerHTML = footerContent

console.log("i managed to run the get element by id!")

const url = document.URL
titleElement = document.getElementById("#title")
const baseDocTitle = "Damus666"
const baseTitle = "Damus666"
const pageNames = ["Games","Projects","About"]

console.log("i managed to run after the consts!")

pageNames.forEach((page)=>{
    if (url.includes(page.toLowerCase())) {
        document.title = baseDocTitle+` - ${page}`
        titleElement.innerHTML = baseTitle + ` - ${page}`
    }
})

console.log("i managed to run all the code!")


