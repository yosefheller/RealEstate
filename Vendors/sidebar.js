var li = document.getElementsByTagName("li");
var pageURL = window.location.href;
var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);

function setShow() {
    if (lastURLSegment === "productList.html" || lastURLSegment === "myListings.html") {
        document.getElementById("pageSubmenu").className = "collapse show list-unstyled "
    }
    if (lastURLSegment === "pendingOrders.html" || lastURLSegment === "ordersShipped.html" || lastURLSegment === "returns.html" || lastURLSegment === "ordersCompleted.html") {
        document.getElementById("pageSubmenu2").className = "collapse show list-unstyled "
    }
    if (lastURLSegment === "accountingReports.html" || lastURLSegment === "banking.html") {
        document.getElementById("pageSubmenu3").className = "collapse show list-unstyled "
    }

}




$(document).ready(function () {
    $("#productsLink").hover(function () {
        $("#pageSubmenu").addClass("show ");
    }, function () {
        if (lastURLSegment !== "productList.html" && lastURLSegment !== "myListings.html") {
            $("#pageSubmenu").removeClass("show");
            setShow()
        }

    });
});

$(document).ready(function () {
    $("#productsList").hover(function () {
        $("#pageSubmenu").addClass("show ");
    }, function () {
        $("#pageSubmenu").removeClass("show");
        setShow()
    });
});

$(document).ready(function () {
    $("#myListings").hover(function () {
        $("#pageSubmenu").addClass("show ");
    }, function () {

        $("#pageSubmenu").removeClass("show");
        setShow()
    });
});



$(document).ready(function () {
    $("#ordersLink").hover(function () {
        $("#pageSubmenu2").addClass("show ");
    }, function () {
        if (lastURLSegment !== "pendingOrders.html" && lastURLSegment !== "ordersShipped.html" && lastURLSegment !== "returns.html" && lastURLSegment !== "ordersCompleted.html") {
            $("#pageSubmenu2").removeClass("show");
            setShow()
        }

    });
});



$(document).ready(function () {
    $("#pendingOrders").hover(function () {
        $("#pageSubmenu2").addClass("show ");
    }, function () {
        $("#pageSubmenu2").removeClass("show");
        setShow()
    });
});
$(document).ready(function () {
    $("#ordersShipped").hover(function () {
        $("#pageSubmenu2").addClass("show ");
    }, function () {
        $("#pageSubmenu2").removeClass("show");
        setShow()
    });
});
$(document).ready(function () {
    $("#ordersCompleted").hover(function () {
        $("#pageSubmenu2").addClass("show ");
    }, function () {
        $("#pageSubmenu2").removeClass("show");
        setShow()
    });
});
$(document).ready(function () {
    $("#returns").hover(function () {
        $("#pageSubmenu2").addClass("show ");
    }, function () {
        $("#pageSubmenu2").removeClass("show");
        setShow()
    });
});




$(document).ready(function () {
    $("#salesAccouting").hover(function () {
        $("#pageSubmenu3").addClass("show ");
    }, function () {
        if (lastURLSegment !== "accountingReports.html" && lastURLSegment !== "banking.html") {
            $("#pageSubmenu3").removeClass("show");
            setShow()
        }

    });
});

$(document).ready(function () {
    $("#accountingReports").hover(function () {
        $("#pageSubmenu3").addClass("show ");
    }, function () {
        $("#pageSubmenu3").removeClass("show");
        setShow()
    });
});

$(document).ready(function () {
    $("#banking").hover(function () {
        $("#pageSubmenu3").addClass("show ");
    }, function () {

        $("#pageSubmenu3").removeClass("show");
        setShow()
    });
});




Array.from(li).forEach((li) => {

    if (li.id === lastURLSegment) {
        li.className = "active"
    }
    setShow()
})




