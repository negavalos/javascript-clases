//$("li"->Selector ).hide()->acction()

// $("h1").hide();

// $(document).ready(()=>{

// })

$(()=>{
    // Selectores;
    // id='el-1' => "#el-1"
    // class='el-1' => ".el-1"
    // $("#el-1").hide()

    $(".hide-btn").click(()=>{
        console.log("Ocultando");
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(()=>{
        console.log("Mostrando");
        // $("h1").show()
        $("h1").fadeIn()
    })
    $("li").dblclick(()=>{
        $("h1").css({color: "red"})
    })
    $(".new-element").click(()=>{
        // $("ul").append("<li>New element</li>")
        $("ul").prepend("<li>New element</li>")
    })
    $("li").mouseenter((elem)=>{
        console.log("a entrado el");
        elem.target.style.color = "Green"
    })

    $("li").mouseleave(elem=>{
        elem.target.style.color = "Black"
    })
})