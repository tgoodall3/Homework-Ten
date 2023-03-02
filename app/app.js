import { changePageContent } from "../model/model.js";


function initlisteners(){
    $("nav #links a").on("click", function(e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
    });
}

$(document).ready(function(){
    initlisteners();
    changePageContent("home");

})