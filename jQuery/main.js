$(document).ready(function () {
    $("#createRow").click(function () {
        var start = new Date().getTime();
        for (i = 1; i <= 100; i++) {
            var postNumber = Math.floor(Math.random() * 100) + 1;
            var url = 'https://jsonplaceholder.typicode.com/posts/' + postNumber;
            var k = $('table tr').length;
            fetch(url)
                .then(res => res.json())
                .then((json) => {
                    var markup = "<tr><td>" + k++ + "</td><td>" + json.title + "</td><td>" + json.body + "</td></tr>";
                    $("table").append(markup)
                })
        }
        var end = new Date().getTime();
        console.log('Create 100 rows: ' + (end - start) + ' ms');
    });
    $("#multiCreateRow").click(function () {
        var start = new Date().getTime();
        for (i = 1; i <= 1000; i++) {
            var postNumber = Math.floor(Math.random() * 100) + 1;
            var url = 'https://jsonplaceholder.typicode.com/posts/' + postNumber;
            var k = $('table tr').length;
            fetch(url)
                .then(res => res.json())
                .then((json) => {
                    var markup = "<tr><td>" + k++ + "</td><td>" + json.title + "</td><td>" + json.body + "</td></tr>";
                    $("table").append(markup)
                })
        }
        var end = new Date().getTime();
        console.log('Create 1000 rows: ' + (end - start) + ' ms');
    });
    $("#update").click(function () {
        var start = new Date().getTime();
        const rows = $("table tr:not(:first-child)");
        rows.each(row => {
            var postNumber = Math.floor(Math.random() * 100) + 1;
            var url = 'https://jsonplaceholder.typicode.com/posts/' + postNumber;;
            fetch(url)
                .then(res => res.json())
                .then((json) => {
                    $("tr:nth-child("+row+") td:nth-child(2)").html(json.title);
                    $("tr:nth-child("+row+") td:nth-child(3)").html(json.body);
                })
        });
        var end = new Date().getTime();
        console.log('Update: ' + (end - start) + ' ms');

    });
    $("#swap").click(function () {
        var start = new Date().getTime();
        var rows = $("table tr").length - 1;
        if (rows >= 16) {
            var $elem1 = $('table tr').eq(16);
            $elem2 = $('table tr').eq(2);
            $placeholder = $("<tr><td></td></tr>");
            $elem2.after($placeholder);
            $elem1.after($elem2);
            $placeholder.replaceWith($elem1);
        }
        var end = new Date().getTime();
        console.log('Swap: ' + (end - start) + ' ms');
    });
    $("#clear").click(function () {
        var start = new Date().getTime();
        $("table tr:not(:first-child)").each(function () {
            $(this).remove();
        });
        var end = new Date().getTime();
        console.log('Remove: ' + (end - start) + ' ms');
    });
    $("#addPhoto").click(function () {
        $("#album").append('<img class="photo" src="asset/image.jpg" alt="Image">');
    });
    $("#addMorePhotos").click(function () {
        for (i = 0; i < 100; i++)
            $("#album").append('<img class="photo" src="asset/image.jpg" alt="Image">');
    });
    $("#deletePhoto").click(function () {
        $(".photo:last-child()").remove();
    })
});