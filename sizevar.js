var v = "nxxxxxx of";




function vertexPos(a, b) {

  var xCoor = a;
  var yCoor = b;

  return [xCoor, yCoor];
}



function classBits(someclass, x, b) {

  if (b == 0) {
    return someclass.charAt(2 + (x - 1) * 2);
  } else {
    return someclass.charAt(1 + x * 2);
  }
}




function thing(c) {

  if (c === 0) {
    return 0;
  } else {
    return 1;
  }
}

function alter(coor, b, m) {



  if (coor.charAt(b) > m.charAt(1 + b) || coor.charAt(b) > m.charAt(3 + b) || coor.charAt(b) > m.charAt(5 + b)) {
    // console.log(coor);
    // console.log(m);
    // console.log(coor.charAt(b) >= m.charAt(1 + b) || coor.charAt(b) >= m.charAt(3 + b) || coor.charAt(b) >= m.charAt(5 + b));
    // console.log(thing(coor.charAt(0)) * thing(coor.charAt(1) ) * thing(coor.charAt(0) % 6) * thing(coor.charAt(1) % 4));
    // console.log(coor.charAt(b) >= m.charAt(1));
    return thing(coor.charAt(0)) * thing(coor.charAt(1)) * thing(coor.charAt(0) % 6) * thing(coor.charAt(1) % 4) * 10;

  } else if (coor.charAt(b) < m.charAt(1 + b) || coor.charAt(b) < m.charAt(3 + b) || coor.charAt(b) < m.charAt(5 + b)) {
    // console.log(coor);
    // console.log(m);
    // console.log(coor.charAt(b) <= m.charAt(1 + b) || coor.charAt(b) <= m.charAt(3 + b) || coor.charAt(b) <= m.charAt(5 + b));
    // console.log(thing(coor.charAt(0)) * thing(coor.charAt(1) ) * thing(coor.charAt(0) % 6) * thing(coor.charAt(1) % 4));
    // console.log(coor.charAt(b) <= m.charAt(0));
    return thing(coor.charAt(0)) * thing(coor.charAt(1)) * thing(coor.charAt(0) % 6) * thing(coor.charAt(1) % 4) * (-10);

  } else {
    return 0;
  }

}



function classCoor(someclass, x, b, m) {

  if (m.slice(9, 11) === "of") {

    if (b == 0) {
      c = someclass.charAt(2 + (x - 1) * 2);
      return c * (1 / 6) * 100;

    } else {
      c = someclass.charAt(1 + x * 2);
      return c * (25);
    }
  } else {


    if (someclass.slice(2 * x, 2 * x + 2) === m.slice(1, 3)) {

      if (b === 0) {
        c = someclass.charAt(2 + (x - 1) * 2);
        return c * (1 / 6) * 100 + alter(m.slice(1, 3), b, m);
      } else {
        c = someclass.charAt(1 + x * 2);
        return c * (25) + alter(m.slice(1, 3), b, m);
      }
    } else if (someclass.slice(2 * x, 2 * x + 2) === m.slice(3, 5)) {

      if (b === 0) {
        c = someclass.charAt(2 + (x - 1) * 2);
        return c * (1 / 6) * 100 + alter(m.slice(3, 5), b, m);
      } else {
        c = someclass.charAt(1 + x * 2);
        return c * (25) + alter(m.slice(3, 5), b, m);
      }
    } else if (someclass.slice(2 * x, 2 * x + 2) === m.slice(5, 7)) {
      if (b === 0) {
        c = someclass.charAt(2 + (x - 1) * 2);
        return c * (1 / 6) * 100 + alter(m.slice(5, 7), b, m);
      } else {
        c = someclass.charAt(1 + x * 2);
        return c * (25) + alter(m.slice(5, 7), b, m);
      }
    } else {

      if (b === 0) {
        c = someclass.charAt(2 + (x - 1) * 2);
        return c * (1 / 6) * 100;
      } else {
        c = someclass.charAt(1 + x * 2);
        return c * (25);
      }
    }
  }

}




function getClass(x) {

  return x.className;
}




function triangle(a, b, c) {

  var vertA;
  var vertB;
  var vertC;

  if (c === 0) {
    vertA = vertexPos(1 + 2 * (a - 1) + 1 * (((b % 2) + 1) % 2), b);
    vertB = vertexPos(0 + 2 * (a - 1) + 1 * (((b % 2) + 1) % 2), b - 1);
    vertC = vertexPos(2 + 2 * (a - 1) + 1 * (((b % 2) + 1) % 2), b - 1);

    return [vertA, vertB, vertC];

  } else if (c === 1) {
    vertA = vertexPos(2 + 2 * (a - 1) - 1 * (((b % 2) + 1) % 2), b - 1);
    vertB = vertexPos(1 + 2 * a - 1 * (((b % 2) + 1) % 2), b);
    vertC = vertexPos(1 + 2 * (a - 1) - 1 * (((b % 2) + 1) % 2), b);

    return [vertA, vertB, vertC];

  } else {

    vertA = vertexPos((a - 1) * 6, 2 * b - 2);
    vertB = vertexPos(a + 5 * (((a % 2) + 1) % 2) - (a + 1) % 2, 1 + 2 * (b - 1) + (a + 1) % 2);
    vertC = vertexPos((a - 1) * 6 - (a + 1) % 2, 2 * b - (a + 1) % 2);

    return [vertA, vertB, vertC];
  }
}


// this generates the next triangle. 20 can be changed in order to get more triangles per area.
function nextTriangle(n) {

  var c;

  if (n <= 20) {

    if (n <= 10) {
      c = 0;
    } else {
      c = 1;
    }

    var k;
    k = n - 10 * c;

    if (k <= 8) {
      a = k % 2 + 2 * ((k - 1) % 2);
      b = (k - 1 - (k + 1) % 2) / 2 + 1;

      return [a, b, c];

    } else {
      a = 3;
      b = 2 * (k - 8) - (c + 1) % 2;

      return [a, b, c];
    }

  } else {

    c = 2;


    if ((24 - n) < 2) {
      a = 1;
      b = 24 - n + 1;
    } else {
      a = 2;
      b = 24 - n - 1;
    }

    return [a, b, c];
  }

}





for (i = 1; i <= 48; i++) {

  var j = i % 24 + 1;
  var cyc;
  if (i<=24) {
    cyc = "a";
    col1 =" #c6f1d6";
    col2 = "#d2fafb";
    col3 = "#c6f1d6";
  } else {
    cyc = "b";
    col1 = "white";
    col2 = "white";
    col3 = "white";
  }


  // colors are just temporary and a merely used to keep track of the different type of triangles
  var varcolor;
  if (nextTriangle(j)[2] === 0) {
    varcolor = col1;
  } else if (nextTriangle(j)[2] === 1) {
    varcolor = col2;
  } else {
    varcolor = col3;
  }


  // this is to map the triangles from triangle number to triangle vertex indices



  var ax = triangle(nextTriangle(j)[0], nextTriangle(j)[1], nextTriangle(j)[2])[0][0];
  var ay = triangle(nextTriangle(j)[0], nextTriangle(j)[1], nextTriangle(j)[2])[0][1];

  var bx = triangle(nextTriangle(j)[0], nextTriangle(j)[1], nextTriangle(j)[2])[1][0];
  var by = triangle(nextTriangle(j)[0], nextTriangle(j)[1], nextTriangle(j)[2])[1][1];

  var cx = triangle(nextTriangle(j)[0], nextTriangle(j)[1], nextTriangle(j)[2])[2][0];
  var cy = triangle(nextTriangle(j)[0], nextTriangle(j)[1], nextTriangle(j)[2])[2][1];

  var type = nextTriangle(j)[2];

  var classString = cyc + ax + ay + bx + by + cx + cy + type;
  var classString2 = "." + classString;

  var p = "<section class='" + classString + " of'  style= 'background-color:" + varcolor + "; height: 100%; width:100%; margin: 0; display: inline-block;" +
    " position: absolute;'></section>";

  var j = i - 24;
  document.querySelector("body").innerHTML = document.querySelector("body").innerHTML + p;
  document.querySelector(classString2).innerHTML = "<img src='gifs/gif" + j + ".gif'/>";
}




function fullOnClass() {
  var K = document.getElementsByTagName("section");

  for (i = 0; i < K.length; i++) {
    if (getClass(K[i]).slice(9, 11) === "on") {

      return getClass(K[i]);
    }
  }
}





function alph(m, str) {
  if (m.slice(1,7) === str.slice(2,8)) {

    if (str.charAt(1) === "a") {
      return 0.95;
    } else  {
      return 0.8;
    }
  } else {
    if (str.charAt(1) === "b") {
      return 0.05;
    } else {
      return 0.8;
    }
  }
}



function prime() {
  for (i = 0; i < 48; i++) {

    if (i<24) {
      alp = 0.9;
    } else {
      alp = 0.2;
    }


    var K = document.getElementsByTagName("section");

    v = getClass(K[i]);
    var my_str = "." + getClass(K[i]);
    my_str = my_str.slice(0, 9);

    var ax = classCoor(my_str, 1, 0, v) * ((1 + 2 * alp) / 3) + classCoor(my_str, 2, 0, v) * ((1 - alp) / 3) + classCoor(my_str, 3, 0, v) * ((1 - alp) / 3);
    var ay = classCoor(my_str, 1, 1, v) * ((1 + 2 * alp) / 3) + classCoor(my_str, 2, 1, v) * ((1 - alp) / 3) + classCoor(my_str, 3, 1, v) * ((1 - alp) / 3);
    var bx = classCoor(my_str, 1, 0, v) * ((1 - alp) / 3) + classCoor(my_str, 2, 0, v) * ((1 + 2 * alp) / 3) + classCoor(my_str, 3, 0, v) * ((1 - alp) / 3);
    var by = classCoor(my_str, 1, 1, v) * ((1 - alp) / 3) + classCoor(my_str, 2, 1, v) * ((1 + 2 * alp) / 3) + classCoor(my_str, 3, 1, v) * ((1 - alp) / 3);
    var cx = classCoor(my_str, 1, 0, v) * ((1 - alp) / 3) + classCoor(my_str, 2, 0, v) * ((1 - alp) / 3) + classCoor(my_str, 3, 0, v) * ((1 + 2 * alp) / 3);
    var cy = classCoor(my_str, 1, 1, v) * ((1 - alp) / 3) + classCoor(my_str, 2, 1, v) * ((1 - alp) / 3) + classCoor(my_str, 3, 1, v) * ((1 + 2 * alp) / 3);

    var otherstr = "polygon(" + ax + "% " + ay + "%, " + bx + "% " + by + "%, " + cx + "% " + cy + "%)";


    document.querySelector(my_str).style.clipPath = otherstr;


    document.querySelector(my_str).addEventListener("mouseover", function() {
      this.className = this.className.slice(0, 9) + "on";
    });

    document.querySelector(my_str).addEventListener("mouseout", function() {
      this.className = this.className.slice(0, 9) + "of";
    });

    document.querySelector(my_str).addEventListener("mouseover", fullOnClass);
    document.querySelector(my_str).addEventListener("mouseover", rePrimeOn);




    var imgx = classCoor(my_str, 1, 0, v) * (1 / 3) + classCoor(my_str, 2, 0, v) * (1 / 3) + classCoor(my_str, 3, 0, v) * (1 / 3) - 20 + "%";
    var imgy = classCoor(my_str, 1, 1, v) * (1 / 3) + classCoor(my_str, 2, 1, v) * (1 / 3) + classCoor(my_str, 3, 1, v) * (1 / 3) - 15 + "%";

    console.log(imgx);


    if (i > 23) {

    next_gif =  my_str + " img";

    document.querySelector(next_gif).style.position = "absolute";
    document.querySelector(next_gif).style.left = imgx;
    document.querySelector(next_gif).style.top = imgy;
  }

  }
}



function rePrimeOn() {

  m = fullOnClass();

  for (i = 0; i < 48; i++) {

    if (i< 24) {
      alp = 0.9;
    } else {
      alp = 0.2;
    }

    var K = document.getElementsByTagName("section");

    var my_str = "." + getClass(K[i]);
    my_str = my_str.slice(0, 9);

    var ax = classCoor(my_str, 1, 0, m) * ((1 + 2 * alph(m, my_str)) / 3) + classCoor(my_str, 2, 0, m) * ((1 - alph(m, my_str)) / 3) + classCoor(my_str, 3, 0, m) * ((1 - alph(m, my_str)) / 3);
    var ay = classCoor(my_str, 1, 1, m) * ((1 + 2 * alph(m, my_str)) / 3) + classCoor(my_str, 2, 1, m) * ((1 - alph(m, my_str)) / 3) + classCoor(my_str, 3, 1, m) * ((1 - alph(m, my_str)) / 3);
    var bx = classCoor(my_str, 1, 0, m) * ((1 - alph(m, my_str)) / 3) + classCoor(my_str, 2, 0, m) * ((1 + 2 * alph(m, my_str)) / 3) + classCoor(my_str, 3, 0, m) * ((1 - alph(m, my_str)) / 3);
    var by = classCoor(my_str, 1, 1, m) * ((1 - alph(m, my_str)) / 3) + classCoor(my_str, 2, 1, m) * ((1 + 2 * alph(m, my_str)) / 3) + classCoor(my_str, 3, 1, m) * ((1 - alph(m, my_str)) / 3);
    var cx = classCoor(my_str, 1, 0, m) * ((1 - alph(m, my_str)) / 3) + classCoor(my_str, 2, 0, m) * ((1 - alph(m, my_str)) / 3) + classCoor(my_str, 3, 0, m) * ((1 + 2 * alph(m, my_str)) / 3);
    var cy = classCoor(my_str, 1, 1, m) * ((1 - alph(m, my_str)) / 3) + classCoor(my_str, 2, 1, m) * ((1 - alph(m, my_str)) / 3) + classCoor(my_str, 3, 1, m) * ((1 + 2 * alph(m, my_str)) / 3);

    var otherstr = "polygon(" + ax + "% " + ay + "%, " + bx + "% " + by + "%, " + cx + "% " + cy + "%)";
    document.querySelector(my_str).style.clipPath = otherstr;


  }
}



prime();




//
