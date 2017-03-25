$(".linkOne").click(function() {
    $(".nav-link").removeClass("active");
    $(".linkOne").addClass("active");
});
$(".linkTwo").click(function() {
    $(".nav-link").removeClass("active");
    $(".linkTwo").addClass("active");
    $("#actualContent").html(`
                <div class="repoNav col-md-12">
                    <form>
                        <input type="text" placeholder="Find a repository">
                        <button>Search</button>
                    </form> 
                    <ul>
                        <li>All</li>
                        <li>Public</li>
                        <li>Private</li>
                        <li>Sources</li>
                        <li>Forks</li>
                        <li>Mirrors</li>
                    </ul>
                    <button>New</button></div><hr>
            `);
    $.ajax({ url: "https://api.github.com/users/CNAtion96/repos",
        success: function(response){
            console.log(response);
            response.forEach(function(i){
                var updated = moment(i.updated_at).from();
                $("#actualContent").append(`<div class="row"><div class="col-md-10">
                        <h5>${i.name}</h5>
                        <p id="right">
                        <p>Updated ${updated}</p></div><div class="col-md-2">
                        <p></p>
                        </div></div><hr>`)
            })
        }
    });
});
$(".linkThree").click(function() {
    $(".nav-link").removeClass("active");
    $(".linkThree").addClass("active");
});