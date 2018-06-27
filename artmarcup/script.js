$(function() {
    'use strict';


    // DOM pointers
    const canvasEl = $('#pixel_canvas');
    const sizePickerEl = $('#sizePicker');

    // Set color
    function setColor() {
        const colorVal = $('#color_Picker').val();
        return colorVal;
    }


    // Delete grid
    function deleteGrid() {
        $(canvasEl).empty();
    }


    // Create makeGridgrid
    function makeGrid() {

        // Before adding new rows to the table, delete the existing ones first
        deleteGrid();

        const width = $('.input_width').val();
        const height = $('.input_height').val();

        for (let j = 0; j < width; j++) {
            var row = $('<tr></tr>');

            for (let i = 0; i < height; i++) {
                const cell = $('<td></td>');
                $(row).append(cell);

                // Event listener background-color for each pixel
                $(cell).click(function() {
                    cell.css('background-color', setColor());
                });
            }

            $(canvasEl).append(row); 
    }
      	  }
		 
	

    // Event listener  makeGrid() function
    sizePickerEl.on('submit', function(x) {
        x.preventDefault();
        makeGrid();
    });
});
