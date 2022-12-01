function calculateDiscount()
{
 
var Ex5="0.00";  
var Ex5_v =  parseFloat(Ex5) + document.getElementById('Ex5').value; 
var J7="0.00";  
var J7_w =  parseFloat(J7) + document.getElementById('J7').value; 
var J7_v =   parseFloat(J7_w).toFixed(0);

var G1="1";  
var D1="0.00";  
var D1_v =  parseFloat(D1) + document.getElementById('D1').value; 
var D1_w =   parseFloat(D1_v).toFixed(2);
var H1="0.00";  
var H1_v =  parseFloat(H1) + document.getElementById('H1').value; 
if ( D1_v > "0" )  { 
var E1_x = ( (parseFloat(J7_v) - parseFloat(J7_v) + parseFloat(Ex5_v) * ( parseFloat(G1) )) /  D1_w );  
if (( $( "#E1" ).val() != 0 ) && ($( "#E1" ).val() != E2_x) ) {  var E1_v = $( "#E1" ).val() ; } else { 
if ( E1_x < 2 ) {  var E1_v = 2;  } else { var E1_v = Math.ceil(E1_x) ; }   }
} else { 
var E1_v =  0 ;
}


document.getElementById('E1').value = parseFloat(E1_v) ;  

if ( document.getElementById('H1').value > 0 )  {
var I1_x = parseFloat(H1_v) * parseFloat(E1_v)   / 2;
if (( $( "#I1" ).val() != 0 ) && ($( "#I1" ).val() != I2_x) ) {  var I1_v = $( "#I1" ).val() ; } else { 
var I1_v = parseFloat(H1_v) * parseFloat(E1_v)   / 2;  }
} else { if ( document.getElementById('I1').value != 0 ) { var I1_v = $( "#I1" ).val() ; } else {
var I1_v =  0 ; }
}
document.getElementById('I1').value = parseFloat(I1_v) ; 
var J7_v1 = parseFloat(J7_v) - parseFloat(E1_v) + parseFloat(I1_v) ;

 


var G2="2";    
var D2="0.00";  
var D2_v =  parseFloat(D2) + document.getElementById('D2').value; 
var D2_w =   parseFloat(D2_v).toFixed(2);
var H2="0.00";  
var H2_v =  parseInt(H2) + document.getElementById('H2').value; 
if ( D2_v > "0" )  { 
var E2_x = ( (parseInt(J7_v) - parseInt(J7_v1) + parseInt(Ex5_v) * ( parseInt(G2) )) / D2_w );  
if (( $( "#E2" ).val() != 0 ) && ($( "#E2" ).val() != E2_x) ) {  var E2_v = $( "#E2" ).val() ; } else { 
if ( E2_x < 2 ) {  var E2_v = 2;  } else { var E2_v = Math.ceil(E2_x) ; }  }

} else { 
var E2_v =  0 ;
}
 
document.getElementById('E2').value = parseInt(E2_v) ;  
if ( document.getElementById('H2').value > 0 )  {
var I2_x = parseInt(H2_v) * parseInt(E2_v) /2;
if (( $( "#I2" ).val() != 0 ) && ($( "#I2" ).val() != I2_x) ) {  var I2_v = $( "#I2" ).val() ; } else { 
var I2_v = parseInt(H2_v) * parseInt(E2_v) /2;  }
} else { 
if ( document.getElementById('I2').value != 0 ) { var I2_v = $( "#I2" ).val() ; } else {
var I2_v =  0 ; }
}

document.getElementById('I2').value = parseInt(I2_v) ; 
var J7_v2= parseInt(J7_v1) - parseInt(E2_v) + parseInt(I2_v) ;



var G3="3";    
var D3="0.00";  
var D3_v =  parseFloat(D3) + document.getElementById('D3').value; 
var D3_w =   parseFloat(D3_v).toFixed(2);
var H3="0.00";  
var H3_v =  parseInt(H3) + document.getElementById('H3').value; 
if ( D3_v > "0" )  { 
var E3_x = ( (parseInt(J7_v) - parseInt(J7_v2) + parseInt(Ex5_v) * ( parseInt(G3) )) / D3_w );  
if (( $( "#E3" ).val() != 0 ) && ($( "#E3" ).val() != E3_x) ) {  var E3_v = $( "#E3" ).val() ; } else { 
if ( E3_x < 2 ) {  var E3_v = 2;  } else { var E3_v = Math.ceil(E3_x) ; }  }

} else { 
var E3_v =  0 ;
}
 
document.getElementById('E3').value = parseInt(E3_v) ;  
if ( document.getElementById('H3').value > 0 )  {
var I3_x = parseInt(H3_v) * parseInt(E3_v) /2;
if (( $( "#I3" ).val() != 0 ) && ($( "#I3" ).val() != I3_x) ) {  var I3_v = $( "#I3" ).val() ; } else { 
var I3_v = parseInt(H3_v) * parseInt(E3_v) /2;  }
} else { 
if ( document.getElementById('I3').value != 0 ) { var I3_v = $( "#I3" ).val() ; } else {
var I3_v =  0 ; }
}

document.getElementById('I3').value = parseInt(I3_v) ; 
var J7_v3= parseInt(J7_v2) - parseInt(E3_v) + parseInt(I3_v) ;



var G4="4";    
var D4="0.00";  
var D4_v =  parseFloat(D4) + document.getElementById('D4').value; 
var D4_w =   parseFloat(D4_v).toFixed(2);
var H4="0.00";  
var H4_v =  parseInt(H4) + document.getElementById('H4').value; 
if ( D4_v > "0" )  { 
var E4_x = ( (parseInt(J7_v) - parseInt(J7_v3) + parseInt(Ex5_v) * ( parseInt(G4) )) / D4_w );  
if (( $( "#E4" ).val() != 0 ) && ($( "#E4" ).val() != E4_x) ) {  var E4_v = $( "#E4" ).val() ; } else { 
if ( E4_x < 2 ) {  var E4_v = 2;  } else { var E4_v = Math.ceil(E4_x) ; }  }

} else { 
var E4_v =  0 ;
}
 
document.getElementById('E4').value = parseInt(E4_v) ;  
if ( document.getElementById('H4').value > 0 )  {
var I4_x = parseInt(H4_v) * parseInt(E4_v) /2;
if (( $( "#I4" ).val() != 0 ) && ($( "#I4" ).val() != I4_x) ) {  var I4_v = $( "#I4" ).val() ; } else { 
var I4_v = parseInt(H4_v) * parseInt(E4_v) /2;  }
} else { 
if ( document.getElementById('I4').value != 0 ) { var I4_v = $( "#I4" ).val() ; } else {
var I4_v =  0 ; }
}

document.getElementById('I4').value = parseInt(I4_v) ; 
var J7_v4= parseInt(J7_v3) - parseInt(E4_v) + parseInt(I4_v) ;



var G5="5";    
var D5="0.00";  
var D5_v =  parseFloat(D5) + document.getElementById('D5').value; 
var D5_w =   parseFloat(D5_v).toFixed(2);
var H5="0.00";  
var H5_v =  parseInt(H5) + document.getElementById('H5').value; 
if ( D5_v > "0" )  { 
var E5_x = ( (parseInt(J7_v) - parseInt(J7_v4) + parseInt(Ex5_v) * ( parseInt(G5) )) / D5_w );  
if (( $( "#E5" ).val() != 0 ) && ($( "#E5" ).val() != E5_x) ) {  var E5_v = $( "#E5" ).val() ; } else { 
if ( E5_x < 2 ) {  var E5_v = 2;  } else { var E5_v = Math.ceil(E5_x) ; }  }

} else { 
var E5_v =  0 ;
}
 
document.getElementById('E5').value = parseInt(E5_v) ;  
if ( document.getElementById('H5').value > 0 )  {
var I5_x = parseInt(H5_v) * parseInt(E5_v) /2;
if (( $( "#I5" ).val() != 0 ) && ($( "#I5" ).val() != I5_x) ) {  var I5_v = $( "#I5" ).val() ; } else { 
var I5_v = parseInt(H5_v) * parseInt(E5_v) /2;  }
} else { 
if ( document.getElementById('I5').value != 0 ) { var I5_v = $( "#I5" ).val() ; } else {
var I5_v =  0 ; }
}

document.getElementById('I5').value = parseInt(I5_v) ; 
var J7_v5= parseInt(J7_v4) - parseInt(E5_v) + parseInt(I5_v) ;



var G6="6";    
var D6="0.00";  
var D6_v =  parseFloat(D6) + document.getElementById('D6').value; 
var D6_w =   parseFloat(D6_v).toFixed(2);
var H6="0.00";  
var H6_v =  parseInt(H6) + document.getElementById('H6').value; 
if ( D6_v > "0" )  { 
var E6_x = ( (parseInt(J7_v) - parseInt(J7_v5) + parseInt(Ex5_v) * ( parseInt(G6) )) / D6_w );  
if (( $( "#E6" ).val() != 0 ) && ($( "#E6" ).val() != E6_x) ) {  var E6_v = $( "#E6" ).val() ; } else { 
if ( E6_x < 2 ) {  var E6_v = 2;  } else { var E6_v = Math.ceil(E6_x) ; }  }

} else { 
var E6_v =  0 ;
}
 
document.getElementById('E6').value = parseInt(E6_v) ;  
if ( document.getElementById('H6').value > 0 )  {
var I6_x = parseInt(H6_v) * parseInt(E6_v) /2;
if (( $( "#I6" ).val() != 0 ) && ($( "#I6" ).val() != I6_x) ) {  var I6_v = $( "#I6" ).val() ; } else { 
var I6_v = parseInt(H6_v) * parseInt(E6_v) /2;  }
} else { 
if ( document.getElementById('I6').value != 0 ) { var I6_v = $( "#I6" ).val() ; } else {
var I6_v =  0 ; }
}

document.getElementById('I6').value = parseInt(I6_v) ; 
var J7_v6= parseInt(J7_v5) - parseInt(E6_v) + parseInt(I6_v) ;



var G7="7";    
var D7="0.00";  
var D7_v =  parseFloat(D7) + document.getElementById('D7').value; 
var D7_w =   parseFloat(D7_v).toFixed(2);
var H7="0.00";  
var H7_v =  parseInt(H7) + document.getElementById('H7').value; 
if ( D7_v > "0" )  { 
var E7_x = ( (parseInt(J7_v) - parseInt(J7_v6) + parseInt(Ex5_v) * ( parseInt(G7) )) / D7_w );  
if (( $( "#E7" ).val() != 0 ) && ($( "#E7" ).val() != E7_x) ) {  var E7_v = $( "#E7" ).val() ; } else { 
if ( E7_x < 2 ) {  var E7_v = 2;  } else { var E7_v = Math.ceil(E7_x) ; }  }

} else { 
var E7_v =  0 ;
}
 
document.getElementById('E7').value = parseInt(E7_v) ;  
if ( document.getElementById('H7').value > 0 )  {
var I7_x = parseInt(H7_v) * parseInt(E7_v) /2;
if (( $( "#I7" ).val() != 0 ) && ($( "#I7" ).val() != I7_x) ) {  var I7_v = $( "#I7" ).val() ; } else { 
var I7_v = parseInt(H7_v) * parseInt(E7_v) /2;  }
} else { 
if ( document.getElementById('I7').value != 0 ) { var I7_v = $( "#I7" ).val() ; } else {
var I7_v =  0 ; }
}

document.getElementById('I7').value = parseInt(I7_v) ; 
var J7_v7= parseInt(J7_v6) - parseInt(E7_v) + parseInt(I7_v) ;



var G8="8";    
var D8="0.00";  
var D8_v =  parseFloat(D8) + document.getElementById('D8').value; 
var D8_w =   parseFloat(D8_v).toFixed(2);
var H8="0.00";  
var H8_v =  parseInt(H8) + document.getElementById('H8').value; 
if ( D8_v > "0" )  { 
var E8_x = ( (parseInt(J7_v) - parseInt(J7_v7) + parseInt(Ex5_v) * ( parseInt(G8) )) / D8_w );  
if (( $( "#E8" ).val() != 0 ) && ($( "#E8" ).val() != E8_x) ) {  var E8_v = $( "#E8" ).val() ; } else { 
if ( E8_x < 2 ) {  var E8_v = 2;  } else { var E8_v = Math.ceil(E8_x) ; }  }

} else { 
var E8_v =  0 ;
}
 
document.getElementById('E8').value = parseInt(E8_v) ;  
if ( document.getElementById('H8').value > 0 )  {
var I8_x = parseInt(H8_v) * parseInt(E8_v) /2;
if (( $( "#I8" ).val() != 0 ) && ($( "#I8" ).val() != I8_x) ) {  var I8_v = $( "#I8" ).val() ; } else { 
var I8_v = parseInt(H8_v) * parseInt(E8_v) /2;  }
} else { 
if ( document.getElementById('I8').value != 0 ) { var I8_v = $( "#I8" ).val() ; } else {
var I8_v =  0 ; }
}

document.getElementById('I8').value = parseInt(I8_v) ; 
var J7_v8= parseInt(J7_v7) - parseInt(E8_v) + parseInt(I8_v) ;



var G9="9";    
var D9="0.00";  
var D9_v =  parseFloat(D9) + document.getElementById('D9').value; 
var D9_w =   parseFloat(D9_v).toFixed(2);
var H9="0.00";  
var H9_v =  parseInt(H9) + document.getElementById('H9').value; 
if ( D9_v > "0" )  { 
var E9_x = ( (parseInt(J7_v) - parseInt(J7_v8) + parseInt(Ex5_v) * ( parseInt(G9) )) / D9_w );  
if (( $( "#E9" ).val() != 0 ) && ($( "#E9" ).val() != E9_x) ) {  var E9_v = $( "#E9" ).val() ; } else { 
if ( E9_x < 2 ) {  var E9_v = 2;  } else { var E9_v = Math.ceil(E9_x) ; }  }

} else { 
var E9_v =  0 ;
}
 
document.getElementById('E9').value = parseInt(E9_v) ;  
if ( document.getElementById('H9').value > 0 )  {
var I9_x = parseInt(H9_v) * parseInt(E9_v) /2;
if (( $( "#I9" ).val() != 0 ) && ($( "#I9" ).val() != I9_x) ) {  var I9_v = $( "#I9" ).val() ; } else { 
var I9_v = parseInt(H9_v) * parseInt(E9_v) /2;  }
} else { 
if ( document.getElementById('I9').value != 0 ) { var I9_v = $( "#I9" ).val() ; } else {
var I9_v =  0 ; }
}

document.getElementById('I9').value = parseInt(I9_v) ; 
var J7_v9= parseInt(J7_v8) - parseInt(E9_v) + parseInt(I9_v) ;



var G10="10";    
var D10="0.00";  
var D10_v =  parseFloat(D10) + document.getElementById('D10').value; 
var D10_w =   parseFloat(D10_v).toFixed(2);
var H10="0.00";  
var H10_v =  parseInt(H10) + document.getElementById('H10').value; 
if ( D10_v > "0" )  { 
var E10_x = ( (parseInt(J7_v) - parseInt(J7_v9) + parseInt(Ex5_v) * ( parseInt(G10) )) / D10_w );  
if (( $( "#E10" ).val() != 0 ) && ($( "#E10" ).val() != E10_x) ) {  var E10_v = $( "#E10" ).val() ; } else { 
if ( E10_x < 2 ) {  var E10_v = 2;  } else { var E10_v = Math.ceil(E10_x) ; }  }

} else { 
var E10_v =  0 ;
}
 
document.getElementById('E10').value = parseInt(E10_v) ;  
if ( document.getElementById('H10').value > 0 )  {
var I10_x = parseInt(H10_v) * parseInt(E10_v) /2;
if (( $( "#I10" ).val() != 0 ) && ($( "#I10" ).val() != I10_x) ) {  var I10_v = $( "#I10" ).val() ; } else { 
var I10_v = parseInt(H10_v) * parseInt(E10_v) /2;  }
} else { 
if ( document.getElementById('I10').value != 0 ) { var I10_v = $( "#I10" ).val() ; } else {
var I10_v =  0 ; }
}

document.getElementById('I10').value = parseInt(I10_v) ; 
var J7_v10= parseInt(J7_v9) - parseInt(E10_v) + parseInt(I10_v) ;



var G11="11";    
var D11="0.00";  
var D11_v =  parseFloat(D11) + document.getElementById('D11').value; 
var D11_w =   parseFloat(D11_v).toFixed(2);
var H11="0.00";  
var H11_v =  parseInt(H11) + document.getElementById('H11').value; 
if ( D11_v > "0" )  { 
var E11_x = ( (parseInt(J7_v) - parseInt(J7_v10) + parseInt(Ex5_v) * ( parseInt(G11) )) / D11_w );  
if (( $( "#E11" ).val() != 0 ) && ($( "#E11" ).val() != E11_x) ) {  var E11_v = $( "#E11" ).val() ; } else { 
if ( E11_x < 2 ) {  var E11_v = 2;  } else { var E11_v = Math.ceil(E11_x) ; }  }

} else { 
var E11_v =  0 ;
}
 
document.getElementById('E11').value = parseInt(E11_v) ;  
if ( document.getElementById('H11').value > 0 )  {
var I11_x = parseInt(H11_v) * parseInt(E11_v) /2;
if (( $( "#I11" ).val() != 0 ) && ($( "#I11" ).val() != I11_x) ) {  var I11_v = $( "#I11" ).val() ; } else { 
var I11_v = parseInt(H11_v) * parseInt(E11_v) /2;  }
} else { 
if ( document.getElementById('I11').value != 0 ) { var I11_v = $( "#I11" ).val() ; } else {
var I11_v =  0 ; }
}

document.getElementById('I11').value = parseInt(I11_v) ; 
var J7_v11= parseInt(J7_v10) - parseInt(E11_v) + parseInt(I11_v) ;



var G12="12";    
var D12="0.00";  
var D12_v =  parseFloat(D12) + document.getElementById('D12').value; 
var D12_w =   parseFloat(D12_v).toFixed(2);
var H12="0.00";  
var H12_v =  parseInt(H12) + document.getElementById('H12').value; 
if ( D12_v > "0" )  { 
var E12_x = ( (parseInt(J7_v) - parseInt(J7_v11) + parseInt(Ex5_v) * ( parseInt(G12) )) / D12_w );  
if (( $( "#E12" ).val() != 0 ) && ($( "#E12" ).val() != E12_x) ) {  var E12_v = $( "#E12" ).val() ; } else { 
if ( E12_x < 2 ) {  var E12_v = 2;  } else { var E12_v = Math.ceil(E12_x) ; }  }

} else { 
var E12_v =  0 ;
}
 
document.getElementById('E12').value = parseInt(E12_v) ;  
if ( document.getElementById('H12').value > 0 )  {
var I12_x = parseInt(H12_v) * parseInt(E12_v) /2;
if (( $( "#I12" ).val() != 0 ) && ($( "#I12" ).val() != I12_x) ) {  var I12_v = $( "#I12" ).val() ; } else { 
var I12_v = parseInt(H12_v) * parseInt(E12_v) /2;  }
} else { 
if ( document.getElementById('I12').value != 0 ) { var I12_v = $( "#I12" ).val() ; } else {
var I12_v =  0 ; }
}

document.getElementById('I12').value = parseInt(I12_v) ; 
var J7_v12= parseInt(J7_v11) - parseInt(E12_v) + parseInt(I12_v) ;



var G13="13";    
var D13="0.00";  
var D13_v =  parseFloat(D13) + document.getElementById('D13').value; 
var D13_w =   parseFloat(D13_v).toFixed(2);
var H13="0.00";  
var H13_v =  parseInt(H13) + document.getElementById('H13').value; 
if ( D13_v > "0" )  { 
var E13_x = ( (parseInt(J7_v) - parseInt(J7_v12) + parseInt(Ex5_v) * ( parseInt(G13) )) / D13_w );  
if (( $( "#E13" ).val() != 0 ) && ($( "#E13" ).val() != E13_x) ) {  var E13_v = $( "#E13" ).val() ; } else { 
if ( E13_x < 2 ) {  var E13_v = 2;  } else { var E13_v = Math.ceil(E13_x) ; }  }

} else { 
var E13_v =  0 ;
}
 
document.getElementById('E13').value = parseInt(E13_v) ;  
if ( document.getElementById('H13').value > 0 )  {
var I13_x = parseInt(H13_v) * parseInt(E13_v) /2;
if (( $( "#I13" ).val() != 0 ) && ($( "#I13" ).val() != I13_x) ) {  var I13_v = $( "#I13" ).val() ; } else { 
var I13_v = parseInt(H13_v) * parseInt(E13_v) /2;  }
} else { 
if ( document.getElementById('I13').value != 0 ) { var I13_v = $( "#I13" ).val() ; } else {
var I13_v =  0 ; }
}

document.getElementById('I13').value = parseInt(I13_v) ; 
var J7_v13= parseInt(J7_v12) - parseInt(E13_v) + parseInt(I13_v) ;



var G14="14";    
var D14="0.00";  
var D14_v =  parseFloat(D14) + document.getElementById('D14').value; 
var D14_w =   parseFloat(D14_v).toFixed(2);
var H14="0.00";  
var H14_v =  parseInt(H14) + document.getElementById('H14').value; 
if ( D14_v > "0" )  { 
var E14_x = ( (parseInt(J7_v) - parseInt(J7_v13) + parseInt(Ex5_v) * ( parseInt(G14) )) / D14_w );  
if (( $( "#E14" ).val() != 0 ) && ($( "#E14" ).val() != E14_x) ) {  var E14_v = $( "#E14" ).val() ; } else { 
if ( E14_x < 2 ) {  var E14_v = 2;  } else { var E14_v = Math.ceil(E14_x) ; }  }

} else { 
var E14_v =  0 ;
}
 
document.getElementById('E14').value = parseInt(E14_v) ;  
if ( document.getElementById('H14').value > 0 )  {
var I14_x = parseInt(H14_v) * parseInt(E14_v) /2;
if (( $( "#I14" ).val() != 0 ) && ($( "#I14" ).val() != I14_x) ) {  var I14_v = $( "#I14" ).val() ; } else { 
var I14_v = parseInt(H14_v) * parseInt(E14_v) /2;  }
} else { 
if ( document.getElementById('I14').value != 0 ) { var I14_v = $( "#I14" ).val() ; } else {
var I14_v =  0 ; }
}

document.getElementById('I14').value = parseInt(I14_v) ; 
var J7_v14= parseInt(J7_v13) - parseInt(E14_v) + parseInt(I14_v) ;



var G15="15";    
var D15="0.00";  
var D15_v =  parseFloat(D15) + document.getElementById('D15').value; 
var D15_w =   parseFloat(D15_v).toFixed(2);
var H15="0.00";  
var H15_v =  parseInt(H15) + document.getElementById('H15').value; 
if ( D15_v > "0" )  { 
var E15_x = ( (parseInt(J7_v) - parseInt(J7_v14) + parseInt(Ex5_v) * ( parseInt(G15) )) / D15_w );  
if (( $( "#E15" ).val() != 0 ) && ($( "#E15" ).val() != E15_x) ) {  var E15_v = $( "#E15" ).val() ; } else { 
if ( E15_x < 2 ) {  var E15_v = 2;  } else { var E15_v = Math.ceil(E15_x) ; }  }

} else { 
var E15_v =  0 ;
}
 
document.getElementById('E15').value = parseInt(E15_v) ;  
if ( document.getElementById('H15').value > 0 )  {
var I15_x = parseInt(H15_v) * parseInt(E15_v) /2;
if (( $( "#I15" ).val() != 0 ) && ($( "#I15" ).val() != I15_x) ) {  var I15_v = $( "#I15" ).val() ; } else { 
var I15_v = parseInt(H15_v) * parseInt(E15_v) /2;  }
} else { 
if ( document.getElementById('I15').value != 0 ) { var I15_v = $( "#I15" ).val() ; } else {
var I15_v =  0 ; }
}

document.getElementById('I15').value = parseInt(I15_v) ; 
var J7_v15= parseInt(J7_v14) - parseInt(E15_v) + parseInt(I15_v) ;



var G16="16";    
var D16="0.00";  
var D16_v =  parseFloat(D16) + document.getElementById('D16').value; 
var D16_w =   parseFloat(D16_v).toFixed(2);
var H16="0.00";  
var H16_v =  parseInt(H16) + document.getElementById('H16').value; 
if ( D16_v > "0" )  { 
var E16_x = ( (parseInt(J7_v) - parseInt(J7_v15) + parseInt(Ex5_v) * ( parseInt(G16) )) / D16_w );  
if (( $( "#E16" ).val() != 0 ) && ($( "#E16" ).val() != E16_x) ) {  var E16_v = $( "#E16" ).val() ; } else { 
if ( E16_x < 2 ) {  var E16_v = 2;  } else { var E16_v = Math.ceil(E16_x) ; }  }

} else { 
var E16_v =  0 ;
}
 
document.getElementById('E16').value = parseInt(E16_v) ;  
if ( document.getElementById('H16').value > 0 )  {
var I16_x = parseInt(H16_v) * parseInt(E16_v) /2;
if (( $( "#I16" ).val() != 0 ) && ($( "#I16" ).val() != I16_x) ) {  var I16_v = $( "#I16" ).val() ; } else { 
var I16_v = parseInt(H16_v) * parseInt(E16_v) /2;  }
} else { 
if ( document.getElementById('I16').value != 0 ) { var I16_v = $( "#I16" ).val() ; } else {
var I16_v =  0 ; }
}

document.getElementById('I16').value = parseInt(I16_v) ; 
var J7_v16= parseInt(J7_v15) - parseInt(E16_v) + parseInt(I16_v) ;



var G17="17";    
var D17="0.00";  
var D17_v =  parseFloat(D17) + document.getElementById('D17').value; 
var D17_w =   parseFloat(D17_v).toFixed(2);
var H17="0.00";  
var H17_v =  parseInt(H17) + document.getElementById('H17').value; 
if ( D17_v > "0" )  { 
var E17_x = ( (parseInt(J7_v) - parseInt(J7_v16) + parseInt(Ex5_v) * ( parseInt(G17) )) / D17_w );  
if (( $( "#E17" ).val() != 0 ) && ($( "#E17" ).val() != E17_x) ) {  var E17_v = $( "#E17" ).val() ; } else { 
if ( E17_x < 2 ) {  var E17_v = 2;  } else { var E17_v = Math.ceil(E17_x) ; }  }

} else { 
var E17_v =  0 ;
}
 
document.getElementById('E17').value = parseInt(E17_v) ;  
if ( document.getElementById('H17').value > 0 )  {
var I17_x = parseInt(H17_v) * parseInt(E17_v) /2;
if (( $( "#I17" ).val() != 0 ) && ($( "#I17" ).val() != I17_x) ) {  var I17_v = $( "#I17" ).val() ; } else { 
var I17_v = parseInt(H17_v) * parseInt(E17_v) /2;  }
} else { 
if ( document.getElementById('I17').value != 0 ) { var I17_v = $( "#I17" ).val() ; } else {
var I17_v =  0 ; }
}

document.getElementById('I17').value = parseInt(I17_v) ; 
var J7_v17= parseInt(J7_v16) - parseInt(E17_v) + parseInt(I17_v) ;



var G18="18";    
var D18="0.00";  
var D18_v =  parseFloat(D18) + document.getElementById('D18').value; 
var D18_w =   parseFloat(D18_v).toFixed(2);
var H18="0.00";  
var H18_v =  parseInt(H18) + document.getElementById('H18').value; 
if ( D18_v > "0" )  { 
var E18_x = ( (parseInt(J7_v) - parseInt(J7_v17) + parseInt(Ex5_v) * ( parseInt(G18) )) / D18_w );  
if (( $( "#E18" ).val() != 0 ) && ($( "#E18" ).val() != E18_x) ) {  var E18_v = $( "#E18" ).val() ; } else { 
if ( E18_x < 2 ) {  var E18_v = 2;  } else { var E18_v = Math.ceil(E18_x) ; }  }

} else { 
var E18_v =  0 ;
}
 
document.getElementById('E18').value = parseInt(E18_v) ;  
if ( document.getElementById('H18').value > 0 )  {
var I18_x = parseInt(H18_v) * parseInt(E18_v) /2;
if (( $( "#I18" ).val() != 0 ) && ($( "#I18" ).val() != I18_x) ) {  var I18_v = $( "#I18" ).val() ; } else { 
var I18_v = parseInt(H18_v) * parseInt(E18_v) /2;  }
} else { 
if ( document.getElementById('I18').value != 0 ) { var I18_v = $( "#I18" ).val() ; } else {
var I18_v =  0 ; }
}

document.getElementById('I18').value = parseInt(I18_v) ; 
var J7_v18= parseInt(J7_v17) - parseInt(E18_v) + parseInt(I18_v) ;



var G19="19";    
var D19="0.00";  
var D19_v =  parseFloat(D19) + document.getElementById('D19').value; 
var D19_w =   parseFloat(D19_v).toFixed(2);
var H19="0.00";  
var H19_v =  parseInt(H19) + document.getElementById('H19').value; 
if ( D19_v > "0" )  { 
var E19_x = ( (parseInt(J7_v) - parseInt(J7_v18) + parseInt(Ex5_v) * ( parseInt(G19) )) / D19_w );  
if (( $( "#E19" ).val() != 0 ) && ($( "#E19" ).val() != E19_x) ) {  var E19_v = $( "#E19" ).val() ; } else { 
if ( E19_x < 2 ) {  var E19_v = 2;  } else { var E19_v = Math.ceil(E19_x) ; }  }

} else { 
var E19_v =  0 ;
}
 
document.getElementById('E19').value = parseInt(E19_v) ;  
if ( document.getElementById('H19').value > 0 )  {
var I19_x = parseInt(H19_v) * parseInt(E19_v) /2;
if (( $( "#I19" ).val() != 0 ) && ($( "#I19" ).val() != I19_x) ) {  var I19_v = $( "#I19" ).val() ; } else { 
var I19_v = parseInt(H19_v) * parseInt(E19_v) /2;  }
} else { 
if ( document.getElementById('I19').value != 0 ) { var I19_v = $( "#I19" ).val() ; } else {
var I19_v =  0 ; }
}

document.getElementById('I19').value = parseInt(I19_v) ; 
var J7_v19= parseInt(J7_v18) - parseInt(E19_v) + parseInt(I19_v) ;



var G20="20";    
var D20="0.00";  
var D20_v =  parseFloat(D20) + document.getElementById('D20').value; 
var D20_w =   parseFloat(D20_v).toFixed(2);
var H20="0.00";  
var H20_v =  parseInt(H20) + document.getElementById('H20').value; 
if ( D20_v > "0" )  { 
var E20_x = ( (parseInt(J7_v) - parseInt(J7_v19) + parseInt(Ex5_v) * ( parseInt(G20) )) / D20_w );  
if (( $( "#E20" ).val() != 0 ) && ($( "#E20" ).val() != E20_x) ) {  var E20_v = $( "#E20" ).val() ; } else { 
if ( E20_x < 2 ) {  var E20_v = 2;  } else { var E20_v = Math.ceil(E20_x) ; }  }

} else { 
var E20_v =  0 ;
}
 
document.getElementById('E20').value = parseInt(E20_v) ;  
if ( document.getElementById('H20').value > 0 )  {
var I20_x = parseInt(H20_v) * parseInt(E20_v) /2;
if (( $( "#I20" ).val() != 0 ) && ($( "#I20" ).val() != I20_x) ) {  var I20_v = $( "#I20" ).val() ; } else { 
var I20_v = parseInt(H20_v) * parseInt(E20_v) /2;  }
} else { 
if ( document.getElementById('I20').value != 0 ) { var I20_v = $( "#I20" ).val() ; } else {
var I20_v =  0 ; }
}

document.getElementById('I20').value = parseInt(I20_v) ; 
var J7_v20= parseInt(J7_v19) - parseInt(E20_v) + parseInt(I20_v) ;



var G21="21";    
var D21="0.00";  
var D21_v =  parseFloat(D21) + document.getElementById('D21').value; 
var D21_w =   parseFloat(D21_v).toFixed(2);
var H21="0.00";  
var H21_v =  parseInt(H21) + document.getElementById('H21').value; 
if ( D21_v > "0" )  { 
var E21_x = ( (parseInt(J7_v) - parseInt(J7_v20) + parseInt(Ex5_v) * ( parseInt(G21) )) / D21_w );  
if (( $( "#E21" ).val() != 0 ) && ($( "#E21" ).val() != E21_x) ) {  var E21_v = $( "#E21" ).val() ; } else { 
if ( E21_x < 2 ) {  var E21_v = 2;  } else { var E21_v = Math.ceil(E21_x) ; }  }

} else { 
var E21_v =  0 ;
}
 
document.getElementById('E21').value = parseInt(E21_v) ;  
if ( document.getElementById('H21').value > 0 )  {
var I21_x = parseInt(H21_v) * parseInt(E21_v) /2;
if (( $( "#I21" ).val() != 0 ) && ($( "#I21" ).val() != I21_x) ) {  var I21_v = $( "#I21" ).val() ; } else { 
var I21_v = parseInt(H21_v) * parseInt(E21_v) /2;  }
} else { 
if ( document.getElementById('I21').value != 0 ) { var I21_v = $( "#I21" ).val() ; } else {
var I21_v =  0 ; }
}

document.getElementById('I21').value = parseInt(I21_v) ; 
var J7_v21= parseInt(J7_v20) - parseInt(E21_v) + parseInt(I21_v) ;



var G22="22";    
var D22="0.00";  
var D22_v =  parseFloat(D22) + document.getElementById('D22').value; 
var D22_w =   parseFloat(D22_v).toFixed(2);
var H22="0.00";  
var H22_v =  parseInt(H22) + document.getElementById('H22').value; 
if ( D22_v > "0" )  { 
var E22_x = ( (parseInt(J7_v) - parseInt(J7_v21) + parseInt(Ex5_v) * ( parseInt(G22) )) / D22_w );  
if (( $( "#E22" ).val() != 0 ) && ($( "#E22" ).val() != E22_x) ) {  var E22_v = $( "#E22" ).val() ; } else { 
if ( E22_x < 2 ) {  var E22_v = 2;  } else { var E22_v = Math.ceil(E22_x) ; }  }

} else { 
var E22_v =  0 ;
}
 
document.getElementById('E22').value = parseInt(E22_v) ;  
if ( document.getElementById('H22').value > 0 )  {
var I22_x = parseInt(H22_v) * parseInt(E22_v) /2;
if (( $( "#I22" ).val() != 0 ) && ($( "#I22" ).val() != I22_x) ) {  var I22_v = $( "#I22" ).val() ; } else { 
var I22_v = parseInt(H22_v) * parseInt(E22_v) /2;  }
} else { 
if ( document.getElementById('I22').value != 0 ) { var I22_v = $( "#I22" ).val() ; } else {
var I22_v =  0 ; }
}

document.getElementById('I22').value = parseInt(I22_v) ; 
var J7_v22= parseInt(J7_v21) - parseInt(E22_v) + parseInt(I22_v) ;



var G23="23";    
var D23="0.00";  
var D23_v =  parseFloat(D23) + document.getElementById('D23').value; 
var D23_w =   parseFloat(D23_v).toFixed(2);
var H23="0.00";  
var H23_v =  parseInt(H23) + document.getElementById('H23').value; 
if ( D23_v > "0" )  { 
var E23_x = ( (parseInt(J7_v) - parseInt(J7_v22) + parseInt(Ex5_v) * ( parseInt(G23) )) / D23_w );  
if (( $( "#E23" ).val() != 0 ) && ($( "#E23" ).val() != E23_x) ) {  var E23_v = $( "#E23" ).val() ; } else { 
if ( E23_x < 2 ) {  var E23_v = 2;  } else { var E23_v = Math.ceil(E23_x) ; }  }

} else { 
var E23_v =  0 ;
}
 
document.getElementById('E23').value = parseInt(E23_v) ;  
if ( document.getElementById('H23').value > 0 )  {
var I23_x = parseInt(H23_v) * parseInt(E23_v) /2;
if (( $( "#I23" ).val() != 0 ) && ($( "#I23" ).val() != I23_x) ) {  var I23_v = $( "#I23" ).val() ; } else { 
var I23_v = parseInt(H23_v) * parseInt(E23_v) /2;  }
} else { 
if ( document.getElementById('I23').value != 0 ) { var I23_v = $( "#I23" ).val() ; } else {
var I23_v =  0 ; }
}

document.getElementById('I23').value = parseInt(I23_v) ; 
var J7_v23= parseInt(J7_v22) - parseInt(E23_v) + parseInt(I23_v) ;



var G24="24";    
var D24="0.00";  
var D24_v =  parseFloat(D24) + document.getElementById('D24').value; 
var D24_w =   parseFloat(D24_v).toFixed(2);
var H24="0.00";  
var H24_v =  parseInt(H24) + document.getElementById('H24').value; 
if ( D24_v > "0" )  { 
var E24_x = ( (parseInt(J7_v) - parseInt(J7_v23) + parseInt(Ex5_v) * ( parseInt(G24) )) / D24_w );  
if (( $( "#E24" ).val() != 0 ) && ($( "#E24" ).val() != E24_x) ) {  var E24_v = $( "#E24" ).val() ; } else { 
if ( E24_x < 2 ) {  var E24_v = 2;  } else { var E24_v = Math.ceil(E24_x) ; }  }

} else { 
var E24_v =  0 ;
}
 
document.getElementById('E24').value = parseInt(E24_v) ;  
if ( document.getElementById('H24').value > 0 )  {
var I24_x = parseInt(H24_v) * parseInt(E24_v) /2;
if (( $( "#I24" ).val() != 0 ) && ($( "#I24" ).val() != I24_x) ) {  var I24_v = $( "#I24" ).val() ; } else { 
var I24_v = parseInt(H24_v) * parseInt(E24_v) /2;  }
} else { 
if ( document.getElementById('I24').value != 0 ) { var I24_v = $( "#I24" ).val() ; } else {
var I24_v =  0 ; }
}

document.getElementById('I24').value = parseInt(I24_v) ; 
var J7_v24= parseInt(J7_v23) - parseInt(E24_v) + parseInt(I24_v) ;



var G25="25";    
var D25="0.00";  
var D25_v =  parseFloat(D25) + document.getElementById('D25').value; 
var D25_w =   parseFloat(D25_v).toFixed(2);
var H25="0.00";  
var H25_v =  parseInt(H25) + document.getElementById('H25').value; 
if ( D25_v > "0" )  { 
var E25_x = ( (parseInt(J7_v) - parseInt(J7_v24) + parseInt(Ex5_v) * ( parseInt(G25) )) / D25_w );  
if (( $( "#E25" ).val() != 0 ) && ($( "#E25" ).val() != E25_x) ) {  var E25_v = $( "#E25" ).val() ; } else { 
if ( E25_x < 2 ) {  var E25_v = 2;  } else { var E25_v = Math.ceil(E25_x) ; }  }

} else { 
var E25_v =  0 ;
}
 
document.getElementById('E25').value = parseInt(E25_v) ;  
if ( document.getElementById('H25').value > 0 )  {
var I25_x = parseInt(H25_v) * parseInt(E25_v) /2;
if (( $( "#I25" ).val() != 0 ) && ($( "#I25" ).val() != I25_x) ) {  var I25_v = $( "#I25" ).val() ; } else { 
var I25_v = parseInt(H25_v) * parseInt(E25_v) /2;  }
} else { 
if ( document.getElementById('I25').value != 0 ) { var I25_v = $( "#I25" ).val() ; } else {
var I25_v =  0 ; }
}

document.getElementById('I25').value = parseInt(I25_v) ; 
var J7_v25= parseInt(J7_v24) - parseInt(E25_v) + parseInt(I25_v) ;



var G26="26";    
var D26="0.00";  
var D26_v =  parseFloat(D26) + document.getElementById('D26').value; 
var D26_w =   parseFloat(D26_v).toFixed(2);
var H26="0.00";  
var H26_v =  parseInt(H26) + document.getElementById('H26').value; 
if ( D26_v > "0" )  { 
var E26_x = ( (parseInt(J7_v) - parseInt(J7_v25) + parseInt(Ex5_v) * ( parseInt(G26) )) / D26_w );  
if (( $( "#E26" ).val() != 0 ) && ($( "#E26" ).val() != E26_x) ) {  var E26_v = $( "#E26" ).val() ; } else { 
if ( E26_x < 2 ) {  var E26_v = 2;  } else { var E26_v = Math.ceil(E26_x) ; }  }

} else { 
var E26_v =  0 ;
}
 
document.getElementById('E26').value = parseInt(E26_v) ;  
if ( document.getElementById('H26').value > 0 )  {
var I26_x = parseInt(H26_v) * parseInt(E26_v) /2;
if (( $( "#I26" ).val() != 0 ) && ($( "#I26" ).val() != I26_x) ) {  var I26_v = $( "#I26" ).val() ; } else { 
var I26_v = parseInt(H26_v) * parseInt(E26_v) /2;  }
} else { 
if ( document.getElementById('I26').value != 0 ) { var I26_v = $( "#I26" ).val() ; } else {
var I26_v =  0 ; }
}

document.getElementById('I26').value = parseInt(I26_v) ; 
var J7_v26= parseInt(J7_v25) - parseInt(E26_v) + parseInt(I26_v) ;



var G27="27";    
var D27="0.00";  
var D27_v =  parseFloat(D27) + document.getElementById('D27').value; 
var D27_w =   parseFloat(D27_v).toFixed(2);
var H27="0.00";  
var H27_v =  parseInt(H27) + document.getElementById('H27').value; 
if ( D27_v > "0" )  { 
var E27_x = ( (parseInt(J7_v) - parseInt(J7_v26) + parseInt(Ex5_v) * ( parseInt(G27) )) / D27_w );  
if (( $( "#E27" ).val() != 0 ) && ($( "#E27" ).val() != E27_x) ) {  var E27_v = $( "#E27" ).val() ; } else { 
if ( E27_x < 2 ) {  var E27_v = 2;  } else { var E27_v = Math.ceil(E27_x) ; }  }

} else { 
var E27_v =  0 ;
}
 
document.getElementById('E27').value = parseInt(E27_v) ;  
if ( document.getElementById('H27').value > 0 )  {
var I27_x = parseInt(H27_v) * parseInt(E27_v) /2;
if (( $( "#I27" ).val() != 0 ) && ($( "#I27" ).val() != I27_x) ) {  var I27_v = $( "#I27" ).val() ; } else { 
var I27_v = parseInt(H27_v) * parseInt(E27_v) /2;  }
} else { 
if ( document.getElementById('I27').value != 0 ) { var I27_v = $( "#I27" ).val() ; } else {
var I27_v =  0 ; }
}

document.getElementById('I27').value = parseInt(I27_v) ; 
var J7_v27= parseInt(J7_v26) - parseInt(E27_v) + parseInt(I27_v) ;



var G28="28";    
var D28="0.00";  
var D28_v =  parseFloat(D28) + document.getElementById('D28').value; 
var D28_w =   parseFloat(D28_v).toFixed(2);
var H28="0.00";  
var H28_v =  parseInt(H28) + document.getElementById('H28').value; 
if ( D28_v > "0" )  { 
var E28_x = ( (parseInt(J7_v) - parseInt(J7_v27) + parseInt(Ex5_v) * ( parseInt(G28) )) / D28_w );  
if (( $( "#E28" ).val() != 0 ) && ($( "#E28" ).val() != E28_x) ) {  var E28_v = $( "#E28" ).val() ; } else { 
if ( E28_x < 2 ) {  var E28_v = 2;  } else { var E28_v = Math.ceil(E28_x) ; }  }

} else { 
var E28_v =  0 ;
}
 
document.getElementById('E28').value = parseInt(E28_v) ;  
if ( document.getElementById('H28').value > 0 )  {
var I28_x = parseInt(H28_v) * parseInt(E28_v) /2;
if (( $( "#I28" ).val() != 0 ) && ($( "#I28" ).val() != I28_x) ) {  var I28_v = $( "#I28" ).val() ; } else { 
var I28_v = parseInt(H28_v) * parseInt(E28_v) /2;  }
} else { 
if ( document.getElementById('I28').value != 0 ) { var I28_v = $( "#I28" ).val() ; } else {
var I28_v =  0 ; }
}

document.getElementById('I28').value = parseInt(I28_v) ; 
var J7_v28= parseInt(J7_v27) - parseInt(E28_v) + parseInt(I28_v) ;



var G29="29";    
var D29="0.00";  
var D29_v =  parseFloat(D29) + document.getElementById('D29').value; 
var D29_w =   parseFloat(D29_v).toFixed(2);
var H29="0.00";  
var H29_v =  parseInt(H29) + document.getElementById('H29').value; 
if ( D29_v > "0" )  { 
var E29_x = ( (parseInt(J7_v) - parseInt(J7_v28) + parseInt(Ex5_v) * ( parseInt(G29) )) / D29_w );  
if (( $( "#E29" ).val() != 0 ) && ($( "#E29" ).val() != E29_x) ) {  var E29_v = $( "#E29" ).val() ; } else { 
if ( E29_x < 2 ) {  var E29_v = 2;  } else { var E29_v = Math.ceil(E29_x) ; }  }

} else { 
var E29_v =  0 ;
}
 
document.getElementById('E29').value = parseInt(E29_v) ;  
if ( document.getElementById('H29').value > 0 )  {
var I29_x = parseInt(H29_v) * parseInt(E29_v) /2;
if (( $( "#I29" ).val() != 0 ) && ($( "#I29" ).val() != I29_x) ) {  var I29_v = $( "#I29" ).val() ; } else { 
var I29_v = parseInt(H29_v) * parseInt(E29_v) /2;  }
} else { 
if ( document.getElementById('I29').value != 0 ) { var I29_v = $( "#I29" ).val() ; } else {
var I29_v =  0 ; }
}

document.getElementById('I29').value = parseInt(I29_v) ; 
var J7_v29= parseInt(J7_v28) - parseInt(E29_v) + parseInt(I29_v) ;



var G30="30";    
var D30="0.00";  
var D30_v =  parseFloat(D30) + document.getElementById('D30').value; 
var D30_w =   parseFloat(D30_v).toFixed(2);
var H30="0.00";  
var H30_v =  parseInt(H30) + document.getElementById('H30').value; 
if ( D30_v > "0" )  { 
var E30_x = ( (parseInt(J7_v) - parseInt(J7_v29) + parseInt(Ex5_v) * ( parseInt(G30) )) / D30_w );  
if (( $( "#E30" ).val() != 0 ) && ($( "#E30" ).val() != E30_x) ) {  var E30_v = $( "#E30" ).val() ; } else { 
if ( E30_x < 2 ) {  var E30_v = 2;  } else { var E30_v = Math.ceil(E30_x) ; }  }

} else { 
var E30_v =  0 ;
}
 
document.getElementById('E30').value = parseInt(E30_v) ;  
if ( document.getElementById('H30').value > 0 )  {
var I30_x = parseInt(H30_v) * parseInt(E30_v) /2;
if (( $( "#I30" ).val() != 0 ) && ($( "#I30" ).val() != I30_x) ) {  var I30_v = $( "#I30" ).val() ; } else { 
var I30_v = parseInt(H30_v) * parseInt(E30_v) /2;  }
} else { 
if ( document.getElementById('I30').value != 0 ) { var I30_v = $( "#I30" ).val() ; } else {
var I30_v =  0 ; }
}

document.getElementById('I30').value = parseInt(I30_v) ; 
var J7_v30= parseInt(J7_v29) - parseInt(E30_v) + parseInt(I30_v) ;



var G31="31";    
var D31="0.00";  
var D31_v =  parseFloat(D31) + document.getElementById('D31').value; 
var D31_w =   parseFloat(D31_v).toFixed(2);
var H31="0.00";  
var H31_v =  parseInt(H31) + document.getElementById('H31').value; 
if ( D31_v > "0" )  { 
var E31_x = ( (parseInt(J7_v) - parseInt(J7_v30) + parseInt(Ex5_v) * ( parseInt(G31) )) / D31_w );  
if (( $( "#E31" ).val() != 0 ) && ($( "#E31" ).val() != E31_x) ) {  var E31_v = $( "#E31" ).val() ; } else { 
if ( E31_x < 2 ) {  var E31_v = 2;  } else { var E31_v = Math.ceil(E31_x) ; }  }

} else { 
var E31_v =  0 ;
}
 
document.getElementById('E31').value = parseInt(E31_v) ;  
if ( document.getElementById('H31').value > 0 )  {
var I31_x = parseInt(H31_v) * parseInt(E31_v) /2;
if (( $( "#I31" ).val() != 0 ) && ($( "#I31" ).val() != I31_x) ) {  var I31_v = $( "#I31" ).val() ; } else { 
var I31_v = parseInt(H31_v) * parseInt(E31_v) /2;  }
} else { 
if ( document.getElementById('I31').value != 0 ) { var I31_v = $( "#I31" ).val() ; } else {
var I31_v =  0 ; }
}

document.getElementById('I31').value = parseInt(I31_v) ; 
var J7_v31= parseInt(J7_v30) - parseInt(E31_v) + parseInt(I31_v) ;



var G32="32";    
var D32="0.00";  
var D32_v =  parseFloat(D32) + document.getElementById('D32').value; 
var D32_w =   parseFloat(D32_v).toFixed(2);
var H32="0.00";  
var H32_v =  parseInt(H32) + document.getElementById('H32').value; 
if ( D32_v > "0" )  { 
var E32_x = ( (parseInt(J7_v) - parseInt(J7_v31) + parseInt(Ex5_v) * ( parseInt(G32) )) / D32_w );  
if (( $( "#E32" ).val() != 0 ) && ($( "#E32" ).val() != E32_x) ) {  var E32_v = $( "#E32" ).val() ; } else { 
if ( E32_x < 2 ) {  var E32_v = 2;  } else { var E32_v = Math.ceil(E32_x) ; }  }

} else { 
var E32_v =  0 ;
}
 
document.getElementById('E32').value = parseInt(E32_v) ;  
if ( document.getElementById('H32').value > 0 )  {
var I32_x = parseInt(H32_v) * parseInt(E32_v) /2;
if (( $( "#I32" ).val() != 0 ) && ($( "#I32" ).val() != I32_x) ) {  var I32_v = $( "#I32" ).val() ; } else { 
var I32_v = parseInt(H32_v) * parseInt(E32_v) /2;  }
} else { 
if ( document.getElementById('I32').value != 0 ) { var I32_v = $( "#I32" ).val() ; } else {
var I32_v =  0 ; }
}

document.getElementById('I32').value = parseInt(I32_v) ; 
var J7_v32= parseInt(J7_v31) - parseInt(E32_v) + parseInt(I32_v) ;



var G33="33";    
var D33="0.00";  
var D33_v =  parseFloat(D33) + document.getElementById('D33').value; 
var D33_w =   parseFloat(D33_v).toFixed(2);
var H33="0.00";  
var H33_v =  parseInt(H33) + document.getElementById('H33').value; 
if ( D33_v > "0" )  { 
var E33_x = ( (parseInt(J7_v) - parseInt(J7_v32) + parseInt(Ex5_v) * ( parseInt(G33) )) / D33_w );  
if (( $( "#E33" ).val() != 0 ) && ($( "#E33" ).val() != E33_x) ) {  var E33_v = $( "#E33" ).val() ; } else { 
if ( E33_x < 2 ) {  var E33_v = 2;  } else { var E33_v = Math.ceil(E33_x) ; }  }

} else { 
var E33_v =  0 ;
}
 
document.getElementById('E33').value = parseInt(E33_v) ;  
if ( document.getElementById('H33').value > 0 )  {
var I33_x = parseInt(H33_v) * parseInt(E33_v) /2;
if (( $( "#I33" ).val() != 0 ) && ($( "#I33" ).val() != I33_x) ) {  var I33_v = $( "#I33" ).val() ; } else { 
var I33_v = parseInt(H33_v) * parseInt(E33_v) /2;  }
} else { 
if ( document.getElementById('I33').value != 0 ) { var I33_v = $( "#I33" ).val() ; } else {
var I33_v =  0 ; }
}

document.getElementById('I33').value = parseInt(I33_v) ; 
var J7_v33= parseInt(J7_v32) - parseInt(E33_v) + parseInt(I33_v) ;



var G34="34";    
var D34="0.00";  
var D34_v =  parseFloat(D34) + document.getElementById('D34').value; 
var D34_w =   parseFloat(D34_v).toFixed(2);
var H34="0.00";  
var H34_v =  parseInt(H34) + document.getElementById('H34').value; 
if ( D34_v > "0" )  { 
var E34_x = ( (parseInt(J7_v) - parseInt(J7_v33) + parseInt(Ex5_v) * ( parseInt(G34) )) / D34_w );  
if (( $( "#E34" ).val() != 0 ) && ($( "#E34" ).val() != E34_x) ) {  var E34_v = $( "#E34" ).val() ; } else { 
if ( E34_x < 2 ) {  var E34_v = 2;  } else { var E34_v = Math.ceil(E34_x) ; }  }

} else { 
var E34_v =  0 ;
}
 
document.getElementById('E34').value = parseInt(E34_v) ;  
if ( document.getElementById('H34').value > 0 )  {
var I34_x = parseInt(H34_v) * parseInt(E34_v) /2;
if (( $( "#I34" ).val() != 0 ) && ($( "#I34" ).val() != I34_x) ) {  var I34_v = $( "#I34" ).val() ; } else { 
var I34_v = parseInt(H34_v) * parseInt(E34_v) /2;  }
} else { 
if ( document.getElementById('I34').value != 0 ) { var I34_v = $( "#I34" ).val() ; } else {
var I34_v =  0 ; }
}

document.getElementById('I34').value = parseInt(I34_v) ; 
var J7_v34= parseInt(J7_v33) - parseInt(E34_v) + parseInt(I34_v) ;



var G35="35";    
var D35="0.00";  
var D35_v =  parseFloat(D35) + document.getElementById('D35').value; 
var D35_w =   parseFloat(D35_v).toFixed(2);
var H35="0.00";  
var H35_v =  parseInt(H35) + document.getElementById('H35').value; 
if ( D35_v > "0" )  { 
var E35_x = ( (parseInt(J7_v) - parseInt(J7_v34) + parseInt(Ex5_v) * ( parseInt(G35) )) / D35_w );  
if (( $( "#E35" ).val() != 0 ) && ($( "#E35" ).val() != E35_x) ) {  var E35_v = $( "#E35" ).val() ; } else { 
if ( E35_x < 2 ) {  var E35_v = 2;  } else { var E35_v = Math.ceil(E35_x) ; }  }

} else { 
var E35_v =  0 ;
}
 
document.getElementById('E35').value = parseInt(E35_v) ;  
if ( document.getElementById('H35').value > 0 )  {
var I35_x = parseInt(H35_v) * parseInt(E35_v) /2;
if (( $( "#I35" ).val() != 0 ) && ($( "#I35" ).val() != I35_x) ) {  var I35_v = $( "#I35" ).val() ; } else { 
var I35_v = parseInt(H35_v) * parseInt(E35_v) /2;  }
} else { 
if ( document.getElementById('I35').value != 0 ) { var I35_v = $( "#I35" ).val() ; } else {
var I35_v =  0 ; }
}

document.getElementById('I35').value = parseInt(I35_v) ; 
var J7_v35= parseInt(J7_v34) - parseInt(E35_v) + parseInt(I35_v) ;



var G36="36";    
var D36="0.00";  
var D36_v =  parseFloat(D36) + document.getElementById('D36').value; 
var D36_w =   parseFloat(D36_v).toFixed(2);
var H36="0.00";  
var H36_v =  parseInt(H36) + document.getElementById('H36').value; 
if ( D36_v > "0" )  { 
var E36_x = ( (parseInt(J7_v) - parseInt(J7_v35) + parseInt(Ex5_v) * ( parseInt(G36) )) / D36_w );  
if (( $( "#E36" ).val() != 0 ) && ($( "#E36" ).val() != E36_x) ) {  var E36_v = $( "#E36" ).val() ; } else { 
if ( E36_x < 2 ) {  var E36_v = 2;  } else { var E36_v = Math.ceil(E36_x) ; }  }

} else { 
var E36_v =  0 ;
}
 
document.getElementById('E36').value = parseInt(E36_v) ;  
if ( document.getElementById('H36').value > 0 )  {
var I36_x = parseInt(H36_v) * parseInt(E36_v) /2;
if (( $( "#I36" ).val() != 0 ) && ($( "#I36" ).val() != I36_x) ) {  var I36_v = $( "#I36" ).val() ; } else { 
var I36_v = parseInt(H36_v) * parseInt(E36_v) /2;  }
} else { 
if ( document.getElementById('I36').value != 0 ) { var I36_v = $( "#I36" ).val() ; } else {
var I36_v =  0 ; }
}

document.getElementById('I36').value = parseInt(I36_v) ; 
var J7_v36= parseInt(J7_v35) - parseInt(E36_v) + parseInt(I36_v) ;



var G37="37";    
var D37="0.00";  
var D37_v =  parseFloat(D37) + document.getElementById('D37').value; 
var D37_w =   parseFloat(D37_v).toFixed(2);
var H37="0.00";  
var H37_v =  parseInt(H37) + document.getElementById('H37').value; 
if ( D37_v > "0" )  { 
var E37_x = ( (parseInt(J7_v) - parseInt(J7_v36) + parseInt(Ex5_v) * ( parseInt(G37) )) / D37_w );  
if (( $( "#E37" ).val() != 0 ) && ($( "#E37" ).val() != E37_x) ) {  var E37_v = $( "#E37" ).val() ; } else { 
if ( E37_x < 2 ) {  var E37_v = 2;  } else { var E37_v = Math.ceil(E37_x) ; }  }

} else { 
var E37_v =  0 ;
}
 
document.getElementById('E37').value = parseInt(E37_v) ;  
if ( document.getElementById('H37').value > 0 )  {
var I37_x = parseInt(H37_v) * parseInt(E37_v) /2;
if (( $( "#I37" ).val() != 0 ) && ($( "#I37" ).val() != I37_x) ) {  var I37_v = $( "#I37" ).val() ; } else { 
var I37_v = parseInt(H37_v) * parseInt(E37_v) /2;  }
} else { 
if ( document.getElementById('I37').value != 0 ) { var I37_v = $( "#I37" ).val() ; } else {
var I37_v =  0 ; }
}

document.getElementById('I37').value = parseInt(I37_v) ; 
var J7_v37= parseInt(J7_v36) - parseInt(E37_v) + parseInt(I37_v) ;



var G38="38";    
var D38="0.00";  
var D38_v =  parseFloat(D38) + document.getElementById('D38').value; 
var D38_w =   parseFloat(D38_v).toFixed(2);
var H38="0.00";  
var H38_v =  parseInt(H38) + document.getElementById('H38').value; 
if ( D38_v > "0" )  { 
var E38_x = ( (parseInt(J7_v) - parseInt(J7_v37) + parseInt(Ex5_v) * ( parseInt(G38) )) / D38_w );  
if (( $( "#E38" ).val() != 0 ) && ($( "#E38" ).val() != E38_x) ) {  var E38_v = $( "#E38" ).val() ; } else { 
if ( E38_x < 2 ) {  var E38_v = 2;  } else { var E38_v = Math.ceil(E38_x) ; }  }

} else { 
var E38_v =  0 ;
}
 
document.getElementById('E38').value = parseInt(E38_v) ;  
if ( document.getElementById('H38').value > 0 )  {
var I38_x = parseInt(H38_v) * parseInt(E38_v) /2;
if (( $( "#I38" ).val() != 0 ) && ($( "#I38" ).val() != I38_x) ) {  var I38_v = $( "#I38" ).val() ; } else { 
var I38_v = parseInt(H38_v) * parseInt(E38_v) /2;  }
} else { 
if ( document.getElementById('I38').value != 0 ) { var I38_v = $( "#I38" ).val() ; } else {
var I38_v =  0 ; }
}

document.getElementById('I38').value = parseInt(I38_v) ; 
var J7_v38= parseInt(J7_v37) - parseInt(E38_v) + parseInt(I38_v) ;



var G39="39";    
var D39="0.00";  
var D39_v =  parseFloat(D39) + document.getElementById('D39').value; 
var D39_w =   parseFloat(D39_v).toFixed(2);
var H39="0.00";  
var H39_v =  parseInt(H39) + document.getElementById('H39').value; 
if ( D39_v > "0" )  { 
var E39_x = ( (parseInt(J7_v) - parseInt(J7_v38) + parseInt(Ex5_v) * ( parseInt(G39) )) / D39_w );  
if (( $( "#E39" ).val() != 0 ) && ($( "#E39" ).val() != E39_x) ) {  var E39_v = $( "#E39" ).val() ; } else { 
if ( E39_x < 2 ) {  var E39_v = 2;  } else { var E39_v = Math.ceil(E39_x) ; }  }

} else { 
var E39_v =  0 ;
}
 
document.getElementById('E39').value = parseInt(E39_v) ;  
if ( document.getElementById('H39').value > 0 )  {
var I39_x = parseInt(H39_v) * parseInt(E39_v) /2;
if (( $( "#I39" ).val() != 0 ) && ($( "#I39" ).val() != I39_x) ) {  var I39_v = $( "#I39" ).val() ; } else { 
var I39_v = parseInt(H39_v) * parseInt(E39_v) /2;  }
} else { 
if ( document.getElementById('I39').value != 0 ) { var I39_v = $( "#I39" ).val() ; } else {
var I39_v =  0 ; }
}

document.getElementById('I39').value = parseInt(I39_v) ; 
var J7_v39= parseInt(J7_v38) - parseInt(E39_v) + parseInt(I39_v) ;



var G40="40";    
var D40="0.00";  
var D40_v =  parseFloat(D40) + document.getElementById('D40').value; 
var D40_w =   parseFloat(D40_v).toFixed(2);
var H40="0.00";  
var H40_v =  parseInt(H40) + document.getElementById('H40').value; 
if ( D40_v > "0" )  { 
var E40_x = ( (parseInt(J7_v) - parseInt(J7_v39) + parseInt(Ex5_v) * ( parseInt(G40) )) / D40_w );  
if (( $( "#E40" ).val() != 0 ) && ($( "#E40" ).val() != E40_x) ) {  var E40_v = $( "#E40" ).val() ; } else { 
if ( E40_x < 2 ) {  var E40_v = 2;  } else { var E40_v = Math.ceil(E40_x) ; }  }

} else { 
var E40_v =  0 ;
}
 
document.getElementById('E40').value = parseInt(E40_v) ;  
if ( document.getElementById('H40').value > 0 )  {
var I40_x = parseInt(H40_v) * parseInt(E40_v) /2;
if (( $( "#I40" ).val() != 0 ) && ($( "#I40" ).val() != I40_x) ) {  var I40_v = $( "#I40" ).val() ; } else { 
var I40_v = parseInt(H40_v) * parseInt(E40_v) /2;  }
} else { 
if ( document.getElementById('I40').value != 0 ) { var I40_v = $( "#I40" ).val() ; } else {
var I40_v =  0 ; }
}

document.getElementById('I40').value = parseInt(I40_v) ; 
var J7_v40= parseInt(J7_v39) - parseInt(E40_v) + parseInt(I40_v) ;



var G41="41";    
var D41="0.00";  
var D41_v =  parseFloat(D41) + document.getElementById('D41').value; 
var D41_w =   parseFloat(D41_v).toFixed(2);
var H41="0.00";  
var H41_v =  parseInt(H41) + document.getElementById('H41').value; 
if ( D41_v > "0" )  { 
var E41_x = ( (parseInt(J7_v) - parseInt(J7_v40) + parseInt(Ex5_v) * ( parseInt(G41) )) / D41_w );  
if (( $( "#E41" ).val() != 0 ) && ($( "#E41" ).val() != E41_x) ) {  var E41_v = $( "#E41" ).val() ; } else { 
if ( E41_x < 2 ) {  var E41_v = 2;  } else { var E41_v = Math.ceil(E41_x) ; }  }

} else { 
var E41_v =  0 ;
}
 
document.getElementById('E41').value = parseInt(E41_v) ;  
if ( document.getElementById('H41').value > 0 )  {
var I41_x = parseInt(H41_v) * parseInt(E41_v) /2;
if (( $( "#I41" ).val() != 0 ) && ($( "#I41" ).val() != I41_x) ) {  var I41_v = $( "#I41" ).val() ; } else { 
var I41_v = parseInt(H41_v) * parseInt(E41_v) /2;  }
} else { 
if ( document.getElementById('I41').value != 0 ) { var I41_v = $( "#I41" ).val() ; } else {
var I41_v =  0 ; }
}

document.getElementById('I41').value = parseInt(I41_v) ; 
var J7_v41= parseInt(J7_v40) - parseInt(E41_v) + parseInt(I41_v) ;



var G42="42";    
var D42="0.00";  
var D42_v =  parseFloat(D42) + document.getElementById('D42').value; 
var D42_w =   parseFloat(D42_v).toFixed(2);
var H42="0.00";  
var H42_v =  parseInt(H42) + document.getElementById('H42').value; 
if ( D42_v > "0" )  { 
var E42_x = ( (parseInt(J7_v) - parseInt(J7_v41) + parseInt(Ex5_v) * ( parseInt(G42) )) / D42_w );  
if (( $( "#E42" ).val() != 0 ) && ($( "#E42" ).val() != E42_x) ) {  var E42_v = $( "#E42" ).val() ; } else { 
if ( E42_x < 2 ) {  var E42_v = 2;  } else { var E42_v = Math.ceil(E42_x) ; }  }

} else { 
var E42_v =  0 ;
}
 
document.getElementById('E42').value = parseInt(E42_v) ;  
if ( document.getElementById('H42').value > 0 )  {
var I42_x = parseInt(H42_v) * parseInt(E42_v) /2;
if (( $( "#I42" ).val() != 0 ) && ($( "#I42" ).val() != I42_x) ) {  var I42_v = $( "#I42" ).val() ; } else { 
var I42_v = parseInt(H42_v) * parseInt(E42_v) /2;  }
} else { 
if ( document.getElementById('I42').value != 0 ) { var I42_v = $( "#I42" ).val() ; } else {
var I42_v =  0 ; }
}

document.getElementById('I42').value = parseInt(I42_v) ; 
var J7_v42= parseInt(J7_v41) - parseInt(E42_v) + parseInt(I42_v) ;



var G43="43";    
var D43="0.00";  
var D43_v =  parseFloat(D43) + document.getElementById('D43').value; 
var D43_w =   parseFloat(D43_v).toFixed(2);
var H43="0.00";  
var H43_v =  parseInt(H43) + document.getElementById('H43').value; 
if ( D43_v > "0" )  { 
var E43_x = ( (parseInt(J7_v) - parseInt(J7_v42) + parseInt(Ex5_v) * ( parseInt(G43) )) / D43_w );  
if (( $( "#E43" ).val() != 0 ) && ($( "#E43" ).val() != E43_x) ) {  var E43_v = $( "#E43" ).val() ; } else { 
if ( E43_x < 2 ) {  var E43_v = 2;  } else { var E43_v = Math.ceil(E43_x) ; }  }

} else { 
var E43_v =  0 ;
}
 
document.getElementById('E43').value = parseInt(E43_v) ;  
if ( document.getElementById('H43').value > 0 )  {
var I43_x = parseInt(H43_v) * parseInt(E43_v) /2;
if (( $( "#I43" ).val() != 0 ) && ($( "#I43" ).val() != I43_x) ) {  var I43_v = $( "#I43" ).val() ; } else { 
var I43_v = parseInt(H43_v) * parseInt(E43_v) /2;  }
} else { 
if ( document.getElementById('I43').value != 0 ) { var I43_v = $( "#I43" ).val() ; } else {
var I43_v =  0 ; }
}

document.getElementById('I43').value = parseInt(I43_v) ; 
var J7_v43= parseInt(J7_v42) - parseInt(E43_v) + parseInt(I43_v) ;



var G44="44";    
var D44="0.00";  
var D44_v =  parseFloat(D44) + document.getElementById('D44').value; 
var D44_w =   parseFloat(D44_v).toFixed(2);
var H44="0.00";  
var H44_v =  parseInt(H44) + document.getElementById('H44').value; 
if ( D44_v > "0" )  { 
var E44_x = ( (parseInt(J7_v) - parseInt(J7_v43) + parseInt(Ex5_v) * ( parseInt(G44) )) / D44_w );  
if (( $( "#E44" ).val() != 0 ) && ($( "#E44" ).val() != E44_x) ) {  var E44_v = $( "#E44" ).val() ; } else { 
if ( E44_x < 2 ) {  var E44_v = 2;  } else { var E44_v = Math.ceil(E44_x) ; }  }

} else { 
var E44_v =  0 ;
}
 
document.getElementById('E44').value = parseInt(E44_v) ;  
if ( document.getElementById('H44').value > 0 )  {
var I44_x = parseInt(H44_v) * parseInt(E44_v) /2;
if (( $( "#I44" ).val() != 0 ) && ($( "#I44" ).val() != I44_x) ) {  var I44_v = $( "#I44" ).val() ; } else { 
var I44_v = parseInt(H44_v) * parseInt(E44_v) /2;  }
} else { 
if ( document.getElementById('I44').value != 0 ) { var I44_v = $( "#I44" ).val() ; } else {
var I44_v =  0 ; }
}

document.getElementById('I44').value = parseInt(I44_v) ; 
var J7_v44= parseInt(J7_v43) - parseInt(E44_v) + parseInt(I44_v) ;



var G45="45";    
var D45="0.00";  
var D45_v =  parseFloat(D45) + document.getElementById('D45').value; 
var D45_w =   parseFloat(D45_v).toFixed(2);
var H45="0.00";  
var H45_v =  parseInt(H45) + document.getElementById('H45').value; 
if ( D45_v > "0" )  { 
var E45_x = ( (parseInt(J7_v) - parseInt(J7_v44) + parseInt(Ex5_v) * ( parseInt(G45) )) / D45_w );  
if (( $( "#E45" ).val() != 0 ) && ($( "#E45" ).val() != E45_x) ) {  var E45_v = $( "#E45" ).val() ; } else { 
if ( E45_x < 2 ) {  var E45_v = 2;  } else { var E45_v = Math.ceil(E45_x) ; }  }

} else { 
var E45_v =  0 ;
}
 
document.getElementById('E45').value = parseInt(E45_v) ;  
if ( document.getElementById('H45').value > 0 )  {
var I45_x = parseInt(H45_v) * parseInt(E45_v) /2;
if (( $( "#I45" ).val() != 0 ) && ($( "#I45" ).val() != I45_x) ) {  var I45_v = $( "#I45" ).val() ; } else { 
var I45_v = parseInt(H45_v) * parseInt(E45_v) /2;  }
} else { 
if ( document.getElementById('I45').value != 0 ) { var I45_v = $( "#I45" ).val() ; } else {
var I45_v =  0 ; }
}

document.getElementById('I45').value = parseInt(I45_v) ; 
var J7_v45= parseInt(J7_v44) - parseInt(E45_v) + parseInt(I45_v) ;



var G46="46";    
var D46="0.00";  
var D46_v =  parseFloat(D46) + document.getElementById('D46').value; 
var D46_w =   parseFloat(D46_v).toFixed(2);
var H46="0.00";  
var H46_v =  parseInt(H46) + document.getElementById('H46').value; 
if ( D46_v > "0" )  { 
var E46_x = ( (parseInt(J7_v) - parseInt(J7_v45) + parseInt(Ex5_v) * ( parseInt(G46) )) / D46_w );  
if (( $( "#E46" ).val() != 0 ) && ($( "#E46" ).val() != E46_x) ) {  var E46_v = $( "#E46" ).val() ; } else { 
if ( E46_x < 2 ) {  var E46_v = 2;  } else { var E46_v = Math.ceil(E46_x) ; }  }

} else { 
var E46_v =  0 ;
}
 
document.getElementById('E46').value = parseInt(E46_v) ;  
if ( document.getElementById('H46').value > 0 )  {
var I46_x = parseInt(H46_v) * parseInt(E46_v) /2;
if (( $( "#I46" ).val() != 0 ) && ($( "#I46" ).val() != I46_x) ) {  var I46_v = $( "#I46" ).val() ; } else { 
var I46_v = parseInt(H46_v) * parseInt(E46_v) /2;  }
} else { 
if ( document.getElementById('I46').value != 0 ) { var I46_v = $( "#I46" ).val() ; } else {
var I46_v =  0 ; }
}

document.getElementById('I46').value = parseInt(I46_v) ; 
var J7_v46= parseInt(J7_v45) - parseInt(E46_v) + parseInt(I46_v) ;



var G47="47";    
var D47="0.00";  
var D47_v =  parseFloat(D47) + document.getElementById('D47').value; 
var D47_w =   parseFloat(D47_v).toFixed(2);
var H47="0.00";  
var H47_v =  parseInt(H47) + document.getElementById('H47').value; 
if ( D47_v > "0" )  { 
var E47_x = ( (parseInt(J7_v) - parseInt(J7_v46) + parseInt(Ex5_v) * ( parseInt(G47) )) / D47_w );  
if (( $( "#E47" ).val() != 0 ) && ($( "#E47" ).val() != E47_x) ) {  var E47_v = $( "#E47" ).val() ; } else { 
if ( E47_x < 2 ) {  var E47_v = 2;  } else { var E47_v = Math.ceil(E47_x) ; }  }

} else { 
var E47_v =  0 ;
}
 
document.getElementById('E47').value = parseInt(E47_v) ;  
if ( document.getElementById('H47').value > 0 )  {
var I47_x = parseInt(H47_v) * parseInt(E47_v) /2;
if (( $( "#I47" ).val() != 0 ) && ($( "#I47" ).val() != I47_x) ) {  var I47_v = $( "#I47" ).val() ; } else { 
var I47_v = parseInt(H47_v) * parseInt(E47_v) /2;  }
} else { 
if ( document.getElementById('I47').value != 0 ) { var I47_v = $( "#I47" ).val() ; } else {
var I47_v =  0 ; }
}

document.getElementById('I47').value = parseInt(I47_v) ; 
var J7_v47= parseInt(J7_v46) - parseInt(E47_v) + parseInt(I47_v) ;



var G48="48";    
var D48="0.00";  
var D48_v =  parseFloat(D48) + document.getElementById('D48').value; 
var D48_w =   parseFloat(D48_v).toFixed(2);
var H48="0.00";  
var H48_v =  parseInt(H48) + document.getElementById('H48').value; 
if ( D48_v > "0" )  { 
var E48_x = ( (parseInt(J7_v) - parseInt(J7_v47) + parseInt(Ex5_v) * ( parseInt(G48) )) / D48_w );  
if (( $( "#E48" ).val() != 0 ) && ($( "#E48" ).val() != E48_x) ) {  var E48_v = $( "#E48" ).val() ; } else { 
if ( E48_x < 2 ) {  var E48_v = 2;  } else { var E48_v = Math.ceil(E48_x) ; }  }

} else { 
var E48_v =  0 ;
}
 
document.getElementById('E48').value = parseInt(E48_v) ;  
if ( document.getElementById('H48').value > 0 )  {
var I48_x = parseInt(H48_v) * parseInt(E48_v) /2;
if (( $( "#I48" ).val() != 0 ) && ($( "#I48" ).val() != I48_x) ) {  var I48_v = $( "#I48" ).val() ; } else { 
var I48_v = parseInt(H48_v) * parseInt(E48_v) /2;  }
} else { 
if ( document.getElementById('I48').value != 0 ) { var I48_v = $( "#I48" ).val() ; } else {
var I48_v =  0 ; }
}

document.getElementById('I48').value = parseInt(I48_v) ; 
var J7_v48= parseInt(J7_v47) - parseInt(E48_v) + parseInt(I48_v) ;



var G49="49";    
var D49="0.00";  
var D49_v =  parseFloat(D49) + document.getElementById('D49').value; 
var D49_w =   parseFloat(D49_v).toFixed(2);
var H49="0.00";  
var H49_v =  parseInt(H49) + document.getElementById('H49').value; 
if ( D49_v > "0" )  { 
var E49_x = ( (parseInt(J7_v) - parseInt(J7_v48) + parseInt(Ex5_v) * ( parseInt(G49) )) / D49_w );  
if (( $( "#E49" ).val() != 0 ) && ($( "#E49" ).val() != E49_x) ) {  var E49_v = $( "#E49" ).val() ; } else { 
if ( E49_x < 2 ) {  var E49_v = 2;  } else { var E49_v = Math.ceil(E49_x) ; }  }

} else { 
var E49_v =  0 ;
}
 
document.getElementById('E49').value = parseInt(E49_v) ;  
if ( document.getElementById('H49').value > 0 )  {
var I49_x = parseInt(H49_v) * parseInt(E49_v) /2;
if (( $( "#I49" ).val() != 0 ) && ($( "#I49" ).val() != I49_x) ) {  var I49_v = $( "#I49" ).val() ; } else { 
var I49_v = parseInt(H49_v) * parseInt(E49_v) /2;  }
} else { 
if ( document.getElementById('I49').value != 0 ) { var I49_v = $( "#I49" ).val() ; } else {
var I49_v =  0 ; }
}

document.getElementById('I49').value = parseInt(I49_v) ; 
var J7_v49= parseInt(J7_v48) - parseInt(E49_v) + parseInt(I49_v) ;



var G50="50";    
var D50="0.00";  
var D50_v =  parseFloat(D50) + document.getElementById('D50').value; 
var D50_w =   parseFloat(D50_v).toFixed(2);
var H50="0.00";  
var H50_v =  parseInt(H50) + document.getElementById('H50').value; 
if ( D50_v > "0" )  { 
var E50_x = ( (parseInt(J7_v) - parseInt(J7_v49) + parseInt(Ex5_v) * ( parseInt(G50) )) / D50_w );  
if (( $( "#E50" ).val() != 0 ) && ($( "#E50" ).val() != E50_x) ) {  var E50_v = $( "#E50" ).val() ; } else { 
if ( E50_x < 2 ) {  var E50_v = 2;  } else { var E50_v = Math.ceil(E50_x) ; }  }

} else { 
var E50_v =  0 ;
}
 
document.getElementById('E50').value = parseInt(E50_v) ;  
if ( document.getElementById('H50').value > 0 )  {
var I50_x = parseInt(H50_v) * parseInt(E50_v) /2;
if (( $( "#I50" ).val() != 0 ) && ($( "#I50" ).val() != I50_x) ) {  var I50_v = $( "#I50" ).val() ; } else { 
var I50_v = parseInt(H50_v) * parseInt(E50_v) /2;  }
} else { 
if ( document.getElementById('I50').value != 0 ) { var I50_v = $( "#I50" ).val() ; } else {
var I50_v =  0 ; }
}

document.getElementById('I50').value = parseInt(I50_v) ; 
var J7_v50= parseInt(J7_v49) - parseInt(E50_v) + parseInt(I50_v) ;



var G51="51";    
var D51="0.00";  
var D51_v =  parseFloat(D51) + document.getElementById('D51').value; 
var D51_w =   parseFloat(D51_v).toFixed(2);
var H51="0.00";  
var H51_v =  parseInt(H51) + document.getElementById('H51').value; 
if ( D51_v > "0" )  { 
var E51_x = ( (parseInt(J7_v) - parseInt(J7_v50) + parseInt(Ex5_v) * ( parseInt(G51) )) / D51_w );  
if (( $( "#E51" ).val() != 0 ) && ($( "#E51" ).val() != E51_x) ) {  var E51_v = $( "#E51" ).val() ; } else { 
if ( E51_x < 2 ) {  var E51_v = 2;  } else { var E51_v = Math.ceil(E51_x) ; }  }

} else { 
var E51_v =  0 ;
}
 
document.getElementById('E51').value = parseInt(E51_v) ;  
if ( document.getElementById('H51').value > 0 )  {
var I51_x = parseInt(H51_v) * parseInt(E51_v) /2;
if (( $( "#I51" ).val() != 0 ) && ($( "#I51" ).val() != I51_x) ) {  var I51_v = $( "#I51" ).val() ; } else { 
var I51_v = parseInt(H51_v) * parseInt(E51_v) /2;  }
} else { 
if ( document.getElementById('I51').value != 0 ) { var I51_v = $( "#I51" ).val() ; } else {
var I51_v =  0 ; }
}

document.getElementById('I51').value = parseInt(I51_v) ; 
var J7_v51= parseInt(J7_v50) - parseInt(E51_v) + parseInt(I51_v) ;



var G52="52";    
var D52="0.00";  
var D52_v =  parseFloat(D52) + document.getElementById('D52').value; 
var D52_w =   parseFloat(D52_v).toFixed(2);
var H52="0.00";  
var H52_v =  parseInt(H52) + document.getElementById('H52').value; 
if ( D52_v > "0" )  { 
var E52_x = ( (parseInt(J7_v) - parseInt(J7_v51) + parseInt(Ex5_v) * ( parseInt(G52) )) / D52_w );  
if (( $( "#E52" ).val() != 0 ) && ($( "#E52" ).val() != E52_x) ) {  var E52_v = $( "#E52" ).val() ; } else { 
if ( E52_x < 2 ) {  var E52_v = 2;  } else { var E52_v = Math.ceil(E52_x) ; }  }

} else { 
var E52_v =  0 ;
}
 
document.getElementById('E52').value = parseInt(E52_v) ;  
if ( document.getElementById('H52').value > 0 )  {
var I52_x = parseInt(H52_v) * parseInt(E52_v) /2;
if (( $( "#I52" ).val() != 0 ) && ($( "#I52" ).val() != I52_x) ) {  var I52_v = $( "#I52" ).val() ; } else { 
var I52_v = parseInt(H52_v) * parseInt(E52_v) /2;  }
} else { 
if ( document.getElementById('I52').value != 0 ) { var I52_v = $( "#I52" ).val() ; } else {
var I52_v =  0 ; }
}

document.getElementById('I52').value = parseInt(I52_v) ; 
var J7_v52= parseInt(J7_v51) - parseInt(E52_v) + parseInt(I52_v) ;



var G53="53";    
var D53="0.00";  
var D53_v =  parseFloat(D53) + document.getElementById('D53').value; 
var D53_w =   parseFloat(D53_v).toFixed(2);
var H53="0.00";  
var H53_v =  parseInt(H53) + document.getElementById('H53').value; 
if ( D53_v > "0" )  { 
var E53_x = ( (parseInt(J7_v) - parseInt(J7_v52) + parseInt(Ex5_v) * ( parseInt(G53) )) / D53_w );  
if (( $( "#E53" ).val() != 0 ) && ($( "#E53" ).val() != E53_x) ) {  var E53_v = $( "#E53" ).val() ; } else { 
if ( E53_x < 2 ) {  var E53_v = 2;  } else { var E53_v = Math.ceil(E53_x) ; }  }

} else { 
var E53_v =  0 ;
}
 
document.getElementById('E53').value = parseInt(E53_v) ;  
if ( document.getElementById('H53').value > 0 )  {
var I53_x = parseInt(H53_v) * parseInt(E53_v) /2;
if (( $( "#I53" ).val() != 0 ) && ($( "#I53" ).val() != I53_x) ) {  var I53_v = $( "#I53" ).val() ; } else { 
var I53_v = parseInt(H53_v) * parseInt(E53_v) /2;  }
} else { 
if ( document.getElementById('I53').value != 0 ) { var I53_v = $( "#I53" ).val() ; } else {
var I53_v =  0 ; }
}

document.getElementById('I53').value = parseInt(I53_v) ; 
var J7_v53= parseInt(J7_v52) - parseInt(E53_v) + parseInt(I53_v) ;



var G54="54";    
var D54="0.00";  
var D54_v =  parseFloat(D54) + document.getElementById('D54').value; 
var D54_w =   parseFloat(D54_v).toFixed(2);
var H54="0.00";  
var H54_v =  parseInt(H54) + document.getElementById('H54').value; 
if ( D54_v > "0" )  { 
var E54_x = ( (parseInt(J7_v) - parseInt(J7_v53) + parseInt(Ex5_v) * ( parseInt(G54) )) / D54_w );  
if (( $( "#E54" ).val() != 0 ) && ($( "#E54" ).val() != E54_x) ) {  var E54_v = $( "#E54" ).val() ; } else { 
if ( E54_x < 2 ) {  var E54_v = 2;  } else { var E54_v = Math.ceil(E54_x) ; }  }

} else { 
var E54_v =  0 ;
}
 
document.getElementById('E54').value = parseInt(E54_v) ;  
if ( document.getElementById('H54').value > 0 )  {
var I54_x = parseInt(H54_v) * parseInt(E54_v) /2;
if (( $( "#I54" ).val() != 0 ) && ($( "#I54" ).val() != I54_x) ) {  var I54_v = $( "#I54" ).val() ; } else { 
var I54_v = parseInt(H54_v) * parseInt(E54_v) /2;  }
} else { 
if ( document.getElementById('I54').value != 0 ) { var I54_v = $( "#I54" ).val() ; } else {
var I54_v =  0 ; }
}

document.getElementById('I54').value = parseInt(I54_v) ; 
var J7_v54= parseInt(J7_v53) - parseInt(E54_v) + parseInt(I54_v) ;



var G55="55";    
var D55="0.00";  
var D55_v =  parseFloat(D55) + document.getElementById('D55').value; 
var D55_w =   parseFloat(D55_v).toFixed(2);
var H55="0.00";  
var H55_v =  parseInt(H55) + document.getElementById('H55').value; 
if ( D55_v > "0" )  { 
var E55_x = ( (parseInt(J7_v) - parseInt(J7_v54) + parseInt(Ex5_v) * ( parseInt(G55) )) / D55_w );  
if (( $( "#E55" ).val() != 0 ) && ($( "#E55" ).val() != E55_x) ) {  var E55_v = $( "#E55" ).val() ; } else { 
if ( E55_x < 2 ) {  var E55_v = 2;  } else { var E55_v = Math.ceil(E55_x) ; }  }

} else { 
var E55_v =  0 ;
}
 
document.getElementById('E55').value = parseInt(E55_v) ;  
if ( document.getElementById('H55').value > 0 )  {
var I55_x = parseInt(H55_v) * parseInt(E55_v) /2;
if (( $( "#I55" ).val() != 0 ) && ($( "#I55" ).val() != I55_x) ) {  var I55_v = $( "#I55" ).val() ; } else { 
var I55_v = parseInt(H55_v) * parseInt(E55_v) /2;  }
} else { 
if ( document.getElementById('I55').value != 0 ) { var I55_v = $( "#I55" ).val() ; } else {
var I55_v =  0 ; }
}

document.getElementById('I55').value = parseInt(I55_v) ; 
var J7_v55= parseInt(J7_v54) - parseInt(E55_v) + parseInt(I55_v) ;



var G56="56";    
var D56="0.00";  
var D56_v =  parseFloat(D56) + document.getElementById('D56').value; 
var D56_w =   parseFloat(D56_v).toFixed(2);
var H56="0.00";  
var H56_v =  parseInt(H56) + document.getElementById('H56').value; 
if ( D56_v > "0" )  { 
var E56_x = ( (parseInt(J7_v) - parseInt(J7_v55) + parseInt(Ex5_v) * ( parseInt(G56) )) / D56_w );  
if (( $( "#E56" ).val() != 0 ) && ($( "#E56" ).val() != E56_x) ) {  var E56_v = $( "#E56" ).val() ; } else { 
if ( E56_x < 2 ) {  var E56_v = 2;  } else { var E56_v = Math.ceil(E56_x) ; }  }

} else { 
var E56_v =  0 ;
}
 
document.getElementById('E56').value = parseInt(E56_v) ;  
if ( document.getElementById('H56').value > 0 )  {
var I56_x = parseInt(H56_v) * parseInt(E56_v) /2;
if (( $( "#I56" ).val() != 0 ) && ($( "#I56" ).val() != I56_x) ) {  var I56_v = $( "#I56" ).val() ; } else { 
var I56_v = parseInt(H56_v) * parseInt(E56_v) /2;  }
} else { 
if ( document.getElementById('I56').value != 0 ) { var I56_v = $( "#I56" ).val() ; } else {
var I56_v =  0 ; }
}

document.getElementById('I56').value = parseInt(I56_v) ; 
var J7_v56= parseInt(J7_v55) - parseInt(E56_v) + parseInt(I56_v) ;



var G57="57";    
var D57="0.00";  
var D57_v =  parseFloat(D57) + document.getElementById('D57').value; 
var D57_w =   parseFloat(D57_v).toFixed(2);
var H57="0.00";  
var H57_v =  parseInt(H57) + document.getElementById('H57').value; 
if ( D57_v > "0" )  { 
var E57_x = ( (parseInt(J7_v) - parseInt(J7_v56) + parseInt(Ex5_v) * ( parseInt(G57) )) / D57_w );  
if (( $( "#E57" ).val() != 0 ) && ($( "#E57" ).val() != E57_x) ) {  var E57_v = $( "#E57" ).val() ; } else { 
if ( E57_x < 2 ) {  var E57_v = 2;  } else { var E57_v = Math.ceil(E57_x) ; }  }

} else { 
var E57_v =  0 ;
}
 
document.getElementById('E57').value = parseInt(E57_v) ;  
if ( document.getElementById('H57').value > 0 )  {
var I57_x = parseInt(H57_v) * parseInt(E57_v) /2;
if (( $( "#I57" ).val() != 0 ) && ($( "#I57" ).val() != I57_x) ) {  var I57_v = $( "#I57" ).val() ; } else { 
var I57_v = parseInt(H57_v) * parseInt(E57_v) /2;  }
} else { 
if ( document.getElementById('I57').value != 0 ) { var I57_v = $( "#I57" ).val() ; } else {
var I57_v =  0 ; }
}

document.getElementById('I57').value = parseInt(I57_v) ; 
var J7_v57= parseInt(J7_v56) - parseInt(E57_v) + parseInt(I57_v) ;



var G58="58";    
var D58="0.00";  
var D58_v =  parseFloat(D58) + document.getElementById('D58').value; 
var D58_w =   parseFloat(D58_v).toFixed(2);
var H58="0.00";  
var H58_v =  parseInt(H58) + document.getElementById('H58').value; 
if ( D58_v > "0" )  { 
var E58_x = ( (parseInt(J7_v) - parseInt(J7_v57) + parseInt(Ex5_v) * ( parseInt(G58) )) / D58_w );  
if (( $( "#E58" ).val() != 0 ) && ($( "#E58" ).val() != E58_x) ) {  var E58_v = $( "#E58" ).val() ; } else { 
if ( E58_x < 2 ) {  var E58_v = 2;  } else { var E58_v = Math.ceil(E58_x) ; }  }

} else { 
var E58_v =  0 ;
}
 
document.getElementById('E58').value = parseInt(E58_v) ;  
if ( document.getElementById('H58').value > 0 )  {
var I58_x = parseInt(H58_v) * parseInt(E58_v) /2;
if (( $( "#I58" ).val() != 0 ) && ($( "#I58" ).val() != I58_x) ) {  var I58_v = $( "#I58" ).val() ; } else { 
var I58_v = parseInt(H58_v) * parseInt(E58_v) /2;  }
} else { 
if ( document.getElementById('I58').value != 0 ) { var I58_v = $( "#I58" ).val() ; } else {
var I58_v =  0 ; }
}

document.getElementById('I58').value = parseInt(I58_v) ; 
var J7_v58= parseInt(J7_v57) - parseInt(E58_v) + parseInt(I58_v) ;



var G59="59";    
var D59="0.00";  
var D59_v =  parseFloat(D59) + document.getElementById('D59').value; 
var D59_w =   parseFloat(D59_v).toFixed(2);
var H59="0.00";  
var H59_v =  parseInt(H59) + document.getElementById('H59').value; 
if ( D59_v > "0" )  { 
var E59_x = ( (parseInt(J7_v) - parseInt(J7_v58) + parseInt(Ex5_v) * ( parseInt(G59) )) / D59_w );  
if (( $( "#E59" ).val() != 0 ) && ($( "#E59" ).val() != E59_x) ) {  var E59_v = $( "#E59" ).val() ; } else { 
if ( E59_x < 2 ) {  var E59_v = 2;  } else { var E59_v = Math.ceil(E59_x) ; }  }

} else { 
var E59_v =  0 ;
}
 
document.getElementById('E59').value = parseInt(E59_v) ;  
if ( document.getElementById('H59').value > 0 )  {
var I59_x = parseInt(H59_v) * parseInt(E59_v) /2;
if (( $( "#I59" ).val() != 0 ) && ($( "#I59" ).val() != I59_x) ) {  var I59_v = $( "#I59" ).val() ; } else { 
var I59_v = parseInt(H59_v) * parseInt(E59_v) /2;  }
} else { 
if ( document.getElementById('I59').value != 0 ) { var I59_v = $( "#I59" ).val() ; } else {
var I59_v =  0 ; }
}

document.getElementById('I59').value = parseInt(I59_v) ; 
var J7_v59= parseInt(J7_v58) - parseInt(E59_v) + parseInt(I59_v) ;



var G60="60";    
var D60="0.00";  
var D60_v =  parseFloat(D60) + document.getElementById('D60').value; 
var D60_w =   parseFloat(D60_v).toFixed(2);
var H60="0.00";  
var H60_v =  parseInt(H60) + document.getElementById('H60').value; 
if ( D60_v > "0" )  { 
var E60_x = ( (parseInt(J7_v) - parseInt(J7_v59) + parseInt(Ex5_v) * ( parseInt(G60) )) / D60_w );  
if (( $( "#E60" ).val() != 0 ) && ($( "#E60" ).val() != E60_x) ) {  var E60_v = $( "#E60" ).val() ; } else { 
if ( E60_x < 2 ) {  var E60_v = 2;  } else { var E60_v = Math.ceil(E60_x) ; }  }

} else { 
var E60_v =  0 ;
}
 
document.getElementById('E60').value = parseInt(E60_v) ;  
if ( document.getElementById('H60').value > 0 )  {
var I60_x = parseInt(H60_v) * parseInt(E60_v) /2;
if (( $( "#I60" ).val() != 0 ) && ($( "#I60" ).val() != I60_x) ) {  var I60_v = $( "#I60" ).val() ; } else { 
var I60_v = parseInt(H60_v) * parseInt(E60_v) /2;  }
} else { 
if ( document.getElementById('I60').value != 0 ) { var I60_v = $( "#I60" ).val() ; } else {
var I60_v =  0 ; }
}

document.getElementById('I60').value = parseInt(I60_v) ; 
var J7_v60= parseInt(J7_v59) - parseInt(E60_v) + parseInt(I60_v) ;



var G61="61";    
var D61="0.00";  
var D61_v =  parseFloat(D61) + document.getElementById('D61').value; 
var D61_w =   parseFloat(D61_v).toFixed(2);
var H61="0.00";  
var H61_v =  parseInt(H61) + document.getElementById('H61').value; 
if ( D61_v > "0" )  { 
var E61_x = ( (parseInt(J7_v) - parseInt(J7_v60) + parseInt(Ex5_v) * ( parseInt(G61) )) / D61_w );  
if (( $( "#E61" ).val() != 0 ) && ($( "#E61" ).val() != E61_x) ) {  var E61_v = $( "#E61" ).val() ; } else { 
if ( E61_x < 2 ) {  var E61_v = 2;  } else { var E61_v = Math.ceil(E61_x) ; }  }

} else { 
var E61_v =  0 ;
}
 
document.getElementById('E61').value = parseInt(E61_v) ;  
if ( document.getElementById('H61').value > 0 )  {
var I61_x = parseInt(H61_v) * parseInt(E61_v) /2;
if (( $( "#I61" ).val() != 0 ) && ($( "#I61" ).val() != I61_x) ) {  var I61_v = $( "#I61" ).val() ; } else { 
var I61_v = parseInt(H61_v) * parseInt(E61_v) /2;  }
} else { 
if ( document.getElementById('I61').value != 0 ) { var I61_v = $( "#I61" ).val() ; } else {
var I61_v =  0 ; }
}

document.getElementById('I61').value = parseInt(I61_v) ; 
var J7_v61= parseInt(J7_v60) - parseInt(E61_v) + parseInt(I61_v) ;



var G62="62";    
var D62="0.00";  
var D62_v =  parseFloat(D62) + document.getElementById('D62').value; 
var D62_w =   parseFloat(D62_v).toFixed(2);
var H62="0.00";  
var H62_v =  parseInt(H62) + document.getElementById('H62').value; 
if ( D62_v > "0" )  { 
var E62_x = ( (parseInt(J7_v) - parseInt(J7_v61) + parseInt(Ex5_v) * ( parseInt(G62) )) / D62_w );  
if (( $( "#E62" ).val() != 0 ) && ($( "#E62" ).val() != E62_x) ) {  var E62_v = $( "#E62" ).val() ; } else { 
if ( E62_x < 2 ) {  var E62_v = 2;  } else { var E62_v = Math.ceil(E62_x) ; }  }

} else { 
var E62_v =  0 ;
}
 
document.getElementById('E62').value = parseInt(E62_v) ;  
if ( document.getElementById('H62').value > 0 )  {
var I62_x = parseInt(H62_v) * parseInt(E62_v) /2;
if (( $( "#I62" ).val() != 0 ) && ($( "#I62" ).val() != I62_x) ) {  var I62_v = $( "#I62" ).val() ; } else { 
var I62_v = parseInt(H62_v) * parseInt(E62_v) /2;  }
} else { 
if ( document.getElementById('I62').value != 0 ) { var I62_v = $( "#I62" ).val() ; } else {
var I62_v =  0 ; }
}

document.getElementById('I62').value = parseInt(I62_v) ; 
var J7_v62= parseInt(J7_v61) - parseInt(E62_v) + parseInt(I62_v) ;



var G63="63";    
var D63="0.00";  
var D63_v =  parseFloat(D63) + document.getElementById('D63').value; 
var D63_w =   parseFloat(D63_v).toFixed(2);
var H63="0.00";  
var H63_v =  parseInt(H63) + document.getElementById('H63').value; 
if ( D63_v > "0" )  { 
var E63_x = ( (parseInt(J7_v) - parseInt(J7_v62) + parseInt(Ex5_v) * ( parseInt(G63) )) / D63_w );  
if (( $( "#E63" ).val() != 0 ) && ($( "#E63" ).val() != E63_x) ) {  var E63_v = $( "#E63" ).val() ; } else { 
if ( E63_x < 2 ) {  var E63_v = 2;  } else { var E63_v = Math.ceil(E63_x) ; }  }

} else { 
var E63_v =  0 ;
}
 
document.getElementById('E63').value = parseInt(E63_v) ;  
if ( document.getElementById('H63').value > 0 )  {
var I63_x = parseInt(H63_v) * parseInt(E63_v) /2;
if (( $( "#I63" ).val() != 0 ) && ($( "#I63" ).val() != I63_x) ) {  var I63_v = $( "#I63" ).val() ; } else { 
var I63_v = parseInt(H63_v) * parseInt(E63_v) /2;  }
} else { 
if ( document.getElementById('I63').value != 0 ) { var I63_v = $( "#I63" ).val() ; } else {
var I63_v =  0 ; }
}

document.getElementById('I63').value = parseInt(I63_v) ; 
var J7_v63= parseInt(J7_v62) - parseInt(E63_v) + parseInt(I63_v) ;



var G64="64";    
var D64="0.00";  
var D64_v =  parseFloat(D64) + document.getElementById('D64').value; 
var D64_w =   parseFloat(D64_v).toFixed(2);
var H64="0.00";  
var H64_v =  parseInt(H64) + document.getElementById('H64').value; 
if ( D64_v > "0" )  { 
var E64_x = ( (parseInt(J7_v) - parseInt(J7_v63) + parseInt(Ex5_v) * ( parseInt(G64) )) / D64_w );  
if (( $( "#E64" ).val() != 0 ) && ($( "#E64" ).val() != E64_x) ) {  var E64_v = $( "#E64" ).val() ; } else { 
if ( E64_x < 2 ) {  var E64_v = 2;  } else { var E64_v = Math.ceil(E64_x) ; }  }

} else { 
var E64_v =  0 ;
}
 
document.getElementById('E64').value = parseInt(E64_v) ;  
if ( document.getElementById('H64').value > 0 )  {
var I64_x = parseInt(H64_v) * parseInt(E64_v) /2;
if (( $( "#I64" ).val() != 0 ) && ($( "#I64" ).val() != I64_x) ) {  var I64_v = $( "#I64" ).val() ; } else { 
var I64_v = parseInt(H64_v) * parseInt(E64_v) /2;  }
} else { 
if ( document.getElementById('I64').value != 0 ) { var I64_v = $( "#I64" ).val() ; } else {
var I64_v =  0 ; }
}

document.getElementById('I64').value = parseInt(I64_v) ; 
var J7_v64= parseInt(J7_v63) - parseInt(E64_v) + parseInt(I64_v) ;



var G65="65";    
var D65="0.00";  
var D65_v =  parseFloat(D65) + document.getElementById('D65').value; 
var D65_w =   parseFloat(D65_v).toFixed(2);
var H65="0.00";  
var H65_v =  parseInt(H65) + document.getElementById('H65').value; 
if ( D65_v > "0" )  { 
var E65_x = ( (parseInt(J7_v) - parseInt(J7_v64) + parseInt(Ex5_v) * ( parseInt(G65) )) / D65_w );  
if (( $( "#E65" ).val() != 0 ) && ($( "#E65" ).val() != E65_x) ) {  var E65_v = $( "#E65" ).val() ; } else { 
if ( E65_x < 2 ) {  var E65_v = 2;  } else { var E65_v = Math.ceil(E65_x) ; }  }

} else { 
var E65_v =  0 ;
}
 
document.getElementById('E65').value = parseInt(E65_v) ;  
if ( document.getElementById('H65').value > 0 )  {
var I65_x = parseInt(H65_v) * parseInt(E65_v) /2;
if (( $( "#I65" ).val() != 0 ) && ($( "#I65" ).val() != I65_x) ) {  var I65_v = $( "#I65" ).val() ; } else { 
var I65_v = parseInt(H65_v) * parseInt(E65_v) /2;  }
} else { 
if ( document.getElementById('I65').value != 0 ) { var I65_v = $( "#I65" ).val() ; } else {
var I65_v =  0 ; }
}

document.getElementById('I65').value = parseInt(I65_v) ; 
var J7_v65= parseInt(J7_v64) - parseInt(E65_v) + parseInt(I65_v) ;



var G66="66";    
var D66="0.00";  
var D66_v =  parseFloat(D66) + document.getElementById('D66').value; 
var D66_w =   parseFloat(D66_v).toFixed(2);
var H66="0.00";  
var H66_v =  parseInt(H66) + document.getElementById('H66').value; 
if ( D66_v > "0" )  { 
var E66_x = ( (parseInt(J7_v) - parseInt(J7_v65) + parseInt(Ex5_v) * ( parseInt(G66) )) / D66_w );  
if (( $( "#E66" ).val() != 0 ) && ($( "#E66" ).val() != E66_x) ) {  var E66_v = $( "#E66" ).val() ; } else { 
if ( E66_x < 2 ) {  var E66_v = 2;  } else { var E66_v = Math.ceil(E66_x) ; }  }

} else { 
var E66_v =  0 ;
}
 
document.getElementById('E66').value = parseInt(E66_v) ;  
if ( document.getElementById('H66').value > 0 )  {
var I66_x = parseInt(H66_v) * parseInt(E66_v) /2;
if (( $( "#I66" ).val() != 0 ) && ($( "#I66" ).val() != I66_x) ) {  var I66_v = $( "#I66" ).val() ; } else { 
var I66_v = parseInt(H66_v) * parseInt(E66_v) /2;  }
} else { 
if ( document.getElementById('I66').value != 0 ) { var I66_v = $( "#I66" ).val() ; } else {
var I66_v =  0 ; }
}

document.getElementById('I66').value = parseInt(I66_v) ; 
var J7_v66= parseInt(J7_v65) - parseInt(E66_v) + parseInt(I66_v) ;



var G67="67";    
var D67="0.00";  
var D67_v =  parseFloat(D67) + document.getElementById('D67').value; 
var D67_w =   parseFloat(D67_v).toFixed(2);
var H67="0.00";  
var H67_v =  parseInt(H67) + document.getElementById('H67').value; 
if ( D67_v > "0" )  { 
var E67_x = ( (parseInt(J7_v) - parseInt(J7_v66) + parseInt(Ex5_v) * ( parseInt(G67) )) / D67_w );  
if (( $( "#E67" ).val() != 0 ) && ($( "#E67" ).val() != E67_x) ) {  var E67_v = $( "#E67" ).val() ; } else { 
if ( E67_x < 2 ) {  var E67_v = 2;  } else { var E67_v = Math.ceil(E67_x) ; }  }

} else { 
var E67_v =  0 ;
}
 
document.getElementById('E67').value = parseInt(E67_v) ;  
if ( document.getElementById('H67').value > 0 )  {
var I67_x = parseInt(H67_v) * parseInt(E67_v) /2;
if (( $( "#I67" ).val() != 0 ) && ($( "#I67" ).val() != I67_x) ) {  var I67_v = $( "#I67" ).val() ; } else { 
var I67_v = parseInt(H67_v) * parseInt(E67_v) /2;  }
} else { 
if ( document.getElementById('I67').value != 0 ) { var I67_v = $( "#I67" ).val() ; } else {
var I67_v =  0 ; }
}

document.getElementById('I67').value = parseInt(I67_v) ; 
var J7_v67= parseInt(J7_v66) - parseInt(E67_v) + parseInt(I67_v) ;



var G68="68";    
var D68="0.00";  
var D68_v =  parseFloat(D68) + document.getElementById('D68').value; 
var D68_w =   parseFloat(D68_v).toFixed(2);
var H68="0.00";  
var H68_v =  parseInt(H68) + document.getElementById('H68').value; 
if ( D68_v > "0" )  { 
var E68_x = ( (parseInt(J7_v) - parseInt(J7_v67) + parseInt(Ex5_v) * ( parseInt(G68) )) / D68_w );  
if (( $( "#E68" ).val() != 0 ) && ($( "#E68" ).val() != E68_x) ) {  var E68_v = $( "#E68" ).val() ; } else { 
if ( E68_x < 2 ) {  var E68_v = 2;  } else { var E68_v = Math.ceil(E68_x) ; }  }

} else { 
var E68_v =  0 ;
}
 
document.getElementById('E68').value = parseInt(E68_v) ;  
if ( document.getElementById('H68').value > 0 )  {
var I68_x = parseInt(H68_v) * parseInt(E68_v) /2;
if (( $( "#I68" ).val() != 0 ) && ($( "#I68" ).val() != I68_x) ) {  var I68_v = $( "#I68" ).val() ; } else { 
var I68_v = parseInt(H68_v) * parseInt(E68_v) /2;  }
} else { 
if ( document.getElementById('I68').value != 0 ) { var I68_v = $( "#I68" ).val() ; } else {
var I68_v =  0 ; }
}

document.getElementById('I68').value = parseInt(I68_v) ; 
var J7_v68= parseInt(J7_v67) - parseInt(E68_v) + parseInt(I68_v) ;



var G69="69";    
var D69="0.00";  
var D69_v =  parseFloat(D69) + document.getElementById('D69').value; 
var D69_w =   parseFloat(D69_v).toFixed(2);
var H69="0.00";  
var H69_v =  parseInt(H69) + document.getElementById('H69').value; 
if ( D69_v > "0" )  { 
var E69_x = ( (parseInt(J7_v) - parseInt(J7_v68) + parseInt(Ex5_v) * ( parseInt(G69) )) / D69_w );  
if (( $( "#E69" ).val() != 0 ) && ($( "#E69" ).val() != E69_x) ) {  var E69_v = $( "#E69" ).val() ; } else { 
if ( E69_x < 2 ) {  var E69_v = 2;  } else { var E69_v = Math.ceil(E69_x) ; }  }

} else { 
var E69_v =  0 ;
}
 
document.getElementById('E69').value = parseInt(E69_v) ;  
if ( document.getElementById('H69').value > 0 )  {
var I69_x = parseInt(H69_v) * parseInt(E69_v) /2;
if (( $( "#I69" ).val() != 0 ) && ($( "#I69" ).val() != I69_x) ) {  var I69_v = $( "#I69" ).val() ; } else { 
var I69_v = parseInt(H69_v) * parseInt(E69_v) /2;  }
} else { 
if ( document.getElementById('I69').value != 0 ) { var I69_v = $( "#I69" ).val() ; } else {
var I69_v =  0 ; }
}

document.getElementById('I69').value = parseInt(I69_v) ; 
var J7_v69= parseInt(J7_v68) - parseInt(E69_v) + parseInt(I69_v) ;



var G70="70";    
var D70="0.00";  
var D70_v =  parseFloat(D70) + document.getElementById('D70').value; 
var D70_w =   parseFloat(D70_v).toFixed(2);
var H70="0.00";  
var H70_v =  parseInt(H70) + document.getElementById('H70').value; 
if ( D70_v > "0" )  { 
var E70_x = ( (parseInt(J7_v) - parseInt(J7_v69) + parseInt(Ex5_v) * ( parseInt(G70) )) / D70_w );  
if (( $( "#E70" ).val() != 0 ) && ($( "#E70" ).val() != E70_x) ) {  var E70_v = $( "#E70" ).val() ; } else { 
if ( E70_x < 2 ) {  var E70_v = 2;  } else { var E70_v = Math.ceil(E70_x) ; }  }

} else { 
var E70_v =  0 ;
}
 
document.getElementById('E70').value = parseInt(E70_v) ;  
if ( document.getElementById('H70').value > 0 )  {
var I70_x = parseInt(H70_v) * parseInt(E70_v) /2;
if (( $( "#I70" ).val() != 0 ) && ($( "#I70" ).val() != I70_x) ) {  var I70_v = $( "#I70" ).val() ; } else { 
var I70_v = parseInt(H70_v) * parseInt(E70_v) /2;  }
} else { 
if ( document.getElementById('I70').value != 0 ) { var I70_v = $( "#I70" ).val() ; } else {
var I70_v =  0 ; }
}

document.getElementById('I70').value = parseInt(I70_v) ; 
var J7_v70= parseInt(J7_v69) - parseInt(E70_v) + parseInt(I70_v) ;



var G71="71";    
var D71="0.00";  
var D71_v =  parseFloat(D71) + document.getElementById('D71').value; 
var D71_w =   parseFloat(D71_v).toFixed(2);
var H71="0.00";  
var H71_v =  parseInt(H71) + document.getElementById('H71').value; 
if ( D71_v > "0" )  { 
var E71_x = ( (parseInt(J7_v) - parseInt(J7_v70) + parseInt(Ex5_v) * ( parseInt(G71) )) / D71_w );  
if (( $( "#E71" ).val() != 0 ) && ($( "#E71" ).val() != E71_x) ) {  var E71_v = $( "#E71" ).val() ; } else { 
if ( E71_x < 2 ) {  var E71_v = 2;  } else { var E71_v = Math.ceil(E71_x) ; }  }

} else { 
var E71_v =  0 ;
}
 
document.getElementById('E71').value = parseInt(E71_v) ;  
if ( document.getElementById('H71').value > 0 )  {
var I71_x = parseInt(H71_v) * parseInt(E71_v) /2;
if (( $( "#I71" ).val() != 0 ) && ($( "#I71" ).val() != I71_x) ) {  var I71_v = $( "#I71" ).val() ; } else { 
var I71_v = parseInt(H71_v) * parseInt(E71_v) /2;  }
} else { 
if ( document.getElementById('I71').value != 0 ) { var I71_v = $( "#I71" ).val() ; } else {
var I71_v =  0 ; }
}

document.getElementById('I71').value = parseInt(I71_v) ; 
var J7_v71= parseInt(J7_v70) - parseInt(E71_v) + parseInt(I71_v) ;



var G72="72";    
var D72="0.00";  
var D72_v =  parseFloat(D72) + document.getElementById('D72').value; 
var D72_w =   parseFloat(D72_v).toFixed(2);
var H72="0.00";  
var H72_v =  parseInt(H72) + document.getElementById('H72').value; 
if ( D72_v > "0" )  { 
var E72_x = ( (parseInt(J7_v) - parseInt(J7_v71) + parseInt(Ex5_v) * ( parseInt(G72) )) / D72_w );  
if (( $( "#E72" ).val() != 0 ) && ($( "#E72" ).val() != E72_x) ) {  var E72_v = $( "#E72" ).val() ; } else { 
if ( E72_x < 2 ) {  var E72_v = 2;  } else { var E72_v = Math.ceil(E72_x) ; }  }

} else { 
var E72_v =  0 ;
}
 
document.getElementById('E72').value = parseInt(E72_v) ;  
if ( document.getElementById('H72').value > 0 )  {
var I72_x = parseInt(H72_v) * parseInt(E72_v) /2;
if (( $( "#I72" ).val() != 0 ) && ($( "#I72" ).val() != I72_x) ) {  var I72_v = $( "#I72" ).val() ; } else { 
var I72_v = parseInt(H72_v) * parseInt(E72_v) /2;  }
} else { 
if ( document.getElementById('I72').value != 0 ) { var I72_v = $( "#I72" ).val() ; } else {
var I72_v =  0 ; }
}

document.getElementById('I72').value = parseInt(I72_v) ; 
var J7_v72= parseInt(J7_v71) - parseInt(E72_v) + parseInt(I72_v) ;



var G73="73";    
var D73="0.00";  
var D73_v =  parseFloat(D73) + document.getElementById('D73').value; 
var D73_w =   parseFloat(D73_v).toFixed(2);
var H73="0.00";  
var H73_v =  parseInt(H73) + document.getElementById('H73').value; 
if ( D73_v > "0" )  { 
var E73_x = ( (parseInt(J7_v) - parseInt(J7_v72) + parseInt(Ex5_v) * ( parseInt(G73) )) / D73_w );  
if (( $( "#E73" ).val() != 0 ) && ($( "#E73" ).val() != E73_x) ) {  var E73_v = $( "#E73" ).val() ; } else { 
if ( E73_x < 2 ) {  var E73_v = 2;  } else { var E73_v = Math.ceil(E73_x) ; }  }

} else { 
var E73_v =  0 ;
}
 
document.getElementById('E73').value = parseInt(E73_v) ;  
if ( document.getElementById('H73').value > 0 )  {
var I73_x = parseInt(H73_v) * parseInt(E73_v) /2;
if (( $( "#I73" ).val() != 0 ) && ($( "#I73" ).val() != I73_x) ) {  var I73_v = $( "#I73" ).val() ; } else { 
var I73_v = parseInt(H73_v) * parseInt(E73_v) /2;  }
} else { 
if ( document.getElementById('I73').value != 0 ) { var I73_v = $( "#I73" ).val() ; } else {
var I73_v =  0 ; }
}

document.getElementById('I73').value = parseInt(I73_v) ; 
var J7_v73= parseInt(J7_v72) - parseInt(E73_v) + parseInt(I73_v) ;



var G74="74";    
var D74="0.00";  
var D74_v =  parseFloat(D74) + document.getElementById('D74').value; 
var D74_w =   parseFloat(D74_v).toFixed(2);
var H74="0.00";  
var H74_v =  parseInt(H74) + document.getElementById('H74').value; 
if ( D74_v > "0" )  { 
var E74_x = ( (parseInt(J7_v) - parseInt(J7_v73) + parseInt(Ex5_v) * ( parseInt(G74) )) / D74_w );  
if (( $( "#E74" ).val() != 0 ) && ($( "#E74" ).val() != E74_x) ) {  var E74_v = $( "#E74" ).val() ; } else { 
if ( E74_x < 2 ) {  var E74_v = 2;  } else { var E74_v = Math.ceil(E74_x) ; }  }

} else { 
var E74_v =  0 ;
}
 
document.getElementById('E74').value = parseInt(E74_v) ;  
if ( document.getElementById('H74').value > 0 )  {
var I74_x = parseInt(H74_v) * parseInt(E74_v) /2;
if (( $( "#I74" ).val() != 0 ) && ($( "#I74" ).val() != I74_x) ) {  var I74_v = $( "#I74" ).val() ; } else { 
var I74_v = parseInt(H74_v) * parseInt(E74_v) /2;  }
} else { 
if ( document.getElementById('I74').value != 0 ) { var I74_v = $( "#I74" ).val() ; } else {
var I74_v =  0 ; }
}

document.getElementById('I74').value = parseInt(I74_v) ; 
var J7_v74= parseInt(J7_v73) - parseInt(E74_v) + parseInt(I74_v) ;



var G75="75";    
var D75="0.00";  
var D75_v =  parseFloat(D75) + document.getElementById('D75').value; 
var D75_w =   parseFloat(D75_v).toFixed(2);
var H75="0.00";  
var H75_v =  parseInt(H75) + document.getElementById('H75').value; 
if ( D75_v > "0" )  { 
var E75_x = ( (parseInt(J7_v) - parseInt(J7_v74) + parseInt(Ex5_v) * ( parseInt(G75) )) / D75_w );  
if (( $( "#E75" ).val() != 0 ) && ($( "#E75" ).val() != E75_x) ) {  var E75_v = $( "#E75" ).val() ; } else { 
if ( E75_x < 2 ) {  var E75_v = 2;  } else { var E75_v = Math.ceil(E75_x) ; }  }

} else { 
var E75_v =  0 ;
}
 
document.getElementById('E75').value = parseInt(E75_v) ;  
if ( document.getElementById('H75').value > 0 )  {
var I75_x = parseInt(H75_v) * parseInt(E75_v) /2;
if (( $( "#I75" ).val() != 0 ) && ($( "#I75" ).val() != I75_x) ) {  var I75_v = $( "#I75" ).val() ; } else { 
var I75_v = parseInt(H75_v) * parseInt(E75_v) /2;  }
} else { 
if ( document.getElementById('I75').value != 0 ) { var I75_v = $( "#I75" ).val() ; } else {
var I75_v =  0 ; }
}

document.getElementById('I75').value = parseInt(I75_v) ; 
var J7_v75= parseInt(J7_v74) - parseInt(E75_v) + parseInt(I75_v) ;



var G76="76";    
var D76="0.00";  
var D76_v =  parseFloat(D76) + document.getElementById('D76').value; 
var D76_w =   parseFloat(D76_v).toFixed(2);
var H76="0.00";  
var H76_v =  parseInt(H76) + document.getElementById('H76').value; 
if ( D76_v > "0" )  { 
var E76_x = ( (parseInt(J7_v) - parseInt(J7_v75) + parseInt(Ex5_v) * ( parseInt(G76) )) / D76_w );  
if (( $( "#E76" ).val() != 0 ) && ($( "#E76" ).val() != E76_x) ) {  var E76_v = $( "#E76" ).val() ; } else { 
if ( E76_x < 2 ) {  var E76_v = 2;  } else { var E76_v = Math.ceil(E76_x) ; }  }

} else { 
var E76_v =  0 ;
}
 
document.getElementById('E76').value = parseInt(E76_v) ;  
if ( document.getElementById('H76').value > 0 )  {
var I76_x = parseInt(H76_v) * parseInt(E76_v) /2;
if (( $( "#I76" ).val() != 0 ) && ($( "#I76" ).val() != I76_x) ) {  var I76_v = $( "#I76" ).val() ; } else { 
var I76_v = parseInt(H76_v) * parseInt(E76_v) /2;  }
} else { 
if ( document.getElementById('I76').value != 0 ) { var I76_v = $( "#I76" ).val() ; } else {
var I76_v =  0 ; }
}

document.getElementById('I76').value = parseInt(I76_v) ; 
var J7_v76= parseInt(J7_v75) - parseInt(E76_v) + parseInt(I76_v) ;



var G77="77";    
var D77="0.00";  
var D77_v =  parseFloat(D77) + document.getElementById('D77').value; 
var D77_w =   parseFloat(D77_v).toFixed(2);
var H77="0.00";  
var H77_v =  parseInt(H77) + document.getElementById('H77').value; 
if ( D77_v > "0" )  { 
var E77_x = ( (parseInt(J7_v) - parseInt(J7_v76) + parseInt(Ex5_v) * ( parseInt(G77) )) / D77_w );  
if (( $( "#E77" ).val() != 0 ) && ($( "#E77" ).val() != E77_x) ) {  var E77_v = $( "#E77" ).val() ; } else { 
if ( E77_x < 2 ) {  var E77_v = 2;  } else { var E77_v = Math.ceil(E77_x) ; }  }

} else { 
var E77_v =  0 ;
}
 
document.getElementById('E77').value = parseInt(E77_v) ;  
if ( document.getElementById('H77').value > 0 )  {
var I77_x = parseInt(H77_v) * parseInt(E77_v) /2;
if (( $( "#I77" ).val() != 0 ) && ($( "#I77" ).val() != I77_x) ) {  var I77_v = $( "#I77" ).val() ; } else { 
var I77_v = parseInt(H77_v) * parseInt(E77_v) /2;  }
} else { 
if ( document.getElementById('I77').value != 0 ) { var I77_v = $( "#I77" ).val() ; } else {
var I77_v =  0 ; }
}

document.getElementById('I77').value = parseInt(I77_v) ; 
var J7_v77= parseInt(J7_v76) - parseInt(E77_v) + parseInt(I77_v) ;



var G78="78";    
var D78="0.00";  
var D78_v =  parseFloat(D78) + document.getElementById('D78').value; 
var D78_w =   parseFloat(D78_v).toFixed(2);
var H78="0.00";  
var H78_v =  parseInt(H78) + document.getElementById('H78').value; 
if ( D78_v > "0" )  { 
var E78_x = ( (parseInt(J7_v) - parseInt(J7_v77) + parseInt(Ex5_v) * ( parseInt(G78) )) / D78_w );  
if (( $( "#E78" ).val() != 0 ) && ($( "#E78" ).val() != E78_x) ) {  var E78_v = $( "#E78" ).val() ; } else { 
if ( E78_x < 2 ) {  var E78_v = 2;  } else { var E78_v = Math.ceil(E78_x) ; }  }

} else { 
var E78_v =  0 ;
}
 
document.getElementById('E78').value = parseInt(E78_v) ;  
if ( document.getElementById('H78').value > 0 )  {
var I78_x = parseInt(H78_v) * parseInt(E78_v) /2;
if (( $( "#I78" ).val() != 0 ) && ($( "#I78" ).val() != I78_x) ) {  var I78_v = $( "#I78" ).val() ; } else { 
var I78_v = parseInt(H78_v) * parseInt(E78_v) /2;  }
} else { 
if ( document.getElementById('I78').value != 0 ) { var I78_v = $( "#I78" ).val() ; } else {
var I78_v =  0 ; }
}

document.getElementById('I78').value = parseInt(I78_v) ; 
var J7_v78= parseInt(J7_v77) - parseInt(E78_v) + parseInt(I78_v) ;



var G79="79";    
var D79="0.00";  
var D79_v =  parseFloat(D79) + document.getElementById('D79').value; 
var D79_w =   parseFloat(D79_v).toFixed(2);
var H79="0.00";  
var H79_v =  parseInt(H79) + document.getElementById('H79').value; 
if ( D79_v > "0" )  { 
var E79_x = ( (parseInt(J7_v) - parseInt(J7_v78) + parseInt(Ex5_v) * ( parseInt(G79) )) / D79_w );  
if (( $( "#E79" ).val() != 0 ) && ($( "#E79" ).val() != E79_x) ) {  var E79_v = $( "#E79" ).val() ; } else { 
if ( E79_x < 2 ) {  var E79_v = 2;  } else { var E79_v = Math.ceil(E79_x) ; }  }

} else { 
var E79_v =  0 ;
}
 
document.getElementById('E79').value = parseInt(E79_v) ;  
if ( document.getElementById('H79').value > 0 )  {
var I79_x = parseInt(H79_v) * parseInt(E79_v) /2;
if (( $( "#I79" ).val() != 0 ) && ($( "#I79" ).val() != I79_x) ) {  var I79_v = $( "#I79" ).val() ; } else { 
var I79_v = parseInt(H79_v) * parseInt(E79_v) /2;  }
} else { 
if ( document.getElementById('I79').value != 0 ) { var I79_v = $( "#I79" ).val() ; } else {
var I79_v =  0 ; }
}

document.getElementById('I79').value = parseInt(I79_v) ; 
var J7_v79= parseInt(J7_v78) - parseInt(E79_v) + parseInt(I79_v) ;



var G80="80";    
var D80="0.00";  
var D80_v =  parseFloat(D80) + document.getElementById('D80').value; 
var D80_w =   parseFloat(D80_v).toFixed(2);
var H80="0.00";  
var H80_v =  parseInt(H80) + document.getElementById('H80').value; 
if ( D80_v > "0" )  { 
var E80_x = ( (parseInt(J7_v) - parseInt(J7_v79) + parseInt(Ex5_v) * ( parseInt(G80) )) / D80_w );  
if (( $( "#E80" ).val() != 0 ) && ($( "#E80" ).val() != E80_x) ) {  var E80_v = $( "#E80" ).val() ; } else { 
if ( E80_x < 2 ) {  var E80_v = 2;  } else { var E80_v = Math.ceil(E80_x) ; }  }

} else { 
var E80_v =  0 ;
}
 
document.getElementById('E80').value = parseInt(E80_v) ;  
if ( document.getElementById('H80').value > 0 )  {
var I80_x = parseInt(H80_v) * parseInt(E80_v) /2;
if (( $( "#I80" ).val() != 0 ) && ($( "#I80" ).val() != I80_x) ) {  var I80_v = $( "#I80" ).val() ; } else { 
var I80_v = parseInt(H80_v) * parseInt(E80_v) /2;  }
} else { 
if ( document.getElementById('I80').value != 0 ) { var I80_v = $( "#I80" ).val() ; } else {
var I80_v =  0 ; }
}

document.getElementById('I80').value = parseInt(I80_v) ; 
var J7_v80= parseInt(J7_v79) - parseInt(E80_v) + parseInt(I80_v) ;



var G81="81";    
var D81="0.00";  
var D81_v =  parseFloat(D81) + document.getElementById('D81').value; 
var D81_w =   parseFloat(D81_v).toFixed(2);
var H81="0.00";  
var H81_v =  parseInt(H81) + document.getElementById('H81').value; 
if ( D81_v > "0" )  { 
var E81_x = ( (parseInt(J7_v) - parseInt(J7_v80) + parseInt(Ex5_v) * ( parseInt(G81) )) / D81_w );  
if (( $( "#E81" ).val() != 0 ) && ($( "#E81" ).val() != E81_x) ) {  var E81_v = $( "#E81" ).val() ; } else { 
if ( E81_x < 2 ) {  var E81_v = 2;  } else { var E81_v = Math.ceil(E81_x) ; }  }

} else { 
var E81_v =  0 ;
}
 
document.getElementById('E81').value = parseInt(E81_v) ;  
if ( document.getElementById('H81').value > 0 )  {
var I81_x = parseInt(H81_v) * parseInt(E81_v) /2;
if (( $( "#I81" ).val() != 0 ) && ($( "#I81" ).val() != I81_x) ) {  var I81_v = $( "#I81" ).val() ; } else { 
var I81_v = parseInt(H81_v) * parseInt(E81_v) /2;  }
} else { 
if ( document.getElementById('I81').value != 0 ) { var I81_v = $( "#I81" ).val() ; } else {
var I81_v =  0 ; }
}

document.getElementById('I81').value = parseInt(I81_v) ; 
var J7_v81= parseInt(J7_v80) - parseInt(E81_v) + parseInt(I81_v) ;



var G82="82";    
var D82="0.00";  
var D82_v =  parseFloat(D82) + document.getElementById('D82').value; 
var D82_w =   parseFloat(D82_v).toFixed(2);
var H82="0.00";  
var H82_v =  parseInt(H82) + document.getElementById('H82').value; 
if ( D82_v > "0" )  { 
var E82_x = ( (parseInt(J7_v) - parseInt(J7_v81) + parseInt(Ex5_v) * ( parseInt(G82) )) / D82_w );  
if (( $( "#E82" ).val() != 0 ) && ($( "#E82" ).val() != E82_x) ) {  var E82_v = $( "#E82" ).val() ; } else { 
if ( E82_x < 2 ) {  var E82_v = 2;  } else { var E82_v = Math.ceil(E82_x) ; }  }

} else { 
var E82_v =  0 ;
}
 
document.getElementById('E82').value = parseInt(E82_v) ;  
if ( document.getElementById('H82').value > 0 )  {
var I82_x = parseInt(H82_v) * parseInt(E82_v) /2;
if (( $( "#I82" ).val() != 0 ) && ($( "#I82" ).val() != I82_x) ) {  var I82_v = $( "#I82" ).val() ; } else { 
var I82_v = parseInt(H82_v) * parseInt(E82_v) /2;  }
} else { 
if ( document.getElementById('I82').value != 0 ) { var I82_v = $( "#I82" ).val() ; } else {
var I82_v =  0 ; }
}

document.getElementById('I82').value = parseInt(I82_v) ; 
var J7_v82= parseInt(J7_v81) - parseInt(E82_v) + parseInt(I82_v) ;



var G83="83";    
var D83="0.00";  
var D83_v =  parseFloat(D83) + document.getElementById('D83').value; 
var D83_w =   parseFloat(D83_v).toFixed(2);
var H83="0.00";  
var H83_v =  parseInt(H83) + document.getElementById('H83').value; 
if ( D83_v > "0" )  { 
var E83_x = ( (parseInt(J7_v) - parseInt(J7_v82) + parseInt(Ex5_v) * ( parseInt(G83) )) / D83_w );  
if (( $( "#E83" ).val() != 0 ) && ($( "#E83" ).val() != E83_x) ) {  var E83_v = $( "#E83" ).val() ; } else { 
if ( E83_x < 2 ) {  var E83_v = 2;  } else { var E83_v = Math.ceil(E83_x) ; }  }

} else { 
var E83_v =  0 ;
}
 
document.getElementById('E83').value = parseInt(E83_v) ;  
if ( document.getElementById('H83').value > 0 )  {
var I83_x = parseInt(H83_v) * parseInt(E83_v) /2;
if (( $( "#I83" ).val() != 0 ) && ($( "#I83" ).val() != I83_x) ) {  var I83_v = $( "#I83" ).val() ; } else { 
var I83_v = parseInt(H83_v) * parseInt(E83_v) /2;  }
} else { 
if ( document.getElementById('I83').value != 0 ) { var I83_v = $( "#I83" ).val() ; } else {
var I83_v =  0 ; }
}

document.getElementById('I83').value = parseInt(I83_v) ; 
var J7_v83= parseInt(J7_v82) - parseInt(E83_v) + parseInt(I83_v) ;



var G84="84";    
var D84="0.00";  
var D84_v =  parseFloat(D84) + document.getElementById('D84').value; 
var D84_w =   parseFloat(D84_v).toFixed(2);
var H84="0.00";  
var H84_v =  parseInt(H84) + document.getElementById('H84').value; 
if ( D84_v > "0" )  { 
var E84_x = ( (parseInt(J7_v) - parseInt(J7_v83) + parseInt(Ex5_v) * ( parseInt(G84) )) / D84_w );  
if (( $( "#E84" ).val() != 0 ) && ($( "#E84" ).val() != E84_x) ) {  var E84_v = $( "#E84" ).val() ; } else { 
if ( E84_x < 2 ) {  var E84_v = 2;  } else { var E84_v = Math.ceil(E84_x) ; }  }

} else { 
var E84_v =  0 ;
}
 
document.getElementById('E84').value = parseInt(E84_v) ;  
if ( document.getElementById('H84').value > 0 )  {
var I84_x = parseInt(H84_v) * parseInt(E84_v) /2;
if (( $( "#I84" ).val() != 0 ) && ($( "#I84" ).val() != I84_x) ) {  var I84_v = $( "#I84" ).val() ; } else { 
var I84_v = parseInt(H84_v) * parseInt(E84_v) /2;  }
} else { 
if ( document.getElementById('I84').value != 0 ) { var I84_v = $( "#I84" ).val() ; } else {
var I84_v =  0 ; }
}

document.getElementById('I84').value = parseInt(I84_v) ; 
var J7_v84= parseInt(J7_v83) - parseInt(E84_v) + parseInt(I84_v) ;



var G85="85";    
var D85="0.00";  
var D85_v =  parseFloat(D85) + document.getElementById('D85').value; 
var D85_w =   parseFloat(D85_v).toFixed(2);
var H85="0.00";  
var H85_v =  parseInt(H85) + document.getElementById('H85').value; 
if ( D85_v > "0" )  { 
var E85_x = ( (parseInt(J7_v) - parseInt(J7_v84) + parseInt(Ex5_v) * ( parseInt(G85) )) / D85_w );  
if (( $( "#E85" ).val() != 0 ) && ($( "#E85" ).val() != E85_x) ) {  var E85_v = $( "#E85" ).val() ; } else { 
if ( E85_x < 2 ) {  var E85_v = 2;  } else { var E85_v = Math.ceil(E85_x) ; }  }

} else { 
var E85_v =  0 ;
}
 
document.getElementById('E85').value = parseInt(E85_v) ;  
if ( document.getElementById('H85').value > 0 )  {
var I85_x = parseInt(H85_v) * parseInt(E85_v) /2;
if (( $( "#I85" ).val() != 0 ) && ($( "#I85" ).val() != I85_x) ) {  var I85_v = $( "#I85" ).val() ; } else { 
var I85_v = parseInt(H85_v) * parseInt(E85_v) /2;  }
} else { 
if ( document.getElementById('I85').value != 0 ) { var I85_v = $( "#I85" ).val() ; } else {
var I85_v =  0 ; }
}

document.getElementById('I85').value = parseInt(I85_v) ; 
var J7_v85= parseInt(J7_v84) - parseInt(E85_v) + parseInt(I85_v) ;



var G86="86";    
var D86="0.00";  
var D86_v =  parseFloat(D86) + document.getElementById('D86').value; 
var D86_w =   parseFloat(D86_v).toFixed(2);
var H86="0.00";  
var H86_v =  parseInt(H86) + document.getElementById('H86').value; 
if ( D86_v > "0" )  { 
var E86_x = ( (parseInt(J7_v) - parseInt(J7_v85) + parseInt(Ex5_v) * ( parseInt(G86) )) / D86_w );  
if (( $( "#E86" ).val() != 0 ) && ($( "#E86" ).val() != E86_x) ) {  var E86_v = $( "#E86" ).val() ; } else { 
if ( E86_x < 2 ) {  var E86_v = 2;  } else { var E86_v = Math.ceil(E86_x) ; }  }

} else { 
var E86_v =  0 ;
}
 
document.getElementById('E86').value = parseInt(E86_v) ;  
if ( document.getElementById('H86').value > 0 )  {
var I86_x = parseInt(H86_v) * parseInt(E86_v) /2;
if (( $( "#I86" ).val() != 0 ) && ($( "#I86" ).val() != I86_x) ) {  var I86_v = $( "#I86" ).val() ; } else { 
var I86_v = parseInt(H86_v) * parseInt(E86_v) /2;  }
} else { 
if ( document.getElementById('I86').value != 0 ) { var I86_v = $( "#I86" ).val() ; } else {
var I86_v =  0 ; }
}

document.getElementById('I86').value = parseInt(I86_v) ; 
var J7_v86= parseInt(J7_v85) - parseInt(E86_v) + parseInt(I86_v) ;



var G87="87";    
var D87="0.00";  
var D87_v =  parseFloat(D87) + document.getElementById('D87').value; 
var D87_w =   parseFloat(D87_v).toFixed(2);
var H87="0.00";  
var H87_v =  parseInt(H87) + document.getElementById('H87').value; 
if ( D87_v > "0" )  { 
var E87_x = ( (parseInt(J7_v) - parseInt(J7_v86) + parseInt(Ex5_v) * ( parseInt(G87) )) / D87_w );  
if (( $( "#E87" ).val() != 0 ) && ($( "#E87" ).val() != E87_x) ) {  var E87_v = $( "#E87" ).val() ; } else { 
if ( E87_x < 2 ) {  var E87_v = 2;  } else { var E87_v = Math.ceil(E87_x) ; }  }

} else { 
var E87_v =  0 ;
}
 
document.getElementById('E87').value = parseInt(E87_v) ;  
if ( document.getElementById('H87').value > 0 )  {
var I87_x = parseInt(H87_v) * parseInt(E87_v) /2;
if (( $( "#I87" ).val() != 0 ) && ($( "#I87" ).val() != I87_x) ) {  var I87_v = $( "#I87" ).val() ; } else { 
var I87_v = parseInt(H87_v) * parseInt(E87_v) /2;  }
} else { 
if ( document.getElementById('I87').value != 0 ) { var I87_v = $( "#I87" ).val() ; } else {
var I87_v =  0 ; }
}

document.getElementById('I87').value = parseInt(I87_v) ; 
var J7_v87= parseInt(J7_v86) - parseInt(E87_v) + parseInt(I87_v) ;



var G88="88";    
var D88="0.00";  
var D88_v =  parseFloat(D88) + document.getElementById('D88').value; 
var D88_w =   parseFloat(D88_v).toFixed(2);
var H88="0.00";  
var H88_v =  parseInt(H88) + document.getElementById('H88').value; 
if ( D88_v > "0" )  { 
var E88_x = ( (parseInt(J7_v) - parseInt(J7_v87) + parseInt(Ex5_v) * ( parseInt(G88) )) / D88_w );  
if (( $( "#E88" ).val() != 0 ) && ($( "#E88" ).val() != E88_x) ) {  var E88_v = $( "#E88" ).val() ; } else { 
if ( E88_x < 2 ) {  var E88_v = 2;  } else { var E88_v = Math.ceil(E88_x) ; }  }

} else { 
var E88_v =  0 ;
}
 
document.getElementById('E88').value = parseInt(E88_v) ;  
if ( document.getElementById('H88').value > 0 )  {
var I88_x = parseInt(H88_v) * parseInt(E88_v) /2;
if (( $( "#I88" ).val() != 0 ) && ($( "#I88" ).val() != I88_x) ) {  var I88_v = $( "#I88" ).val() ; } else { 
var I88_v = parseInt(H88_v) * parseInt(E88_v) /2;  }
} else { 
if ( document.getElementById('I88').value != 0 ) { var I88_v = $( "#I88" ).val() ; } else {
var I88_v =  0 ; }
}

document.getElementById('I88').value = parseInt(I88_v) ; 
var J7_v88= parseInt(J7_v87) - parseInt(E88_v) + parseInt(I88_v) ;



var G89="89";    
var D89="0.00";  
var D89_v =  parseFloat(D89) + document.getElementById('D89').value; 
var D89_w =   parseFloat(D89_v).toFixed(2);
var H89="0.00";  
var H89_v =  parseInt(H89) + document.getElementById('H89').value; 
if ( D89_v > "0" )  { 
var E89_x = ( (parseInt(J7_v) - parseInt(J7_v88) + parseInt(Ex5_v) * ( parseInt(G89) )) / D89_w );  
if (( $( "#E89" ).val() != 0 ) && ($( "#E89" ).val() != E89_x) ) {  var E89_v = $( "#E89" ).val() ; } else { 
if ( E89_x < 2 ) {  var E89_v = 2;  } else { var E89_v = Math.ceil(E89_x) ; }  }

} else { 
var E89_v =  0 ;
}
 
document.getElementById('E89').value = parseInt(E89_v) ;  
if ( document.getElementById('H89').value > 0 )  {
var I89_x = parseInt(H89_v) * parseInt(E89_v) /2;
if (( $( "#I89" ).val() != 0 ) && ($( "#I89" ).val() != I89_x) ) {  var I89_v = $( "#I89" ).val() ; } else { 
var I89_v = parseInt(H89_v) * parseInt(E89_v) /2;  }
} else { 
if ( document.getElementById('I89').value != 0 ) { var I89_v = $( "#I89" ).val() ; } else {
var I89_v =  0 ; }
}

document.getElementById('I89').value = parseInt(I89_v) ; 
var J7_v89= parseInt(J7_v88) - parseInt(E89_v) + parseInt(I89_v) ;



var G90="90";    
var D90="0.00";  
var D90_v =  parseFloat(D90) + document.getElementById('D90').value; 
var D90_w =   parseFloat(D90_v).toFixed(2);
var H90="0.00";  
var H90_v =  parseInt(H90) + document.getElementById('H90').value; 
if ( D90_v > "0" )  { 
var E90_x = ( (parseInt(J7_v) - parseInt(J7_v89) + parseInt(Ex5_v) * ( parseInt(G90) )) / D90_w );  
if (( $( "#E90" ).val() != 0 ) && ($( "#E90" ).val() != E90_x) ) {  var E90_v = $( "#E90" ).val() ; } else { 
if ( E90_x < 2 ) {  var E90_v = 2;  } else { var E90_v = Math.ceil(E90_x) ; }  }

} else { 
var E90_v =  0 ;
}
 
document.getElementById('E90').value = parseInt(E90_v) ;  
if ( document.getElementById('H90').value > 0 )  {
var I90_x = parseInt(H90_v) * parseInt(E90_v) /2;
if (( $( "#I90" ).val() != 0 ) && ($( "#I90" ).val() != I90_x) ) {  var I90_v = $( "#I90" ).val() ; } else { 
var I90_v = parseInt(H90_v) * parseInt(E90_v) /2;  }
} else { 
if ( document.getElementById('I90').value != 0 ) { var I90_v = $( "#I90" ).val() ; } else {
var I90_v =  0 ; }
}

document.getElementById('I90').value = parseInt(I90_v) ; 
var J7_v90= parseInt(J7_v89) - parseInt(E90_v) + parseInt(I90_v) ;



var G91="91";    
var D91="0.00";  
var D91_v =  parseFloat(D91) + document.getElementById('D91').value; 
var D91_w =   parseFloat(D91_v).toFixed(2);
var H91="0.00";  
var H91_v =  parseInt(H91) + document.getElementById('H91').value; 
if ( D91_v > "0" )  { 
var E91_x = ( (parseInt(J7_v) - parseInt(J7_v90) + parseInt(Ex5_v) * ( parseInt(G91) )) / D91_w );  
if (( $( "#E91" ).val() != 0 ) && ($( "#E91" ).val() != E91_x) ) {  var E91_v = $( "#E91" ).val() ; } else { 
if ( E91_x < 2 ) {  var E91_v = 2;  } else { var E91_v = Math.ceil(E91_x) ; }  }

} else { 
var E91_v =  0 ;
}
 
document.getElementById('E91').value = parseInt(E91_v) ;  
if ( document.getElementById('H91').value > 0 )  {
var I91_x = parseInt(H91_v) * parseInt(E91_v) /2;
if (( $( "#I91" ).val() != 0 ) && ($( "#I91" ).val() != I91_x) ) {  var I91_v = $( "#I91" ).val() ; } else { 
var I91_v = parseInt(H91_v) * parseInt(E91_v) /2;  }
} else { 
if ( document.getElementById('I91').value != 0 ) { var I91_v = $( "#I91" ).val() ; } else {
var I91_v =  0 ; }
}

document.getElementById('I91').value = parseInt(I91_v) ; 
var J7_v91= parseInt(J7_v90) - parseInt(E91_v) + parseInt(I91_v) ;



var G92="92";    
var D92="0.00";  
var D92_v =  parseFloat(D92) + document.getElementById('D92').value; 
var D92_w =   parseFloat(D92_v).toFixed(2);
var H92="0.00";  
var H92_v =  parseInt(H92) + document.getElementById('H92').value; 
if ( D92_v > "0" )  { 
var E92_x = ( (parseInt(J7_v) - parseInt(J7_v91) + parseInt(Ex5_v) * ( parseInt(G92) )) / D92_w );  
if (( $( "#E92" ).val() != 0 ) && ($( "#E92" ).val() != E92_x) ) {  var E92_v = $( "#E92" ).val() ; } else { 
if ( E92_x < 2 ) {  var E92_v = 2;  } else { var E92_v = Math.ceil(E92_x) ; }  }

} else { 
var E92_v =  0 ;
}
 
document.getElementById('E92').value = parseInt(E92_v) ;  
if ( document.getElementById('H92').value > 0 )  {
var I92_x = parseInt(H92_v) * parseInt(E92_v) /2;
if (( $( "#I92" ).val() != 0 ) && ($( "#I92" ).val() != I92_x) ) {  var I92_v = $( "#I92" ).val() ; } else { 
var I92_v = parseInt(H92_v) * parseInt(E92_v) /2;  }
} else { 
if ( document.getElementById('I92').value != 0 ) { var I92_v = $( "#I92" ).val() ; } else {
var I92_v =  0 ; }
}

document.getElementById('I92').value = parseInt(I92_v) ; 
var J7_v92= parseInt(J7_v91) - parseInt(E92_v) + parseInt(I92_v) ;



var G93="93";    
var D93="0.00";  
var D93_v =  parseFloat(D93) + document.getElementById('D93').value; 
var D93_w =   parseFloat(D93_v).toFixed(2);
var H93="0.00";  
var H93_v =  parseInt(H93) + document.getElementById('H93').value; 
if ( D93_v > "0" )  { 
var E93_x = ( (parseInt(J7_v) - parseInt(J7_v92) + parseInt(Ex5_v) * ( parseInt(G93) )) / D93_w );  
if (( $( "#E93" ).val() != 0 ) && ($( "#E93" ).val() != E93_x) ) {  var E93_v = $( "#E93" ).val() ; } else { 
if ( E93_x < 2 ) {  var E93_v = 2;  } else { var E93_v = Math.ceil(E93_x) ; }  }

} else { 
var E93_v =  0 ;
}
 
document.getElementById('E93').value = parseInt(E93_v) ;  
if ( document.getElementById('H93').value > 0 )  {
var I93_x = parseInt(H93_v) * parseInt(E93_v) /2;
if (( $( "#I93" ).val() != 0 ) && ($( "#I93" ).val() != I93_x) ) {  var I93_v = $( "#I93" ).val() ; } else { 
var I93_v = parseInt(H93_v) * parseInt(E93_v) /2;  }
} else { 
if ( document.getElementById('I93').value != 0 ) { var I93_v = $( "#I93" ).val() ; } else {
var I93_v =  0 ; }
}

document.getElementById('I93').value = parseInt(I93_v) ; 
var J7_v93= parseInt(J7_v92) - parseInt(E93_v) + parseInt(I93_v) ;



var G94="94";    
var D94="0.00";  
var D94_v =  parseFloat(D94) + document.getElementById('D94').value; 
var D94_w =   parseFloat(D94_v).toFixed(2);
var H94="0.00";  
var H94_v =  parseInt(H94) + document.getElementById('H94').value; 
if ( D94_v > "0" )  { 
var E94_x = ( (parseInt(J7_v) - parseInt(J7_v93) + parseInt(Ex5_v) * ( parseInt(G94) )) / D94_w );  
if (( $( "#E94" ).val() != 0 ) && ($( "#E94" ).val() != E94_x) ) {  var E94_v = $( "#E94" ).val() ; } else { 
if ( E94_x < 2 ) {  var E94_v = 2;  } else { var E94_v = Math.ceil(E94_x) ; }  }

} else { 
var E94_v =  0 ;
}
 
document.getElementById('E94').value = parseInt(E94_v) ;  
if ( document.getElementById('H94').value > 0 )  {
var I94_x = parseInt(H94_v) * parseInt(E94_v) /2;
if (( $( "#I94" ).val() != 0 ) && ($( "#I94" ).val() != I94_x) ) {  var I94_v = $( "#I94" ).val() ; } else { 
var I94_v = parseInt(H94_v) * parseInt(E94_v) /2;  }
} else { 
if ( document.getElementById('I94').value != 0 ) { var I94_v = $( "#I94" ).val() ; } else {
var I94_v =  0 ; }
}

document.getElementById('I94').value = parseInt(I94_v) ; 
var J7_v94= parseInt(J7_v93) - parseInt(E94_v) + parseInt(I94_v) ;



var G95="95";    
var D95="0.00";  
var D95_v =  parseFloat(D95) + document.getElementById('D95').value; 
var D95_w =   parseFloat(D95_v).toFixed(2);
var H95="0.00";  
var H95_v =  parseInt(H95) + document.getElementById('H95').value; 
if ( D95_v > "0" )  { 
var E95_x = ( (parseInt(J7_v) - parseInt(J7_v94) + parseInt(Ex5_v) * ( parseInt(G95) )) / D95_w );  
if (( $( "#E95" ).val() != 0 ) && ($( "#E95" ).val() != E95_x) ) {  var E95_v = $( "#E95" ).val() ; } else { 
if ( E95_x < 2 ) {  var E95_v = 2;  } else { var E95_v = Math.ceil(E95_x) ; }  }

} else { 
var E95_v =  0 ;
}
 
document.getElementById('E95').value = parseInt(E95_v) ;  
if ( document.getElementById('H95').value > 0 )  {
var I95_x = parseInt(H95_v) * parseInt(E95_v) /2;
if (( $( "#I95" ).val() != 0 ) && ($( "#I95" ).val() != I95_x) ) {  var I95_v = $( "#I95" ).val() ; } else { 
var I95_v = parseInt(H95_v) * parseInt(E95_v) /2;  }
} else { 
if ( document.getElementById('I95').value != 0 ) { var I95_v = $( "#I95" ).val() ; } else {
var I95_v =  0 ; }
}

document.getElementById('I95').value = parseInt(I95_v) ; 
var J7_v95= parseInt(J7_v94) - parseInt(E95_v) + parseInt(I95_v) ;



var G96="96";    
var D96="0.00";  
var D96_v =  parseFloat(D96) + document.getElementById('D96').value; 
var D96_w =   parseFloat(D96_v).toFixed(2);
var H96="0.00";  
var H96_v =  parseInt(H96) + document.getElementById('H96').value; 
if ( D96_v > "0" )  { 
var E96_x = ( (parseInt(J7_v) - parseInt(J7_v95) + parseInt(Ex5_v) * ( parseInt(G96) )) / D96_w );  
if (( $( "#E96" ).val() != 0 ) && ($( "#E96" ).val() != E96_x) ) {  var E96_v = $( "#E96" ).val() ; } else { 
if ( E96_x < 2 ) {  var E96_v = 2;  } else { var E96_v = Math.ceil(E96_x) ; }  }

} else { 
var E96_v =  0 ;
}
 
document.getElementById('E96').value = parseInt(E96_v) ;  
if ( document.getElementById('H96').value > 0 )  {
var I96_x = parseInt(H96_v) * parseInt(E96_v) /2;
if (( $( "#I96" ).val() != 0 ) && ($( "#I96" ).val() != I96_x) ) {  var I96_v = $( "#I96" ).val() ; } else { 
var I96_v = parseInt(H96_v) * parseInt(E96_v) /2;  }
} else { 
if ( document.getElementById('I96').value != 0 ) { var I96_v = $( "#I96" ).val() ; } else {
var I96_v =  0 ; }
}

document.getElementById('I96').value = parseInt(I96_v) ; 
var J7_v96= parseInt(J7_v95) - parseInt(E96_v) + parseInt(I96_v) ;



var G97="97";    
var D97="0.00";  
var D97_v =  parseFloat(D97) + document.getElementById('D97').value; 
var D97_w =   parseFloat(D97_v).toFixed(2);
var H97="0.00";  
var H97_v =  parseInt(H97) + document.getElementById('H97').value; 
if ( D97_v > "0" )  { 
var E97_x = ( (parseInt(J7_v) - parseInt(J7_v96) + parseInt(Ex5_v) * ( parseInt(G97) )) / D97_w );  
if (( $( "#E97" ).val() != 0 ) && ($( "#E97" ).val() != E97_x) ) {  var E97_v = $( "#E97" ).val() ; } else { 
if ( E97_x < 2 ) {  var E97_v = 2;  } else { var E97_v = Math.ceil(E97_x) ; }  }

} else { 
var E97_v =  0 ;
}
 
document.getElementById('E97').value = parseInt(E97_v) ;  
if ( document.getElementById('H97').value > 0 )  {
var I97_x = parseInt(H97_v) * parseInt(E97_v) /2;
if (( $( "#I97" ).val() != 0 ) && ($( "#I97" ).val() != I97_x) ) {  var I97_v = $( "#I97" ).val() ; } else { 
var I97_v = parseInt(H97_v) * parseInt(E97_v) /2;  }
} else { 
if ( document.getElementById('I97').value != 0 ) { var I97_v = $( "#I97" ).val() ; } else {
var I97_v =  0 ; }
}

document.getElementById('I97').value = parseInt(I97_v) ; 
var J7_v97= parseInt(J7_v96) - parseInt(E97_v) + parseInt(I97_v) ;



var G98="98";    
var D98="0.00";  
var D98_v =  parseFloat(D98) + document.getElementById('D98').value; 
var D98_w =   parseFloat(D98_v).toFixed(2);
var H98="0.00";  
var H98_v =  parseInt(H98) + document.getElementById('H98').value; 
if ( D98_v > "0" )  { 
var E98_x = ( (parseInt(J7_v) - parseInt(J7_v97) + parseInt(Ex5_v) * ( parseInt(G98) )) / D98_w );  
if (( $( "#E98" ).val() != 0 ) && ($( "#E98" ).val() != E98_x) ) {  var E98_v = $( "#E98" ).val() ; } else { 
if ( E98_x < 2 ) {  var E98_v = 2;  } else { var E98_v = Math.ceil(E98_x) ; }  }

} else { 
var E98_v =  0 ;
}
 
document.getElementById('E98').value = parseInt(E98_v) ;  
if ( document.getElementById('H98').value > 0 )  {
var I98_x = parseInt(H98_v) * parseInt(E98_v) /2;
if (( $( "#I98" ).val() != 0 ) && ($( "#I98" ).val() != I98_x) ) {  var I98_v = $( "#I98" ).val() ; } else { 
var I98_v = parseInt(H98_v) * parseInt(E98_v) /2;  }
} else { 
if ( document.getElementById('I98').value != 0 ) { var I98_v = $( "#I98" ).val() ; } else {
var I98_v =  0 ; }
}

document.getElementById('I98').value = parseInt(I98_v) ; 
var J7_v98= parseInt(J7_v97) - parseInt(E98_v) + parseInt(I98_v) ;



var G99="99";    
var D99="0.00";  
var D99_v =  parseFloat(D99) + document.getElementById('D99').value; 
var D99_w =   parseFloat(D99_v).toFixed(2);
var H99="0.00";  
var H99_v =  parseInt(H99) + document.getElementById('H99').value; 
if ( D99_v > "0" )  { 
var E99_x = ( (parseInt(J7_v) - parseInt(J7_v98) + parseInt(Ex5_v) * ( parseInt(G99) )) / D99_w );  
if (( $( "#E99" ).val() != 0 ) && ($( "#E99" ).val() != E99_x) ) {  var E99_v = $( "#E99" ).val() ; } else { 
if ( E99_x < 2 ) {  var E99_v = 2;  } else { var E99_v = Math.ceil(E99_x) ; }  }

} else { 
var E99_v =  0 ;
}
 
document.getElementById('E99').value = parseInt(E99_v) ;  
if ( document.getElementById('H99').value > 0 )  {
var I99_x = parseInt(H99_v) * parseInt(E99_v) /2;
if (( $( "#I99" ).val() != 0 ) && ($( "#I99" ).val() != I99_x) ) {  var I99_v = $( "#I99" ).val() ; } else { 
var I99_v = parseInt(H99_v) * parseInt(E99_v) /2;  }
} else { 
if ( document.getElementById('I99').value != 0 ) { var I99_v = $( "#I99" ).val() ; } else {
var I99_v =  0 ; }
}

document.getElementById('I99').value = parseInt(I99_v) ; 
var J7_v99= parseInt(J7_v98) - parseInt(E99_v) + parseInt(I99_v) ;



var G100="100";    
var D100="0.00";  
var D100_v =  parseFloat(D100) + document.getElementById('D100').value; 
var D100_w =   parseFloat(D100_v).toFixed(2);
var H100="0.00";  
var H100_v =  parseInt(H100) + document.getElementById('H100').value; 
if ( D100_v > "0" )  { 
var E100_x = ( (parseInt(J7_v) - parseInt(J7_v99) + parseInt(Ex5_v) * ( parseInt(G100) )) / D100_w );  
if (( $( "#E100" ).val() != 0 ) && ($( "#E100" ).val() != E100_x) ) {  var E100_v = $( "#E100" ).val() ; } else { 
if ( E100_x < 2 ) {  var E100_v = 2;  } else { var E100_v = Math.ceil(E100_x) ; }  }

} else { 
var E100_v =  0 ;
}
 
document.getElementById('E100').value = parseInt(E100_v) ;  
if ( document.getElementById('H100').value > 0 )  {
var I100_x = parseInt(H100_v) * parseInt(E100_v) /2;
if (( $( "#I100" ).val() != 0 ) && ($( "#I100" ).val() != I100_x) ) {  var I100_v = $( "#I100" ).val() ; } else { 
var I100_v = parseInt(H100_v) * parseInt(E100_v) /2;  }
} else { 
if ( document.getElementById('I100').value != 0 ) { var I100_v = $( "#I100" ).val() ; } else {
var I100_v =  0 ; }
}

document.getElementById('I100').value = parseInt(I100_v) ; 
var J7_v100= parseInt(J7_v99) - parseInt(E100_v) + parseInt(I100_v) ;

 
 
 
 
var T_INVESTED_v=parseFloat(E1_v) + parseFloat(E2_v) + parseFloat(E3_v) + parseFloat(E4_v) + parseFloat(E5_v) + parseFloat(E6_v) + parseFloat(E7_v) + parseFloat(E8_v) + parseFloat(E9_v) + parseFloat(E10_v) + parseFloat(E11_v) + parseFloat(E12_v) + parseFloat(E13_v) + parseFloat(E14_v) + parseFloat(E15_v) + parseFloat(E16_v) + parseFloat(E17_v) + parseFloat(E18_v) + parseFloat(E19_v) + parseFloat(E20_v) + parseFloat(E21_v) + parseFloat(E22_v) + parseFloat(E23_v) + parseFloat(E24_v) + parseFloat(E25_v) + parseFloat(E26_v) + parseFloat(E27_v) + parseFloat(E28_v) + parseFloat(E29_v) + parseFloat(E30_v) + parseFloat(E31_v) + parseFloat(E32_v) + parseFloat(E33_v) + parseFloat(E34_v) + parseFloat(E35_v) + parseFloat(E36_v) + parseFloat(E37_v) + parseFloat(E38_v) + parseFloat(E39_v) + parseFloat(E40_v) + parseFloat(E41_v) + parseFloat(E42_v) + parseFloat(E43_v) + parseFloat(E44_v) + parseFloat(E45_v) + parseFloat(E46_v) + parseFloat(E47_v) + parseFloat(E48_v) + parseFloat(E49_v) + parseFloat(E50_v) + parseFloat(E51_v) + parseFloat(E52_v) + parseFloat(E53_v) + parseFloat(E54_v) + parseFloat(E55_v) + parseFloat(E56_v) + parseFloat(E57_v) + parseFloat(E58_v) + parseFloat(E59_v) + parseFloat(E60_v) + parseFloat(E61_v) + parseFloat(E62_v) + parseFloat(E63_v) + parseFloat(E64_v) + parseFloat(E65_v) + parseFloat(E66_v) + parseFloat(E67_v) + parseFloat(E68_v) + parseFloat(E69_v) + parseFloat(E70_v) + parseFloat(E71_v) + parseFloat(E72_v) + parseFloat(E73_v) + parseFloat(E74_v) + parseFloat(E75_v) + parseFloat(E76_v) + parseFloat(E77_v) + parseFloat(E78_v) + parseFloat(E79_v) + parseFloat(E80_v) + parseFloat(E81_v) + parseFloat(E82_v) + parseFloat(E83_v) + parseFloat(E84_v) + parseFloat(E85_v) + parseFloat(E86_v) + parseFloat(E87_v) + parseFloat(E88_v) + parseFloat(E89_v) + parseFloat(E90_v) + parseFloat(E91_v) + parseFloat(E92_v) + parseFloat(E93_v) + parseFloat(E94_v) + parseFloat(E95_v) + parseFloat(E96_v) + parseFloat(E97_v) + parseFloat(E98_v) + parseFloat(E99_v) + parseFloat(E100_v) ; 
document.getElementById('T_INVESTED').value =  T_INVESTED_v ;

var T_RETURNS_v=parseFloat(I1_v) + parseFloat(I2_v) + parseFloat(I3_v) + parseFloat(I4_v) + parseFloat(I5_v) + parseFloat(I6_v) + parseFloat(I7_v) + parseFloat(I8_v) + parseFloat(I9_v) + parseFloat(I10_v) + parseFloat(I11_v) + parseFloat(I12_v) + parseFloat(I13_v) + parseFloat(I14_v) + parseFloat(I15_v) + parseFloat(I16_v) + parseFloat(I17_v) + parseFloat(I18_v) + parseFloat(I19_v) + parseFloat(I20_v) + parseFloat(I21_v) + parseFloat(I22_v) + parseFloat(I23_v) + parseFloat(I24_v) + parseFloat(I25_v) + parseFloat(I26_v) + parseFloat(I27_v) + parseFloat(I28_v) + parseFloat(I29_v) + parseFloat(I30_v) + parseFloat(I31_v) + parseFloat(I32_v) + parseFloat(I33_v) + parseFloat(I34_v) + parseFloat(I35_v) + parseFloat(I36_v) + parseFloat(I37_v) + parseFloat(I38_v) + parseFloat(I39_v) + parseFloat(I40_v) + parseFloat(I41_v) + parseFloat(I42_v) + parseFloat(I43_v) + parseFloat(I44_v) + parseFloat(I45_v) + parseFloat(I46_v) + parseFloat(I47_v) + parseFloat(I48_v) + parseFloat(I49_v) + parseFloat(I50_v) + parseFloat(I51_v) + parseFloat(I52_v) + parseFloat(I53_v) + parseFloat(I54_v) + parseFloat(I55_v) + parseFloat(I56_v) + parseFloat(I57_v) + parseFloat(I58_v) + parseFloat(I59_v) + parseFloat(I60_v) + parseFloat(I61_v) + parseFloat(I62_v) + parseFloat(I63_v) + parseFloat(I64_v) + parseFloat(I65_v) + parseFloat(I66_v) + parseFloat(I67_v) + parseFloat(I68_v) + parseFloat(I69_v) + parseFloat(I70_v) + parseFloat(I71_v) + parseFloat(I72_v) + parseFloat(I73_v) + parseFloat(I74_v) + parseFloat(I75_v) + parseFloat(I76_v) + parseFloat(I77_v) + parseFloat(I78_v) + parseFloat(I79_v) + parseFloat(I80_v) + parseFloat(I81_v) + parseFloat(I82_v) + parseFloat(I83_v) + parseFloat(I84_v) + parseFloat(I85_v) + parseFloat(I86_v) + parseFloat(I87_v) + parseFloat(I88_v) + parseFloat(I89_v) + parseFloat(I90_v) + parseFloat(I91_v) + parseFloat(I92_v) + parseFloat(I93_v) + parseFloat(I94_v) + parseFloat(I95_v) + parseFloat(I96_v) + parseFloat(I97_v) + parseFloat(I98_v) + parseFloat(I99_v) + parseFloat(I100_v) ; 
document.getElementById('T_RETURNS').value =  T_RETURNS_v ; 

var J7_xxxv  = document.getElementById('J7_H').value  - parseFloat(T_INVESTED_v) + parseFloat(T_RETURNS_v) ;
document.getElementById('J7').value =  J7_xxxv ;


}
