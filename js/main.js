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

  // APPENDS THE LI TO THE UL
	$ul.append($li);

  // RESETS MY INPUT
  $(':input').val('') 
  
  $('body ul').on('click', 'button', function () {
    $(this).closest('li').fadeOut(1000, () => {
      $(this).remove();
    });
  });

});



