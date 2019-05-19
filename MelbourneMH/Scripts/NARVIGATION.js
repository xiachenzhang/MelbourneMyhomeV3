//menu had also .selected option but not used in this case...

// create a select and append #menu
var $select = $("<select></select>")
$("#menu").append($select)
// cycle over menu links

$("#menu a").each(function () {
    var $anchor = $(this);
    //create an option 
    var $option = $("<option></option>");
    //deal with selected options depending on current page.
    if ($anchor.parent().hasClass("selected")) {
        $option.prop("selected", true);
    }
    //options's vallue is the href
    $option.val($anchor.attr("href"));
    //options's text is the text of link
    $option.text($anchor.text());
    //append option to sellect
    $select.append($option);
});


//bind change listner to the select.
$select.change(function () {
    //go to select's location
    window.location = $select.val();
});




