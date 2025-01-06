document.getElementById('add-image').addEventListener('click', function () {
    const imageUrl = document.getElementById('image-url').value;
    if (imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'User added image';
        document.getElementById('gallery').appendChild(img);
        document.getElementById('image-url').value = ''; // Clear input field
    } else {
        alert('Please enter a valid image URL.');
    }
});
