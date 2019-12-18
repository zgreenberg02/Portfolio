var work = document.getElementById("portfolioItemContainer");
var workRequest = new XMLHttpRequest();

var link = document.getElementById("socialLinkContent");
var linkRequest = new XMLHttpRequest();

linkRequest.open("GET", "json/links.json", true);
linkRequest.onreadystatechange = function () {
    if (linkRequest.readyState === 4) {
        if (linkRequest.status === 200 || linkRequest.status == 0) {
            var html = "";
            JSON.parse(linkRequest.responseText).forEach(function (link) {
                console.log(link.name);
                html += "<div class=\"links waves-effect\"><a href=" + link.url + " class=\"black-text valign-wrapper\" target=\"_blank\"><i class=\"link_icon mdi mdi-" + link.icon + "\" style=\"color: " + link.color + "\"></i>&nbsp; " + link.name + "</a></div>";
            });
            link.innerHTML = html;
        }
    }
};
linkRequest.send(null);

workRequest.open("GET", "json/items.json", true);
workRequest.onreadystatechange = function () {
    if (workRequest.readyState === 4) {
        if (workRequest.status === 200 || workRequest.status == 0) {
            var html = "";
            JSON.parse(workRequest.responseText).forEach(function (work) {
                console.log(work.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + work.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + work.link + " target=\"_blank\">Visit</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">close</i></span><p>" + work.description + "</p></div></div></div>";
            });
            work.innerHTML = html;
        }
    }
};
workRequest.send(null);




var workTwo = document.getElementById("portfolioItemContainerTwo");
var workRequestTwo = new XMLHttpRequest();

workRequestTwo.open("GET", "json/itemsTwo.json", true);
workRequestTwo.onreadystatechange = function () {
    if (workRequestTwo.readyState === 4) {
        if (workRequestTwo.status === 200 || workRequestTwo.status == 0) {
            var html = "";
            JSON.parse(workRequestTwo.responseText).forEach(function (workTwo) {
                console.log(workTwo.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + workTwo.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + workTwo.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + workTwo.link + " target=\"_blank\">Visit</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + workTwo.name + "<i class=\"material-icons right\">close</i></span><p>" + workTwo.description + "</p></div></div></div>";
            });
            workTwo.innerHTML = html;
        }
    }
};
workRequestTwo.send(null);

