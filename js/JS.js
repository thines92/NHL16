function addTag() {
  userTag = prompt("Please enter your GamerTag").toUpperCase();
  while (userTag.length <= 1 || userTag.length > 15) {
    userTag = prompt("Please enter a Gamertag between 1 and 15 characters.").toUpperCase();
  }

  $(".tag-table").append("<tr><td>" + userTag + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>");
};
