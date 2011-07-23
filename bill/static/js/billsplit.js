var BillSplit = {};

BillSplit.addPerson = function(name) {
  var people = localStorage.getItem('people');
  if (!people) {
    people = [];
    var id = 1;
  } else {
    people = JSON.parse(people);
    var id = people.length;
  }
  people.push({"id":id, "name":name});
  localStorage.setItem('people', JSON.stringify(people));

  $('#people-list').append(
      '<li data-theme="c" class="ui-btn ui-btn-icon-right ui-li ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#page-edit-person" class="ui-link-inherit">' +
      name +
      '<span id="' +
      id + '-count"' +
      ' class="ui-li-count ui-btn-up-c ui-btn-corner-all">$0.00</span></a></div><span class="ui-icon ui-icon-arrow-r"></span></div></li>'
                           );

  $('ul').listview('refresh');
};

