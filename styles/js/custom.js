var newline_sound = document.getElementById("newline-sound");
var keystroke_sound = document.getElementById("keystroke-sound");

$("#newline-btn").on('click', function() {
    $("#canvas").empty();
    $("#input-txt").val("");
    newline_sound.play();
});

$("#input-txt").on('keypress', function(e) {

    keystroke_sound.play();
    
    // identifies key pressed, case-insensitive
    var newKey = e.which;
    if (newKey >= 97 && newKey <= 122) {
        newKey -= 32;
    }
    letter = String.fromCharCode(newKey);

    // if it's a letter, chooses which image/map to display
    if (letter.match(/^[-\sa-zA-Z]+$/)) {
        switch(letter) {
            case "A":
                $("#canvas").append(map_A() + " ");
                break;
            case "B":
                $("#canvas").append(map_B() + " ");
                break;
            case "C":
                $("#canvas").append(map_C() + " ");
                break;
            case "D":
                $("#canvas").append(map_D() + " ");
                break;
            case "E":
                $("#canvas").append(map_E() + " ");
                break;
            case "F":
                $("#canvas").append(map_F() + " ");
                break;
            case "G":
                $("#canvas").append(map_G() + " ");
                break;
            case "H":
                $("#canvas").append(map_H() + " ");
                break;
            case "I":
                $("#canvas").append(map_I() + " ");
                break;
            case "J":
                $("#canvas").append(map_J() + " ");
                break;
            case "K":
                $("#canvas").append(map_K() + " ");
                break;
            case "L":
                $("#canvas").append(map_L() + " ");
                break;
            case "M":
                $("#canvas").append(map_M() + " ");
                break;
            case "N":
                $("#canvas").append(map_N() + " ");
                break;
            case "O":
                $("#canvas").append(map_O() + " ");
                break;
            case "P":
                $("#canvas").append(map_P() + " ");
                break;
            case "Q":
                $("#canvas").append(map_Q() + " ");
                break;
            case "R":
                $("#canvas").append(map_R() + " ");
                break;
            case "S":
                $("#canvas").append(map_S() + " ");
                break;
            case "T":
                $("#canvas").append(map_T() + " ");
                break;
            case "U":
                $("#canvas").append(map_U() + " ");
                break;
            case "V":
                $("#canvas").append(map_V() + " ");
                break;
            case "W":
                $("#canvas").append(map_W() + " ");
                break;
            case "X":
                $("#canvas").append(map_X() + " ");
                break;
            case "Y":
                $("#canvas").append(map_Y() + " ");
                break;
            case "Z":
                $("#canvas").append(map_Z() + " ");
                break;
            case " ":
                $("#canvas").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                break;
            default:
                $("#error").html('<br/><div class="alert alert-error"><b>Letters only please!</b> You\'re not that almighty!</div>');
                break;
        }
    } else {
        $("#error").html('<br/><div class="alert alert-error"><b>Letters only please!</b> You\'re not that almighty!</div>');
    }
});

//code snippets
function map_A() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-36.889918,145.180035&amp;spn=0.041188,0.051498&amp;z=13&amp;output=embed"></iframe>';
};
function map_B() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.742519,147.652903&amp;spn=0.00509,0.006437&amp;z=16&amp;output=embed"></iframe>';
};
function map_C() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.838233,145.031875&amp;spn=0.001271,0.001609&amp;z=17&amp;output=embed"></iframe>';
};
function map_D() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-38.313427,145.140424&amp;spn=0.000526,0.000534&amp;z=19&amp;output=embed"></iframe>';
};
function map_E() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.840072,144.893757&amp;spn=0.001059,0.001068&amp;z=18&amp;output=embed"></iframe>';
};
function map_F() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.802257,143.933837&amp;spn=0.004239,0.00427&amp;z=16&amp;output=embed"></iframe>';
};
function map_G() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-38.064548,145.146003&amp;spn=0.008447,0.00854&amp;z=15&amp;output=embed"></iframe>';
};
function map_H() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.961333,145.095094&amp;spn=0.001057,0.001068&amp;z=18&amp;output=embed"></iframe>';
};
function map_I() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.840386,147.832729&amp;spn=0.002118,0.002135&amp;z=17&amp;output=embed"></iframe>';
};
function map_J() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.81962,144.965056&amp;spn=0.001059,0.001068&amp;z=18&amp;output=embed"></iframe>';
};
function map_K() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.007282,145.898223&amp;spn=0.008568,0.00854&amp;z=15&amp;output=embed"></iframe>';
};
function map_L() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-38.057029,142.436113&amp;spn=0.004224,0.004292&amp;z=16&amp;output=embed"></iframe>';
};
function map_M() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.893305,145.143589&amp;spn=0.001058,0.001068&amp;z=18&amp;output=embed"></iframe>';
};
function map_N() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.993711,141.72138&amp;spn=0.004228,0.00427&amp;z=16&amp;output=embed"></iframe>';
};
function map_O() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.819921,144.983311&amp;spn=0.004238,0.00427&amp;z=16&amp;output=embed"></iframe>';
};
function map_P() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.663576,142.560933&amp;spn=0.004247,0.00427&amp;z=16&amp;output=embed"></iframe>';
};
function map_Q() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-36.051042,144.192982&amp;spn=0.017348,0.01708&amp;z=14&amp;output=embed"></iframe>';
};
function map_R() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ie=UTF8&amp;ll=-36.636434,142.958822&amp;spn=0.008609,0.00854&amp;z=15&amp;output=embed"></iframe>';
};
function map_S() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-38.207702,145.387788&amp;spn=0.004215,0.00427&amp;z=16&amp;output=embed"></iframe>';
};
function map_T() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-38.045523,142.325585&amp;spn=0.002112,0.002135&amp;z=17&amp;output=embed"></iframe>';
};
function map_U() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.739109,145.511599&amp;spn=0.004242,0.00427&amp;z=16&amp;output=embed"></iframe>';
};
function map_V() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.842106,144.999007&amp;spn=0.001059,0.001068&amp;z=18&amp;output=embed"></iframe>';
};
function map_W() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.897318,144.745849&amp;spn=0.002117,0.002135&amp;z=17&amp;output=embed"></iframe>';
};
function map_X() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-34.259628,142.05657&amp;spn=0.017735,0.01708&amp;z=14&amp;output=embed"></iframe>';
};
function map_Y() {
    $("#error").html('<br/><div class="alert alert-info"><b>You got me!</b> I can\'t give you an \'Y\'</div>');
};
function map_Z() {
    return '<iframe width="200" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com.au/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;msid=206410170293146069606.000459cc1b231fda86744&amp;t=k&amp;ll=-37.81481,144.996614&amp;spn=0.001059,0.001068&amp;z=18&amp;output=embed"></iframe>';
};

function playKeystrokeSound() {
    var soundfile = "./styles/sound/typewriter-keystroke.mp3";
    document.getElementById("input-txt").innerHTML = "<embed src=\"" + soundfile + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}


/* I GIVE UP!!! this code should generate a map using Google Maps API, removing the controls
function map_XX() {
    var mapOptions = {
        center : new google.maps.LatLng(-38.313486, 145.14051),
        zoom : 18,
        disableDefaultUI : true, //disables buttons
        height : 200,
        width : 250
    };
    var map = new google.maps.Map(document.getElementById("error"), mapOptions);
} */