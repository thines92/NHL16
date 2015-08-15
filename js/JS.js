function addTag() {
  userTag = prompt("Please enter your GamerTag").toUpperCase();

  $(".tag-table").append("<tr><td>" + userTag + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>");
};
