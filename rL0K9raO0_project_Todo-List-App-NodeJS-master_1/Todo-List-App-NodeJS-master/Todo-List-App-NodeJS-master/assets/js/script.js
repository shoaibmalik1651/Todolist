const deleteBtn = document.querySelector('.delete-task-button');

deleteBtn.addEventListener('click', () => {
	const checkedElements = document.querySelectorAll(
		'input[type="checkbox"]:checked'
	);

  if (checkedElements.length > 0) {
    let checkedElementsId = new Array();

	for (let i = 0; i < checkedElements.length; i++) {
		checkedElementsId[i] = checkedElements[i].id;
	}

    requestHandler( checkedElementsId );
  } else {
    console.log('Nothing is selected to delete!')
    return;
  }
});

async function requestHandler(deleteTodoArray) {

	await $.ajax({
		type: 'POST',
		url: '/delete-task',
		data: {
			deleteTodoArray,
		},
  })
    .then( (result) => {
			// we are passing a url back and now we redirect here to that url
			window.location.assign(result);
    })
    .catch( (err) => {
			alert(`Error in deleting the Todo! Please try Again`);
		});
}
