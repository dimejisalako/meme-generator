document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.getElementById('meme-form');
    const memeContainer = document.getElementById('meme-container');
    
    // Handle form submission
    memeForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the page from refreshing

        // Get form input values
        const topText = document.getElementById('top-text').value;
        const bottomText = document.getElementById('bottom-text').value;
        const imageUrl = document.getElementById('image-url').value;

        // Validation for empty fields
        if (!topText || !bottomText || !imageUrl) {
            alert("Please fill in all fields.");
            return;
        }

        // Create meme div
        const memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');

        // Create image element
        const memeImage = document.createElement('img');
        memeImage.src = imageUrl;
        memeDiv.appendChild(memeImage);

        // Create top text
        const topTextDiv = document.createElement('div');
        topTextDiv.classList.add('meme-text', 'top-text');
        topTextDiv.textContent = topText;
        memeDiv.appendChild(topTextDiv);

        // Create bottom text
        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('meme-text', 'bottom-text');
        bottomTextDiv.textContent = bottomText;
        memeDiv.appendChild(bottomTextDiv);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'X';
        memeDiv.appendChild(deleteButton);

        // Handle delete button click
        deleteButton.addEventListener('click', function () {
            memeContainer.removeChild(memeDiv);
        });

        // Append the meme div to the container
        memeContainer.appendChild(memeDiv);

        // Clear the form inputs
        memeForm.reset();
    });
});
