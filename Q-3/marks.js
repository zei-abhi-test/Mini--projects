const marks = [35 , 78 , 92 , 41 , 56, 27, 88] ;

const grace = marks.map(m=> m+ 5) ;

const passed = grace.filter(m => m > 40) ;

const average = grace.reduce((a,b) => a+b , 0) / grace.length ;

const output = document.getElementById('output') ;

output.innerHTML = `
    <p><b>Original Marks: </b> ${marks.join(', ')} </p>
    <p><b>After Grace (+5) :</b> ${grace.join(', ')}</p>
    <p><b>Passed Students (>40):</b> ${passed.join(', ')}</p>
    <p><b>Cass Average:</b> ${average.toFixed(2)}</p>
` ;