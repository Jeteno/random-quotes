function generate() {
   let quotes = {
      "- Charlotte Brontë, Jane Eyre": '“I am no bird; and no net ensnares me: I am a free human being with an independent will.”',
      "- Coco Chanel": '“The most courageous act is still to think for yourself. Aloud.”',
      "- George Orwell, 1984": '“War is peace. Freedom is slavery.Ignorance is strength.”',
   }

   const auters = Object.keys(quotes);

   const auter = auters[Math.floor(Math.random() * auters.length)];

   const qute = quotes[auter];

   document.getElementById("quote").innerHTML = qute;
   document.getElementById("auter").innerHTML = auter;

   show()
}

function show() {
   document.getElementById("random-baner").style.left = "0";
}



