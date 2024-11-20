<?php
// MySQL Connection Parameters
$servername = "localhost"; // Change if not localhost
$username = "root";        // Your MySQL username
$password = "root";            // Your MySQL password
$dbname = "aumkar";   // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the table
$sql = "SELECT id, name, email FROM Hymns";
$result = $conn->query($sql);

// Display data inside <p> tags
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<p><strong>ID:</strong> " . $row["id"] . " | <strong>Name:</strong> " . $row["name"] . " | <strong>Email:</strong> " . $row["email"] . "</p>";
    }
} else {
    echo "<p>No users found</p>";
}

$conn->close();
?>
