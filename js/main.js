$.ajax({url: "https://api.github.com/users/CNAtion96",
    success: function(response){
        var starred = 0;
        console.log(response);
        $("#profileImg").html(`<img src="${response.avatar_url}">`);
        $("#name").text(`${response.name}`);
        $("#usrName").text(`${response.login}`);
        $("#bio").html(`<p>${response.bio}</p>`);
        $("#info").html(`<div><img src="imgs/organization.svg"><p>${response.company}</p></div>
            <div><img src="imgs/location.svg"><p>${response.location}</p></div>
            <div><img id="link" src="imgs/link.svg"><p><a href="${response.blog}">My Life at the Iron Yard Cincinnati</a></p></div>
            <div><img src="imgs/clock.svg"><p>${response.created_at}</p></div>`);
        $("#stats").html(`<div><h2>${response.followers}</h2><p>followers</p></div>
            <div><h2>${starred}</h2><p>starred</p></div>
            <div><h2>${response.following}</h2><p>following</p></div>
        `);
    }
});



$(".linkOne").click(function() {
    $(".nav-link").removeClass("active");
    $(".linkOne").addClass("active");
    $("#actualContent").html(``);
});
$(".linkTwo").click(function() {
    $(".nav-link").removeClass("active");
    $(".linkTwo").addClass("active");
    $("#actualContent").html(``);
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
                    <button id="newRepo"><img src="imgs/repo.svg">New</button></div><hr>
            `);
    $.ajax({ url: "https://api.github.com/users/CNAtion96/repos",
        success: function(response){
            console.log(response);
            response.forEach(function(i){
                var updated = moment(i.updated_at).from();
                $("#actualContent").append(`<div class="row"><div class="col-md-9">
                        <h5>${i.name}</h5>
                        <p id="right">
                        <p>Updated ${updated}</p></div><div class="contentRight col-md-3">
                        <p>${i.language}</p><img src="imgs/star.svg"><p>0</p><img src="imgs/git-branch.svg"><p>0</p>
                        </div></div><hr>`)
            })
        }
    });
});
$(".linkThree").click(function() {
    $(".nav-link").removeClass("active");
    $(".linkThree").addClass("active");
    $("#content ul").css("margin-bottom", "15px");
    $("#actualContent").html(``);
     $.ajax({ url: "https://api.github.com/users/CNAtion96/events",
        success: function(response){
            console.log(response);
            response.forEach(function(i){
               $('#actualContent').append( `
                <div class="row contain">
                    <div class="col-md-1 commits">
                        <img id="commitImg" src="imgs/git-commit.svg">
                    </div>
                    <div class="col-md-10 commitContent">
                        <h3 id="push"><span>${i.actor.login}</span> pushed to <span>${i.repo.name}</span></h3>
                        <img id="imgFirst" src="${i.actor.avatar_url}">
                        <img id="imgSecond" src="${i.actor.avatar_url}">
                        <h3 id="pushId"><span>${i.payload.push_id}</span></h3>
                    </div>
                </div>
                <hr>
                `); //${i.payload.commits[0].author.message}
            })
        }
    });
});



//moment(i.created_at)
//i.actor.login eventType to master at 