function makeGrid() {

var gHeight,gWidth,myCanvas,myRow,myCell;
    gHeight= $('#inputHeight').val();
    gWidth =$('#inputWidth').val();
    myCanvas = $('#pixelCanvas');
    
    alert(gHeight + gWidth + myCanvas);
    
    myCanvas.children().remove()
    
    for(b = 0; b < gHeight; b++)
      {
          myCanvas.append('<tr></tr>');
      }
        myRow = $('tr');
         
    for(c = 0; c < gWidth; c++)
      {
          myRow.append('<td></td>');
      }
    
    myCell = myCanvas.find('td');
        
    myCell.click(function() {
		var color;
		color = $('#colorPicker').val();
        
		$(this).attr('bgcolor', color);
	});   
}


alert("damn!, why gimme such a hard time, buh finally figured it out");
var myQuery;
myQuery = $('input[type="submit"]')
myQuery.click(function(event) {
  event.preventDefault();
  makeGrid();

});


 