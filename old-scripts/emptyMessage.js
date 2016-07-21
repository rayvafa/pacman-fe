$(function($) {
$('#pedinglistings').dataTable( {
    "oLanguage": {
    "sEmptyTable": function(){ return "There is no data"; }
}
} );
});