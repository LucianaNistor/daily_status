//Accordion

var action = "click";
var speed = "500";

$(document).ready(function () {
  $('li.title').on(action,function(){
    // Get next element
    $(this).next()
      .slideToggle(speed)
        .siblings('li.show')
          .slideUp();
  })
})


//CREATE HTML FUNCTION

// function appendHtml(el, str) {
//   var p = document.createElement('table');
//   p.innerHTML = str;
//   while (p.children.length > 0) {
//     el.appendChild(p.children[0]);
//   }
// }

// // APPEND HTML
// for (var i = 0; i < firmDevelopers.developers.length; i++) {
//
//   var html = '<tr>' +
//                 '<td>' + firmDevelopers.developers[i].id + '</td>' +
//                 '<td>' + firmDevelopers.developers[i].name + '</td>' +
//                 '<td><button onclick="deleteDev()">Delete</button></td>' +
//              '</tr>';
//
//   var table = document.getElementById('team_members');
//   appendHtml(table, html);
// }
//
// //console.log(firmDevelopers.developers);


// for (var i = 0; i < firmProjects.projects.length; i++) {
//   var html = '<tr>' +
//                 '<td>' + firmProjects.projects[i].id + '</td>' +
//                 '<td>' + firmProjects.projects[i].name + '</td>' +
//                 '<td><button>Delete</button></td>' +
//              '</tr>';
//
//   var table = document.getElementById('projects');
//   appendHtml(table, html);
// }
// //console.log(firmProjects.projects);
