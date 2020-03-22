// CACHES THE BUTTON
const $btn = $('button');

// FOR EVENTLISTENER IN jQUERY
$btn.on('click', (e) => {
  
  // CREATES A LI AND CACHES IT
  let $li = document.createElement('li');
	
	// STORES THE INPUT VALUE
  let $input = $('input').val();
  
  // THE LI WILL BE THE ACTUAL INPUT
	$li.textContent = $input;

  // CACHES THE UL
  let $ul = $('ul');
  
  // IF NO INPUT, DISABLE THE BUTTON
  if ($input.length === 0) {
    $('#addSkill').attr('disabled', true);
   return;
  } 

  // APPENDS THE LI TO THE UL
  let $info = $ul.append(`<li><button class="remove">X</button> ${$input}</li>`);

  // RESETS MY INPUT
  $(':input').val('') 

  // ADDLISTENER TO FADEOUT, THEN REMOVE LISTED ITEM 
  $('body ul').on('click', 'button', function () {
    $(this).closest('li').fadeOut(1000, () => {
      $(this).remove();
    });
  });

});


// STYLES MY PAGE
$('body').css({
  "width": "100%",
  "height": "100vh",
  "display": "flex",
  "flex-flow": "column wrap",
  "justify-content": "center",
  "align-items": "center",
  "font-family": "sans-serif",
});

$('h1').css({
  "background-color": "rgb(141, 184, 122)",
  "color": "white",
  "padding": "10px 65px",
});

$('body > div > div').css({
  "width": "100%",
  "display": "flex",
  "flex-flow": "row wrap",
  "justify-content": "space-between",
});

$('ul').css({
  "color": "rgb(253, 155, 28)",
  "margin": "1em 0",
});

$('.remove').css({
  "background-color": "rgb(222, 105, 107)",
  "color": "white",
  "border-color": "transparent",
  "padding": "7px 10px",
  "margin-right": "5px",
})

$('#addSkill').css({
  "width": "27%",
  "border": "3px solid rgb(141, 184, 122)",
  "color": "rgb(141, 184, 122)",
  "padding": "5px 10px", 
});