/*TODO: CSS would be good to have for all of the items*/

var css = {
    yt: {width: "854px", height: "480px"},
    mid: {verticalAlign: "middle"}    
}

function checkSanity(body) {
    if (body === undefined) {
        console.log("body is missing");
        throw "body missing";
    }
}

function setStyle(obj, style){
    for (var param in style) {
        obj.style[param] = style[param];
    }
}
    
function create(type, value, style) {
    var obj = document.createElement(type);
    switch(type) {
        case "iframe":
            obj.setAttribute("src",value);
            obj.setAttribute("frameborder","0");
            obj.setAttribute("allowfullscreen", null);
        case "frame":
            obj.setAttribute("enctype", "text/form-data");
            obj.setAttribute("method", "POST");
        case "input":
        case "textarea":
            if (value === "") {
                break;
            }
            obj.setAttribute("name", value);
        case "form":
            obj.setAttribute("action","mailto:"+value);
        default:
            obj.innerHTML = value;
    }
    setStyle(obj, style);

    return obj;
}

function render() {
    console.log("I'm rendering");
    console.time("render");
    var body = document.getElementsByTagName("body")[0];
    
    console.log(body);
    var content = [
    /*
        "Hi I guess you are learning a bit about javascript",
        "Are you planning to visit the techHub?"
        "Did you know Accenture Latvia has bootcamps available where you can learn more about this?
    */
    ];

    try {
        checkSanity(body);
    } catch(e) {
        if (e === "body missing")
            return;
        console.log(e);
    }

    body.innerHTML = "";



    var header = create("header", "Menu", {
        verticalAlign: "middle",
        height: "40px"
    });

    body.appendChild(header);
    body.appendChild(create("div", "This is some text field appended below", {
        color: "#FFFFFF",
        backgroundColor: "black",
    }));
    item = create("ul","Powers of 2: ", {textAlign:"left"});
    for (i = 1; i < 10; i++) {
        item.appendChild(create("li", Math.pow(2,i) + " ", {display: "inline", "border-width": "4px" }));
    }

    body.appendChild(item); 

    content.forEach(function(innerItem) {
        body.appendChild(create("div", innerItem, {}));
    });

    item = create("div", "Accenture Latvia <br />", {});
    video = create("iframe","https://www.youtube.com/embed/-u7Q-VENJes",  css["yt"]);
    item.appendChild(video);
    body.appendChild(item);

    item = create("div", "TechHub <br />", {});
    video = create("iframe","https://www.youtube.com/embed/uE6pXIDDlsU", css["yt"]);
    item.appendChild(video);
    body.appendChild(item);


    //adding of the form

    var form = create("form", "marija.rucevska@techhub.com ", null);

    //textarea
    var nameDiv = create("div", "Name:",null);
    var textName = create("input","name",null);
    textName.setAttribute("type","text");
    nameDiv.appendChild(textName);

    form.appendChild(nameDiv);

    //personal info

    var textDiv = create("div", "Your personal input", css.mid);
    var textInfo = create("textarea", "input", null);
    textDiv.appendChild(textInfo);

    form.appendChild(textDiv);

    //JS file

    var jsDiv = create("div", "Your javascript file", css["mid"]);
    jsField = create("input", "attachedfile", null);
    jsField.setAttribute("type", "file", null);
    jsField.setAttribute("allow", "text/*");
    jsDiv.appendChild(jsField);

    form.appendChild(jsDiv);

    //HTML file

    var htmlDiv = create("div", "Your HTML file", css["mid"]);
    var htmlField = create("input", "attachedfile", null);
    htmlField.setAttribute("type", "file", null);
    htmlField.setAttribute("allow", "text/*");
    htmlDiv.appendChild(htmlField);

    form.appendChild(htmlDiv);

    var submitButton = create("input", "");
    submitButton.setAttribute("value", "Submit");
    submitButton.setAttribute("type", "submit");
    form.appendChild(submitButton);

    form.addEventListener("submit", prepEmail, false);

    var mailBody = create("input", "body", {"display":"none"});
    form.appendChild(mailBody);

    body.appendChild(form);

    console.timeEnd("render");
    console.log("Render ended");

    //item2.appendChild(item3);
    //item.appendChild(item2);
    //who the fuck writes code like this
    //item = create("form", "marija.rucevska@techhub.com ", null);
    
    //div to a form?
    //item2 = create("div", "Name:",null);
    //item.appendChild(item2);

    //name input?
    //item3 = create("input", "name");
    //item3.setAttribute("type", "text");
    //item2.appendChild(item3);
    //item.appendChild(item2);


    //personal input?
    //item2 = create("div", "Your personal input", css.mid);
    //item.appendChild(item2);
    //item3 = create("textarea", "input", null);
    //item2.appendChild(item3);
    
    //item.appendChild(item2);
    
    //item2 

    /*TODO: form is incomplete */
    //item = create("div", "Your javascript file", css["mid"]);
    //item.appendChild(item2);

    //item = create("div", "Your html file", css["mid"]);
    //item.appendChild(item2);


}



function prepEmail(e) {
    //build the mail

    var NameCurry = "Name of applicant:";
    var InputCurry = "Personal input of applicant";
    /* TODO:
        Fix this function so that proper email with text and attached files appears
    */
    this.submit();
}