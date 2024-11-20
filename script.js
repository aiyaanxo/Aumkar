// Function to load JSON and update content
function updateContent() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse the JSON response
            var data = JSON.parse(xhr.responseText);

            // Map JSON keys to new IDs
            var idMapping = {
                h1: 'hymn1',
                h2: 'hymn2',
                h3: 'hymn3',
                h4: 'hymn4',
                h5: 'hymn5',
                h6: 'hymn6',
                h7: 'hymn7'
            };

            // Update the content of corresponding elements
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var newId = idMapping[key];
                    var element = document.getElementById(newId);
                    if (element) {
                        element.textContent = data[key];
                    }
                }
            }
        }
    };
    xhr.send();
}

// Call the function to update content on page load
window.onload = updateContent;