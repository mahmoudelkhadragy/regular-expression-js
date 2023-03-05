let html = "<b>Here is the html element</b>";

let regex = /b>/g;

console.log(html.replace(regex, "strong>"));

// -----------------

let names = ["Smith, James", "Elkhadragy, Mahmoud", "Barakat, Saber", "Elgazairly, Khalil"];

let newNames = names.map((name)=> name.replace(/(\w+), (\w+)/, "$2 $1"));

console.log(newNames);