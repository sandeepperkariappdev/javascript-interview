
$(function(){    
    var tables = document.getElementsByTagName("table"), cur_max =0, max_so_far =0
    for(let i=0; i<tables.length; i++){
        var tablesRows = tables[i].rows, cur_max  = 0;    
        for(let j=0; j<tablesRows.length; j++){
            cur_max +=  tablesRows[j].cells.length;
        }
        max_so_far = Math.max(cur_max, max_so_far);        
    }
    return max_so_far;
})

